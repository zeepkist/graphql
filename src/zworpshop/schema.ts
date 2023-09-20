// @ts-nocheck
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type Scalars = {
    ID: string,
    Int: number,
    BigFloat: any,
    String: string,
    Datetime: any,
    Boolean: boolean,
    Float: number,
    Cursor: any,
}


/** The root query type which gives access points into the data universe. */
export interface Query {
    /**
     * Exposes the root query type nested one level down. This is helpful for Relay 1
     * which can only query top level fields if they are in a particular form.
     */
    query: Query
    /** The root query type must be a `Node` to work well with Relay 1 mutations. This just resolves to `query`. */
    nodeId: Scalars['ID']
    /** Fetches an object given its globally unique `ID`. */
    node: (Node | null)
    /** Reads and enables pagination through a set of `LevelsView`. */
    allLevelsViews: (LevelsViewsConnection | null)
    /** Reads and enables pagination through a set of `Level`. */
    allLevels: (LevelsConnection | null)
    levelById: (Level | null)
    /** Reads a single `Level` using its globally unique `ID`. */
    level: (Level | null)
    __typename: 'Query'
}


/** An object with a globally unique `ID`. */
export type Node = (Query | Level) & { __isUnion?: true }


/** A connection to a list of `LevelsView` values. */
export interface LevelsViewsConnection {
    /** A list of `LevelsView` objects. */
    nodes: (LevelsView | null)[]
    /** A list of edges which contains the `LevelsView` and cursor to aid in pagination. */
    edges: LevelsViewsEdge[]
    /** Information to aid in pagination. */
    pageInfo: PageInfo
    /** The count of *all* `LevelsView` you could get from the connection. */
    totalCount: Scalars['Int']
    __typename: 'LevelsViewsConnection'
}

export interface LevelsView {
    id: (Scalars['Int'] | null)
    workshopId: (Scalars['BigFloat'] | null)
    authorId: (Scalars['BigFloat'] | null)
    name: (Scalars['String'] | null)
    createdAt: (Scalars['Datetime'] | null)
    updatedAt: (Scalars['Datetime'] | null)
    imageUrl: (Scalars['String'] | null)
    fileUrl: (Scalars['String'] | null)
    fileUid: (Scalars['String'] | null)
    fileHash: (Scalars['String'] | null)
    fileAuthor: (Scalars['String'] | null)
    valid: (Scalars['Boolean'] | null)
    validation: (Scalars['Float'] | null)
    gold: (Scalars['Float'] | null)
    silver: (Scalars['Float'] | null)
    bronze: (Scalars['Float'] | null)
    __typename: 'LevelsView'
}


/** A `LevelsView` edge in the connection. */
export interface LevelsViewsEdge {
    /** A cursor for use in pagination. */
    cursor: (Scalars['Cursor'] | null)
    /** The `LevelsView` at the end of the edge. */
    node: (LevelsView | null)
    __typename: 'LevelsViewsEdge'
}


/** Information about pagination in a connection. */
export interface PageInfo {
    /** When paginating forwards, are there more items? */
    hasNextPage: Scalars['Boolean']
    /** When paginating backwards, are there more items? */
    hasPreviousPage: Scalars['Boolean']
    /** When paginating backwards, the cursor to continue. */
    startCursor: (Scalars['Cursor'] | null)
    /** When paginating forwards, the cursor to continue. */
    endCursor: (Scalars['Cursor'] | null)
    __typename: 'PageInfo'
}


/** Methods to use when ordering `LevelsView`. */
export type LevelsViewsOrderBy = 'NATURAL' | 'ID_ASC' | 'ID_DESC' | 'WORKSHOP_ID_ASC' | 'WORKSHOP_ID_DESC' | 'AUTHOR_ID_ASC' | 'AUTHOR_ID_DESC' | 'NAME_ASC' | 'NAME_DESC' | 'CREATED_AT_ASC' | 'CREATED_AT_DESC' | 'UPDATED_AT_ASC' | 'UPDATED_AT_DESC' | 'IMAGE_URL_ASC' | 'IMAGE_URL_DESC' | 'FILE_URL_ASC' | 'FILE_URL_DESC' | 'FILE_UID_ASC' | 'FILE_UID_DESC' | 'FILE_HASH_ASC' | 'FILE_HASH_DESC' | 'FILE_AUTHOR_ASC' | 'FILE_AUTHOR_DESC' | 'VALID_ASC' | 'VALID_DESC' | 'VALIDATION_ASC' | 'VALIDATION_DESC' | 'GOLD_ASC' | 'GOLD_DESC' | 'SILVER_ASC' | 'SILVER_DESC' | 'BRONZE_ASC' | 'BRONZE_DESC'


