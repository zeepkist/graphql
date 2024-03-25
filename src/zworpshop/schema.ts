// @ts-nocheck
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type Scalars = {
    ID: string,
    Int: number,
    String: string,
    Datetime: any,
    BigFloat: any,
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
    /** Reads and enables pagination through a set of `Level`. */
    allLevels: (LevelsConnection | null)
    /** Reads and enables pagination through a set of `Metadatum`. */
    allMetadata: (MetadataConnection | null)
    levelById: (Level | null)
    metadatumById: (Metadatum | null)
    /** Reads a single `Level` using its globally unique `ID`. */
    level: (Level | null)
    /** Reads a single `Metadatum` using its globally unique `ID`. */
    metadatum: (Metadatum | null)
    __typename: 'Query'
}


/** An object with a globally unique `ID`. */
export type Node = (Query | Level | Metadatum) & { __isUnion?: true }


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
    authorId: Scalars['BigFloat']
    fileHash: Scalars['String']
    fileUrl: Scalars['String']
    fileAuthor: Scalars['String']
    fileUid: Scalars['String']
    replacedBy: (Scalars['Int'] | null)
    deleted: Scalars['Boolean']
    metadataId: Scalars['Int']
    /** Reads a single `Metadatum` that is related to this `Level`. */
    metadatumByMetadataId: (Metadatum | null)
    __typename: 'Level'
}

export interface Metadatum {
    /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
    nodeId: Scalars['ID']
    hash: Scalars['String']
    valid: Scalars['Boolean']
    checkpoints: Scalars['Int']
    blocks: Scalars['String']
    validation: Scalars['Float']
    gold: Scalars['Float']
    silver: Scalars['Float']
    bronze: Scalars['Float']
    ground: Scalars['Int']
    skybox: Scalars['Int']
    id: Scalars['Int']
    /** Reads and enables pagination through a set of `Level`. */
    levelsByMetadataId: LevelsConnection
    __typename: 'Metadatum'
}


/** Methods to use when ordering `Level`. */
export type LevelsOrderBy = 'NATURAL' | 'ID_ASC' | 'ID_DESC' | 'NAME_ASC' | 'NAME_DESC' | 'IMAGE_URL_ASC' | 'IMAGE_URL_DESC' | 'CREATED_AT_ASC' | 'CREATED_AT_DESC' | 'UPDATED_AT_ASC' | 'UPDATED_AT_DESC' | 'WORKSHOP_ID_ASC' | 'WORKSHOP_ID_DESC' | 'AUTHOR_ID_ASC' | 'AUTHOR_ID_DESC' | 'FILE_HASH_ASC' | 'FILE_HASH_DESC' | 'FILE_URL_ASC' | 'FILE_URL_DESC' | 'FILE_AUTHOR_ASC' | 'FILE_AUTHOR_DESC' | 'FILE_UID_ASC' | 'FILE_UID_DESC' | 'REPLACED_BY_ASC' | 'REPLACED_BY_DESC' | 'DELETED_ASC' | 'DELETED_DESC' | 'METADATA_ID_ASC' | 'METADATA_ID_DESC' | 'PRIMARY_KEY_ASC' | 'PRIMARY_KEY_DESC'


