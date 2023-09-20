// @ts-nocheck
export type { ClientOptions } from './createClient.js'
export { createClient } from './createClient.js'
export type { GraphqlOperation } from './generateGraphqlOperation.js'
export { generateGraphqlOperation } from './generateGraphqlOperation.js'
export { linkTypeMap } from './linkTypeMap.js'
export type { FieldsSelection } from './typeSelection.js'
// export { Observable } from 'zen-observable-ts'
export { GenqlError } from './error.js'
export { createFetcher } from './fetcher.js'
export const everything = {
    __scalar: true
}