/** A connection to a list of `Level` values. */
export interface LevelsConnection {
    /** A list of `Level` objects. */
    nodes: (Level | null)[]
    /** A list of edges which contains the `Level` and cursor to aid in pagination. */
    edges: LevelsEdge[]
    /** Information to aid in pagination. */
    pageInfo: PageInfo
    /** The count of *all* `Level` you could get from the connection. */
    totalCount: Scalars['Int']
    __typename: 'LevelsConnection'
}

export interface Level {
    /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
    nodeId: Scalars['ID']
    id: Scalars['Int']
    name: Scalars['String']
    imageUrl: Scalars['String']
    createdAt: Scalars['Datetime']
    updatedAt: Scalars['Datetime']
    workshopId: Scalars['BigFloat']
    valid: Scalars['Boolean']
    validation: Scalars['Float']
    gold: Scalars['Float']
    silver: Scalars['Float']
    bronze: Scalars['Float']
    authorId: Scalars['BigFloat']
    fileHash: Scalars['String']
    fileUrl: Scalars['String']
    fileAuthor: Scalars['String']
    fileUid: Scalars['String']
    replacedBy: (Scalars['Int'] | null)
    __typename: 'Level'
}


/** A `Level` edge in the connection. */
export interface LevelsEdge {
    /** A cursor for use in pagination. */
    cursor: (Scalars['Cursor'] | null)
    /** The `Level` at the end of the edge. */
    node: (Level | null)
    __typename: 'LevelsEdge'
}


/** Methods to use when ordering `Level`. */
export type LevelsOrderBy = 'NATURAL' | 'ID_ASC' | 'ID_DESC' | 'NAME_ASC' | 'NAME_DESC' | 'IMAGE_URL_ASC' | 'IMAGE_URL_DESC' | 'CREATED_AT_ASC' | 'CREATED_AT_DESC' | 'UPDATED_AT_ASC' | 'UPDATED_AT_DESC' | 'WORKSHOP_ID_ASC' | 'WORKSHOP_ID_DESC' | 'VALID_ASC' | 'VALID_DESC' | 'VALIDATION_ASC' | 'VALIDATION_DESC' | 'GOLD_ASC' | 'GOLD_DESC' | 'SILVER_ASC' | 'SILVER_DESC' | 'BRONZE_ASC' | 'BRONZE_DESC' | 'AUTHOR_ID_ASC' | 'AUTHOR_ID_DESC' | 'FILE_HASH_ASC' | 'FILE_HASH_DESC' | 'FILE_URL_ASC' | 'FILE_URL_DESC' | 'FILE_AUTHOR_ASC' | 'FILE_AUTHOR_DESC' | 'FILE_UID_ASC' | 'FILE_UID_DESC' | 'REPLACED_BY_ASC' | 'REPLACED_BY_DESC' | 'PRIMARY_KEY_ASC' | 'PRIMARY_KEY_DESC'


