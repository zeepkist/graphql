// @ts-nocheck
import type { LinkedField, LinkedType } from './types.js'

export interface Arguments {
    [arg: string]: any | undefined
}

export interface Fields {
    [field: string]: Request
}

export type Request = boolean | number | Fields

export interface Variables {
    [name: string]: {
        value: any
        typing: [LinkedType, string]
    }
}

export interface Context {
    root: LinkedType
    varCounter: number
    variables: Variables
    fragmentCounter: number
    fragments: string[]
}

export interface GraphqlOperation {
    query: string
    variables?: { [name: string]: any }
    operationName?: string
}

const parseRequest = (
    request: Request | undefined,
    context: Context,
    path: string[]
): string => {
    if (typeof request === 'object' && '__args' in request) {
        const arguments_: any = request.__args
        const fields: Request | undefined = { ...request }
        delete fields.__args
        const argumentNames = Object.keys(arguments_)

        if (argumentNames.length === 0) {
            return parseRequest(fields, context, path)
        }

        const field = getFieldFromPath(context.root, path)

        const argumentStrings = argumentNames.map(argumentName => {
            context.varCounter++
            const variableName = `v${context.varCounter}`

            const typing = field.args && field.args[argumentName] // typeMap used here, .args

            if (!typing) {
                throw new Error(
                    `no typing defined for argument \`${argumentName}\` in path \`${path.join(
                        '.'
                    )}\``
                )
            }

            context.variables[variableName] = {
                value: arguments_[argumentName],
                typing
            }

            return `${argumentName}:$${variableName}`
        })
        return `(${argumentStrings})${parseRequest(fields, context, path)}`
    } else if (typeof request === 'object' && Object.keys(request).length > 0) {
        const fields = request
        const fieldNames = Object.keys(fields).filter(k => Boolean(fields[k]))

        if (fieldNames.length === 0) {
            throw new Error(
                `field selection should not be empty: ${path.join('.')}`
            )
        }

        const type =
            path.length > 0
                ? getFieldFromPath(context.root, path).type
                : context.root
        const scalarFields = type.scalar

        let scalarFieldsFragment: string | undefined

        if (fieldNames.includes('__scalar')) {
            const falsyFieldNames = new Set(
                Object.keys(fields).filter(k => !fields[k])
            )
            if (scalarFields?.length) {
                context.fragmentCounter++
                scalarFieldsFragment = `f${context.fragmentCounter}`

                context.fragments.push(
                    `fragment ${scalarFieldsFragment} on ${
                        type.name
                    }{${scalarFields
                        .filter(f => !falsyFieldNames.has(f))
                        .join(',')}}`
                )
            }
        }

        const fieldsSelection = fieldNames
            .filter(f => !['__scalar', '__name'].includes(f))
            .map(f => {
                const parsed = parseRequest(fields[f], context, [...path, f])

                if (f.startsWith('on_')) {
                    context.fragmentCounter++
                    const implementationFragment = `f${context.fragmentCounter}`

                    const typeMatch = f.match(/^on_(.+)/)

                    if (!typeMatch || !typeMatch[1])
                        throw new Error('match failed')

                    context.fragments.push(
                        `fragment ${implementationFragment} on ${typeMatch[1]}${parsed}`
                    )

                    return `...${implementationFragment}`
                } else {
                    return `${f}${parsed}`
                }
            })
            .concat(scalarFieldsFragment ? [`...${scalarFieldsFragment}`] : [])
            .join(',')

        return `{${fieldsSelection}}`
    } else {
        return ''
    }
}

export const generateGraphqlOperation = (
    operation: 'query' | 'mutation' | 'subscription',
    root: LinkedType,
    fields?: Fields
): GraphqlOperation => {
    const context: Context = {
        root: root,
        varCounter: 0,
        variables: {},
        fragmentCounter: 0,
        fragments: []
    }
    const result = parseRequest(fields, context, [])

    const variableNames = Object.keys(context.variables)

    const variablesString =
        variableNames.length > 0
            ? `(${variableNames.map(v => {
                  const variableType = context.variables[v].typing[1]
                  return `$${v}:${variableType}`
              })})`
            : ''

    const operationName = fields?.__name || ''

    return {
        query: [
            `${operation} ${operationName}${variablesString}${result}`,
            ...context.fragments
        ].join(','),
        variables: Object.keys(context.variables).reduce<{
            [name: string]: any
        }>((r, v) => {
            r[v] = context.variables[v].value
            return r
        }, {}),
        ...(operationName ? { operationName: operationName.toString() } : {})
    }
}

export const getFieldFromPath = (
    root: LinkedType | undefined,
    path: string[]
) => {
    let current: LinkedField | undefined

    if (!root) throw new Error('root type is not provided')

    if (path.length === 0) throw new Error(`path is empty`)

    for (const f of path) {
        const type = current ? current.type : root

        if (!type.fields)
            throw new Error(`type \`${type.name}\` does not have fields`)

        const possibleTypes = Object.keys(type.fields)
            .filter(index => index.startsWith('on_'))
            .reduce(
                (types, fieldName) => {
                    const field = type.fields && type.fields[fieldName]
                    if (field) types.push(field.type)
                    return types
                },
                [type]
            )

        let field: LinkedField | null = null

        for (const type of possibleTypes) {
            const found = type.fields && type.fields[f]
            if (found) field = found
        }

        if (!field)
            throw new Error(
                `type \`${type.name}\` does not have a field \`${f}\``
            )

        current = field
    }

    return current as LinkedField
}
