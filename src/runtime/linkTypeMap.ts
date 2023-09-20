// @ts-nocheck
import type {
    CompressedType,
    CompressedTypeMap,
    LinkedArgMap as LinkedArgumentMap,
    LinkedField,
    LinkedType,
    LinkedTypeMap
} from './types.js'

export interface PartialLinkedFieldMap {
    [field: string]: {
        type: string
        args?: LinkedArgumentMap
    }
}

export const linkTypeMap = (
    typeMap: CompressedTypeMap<number>
): LinkedTypeMap => {
    const indexToName: Record<number, string> = Object.assign(
        {},
        ...Object.keys(typeMap.types).map((k, index) => ({ [index]: k }))
    )

    const intermediaryTypeMap = Object.assign(
        {},
        ...Object.keys(typeMap.types || {}).map(
            (k): Record<string, LinkedType> => {
                const type: CompressedType = typeMap.types[k]!
                const fields = type || {}
                return {
                    [k]: {
                        name: k,
                        // type scalar properties
                        scalar: Object.keys(fields).filter(f => {
                            const [type] = fields[f] || []
                            return type && typeMap.scalars.includes(type)
                        }),
                        // fields with corresponding `type` and `args`
                        fields: Object.assign(
                            {},
                            ...Object.keys(fields).map(
                                (f): PartialLinkedFieldMap => {
                                    const [typeIndex, arguments_] =
                                        fields[f] || []
                                    if (typeIndex == undefined) {
                                        return {}
                                    }
                                    return {
                                        [f]: {
                                            // replace index with type name
                                            type: indexToName[typeIndex],
                                            args: Object.assign(
                                                {},
                                                ...Object.keys(
                                                    arguments_ || {}
                                                ).map(k => {
                                                    // if argTypeString == argTypeName, argTypeString is missing, need to readd it
                                                    if (
                                                        !arguments_ ||
                                                        !arguments_[k]
                                                    ) {
                                                        return
                                                    }
                                                    const [
                                                        argumentTypeName,
                                                        argumentTypeString
                                                    ] = arguments_[k] as any
                                                    return {
                                                        [k]: [
                                                            indexToName[
                                                                argumentTypeName
                                                            ],
                                                            argumentTypeString ||
                                                                indexToName[
                                                                    argumentTypeName
                                                                ]
                                                        ]
                                                    }
                                                })
                                            )
                                        }
                                    }
                                }
                            )
                        )
                    }
                }
            }
        )
    )
    const res = resolveConcreteTypes(intermediaryTypeMap)
    return res
}

// replace typename with concrete type
export const resolveConcreteTypes = (linkedTypeMap: LinkedTypeMap) => {
    for (const typeNameFromKey of Object.keys(linkedTypeMap)) {
        const type: LinkedType = linkedTypeMap[typeNameFromKey]!
        // type.name = typeNameFromKey
        if (!type.fields) {
            continue
        }

        const fields = type.fields

        for (const f of Object.keys(fields)) {
            const field: LinkedField = fields[f]!

            if (field.args) {
                const arguments_ = field.args
                for (const key of Object.keys(arguments_)) {
                    const argument = arguments_[key]

                    if (argument) {
                        const [typeName] = argument

                        if (typeof typeName === 'string') {
                            if (!linkedTypeMap[typeName]) {
                                linkedTypeMap[typeName] = { name: typeName }
                            }

                            argument[0] = linkedTypeMap[typeName]!
                        }
                    }
                }
            }

            const typeName = field.type as LinkedType | string

            if (typeof typeName === 'string') {
                if (!linkedTypeMap[typeName]) {
                    linkedTypeMap[typeName] = { name: typeName }
                }

                field.type = linkedTypeMap[typeName]!
            }
        }
    }

    return linkedTypeMap
}