/** The root query type which gives access points into the data universe. */
export interface QueryGenqlSelection{
    /**
     * Exposes the root query type nested one level down. This is helpful for Relay 1
     * which can only query top level fields if they are in a particular form.
     */
    query?: QueryGenqlSelection
    /** The root query type must be a `Node` to work well with Relay 1 mutations. This just resolves to `query`. */
    nodeId?: boolean | number
    /** Fetches an object given its globally unique `ID`. */
    node?: (NodeGenqlSelection & { __args: {
    /** The globally unique `ID`. */
    nodeId: Scalars['ID']} })
    /** Reads and enables pagination through a set of `LevelsView`. */
    allLevelsViews?: (LevelsViewsConnectionGenqlSelection & { __args?: {
    /** Only read the first `n` values of the set. */
    first?: (Scalars['Int'] | null), 
    /** Only read the last `n` values of the set. */
    last?: (Scalars['Int'] | null), 
    /**
     * Skip the first `n` values from our `after` cursor, an alternative to cursor
     * based pagination. May not be used with `last`.
     */
    offset?: (Scalars['Int'] | null), 
    /** Read all values in the set before (above) this cursor. */
    before?: (Scalars['Cursor'] | null), 
    /** Read all values in the set after (below) this cursor. */
    after?: (Scalars['Cursor'] | null), 
    /** The method to use when ordering `LevelsView`. */
    orderBy?: (LevelsViewsOrderBy[] | null), 
    /** A condition to be used in determining which values should be returned by the collection. */
    condition?: (LevelsViewCondition | null)} })
    /** Reads and enables pagination through a set of `Level`. */
    allLevels?: (LevelsConnectionGenqlSelection & { __args?: {
    /** Only read the first `n` values of the set. */
    first?: (Scalars['Int'] | null), 
    /** Only read the last `n` values of the set. */
    last?: (Scalars['Int'] | null), 
    /**
     * Skip the first `n` values from our `after` cursor, an alternative to cursor
     * based pagination. May not be used with `last`.
     */
    offset?: (Scalars['Int'] | null), 
    /** Read all values in the set before (above) this cursor. */
    before?: (Scalars['Cursor'] | null), 
    /** Read all values in the set after (below) this cursor. */
    after?: (Scalars['Cursor'] | null), 
    /** The method to use when ordering `Level`. */
    orderBy?: (LevelsOrderBy[] | null), 
    /** A condition to be used in determining which values should be returned by the collection. */
    condition?: (LevelCondition | null)} })
    levelById?: (LevelGenqlSelection & { __args: {id: Scalars['Int']} })
    /** Reads a single `Level` using its globally unique `ID`. */
    level?: (LevelGenqlSelection & { __args: {
    /** The globally unique `ID` to be used in selecting a single `Level`. */
    nodeId: Scalars['ID']} })
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** An object with a globally unique `ID`. */
export interface NodeGenqlSelection{
    /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
    nodeId?: boolean | number
    on_Query?: QueryGenqlSelection
    on_Level?: LevelGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** A connection to a list of `LevelsView` values. */
export interface LevelsViewsConnectionGenqlSelection{
    /** A list of `LevelsView` objects. */
    nodes?: LevelsViewGenqlSelection
    /** A list of edges which contains the `LevelsView` and cursor to aid in pagination. */
    edges?: LevelsViewsEdgeGenqlSelection
    /** Information to aid in pagination. */
    pageInfo?: PageInfoGenqlSelection
    /** The count of *all* `LevelsView` you could get from the connection. */
    totalCount?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface LevelsViewGenqlSelection{
    id?: boolean | number
    workshopId?: boolean | number
    authorId?: boolean | number
    name?: boolean | number
    createdAt?: boolean | number
    updatedAt?: boolean | number
    imageUrl?: boolean | number
    fileUrl?: boolean | number
    fileUid?: boolean | number
    fileHash?: boolean | number
    fileAuthor?: boolean | number
    valid?: boolean | number
    validation?: boolean | number
    gold?: boolean | number
    silver?: boolean | number
    bronze?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** A `LevelsView` edge in the connection. */
export interface LevelsViewsEdgeGenqlSelection{
    /** A cursor for use in pagination. */
    cursor?: boolean | number
    /** The `LevelsView` at the end of the edge. */
    node?: LevelsViewGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Information about pagination in a connection. */
export interface PageInfoGenqlSelection{
    /** When paginating forwards, are there more items? */
    hasNextPage?: boolean | number
    /** When paginating backwards, are there more items? */
    hasPreviousPage?: boolean | number
    /** When paginating backwards, the cursor to continue. */
    startCursor?: boolean | number
    /** When paginating forwards, the cursor to continue. */
    endCursor?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/**
 * A condition to be used against `LevelsView` object types. All fields are tested
 * for equality and combined with a logical ‘and.’
 */
export interface LevelsViewCondition {
/** Checks for equality with the object’s `id` field. */
id?: (Scalars['Int'] | null),
/** Checks for equality with the object’s `workshopId` field. */
workshopId?: (Scalars['BigFloat'] | null),
/** Checks for equality with the object’s `authorId` field. */
authorId?: (Scalars['BigFloat'] | null),
/** Checks for equality with the object’s `name` field. */
name?: (Scalars['String'] | null),
/** Checks for equality with the object’s `createdAt` field. */
createdAt?: (Scalars['Datetime'] | null),
/** Checks for equality with the object’s `updatedAt` field. */
updatedAt?: (Scalars['Datetime'] | null),
/** Checks for equality with the object’s `imageUrl` field. */
imageUrl?: (Scalars['String'] | null),
/** Checks for equality with the object’s `fileUrl` field. */
fileUrl?: (Scalars['String'] | null),
/** Checks for equality with the object’s `fileUid` field. */
fileUid?: (Scalars['String'] | null),
/** Checks for equality with the object’s `fileHash` field. */
fileHash?: (Scalars['String'] | null),
/** Checks for equality with the object’s `fileAuthor` field. */
fileAuthor?: (Scalars['String'] | null),
/** Checks for equality with the object’s `valid` field. */
valid?: (Scalars['Boolean'] | null),
/** Checks for equality with the object’s `validation` field. */
validation?: (Scalars['Float'] | null),
/** Checks for equality with the object’s `gold` field. */
gold?: (Scalars['Float'] | null),
/** Checks for equality with the object’s `silver` field. */
silver?: (Scalars['Float'] | null),
/** Checks for equality with the object’s `bronze` field. */
bronze?: (Scalars['Float'] | null)}


/** A connection to a list of `Level` values. */
export interface LevelsConnectionGenqlSelection{
    /** A list of `Level` objects. */
    nodes?: LevelGenqlSelection
    /** A list of edges which contains the `Level` and cursor to aid in pagination. */
    edges?: LevelsEdgeGenqlSelection
    /** Information to aid in pagination. */
    pageInfo?: PageInfoGenqlSelection
    /** The count of *all* `Level` you could get from the connection. */
    totalCount?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface LevelGenqlSelection{
    /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
    nodeId?: boolean | number
    id?: boolean | number
    name?: boolean | number
    imageUrl?: boolean | number
    createdAt?: boolean | number
    updatedAt?: boolean | number
    workshopId?: boolean | number
    valid?: boolean | number
    validation?: boolean | number
    gold?: boolean | number
    silver?: boolean | number
    bronze?: boolean | number
    authorId?: boolean | number
    fileHash?: boolean | number
    fileUrl?: boolean | number
    fileAuthor?: boolean | number
    fileUid?: boolean | number
    replacedBy?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** A `Level` edge in the connection. */
export interface LevelsEdgeGenqlSelection{
    /** A cursor for use in pagination. */
    cursor?: boolean | number
    /** The `Level` at the end of the edge. */
    node?: LevelGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** A condition to be used against `Level` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export interface LevelCondition {
/** Checks for equality with the object’s `id` field. */
id?: (Scalars['Int'] | null),
/** Checks for equality with the object’s `name` field. */
name?: (Scalars['String'] | null),
/** Checks for equality with the object’s `imageUrl` field. */
imageUrl?: (Scalars['String'] | null),
/** Checks for equality with the object’s `createdAt` field. */
createdAt?: (Scalars['Datetime'] | null),
/** Checks for equality with the object’s `updatedAt` field. */
updatedAt?: (Scalars['Datetime'] | null),
/** Checks for equality with the object’s `workshopId` field. */
workshopId?: (Scalars['BigFloat'] | null),
/** Checks for equality with the object’s `valid` field. */
valid?: (Scalars['Boolean'] | null),
/** Checks for equality with the object’s `validation` field. */
validation?: (Scalars['Float'] | null),
/** Checks for equality with the object’s `gold` field. */
gold?: (Scalars['Float'] | null),
/** Checks for equality with the object’s `silver` field. */
silver?: (Scalars['Float'] | null),
/** Checks for equality with the object’s `bronze` field. */
bronze?: (Scalars['Float'] | null),
/** Checks for equality with the object’s `authorId` field. */
authorId?: (Scalars['BigFloat'] | null),
/** Checks for equality with the object’s `fileHash` field. */
fileHash?: (Scalars['String'] | null),
/** Checks for equality with the object’s `fileUrl` field. */
fileUrl?: (Scalars['String'] | null),
/** Checks for equality with the object’s `fileAuthor` field. */
fileAuthor?: (Scalars['String'] | null),
/** Checks for equality with the object’s `fileUid` field. */
fileUid?: (Scalars['String'] | null),
/** Checks for equality with the object’s `replacedBy` field. */
replacedBy?: (Scalars['Int'] | null)}


    const Query_possibleTypes: string[] = ['Query']
    export const isQuery = (obj?: { __typename?: any } | null): obj is Query => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isQuery"')
      return Query_possibleTypes.includes(obj.__typename)
    }
    


    const Node_possibleTypes: string[] = ['Query','Level']
    export const isNode = (obj?: { __typename?: any } | null): obj is Node => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isNode"')
      return Node_possibleTypes.includes(obj.__typename)
    }
    


    const LevelsViewsConnection_possibleTypes: string[] = ['LevelsViewsConnection']
    export const isLevelsViewsConnection = (obj?: { __typename?: any } | null): obj is LevelsViewsConnection => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isLevelsViewsConnection"')
      return LevelsViewsConnection_possibleTypes.includes(obj.__typename)
    }
    


    const LevelsView_possibleTypes: string[] = ['LevelsView']
    export const isLevelsView = (obj?: { __typename?: any } | null): obj is LevelsView => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isLevelsView"')
      return LevelsView_possibleTypes.includes(obj.__typename)
    }
    


    const LevelsViewsEdge_possibleTypes: string[] = ['LevelsViewsEdge']
    export const isLevelsViewsEdge = (obj?: { __typename?: any } | null): obj is LevelsViewsEdge => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isLevelsViewsEdge"')
      return LevelsViewsEdge_possibleTypes.includes(obj.__typename)
    }
    


    const PageInfo_possibleTypes: string[] = ['PageInfo']
    export const isPageInfo = (obj?: { __typename?: any } | null): obj is PageInfo => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isPageInfo"')
      return PageInfo_possibleTypes.includes(obj.__typename)
    }
    