/** A `Level` edge in the connection. */
export interface LevelsEdge {
    /** A cursor for use in pagination. */
    cursor: (Scalars['Cursor'] | null)
    /** The `Level` at the end of the edge. */
    node: (Level | null)
    __typename: 'LevelsEdge'
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


/** A connection to a list of `Metadatum` values. */
export interface MetadataConnection {
    /** A list of `Metadatum` objects. */
    nodes: (Metadatum | null)[]
    /** A list of edges which contains the `Metadatum` and cursor to aid in pagination. */
    edges: MetadataEdge[]
    /** Information to aid in pagination. */
    pageInfo: PageInfo
    /** The count of *all* `Metadatum` you could get from the connection. */
    totalCount: Scalars['Int']
    __typename: 'MetadataConnection'
}


/** A `Metadatum` edge in the connection. */
export interface MetadataEdge {
    /** A cursor for use in pagination. */
    cursor: (Scalars['Cursor'] | null)
    /** The `Metadatum` at the end of the edge. */
    node: (Metadatum | null)
    __typename: 'MetadataEdge'
}


/** Methods to use when ordering `Metadatum`. */
export type MetadataOrderBy = 'NATURAL' | 'HASH_ASC' | 'HASH_DESC' | 'VALID_ASC' | 'VALID_DESC' | 'CHECKPOINTS_ASC' | 'CHECKPOINTS_DESC' | 'BLOCKS_ASC' | 'BLOCKS_DESC' | 'VALIDATION_ASC' | 'VALIDATION_DESC' | 'GOLD_ASC' | 'GOLD_DESC' | 'SILVER_ASC' | 'SILVER_DESC' | 'BRONZE_ASC' | 'BRONZE_DESC' | 'GROUND_ASC' | 'GROUND_DESC' | 'SKYBOX_ASC' | 'SKYBOX_DESC' | 'ID_ASC' | 'ID_DESC' | 'PRIMARY_KEY_ASC' | 'PRIMARY_KEY_DESC'


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
    /** Reads and enables pagination through a set of `Metadatum`. */
    allMetadata?: (MetadataConnectionGenqlSelection & { __args?: {
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
    /** The method to use when ordering `Metadatum`. */
    orderBy?: (MetadataOrderBy[] | null), 
    /** A condition to be used in determining which values should be returned by the collection. */
    condition?: (MetadatumCondition | null)} })
    levelById?: (LevelGenqlSelection & { __args: {id: Scalars['Int']} })
    metadatumById?: (MetadatumGenqlSelection & { __args: {id: Scalars['Int']} })
    /** Reads a single `Level` using its globally unique `ID`. */
    level?: (LevelGenqlSelection & { __args: {
    /** The globally unique `ID` to be used in selecting a single `Level`. */
    nodeId: Scalars['ID']} })
    /** Reads a single `Metadatum` using its globally unique `ID`. */
    metadatum?: (MetadatumGenqlSelection & { __args: {
    /** The globally unique `ID` to be used in selecting a single `Metadatum`. */
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
    on_Metadatum?: MetadatumGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


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
    authorId?: boolean | number
    fileHash?: boolean | number
    fileUrl?: boolean | number
    fileAuthor?: boolean | number
    fileUid?: boolean | number
    replacedBy?: boolean | number
    deleted?: boolean | number
    metadataId?: boolean | number
    /** Reads a single `Metadatum` that is related to this `Level`. */
    metadatumByMetadataId?: MetadatumGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface MetadatumGenqlSelection{
    /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
    nodeId?: boolean | number
    hash?: boolean | number
    valid?: boolean | number
    checkpoints?: boolean | number
    blocks?: boolean | number
    validation?: boolean | number
    gold?: boolean | number
    silver?: boolean | number
    bronze?: boolean | number
    ground?: boolean | number
    skybox?: boolean | number
    id?: boolean | number
    /** Reads and enables pagination through a set of `Level`. */
    levelsByMetadataId?: (LevelsConnectionGenqlSelection & { __args?: {
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
replacedBy?: (Scalars['Int'] | null),
/** Checks for equality with the object’s `deleted` field. */
deleted?: (Scalars['Boolean'] | null),
/** Checks for equality with the object’s `metadataId` field. */
metadataId?: (Scalars['Int'] | null)}


/** A `Level` edge in the connection. */
export interface LevelsEdgeGenqlSelection{
    /** A cursor for use in pagination. */
    cursor?: boolean | number
    /** The `Level` at the end of the edge. */
    node?: LevelGenqlSelection
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


/** A connection to a list of `Metadatum` values. */
export interface MetadataConnectionGenqlSelection{
    /** A list of `Metadatum` objects. */
    nodes?: MetadatumGenqlSelection
    /** A list of edges which contains the `Metadatum` and cursor to aid in pagination. */
    edges?: MetadataEdgeGenqlSelection
    /** Information to aid in pagination. */
    pageInfo?: PageInfoGenqlSelection
    /** The count of *all* `Metadatum` you could get from the connection. */
    totalCount?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** A `Metadatum` edge in the connection. */
export interface MetadataEdgeGenqlSelection{
    /** A cursor for use in pagination. */
    cursor?: boolean | number
    /** The `Metadatum` at the end of the edge. */
    node?: MetadatumGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/**
 * A condition to be used against `Metadatum` object types. All fields are tested
 * for equality and combined with a logical ‘and.’
 */
export interface MetadatumCondition {
/** Checks for equality with the object’s `hash` field. */
hash?: (Scalars['String'] | null),
/** Checks for equality with the object’s `valid` field. */
valid?: (Scalars['Boolean'] | null),
/** Checks for equality with the object’s `checkpoints` field. */
checkpoints?: (Scalars['Int'] | null),
/** Checks for equality with the object’s `blocks` field. */
blocks?: (Scalars['String'] | null),
/** Checks for equality with the object’s `validation` field. */
validation?: (Scalars['Float'] | null),
/** Checks for equality with the object’s `gold` field. */
gold?: (Scalars['Float'] | null),
/** Checks for equality with the object’s `silver` field. */
silver?: (Scalars['Float'] | null),
/** Checks for equality with the object’s `bronze` field. */
bronze?: (Scalars['Float'] | null),
/** Checks for equality with the object’s `ground` field. */
ground?: (Scalars['Int'] | null),
/** Checks for equality with the object’s `skybox` field. */
skybox?: (Scalars['Int'] | null),
/** Checks for equality with the object’s `id` field. */
id?: (Scalars['Int'] | null)}


    const Query_possibleTypes: string[] = ['Query']
    export const isQuery = (obj?: { __typename?: any } | null): obj is Query => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isQuery"')
      return Query_possibleTypes.includes(obj.__typename)
    }
    


    const Node_possibleTypes: string[] = ['Query','Level','Metadatum']
    export const isNode = (obj?: { __typename?: any } | null): obj is Node => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isNode"')
      return Node_possibleTypes.includes(obj.__typename)
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
    


    const Metadatum_possibleTypes: string[] = ['Metadatum']
    export const isMetadatum = (obj?: { __typename?: any } | null): obj is Metadatum => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isMetadatum"')
      return Metadatum_possibleTypes.includes(obj.__typename)
    }
    


    const LevelsEdge_possibleTypes: string[] = ['LevelsEdge']
    export const isLevelsEdge = (obj?: { __typename?: any } | null): obj is LevelsEdge => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isLevelsEdge"')
      return LevelsEdge_possibleTypes.includes(obj.__typename)
    }
    


    const PageInfo_possibleTypes: string[] = ['PageInfo']
    export const isPageInfo = (obj?: { __typename?: any } | null): obj is PageInfo => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isPageInfo"')
      return PageInfo_possibleTypes.includes(obj.__typename)
    }
    


    const MetadataConnection_possibleTypes: string[] = ['MetadataConnection']
    export const isMetadataConnection = (obj?: { __typename?: any } | null): obj is MetadataConnection => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isMetadataConnection"')
      return MetadataConnection_possibleTypes.includes(obj.__typename)
    }
    


    const MetadataEdge_possibleTypes: string[] = ['MetadataEdge']
    export const isMetadataEdge = (obj?: { __typename?: any } | null): obj is MetadataEdge => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isMetadataEdge"')
      return MetadataEdge_possibleTypes.includes(obj.__typename)
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
   DELETED_ASC: 'DELETED_ASC' as const,
   DELETED_DESC: 'DELETED_DESC' as const,
   METADATA_ID_ASC: 'METADATA_ID_ASC' as const,
   METADATA_ID_DESC: 'METADATA_ID_DESC' as const,
   PRIMARY_KEY_ASC: 'PRIMARY_KEY_ASC' as const,
   PRIMARY_KEY_DESC: 'PRIMARY_KEY_DESC' as const
}

export const enumMetadataOrderBy = {
   NATURAL: 'NATURAL' as const,
   HASH_ASC: 'HASH_ASC' as const,
   HASH_DESC: 'HASH_DESC' as const,
   VALID_ASC: 'VALID_ASC' as const,
   VALID_DESC: 'VALID_DESC' as const,
   CHECKPOINTS_ASC: 'CHECKPOINTS_ASC' as const,
   CHECKPOINTS_DESC: 'CHECKPOINTS_DESC' as const,
   BLOCKS_ASC: 'BLOCKS_ASC' as const,
   BLOCKS_DESC: 'BLOCKS_DESC' as const,
   VALIDATION_ASC: 'VALIDATION_ASC' as const,
   VALIDATION_DESC: 'VALIDATION_DESC' as const,
   GOLD_ASC: 'GOLD_ASC' as const,
   GOLD_DESC: 'GOLD_DESC' as const,
   SILVER_ASC: 'SILVER_ASC' as const,
   SILVER_DESC: 'SILVER_DESC' as const,
   BRONZE_ASC: 'BRONZE_ASC' as const,
   BRONZE_DESC: 'BRONZE_DESC' as const,
   GROUND_ASC: 'GROUND_ASC' as const,
   GROUND_DESC: 'GROUND_DESC' as const,
   SKYBOX_ASC: 'SKYBOX_ASC' as const,
   SKYBOX_DESC: 'SKYBOX_DESC' as const,
   ID_ASC: 'ID_ASC' as const,
   ID_DESC: 'ID_DESC' as const,
   PRIMARY_KEY_ASC: 'PRIMARY_KEY_ASC' as const,
   PRIMARY_KEY_DESC: 'PRIMARY_KEY_DESC' as const
}