    const LevelsConnection_possibleTypes: string[] = ['LevelsConnection']
    export const isLevelsConnection = (obj?: { __typename?: any } | null): obj is LevelsConnection => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isLevelsConnection"')
      return LevelsConnection_possibleTypes.includes(obj.__typename)
    }
    


    const Level_possibleTypes: string[] = ['Level']
    export const isLevel = (obj?: { __typename?: any } | null): obj is Level => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isLevel"')
      return Level_possibleTypes.includes(obj.__typename)
    }
    


    const LevelsEdge_possibleTypes: string[] = ['LevelsEdge']
    export const isLevelsEdge = (obj?: { __typename?: any } | null): obj is LevelsEdge => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isLevelsEdge"')
      return LevelsEdge_possibleTypes.includes(obj.__typename)
    }
    

export const enumLevelsViewsOrderBy = {
   NATURAL: 'NATURAL' as const,
   ID_ASC: 'ID_ASC' as const,
   ID_DESC: 'ID_DESC' as const,
   WORKSHOP_ID_ASC: 'WORKSHOP_ID_ASC' as const,
   WORKSHOP_ID_DESC: 'WORKSHOP_ID_DESC' as const,
   AUTHOR_ID_ASC: 'AUTHOR_ID_ASC' as const,
   AUTHOR_ID_DESC: 'AUTHOR_ID_DESC' as const,
   NAME_ASC: 'NAME_ASC' as const,
   NAME_DESC: 'NAME_DESC' as const,
   CREATED_AT_ASC: 'CREATED_AT_ASC' as const,
   CREATED_AT_DESC: 'CREATED_AT_DESC' as const,
   UPDATED_AT_ASC: 'UPDATED_AT_ASC' as const,
   UPDATED_AT_DESC: 'UPDATED_AT_DESC' as const,
   IMAGE_URL_ASC: 'IMAGE_URL_ASC' as const,
   IMAGE_URL_DESC: 'IMAGE_URL_DESC' as const,
   FILE_URL_ASC: 'FILE_URL_ASC' as const,
   FILE_URL_DESC: 'FILE_URL_DESC' as const,
   FILE_UID_ASC: 'FILE_UID_ASC' as const,
   FILE_UID_DESC: 'FILE_UID_DESC' as const,
   FILE_HASH_ASC: 'FILE_HASH_ASC' as const,
   FILE_HASH_DESC: 'FILE_HASH_DESC' as const,
   FILE_AUTHOR_ASC: 'FILE_AUTHOR_ASC' as const,
   FILE_AUTHOR_DESC: 'FILE_AUTHOR_DESC' as const,
   VALID_ASC: 'VALID_ASC' as const,
   VALID_DESC: 'VALID_DESC' as const,
   VALIDATION_ASC: 'VALIDATION_ASC' as const,
   VALIDATION_DESC: 'VALIDATION_DESC' as const,
   GOLD_ASC: 'GOLD_ASC' as const,
   GOLD_DESC: 'GOLD_DESC' as const,
   SILVER_ASC: 'SILVER_ASC' as const,
   SILVER_DESC: 'SILVER_DESC' as const,
   BRONZE_ASC: 'BRONZE_ASC' as const,
   BRONZE_DESC: 'BRONZE_DESC' as const
}

export const enumLevelsOrderBy = {
   NATURAL: 'NATURAL' as const,
   ID_ASC: 'ID_ASC' as const,
   ID_DESC: 'ID_DESC' as const,
   NAME_ASC: 'NAME_ASC' as const,
   NAME_DESC: 'NAME_DESC' as const,
   IMAGE_URL_ASC: 'IMAGE_URL_ASC' as const,
   IMAGE_URL_DESC: 'IMAGE_URL_DESC' as const,
   CREATED_AT_ASC: 'CREATED_AT_ASC' as const,
   CREATED_AT_DESC: 'CREATED_AT_DESC' as const,
   UPDATED_AT_ASC: 'UPDATED_AT_ASC' as const,
   UPDATED_AT_DESC: 'UPDATED_AT_DESC' as const,
   WORKSHOP_ID_ASC: 'WORKSHOP_ID_ASC' as const,
   WORKSHOP_ID_DESC: 'WORKSHOP_ID_DESC' as const,
   VALID_ASC: 'VALID_ASC' as const,
   VALID_DESC: 'VALID_DESC' as const,
   VALIDATION_ASC: 'VALIDATION_ASC' as const,
   VALIDATION_DESC: 'VALIDATION_DESC' as const,
   GOLD_ASC: 'GOLD_ASC' as const,
   GOLD_DESC: 'GOLD_DESC' as const,
   SILVER_ASC: 'SILVER_ASC' as const,
   SILVER_DESC: 'SILVER_DESC' as const,
   BRONZE_ASC: 'BRONZE_ASC' as const,
   BRONZE_DESC: 'BRONZE_DESC' as const,
   AUTHOR_ID_ASC: 'AUTHOR_ID_ASC' as const,
   AUTHOR_ID_DESC: 'AUTHOR_ID_DESC' as const,
   FILE_HASH_ASC: 'FILE_HASH_ASC' as const,
   FILE_HASH_DESC: 'FILE_HASH_DESC' as const,
   FILE_URL_ASC: 'FILE_URL_ASC' as const,
   FILE_URL_DESC: 'FILE_URL_DESC' as const,
   FILE_AUTHOR_ASC: 'FILE_AUTHOR_ASC' as const,
   FILE_AUTHOR_DESC: 'FILE_AUTHOR_DESC' as const,
   FILE_UID_ASC: 'FILE_UID_ASC' as const,
   FILE_UID_DESC: 'FILE_UID_DESC' as const,
   REPLACED_BY_ASC: 'REPLACED_BY_ASC' as const,
   REPLACED_BY_DESC: 'REPLACED_BY_DESC' as const,
   PRIMARY_KEY_ASC: 'PRIMARY_KEY_ASC' as const,
   PRIMARY_KEY_DESC: 'PRIMARY_KEY_DESC' as const
}
