// @ts-nocheck
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type Scalars = {
    ID: string,
    Int: number,
    String: string,
    Datetime: any,
    Boolean: boolean,
    Cursor: any,
    Float: number,
    BigFloat: any,
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
    /** Reads and enables pagination through a set of `Favorite`. */
    allFavorites: (FavoritesConnection | null)
    /** Reads and enables pagination through a set of `LevelPoint`. */
    allLevelPoints: (LevelPointsConnection | null)
    /** Reads and enables pagination through a set of `Level`. */
    allLevels: (LevelsConnection | null)
    /** Reads and enables pagination through a set of `Media`. */
    allMedia: (MediaConnection | null)
    /** Reads and enables pagination through a set of `Metadatum`. */
    allMetadata: (MetadataConnection | null)
    /** Reads and enables pagination through a set of `PersonalBest`. */
    allPersonalBests: (PersonalBestsConnection | null)
    /** Reads and enables pagination through a set of `PlayerPoint`. */
    allPlayerPoints: (PlayerPointsConnection | null)
    /** Reads and enables pagination through a set of `Record`. */
    allRecords: (RecordsConnection | null)
    /** Reads and enables pagination through a set of `Request`. */
    allRequests: (RequestsConnection | null)
    /** Reads and enables pagination through a set of `Stat`. */
    allStats: (StatsConnection | null)
    /** Reads and enables pagination through a set of `Upvote`. */
    allUpvotes: (UpvotesConnection | null)
    /** Reads and enables pagination through a set of `User`. */
    allUsers: (UsersConnection | null)
    /** Reads and enables pagination through a set of `Version`. */
    allVersions: (VersionsConnection | null)
    /** Reads and enables pagination through a set of `Vote`. */
    allVotes: (VotesConnection | null)
    /** Reads and enables pagination through a set of `WorldRecord`. */
    allWorldRecords: (WorldRecordsConnection | null)
    favoriteById: (Favorite | null)
    levelPointById: (LevelPoint | null)
    levelById: (Level | null)
    mediaById: (Media | null)
    metadatumById: (Metadatum | null)
    personalBestById: (PersonalBest | null)
    playerPointById: (PlayerPoint | null)
    recordById: (Record | null)
    requestById: (Request | null)
    statById: (Stat | null)
    upvoteById: (Upvote | null)
    userById: (User | null)
    versionById: (Version | null)
    voteById: (Vote | null)
    worldRecordById: (WorldRecord | null)
    /** Reads a single `Favorite` using its globally unique `ID`. */
    favorite: (Favorite | null)
    /** Reads a single `LevelPoint` using its globally unique `ID`. */
    levelPoint: (LevelPoint | null)
    /** Reads a single `Level` using its globally unique `ID`. */
    level: (Level | null)
    /** Reads a single `Media` using its globally unique `ID`. */
    media: (Media | null)
    /** Reads a single `Metadatum` using its globally unique `ID`. */
    metadatum: (Metadatum | null)
    /** Reads a single `PersonalBest` using its globally unique `ID`. */
    personalBest: (PersonalBest | null)
    /** Reads a single `PlayerPoint` using its globally unique `ID`. */
    playerPoint: (PlayerPoint | null)
    /** Reads a single `Record` using its globally unique `ID`. */
    record: (Record | null)
    /** Reads a single `Request` using its globally unique `ID`. */
    request: (Request | null)
    /** Reads a single `Stat` using its globally unique `ID`. */
    stat: (Stat | null)
    /** Reads a single `Upvote` using its globally unique `ID`. */
    upvote: (Upvote | null)
    /** Reads a single `User` using its globally unique `ID`. */
    user: (User | null)
    /** Reads a single `Version` using its globally unique `ID`. */
    version: (Version | null)
    /** Reads a single `Vote` using its globally unique `ID`. */
    vote: (Vote | null)
    /** Reads a single `WorldRecord` using its globally unique `ID`. */
    worldRecord: (WorldRecord | null)
    __typename: 'Query'
}


/** An object with a globally unique `ID`. */
export type Node = (Query | Favorite | User | Record | Media | PersonalBest | WorldRecord | Stat | Upvote | Vote | PlayerPoint | LevelPoint | Level | Metadatum | Request | Version) & { __isUnion?: true }


/** A connection to a list of `Favorite` values. */
export interface FavoritesConnection {
    /** A list of `Favorite` objects. */
    nodes: (Favorite | null)[]
    /** A list of edges which contains the `Favorite` and cursor to aid in pagination. */
    edges: FavoritesEdge[]
    /** Information to aid in pagination. */
    pageInfo: PageInfo
    /** The count of *all* `Favorite` you could get from the connection. */
    totalCount: Scalars['Int']
    __typename: 'FavoritesConnection'
}

export interface Favorite {
    /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
    nodeId: Scalars['ID']
    id: Scalars['Int']
    user: Scalars['Int']
    level: Scalars['String']
    dateCreated: Scalars['Datetime']
    dateUpdated: Scalars['Datetime']
    /** Reads a single `User` that is related to this `Favorite`. */
    userByUser: (User | null)
    __typename: 'Favorite'
}

export interface User {
    /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
    nodeId: Scalars['ID']
    id: Scalars['Int']
    steamId: (Scalars['String'] | null)
    steamName: (Scalars['String'] | null)
    discordId: (Scalars['String'] | null)
    banned: Scalars['Boolean']
    dateCreated: Scalars['Datetime']
    dateUpdated: Scalars['Datetime']
    /** Reads and enables pagination through a set of `Favorite`. */
    favoritesByUser: FavoritesConnection
    /** Reads and enables pagination through a set of `Record`. */
    recordsByUser: RecordsConnection
    /** Reads and enables pagination through a set of `Stat`. */
    statsByUser: StatsConnection
    /** Reads and enables pagination through a set of `Upvote`. */
    upvotesByUser: UpvotesConnection
    /** Reads and enables pagination through a set of `Vote`. */
    votesByUser: VotesConnection
    /** Reads and enables pagination through a set of `PersonalBest`. */
    personalBestsByUser: PersonalBestsConnection
    /** Reads and enables pagination through a set of `WorldRecord`. */
    worldRecordsByUser: WorldRecordsConnection
    /** Reads and enables pagination through a set of `PlayerPoint`. */
    playerPointsByUser: PlayerPointsConnection
    __typename: 'User'
}


/** Methods to use when ordering `Favorite`. */
export type FavoritesOrderBy = 'NATURAL' | 'ID_ASC' | 'ID_DESC' | 'USER_ASC' | 'USER_DESC' | 'LEVEL_ASC' | 'LEVEL_DESC' | 'DATE_CREATED_ASC' | 'DATE_CREATED_DESC' | 'DATE_UPDATED_ASC' | 'DATE_UPDATED_DESC' | 'PRIMARY_KEY_ASC' | 'PRIMARY_KEY_DESC'


/** A connection to a list of `Record` values. */
export interface RecordsConnection {
    /** A list of `Record` objects. */
    nodes: (Record | null)[]
    /** A list of edges which contains the `Record` and cursor to aid in pagination. */
    edges: RecordsEdge[]
    /** Information to aid in pagination. */
    pageInfo: PageInfo
    /** The count of *all* `Record` you could get from the connection. */
    totalCount: Scalars['Int']
    __typename: 'RecordsConnection'
}

export interface Record {
    /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
    nodeId: Scalars['ID']
    id: Scalars['Int']
    user: Scalars['Int']
    time: Scalars['Float']
    splits: (Scalars['String'] | null)
    gameVersion: Scalars['String']
    isValid: Scalars['Boolean']
    level: Scalars['String']
    modVersion: Scalars['String']
    dateCreated: Scalars['Datetime']
    dateUpdated: Scalars['Datetime']
    /** Reads a single `User` that is related to this `Record`. */
    userByUser: (User | null)
    /** Reads and enables pagination through a set of `Media`. */
    mediaByRecord: MediaConnection
    /** Reads and enables pagination through a set of `PersonalBest`. */
    personalBestsByRecord: PersonalBestsConnection
    /** Reads and enables pagination through a set of `WorldRecord`. */
    worldRecordsByRecord: WorldRecordsConnection
    __typename: 'Record'
}


/** A connection to a list of `Media` values. */
export interface MediaConnection {
    /** A list of `Media` objects. */
    nodes: (Media | null)[]
    /** A list of edges which contains the `Media` and cursor to aid in pagination. */
    edges: MediaEdge[]
    /** Information to aid in pagination. */
    pageInfo: PageInfo
    /** The count of *all* `Media` you could get from the connection. */
    totalCount: Scalars['Int']
    __typename: 'MediaConnection'
}

export interface Media {
    /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
    nodeId: Scalars['ID']
    id: Scalars['Int']
    record: Scalars['Int']
    ghostUrl: Scalars['String']
    screenshotUrl: Scalars['String']
    dateCreated: Scalars['Datetime']
    dateUpdated: Scalars['Datetime']
    /** Reads a single `Record` that is related to this `Media`. */
    recordByRecord: (Record | null)
    __typename: 'Media'
}


/** A `Media` edge in the connection. */
export interface MediaEdge {
    /** A cursor for use in pagination. */
    cursor: (Scalars['Cursor'] | null)
    /** The `Media` at the end of the edge. */
    node: (Media | null)
    __typename: 'MediaEdge'
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


/** Methods to use when ordering `Media`. */
export type MediaOrderBy = 'NATURAL' | 'ID_ASC' | 'ID_DESC' | 'RECORD_ASC' | 'RECORD_DESC' | 'GHOST_URL_ASC' | 'GHOST_URL_DESC' | 'SCREENSHOT_URL_ASC' | 'SCREENSHOT_URL_DESC' | 'DATE_CREATED_ASC' | 'DATE_CREATED_DESC' | 'DATE_UPDATED_ASC' | 'DATE_UPDATED_DESC' | 'PRIMARY_KEY_ASC' | 'PRIMARY_KEY_DESC'


/** A connection to a list of `PersonalBest` values. */
export interface PersonalBestsConnection {
    /** A list of `PersonalBest` objects. */
    nodes: (PersonalBest | null)[]
    /** A list of edges which contains the `PersonalBest` and cursor to aid in pagination. */
    edges: PersonalBestsEdge[]
    /** Information to aid in pagination. */
    pageInfo: PageInfo
    /** The count of *all* `PersonalBest` you could get from the connection. */
    totalCount: Scalars['Int']
    __typename: 'PersonalBestsConnection'
}

export interface PersonalBest {
    /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
    nodeId: Scalars['ID']
    id: Scalars['Int']
    record: Scalars['Int']
    user: Scalars['Int']
    periodStart: (Scalars['Datetime'] | null)
    periodEnd: (Scalars['Datetime'] | null)
    level: Scalars['String']
    dateCreated: Scalars['Datetime']
    dateUpdated: Scalars['Datetime']
    /** Reads a single `Record` that is related to this `PersonalBest`. */
    recordByRecord: (Record | null)
    /** Reads a single `User` that is related to this `PersonalBest`. */
    userByUser: (User | null)
    __typename: 'PersonalBest'
}


/** A `PersonalBest` edge in the connection. */
export interface PersonalBestsEdge {
    /** A cursor for use in pagination. */
    cursor: (Scalars['Cursor'] | null)
    /** The `PersonalBest` at the end of the edge. */
    node: (PersonalBest | null)
    __typename: 'PersonalBestsEdge'
}


/** Methods to use when ordering `PersonalBest`. */
export type PersonalBestsOrderBy = 'NATURAL' | 'ID_ASC' | 'ID_DESC' | 'RECORD_ASC' | 'RECORD_DESC' | 'USER_ASC' | 'USER_DESC' | 'PERIOD_START_ASC' | 'PERIOD_START_DESC' | 'PERIOD_END_ASC' | 'PERIOD_END_DESC' | 'LEVEL_ASC' | 'LEVEL_DESC' | 'DATE_CREATED_ASC' | 'DATE_CREATED_DESC' | 'DATE_UPDATED_ASC' | 'DATE_UPDATED_DESC' | 'PRIMARY_KEY_ASC' | 'PRIMARY_KEY_DESC'


/** A connection to a list of `WorldRecord` values. */
export interface WorldRecordsConnection {
    /** A list of `WorldRecord` objects. */
    nodes: (WorldRecord | null)[]
    /** A list of edges which contains the `WorldRecord` and cursor to aid in pagination. */
    edges: WorldRecordsEdge[]
    /** Information to aid in pagination. */
    pageInfo: PageInfo
    /** The count of *all* `WorldRecord` you could get from the connection. */
    totalCount: Scalars['Int']
    __typename: 'WorldRecordsConnection'
}

export interface WorldRecord {
    /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
    nodeId: Scalars['ID']
    id: Scalars['Int']
    record: Scalars['Int']
    user: Scalars['Int']
    periodStart: (Scalars['Datetime'] | null)
    periodEnd: (Scalars['Datetime'] | null)
    level: Scalars['String']
    dateCreated: Scalars['Datetime']
    dateUpdated: Scalars['Datetime']
    /** Reads a single `Record` that is related to this `WorldRecord`. */
    recordByRecord: (Record | null)
    /** Reads a single `User` that is related to this `WorldRecord`. */
    userByUser: (User | null)
    __typename: 'WorldRecord'
}


/** A `WorldRecord` edge in the connection. */
export interface WorldRecordsEdge {
    /** A cursor for use in pagination. */
    cursor: (Scalars['Cursor'] | null)
    /** The `WorldRecord` at the end of the edge. */
    node: (WorldRecord | null)
    __typename: 'WorldRecordsEdge'
}


/** Methods to use when ordering `WorldRecord`. */
export type WorldRecordsOrderBy = 'NATURAL' | 'ID_ASC' | 'ID_DESC' | 'RECORD_ASC' | 'RECORD_DESC' | 'USER_ASC' | 'USER_DESC' | 'PERIOD_START_ASC' | 'PERIOD_START_DESC' | 'PERIOD_END_ASC' | 'PERIOD_END_DESC' | 'LEVEL_ASC' | 'LEVEL_DESC' | 'DATE_CREATED_ASC' | 'DATE_CREATED_DESC' | 'DATE_UPDATED_ASC' | 'DATE_UPDATED_DESC' | 'PRIMARY_KEY_ASC' | 'PRIMARY_KEY_DESC'


/** A `Record` edge in the connection. */
export interface RecordsEdge {
    /** A cursor for use in pagination. */
    cursor: (Scalars['Cursor'] | null)
    /** The `Record` at the end of the edge. */
    node: (Record | null)
    __typename: 'RecordsEdge'
}


/** Methods to use when ordering `Record`. */
export type RecordsOrderBy = 'NATURAL' | 'ID_ASC' | 'ID_DESC' | 'USER_ASC' | 'USER_DESC' | 'TIME_ASC' | 'TIME_DESC' | 'SPLITS_ASC' | 'SPLITS_DESC' | 'GAME_VERSION_ASC' | 'GAME_VERSION_DESC' | 'IS_VALID_ASC' | 'IS_VALID_DESC' | 'LEVEL_ASC' | 'LEVEL_DESC' | 'MOD_VERSION_ASC' | 'MOD_VERSION_DESC' | 'DATE_CREATED_ASC' | 'DATE_CREATED_DESC' | 'DATE_UPDATED_ASC' | 'DATE_UPDATED_DESC' | 'PRIMARY_KEY_ASC' | 'PRIMARY_KEY_DESC'


/** A connection to a list of `Stat` values. */
export interface StatsConnection {
    /** A list of `Stat` objects. */
    nodes: (Stat | null)[]
    /** A list of edges which contains the `Stat` and cursor to aid in pagination. */
    edges: StatsEdge[]
    /** Information to aid in pagination. */
    pageInfo: PageInfo
    /** The count of *all* `Stat` you could get from the connection. */
    totalCount: Scalars['Int']
    __typename: 'StatsConnection'
}

export interface Stat {
    /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
    nodeId: Scalars['ID']
    id: Scalars['Int']
    crashTotal: Scalars['Int']
    crashRegular: Scalars['Int']
    crashEye: Scalars['Int']
    crashGhost: Scalars['Int']
    crashSticky: Scalars['Int']
    distanceArmsUp: Scalars['Float']
    distanceBraking: Scalars['Float']
    distanceGrounded: Scalars['Float']
    distanceInAir: Scalars['Float']
    distanceOnNoWheels: Scalars['Float']
    distanceOnOneWheel: Scalars['Float']
    distanceOnTwoWheels: Scalars['Float']
    distanceOnThreeWheels: Scalars['Float']
    distanceOnFourWheels: Scalars['Float']
    distanceRagdoll: Scalars['Float']
    distanceWithNoWheels: Scalars['Float']
    distanceWithOneWheel: Scalars['Float']
    distanceWithTwoWheels: Scalars['Float']
    distanceWithThreeWheels: Scalars['Float']
    distanceWithFourWheels: Scalars['Float']
    distanceOnRegular: Scalars['Float']
    distanceOnGrass: Scalars['Float']
    distanceOnIce: Scalars['Float']
    timeArmsUp: Scalars['Float']
    timeBraking: Scalars['Float']
    timeGrounded: Scalars['Float']
    timeInAir: Scalars['Float']
    timeOnNoWheels: Scalars['Float']
    timeOnOneWheel: Scalars['Float']
    timeOnTwoWheels: Scalars['Float']
    timeOnThreeWheels: Scalars['Float']
    timeOnFourWheels: Scalars['Float']
    timeRagdoll: Scalars['Float']
    timeWithNoWheels: Scalars['Float']
    timeWithOneWheel: Scalars['Float']
    timeWithTwoWheels: Scalars['Float']
    timeWithThreeWheels: Scalars['Float']
    timeWithFourWheels: Scalars['Float']
    timeOnRegular: Scalars['Float']
    timeOnGrass: Scalars['Float']
    timeOnIce: Scalars['Float']
    timesStarted: Scalars['Int']
    timesFinished: Scalars['Int']
    wheelsBroken: Scalars['Int']
    checkpointsCrossed: Scalars['Int']
    user: Scalars['Int']
    month: Scalars['Int']
    year: Scalars['Int']
    dateCreated: Scalars['Datetime']
    dateUpdated: Scalars['Datetime']
    level: (Scalars['String'] | null)
    /** Reads a single `User` that is related to this `Stat`. */
    userByUser: (User | null)
    __typename: 'Stat'
}


/** A `Stat` edge in the connection. */
export interface StatsEdge {
    /** A cursor for use in pagination. */
    cursor: (Scalars['Cursor'] | null)
    /** The `Stat` at the end of the edge. */
    node: (Stat | null)
    __typename: 'StatsEdge'
}


/** Methods to use when ordering `Stat`. */
export type StatsOrderBy = 'NATURAL' | 'ID_ASC' | 'ID_DESC' | 'CRASH_TOTAL_ASC' | 'CRASH_TOTAL_DESC' | 'CRASH_REGULAR_ASC' | 'CRASH_REGULAR_DESC' | 'CRASH_EYE_ASC' | 'CRASH_EYE_DESC' | 'CRASH_GHOST_ASC' | 'CRASH_GHOST_DESC' | 'CRASH_STICKY_ASC' | 'CRASH_STICKY_DESC' | 'DISTANCE_ARMS_UP_ASC' | 'DISTANCE_ARMS_UP_DESC' | 'DISTANCE_BRAKING_ASC' | 'DISTANCE_BRAKING_DESC' | 'DISTANCE_GROUNDED_ASC' | 'DISTANCE_GROUNDED_DESC' | 'DISTANCE_IN_AIR_ASC' | 'DISTANCE_IN_AIR_DESC' | 'DISTANCE_ON_NO_WHEELS_ASC' | 'DISTANCE_ON_NO_WHEELS_DESC' | 'DISTANCE_ON_ONE_WHEEL_ASC' | 'DISTANCE_ON_ONE_WHEEL_DESC' | 'DISTANCE_ON_TWO_WHEELS_ASC' | 'DISTANCE_ON_TWO_WHEELS_DESC' | 'DISTANCE_ON_THREE_WHEELS_ASC' | 'DISTANCE_ON_THREE_WHEELS_DESC' | 'DISTANCE_ON_FOUR_WHEELS_ASC' | 'DISTANCE_ON_FOUR_WHEELS_DESC' | 'DISTANCE_RAGDOLL_ASC' | 'DISTANCE_RAGDOLL_DESC' | 'DISTANCE_WITH_NO_WHEELS_ASC' | 'DISTANCE_WITH_NO_WHEELS_DESC' | 'DISTANCE_WITH_ONE_WHEEL_ASC' | 'DISTANCE_WITH_ONE_WHEEL_DESC' | 'DISTANCE_WITH_TWO_WHEELS_ASC' | 'DISTANCE_WITH_TWO_WHEELS_DESC' | 'DISTANCE_WITH_THREE_WHEELS_ASC' | 'DISTANCE_WITH_THREE_WHEELS_DESC' | 'DISTANCE_WITH_FOUR_WHEELS_ASC' | 'DISTANCE_WITH_FOUR_WHEELS_DESC' | 'DISTANCE_ON_REGULAR_ASC' | 'DISTANCE_ON_REGULAR_DESC' | 'DISTANCE_ON_GRASS_ASC' | 'DISTANCE_ON_GRASS_DESC' | 'DISTANCE_ON_ICE_ASC' | 'DISTANCE_ON_ICE_DESC' | 'TIME_ARMS_UP_ASC' | 'TIME_ARMS_UP_DESC' | 'TIME_BRAKING_ASC' | 'TIME_BRAKING_DESC' | 'TIME_GROUNDED_ASC' | 'TIME_GROUNDED_DESC' | 'TIME_IN_AIR_ASC' | 'TIME_IN_AIR_DESC' | 'TIME_ON_NO_WHEELS_ASC' | 'TIME_ON_NO_WHEELS_DESC' | 'TIME_ON_ONE_WHEEL_ASC' | 'TIME_ON_ONE_WHEEL_DESC' | 'TIME_ON_TWO_WHEELS_ASC' | 'TIME_ON_TWO_WHEELS_DESC' | 'TIME_ON_THREE_WHEELS_ASC' | 'TIME_ON_THREE_WHEELS_DESC' | 'TIME_ON_FOUR_WHEELS_ASC' | 'TIME_ON_FOUR_WHEELS_DESC' | 'TIME_RAGDOLL_ASC' | 'TIME_RAGDOLL_DESC' | 'TIME_WITH_NO_WHEELS_ASC' | 'TIME_WITH_NO_WHEELS_DESC' | 'TIME_WITH_ONE_WHEEL_ASC' | 'TIME_WITH_ONE_WHEEL_DESC' | 'TIME_WITH_TWO_WHEELS_ASC' | 'TIME_WITH_TWO_WHEELS_DESC' | 'TIME_WITH_THREE_WHEELS_ASC' | 'TIME_WITH_THREE_WHEELS_DESC' | 'TIME_WITH_FOUR_WHEELS_ASC' | 'TIME_WITH_FOUR_WHEELS_DESC' | 'TIME_ON_REGULAR_ASC' | 'TIME_ON_REGULAR_DESC' | 'TIME_ON_GRASS_ASC' | 'TIME_ON_GRASS_DESC' | 'TIME_ON_ICE_ASC' | 'TIME_ON_ICE_DESC' | 'TIMES_STARTED_ASC' | 'TIMES_STARTED_DESC' | 'TIMES_FINISHED_ASC' | 'TIMES_FINISHED_DESC' | 'WHEELS_BROKEN_ASC' | 'WHEELS_BROKEN_DESC' | 'CHECKPOINTS_CROSSED_ASC' | 'CHECKPOINTS_CROSSED_DESC' | 'USER_ASC' | 'USER_DESC' | 'MONTH_ASC' | 'MONTH_DESC' | 'YEAR_ASC' | 'YEAR_DESC' | 'DATE_CREATED_ASC' | 'DATE_CREATED_DESC' | 'DATE_UPDATED_ASC' | 'DATE_UPDATED_DESC' | 'LEVEL_ASC' | 'LEVEL_DESC' | 'PRIMARY_KEY_ASC' | 'PRIMARY_KEY_DESC'


/** A connection to a list of `Upvote` values. */
export interface UpvotesConnection {
    /** A list of `Upvote` objects. */
    nodes: (Upvote | null)[]
    /** A list of edges which contains the `Upvote` and cursor to aid in pagination. */
    edges: UpvotesEdge[]
    /** Information to aid in pagination. */
    pageInfo: PageInfo
    /** The count of *all* `Upvote` you could get from the connection. */
    totalCount: Scalars['Int']
    __typename: 'UpvotesConnection'
}

export interface Upvote {
    /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
    nodeId: Scalars['ID']
    id: Scalars['Int']
    user: Scalars['Int']
    level: Scalars['String']
    dateCreated: Scalars['Datetime']
    dateUpdated: Scalars['Datetime']
    /** Reads a single `User` that is related to this `Upvote`. */
    userByUser: (User | null)
    __typename: 'Upvote'
}


/** A `Upvote` edge in the connection. */
export interface UpvotesEdge {
    /** A cursor for use in pagination. */
    cursor: (Scalars['Cursor'] | null)
    /** The `Upvote` at the end of the edge. */
    node: (Upvote | null)
    __typename: 'UpvotesEdge'
}


/** Methods to use when ordering `Upvote`. */
export type UpvotesOrderBy = 'NATURAL' | 'ID_ASC' | 'ID_DESC' | 'USER_ASC' | 'USER_DESC' | 'LEVEL_ASC' | 'LEVEL_DESC' | 'DATE_CREATED_ASC' | 'DATE_CREATED_DESC' | 'DATE_UPDATED_ASC' | 'DATE_UPDATED_DESC' | 'PRIMARY_KEY_ASC' | 'PRIMARY_KEY_DESC'


/** A connection to a list of `Vote` values. */
export interface VotesConnection {
    /** A list of `Vote` objects. */
    nodes: (Vote | null)[]
    /** A list of edges which contains the `Vote` and cursor to aid in pagination. */
    edges: VotesEdge[]
    /** Information to aid in pagination. */
    pageInfo: PageInfo
    /** The count of *all* `Vote` you could get from the connection. */
    totalCount: Scalars['Int']
    __typename: 'VotesConnection'
}

export interface Vote {
    /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
    nodeId: Scalars['ID']
    id: Scalars['Int']
    user: Scalars['Int']
    score: Scalars['Int']
    level: Scalars['String']
    dateCreated: Scalars['Datetime']
    dateUpdated: Scalars['Datetime']
    /** Reads a single `User` that is related to this `Vote`. */
    userByUser: (User | null)
    __typename: 'Vote'
}


/** A `Vote` edge in the connection. */
export interface VotesEdge {
    /** A cursor for use in pagination. */
    cursor: (Scalars['Cursor'] | null)
    /** The `Vote` at the end of the edge. */
    node: (Vote | null)
    __typename: 'VotesEdge'
}


/** Methods to use when ordering `Vote`. */
export type VotesOrderBy = 'NATURAL' | 'ID_ASC' | 'ID_DESC' | 'USER_ASC' | 'USER_DESC' | 'SCORE_ASC' | 'SCORE_DESC' | 'LEVEL_ASC' | 'LEVEL_DESC' | 'DATE_CREATED_ASC' | 'DATE_CREATED_DESC' | 'DATE_UPDATED_ASC' | 'DATE_UPDATED_DESC' | 'PRIMARY_KEY_ASC' | 'PRIMARY_KEY_DESC'


/** A connection to a list of `PlayerPoint` values. */
export interface PlayerPointsConnection {
    /** A list of `PlayerPoint` objects. */
    nodes: (PlayerPoint | null)[]
    /** A list of edges which contains the `PlayerPoint` and cursor to aid in pagination. */
    edges: PlayerPointsEdge[]
    /** Information to aid in pagination. */
    pageInfo: PageInfo
    /** The count of *all* `PlayerPoint` you could get from the connection. */
    totalCount: Scalars['Int']
    __typename: 'PlayerPointsConnection'
}

export interface PlayerPoint {
    /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
    nodeId: Scalars['ID']
    id: Scalars['Int']
    user: Scalars['Int']
    points: Scalars['Int']
    dateCreated: Scalars['Datetime']
    dateUpdated: Scalars['Datetime']
    rank: Scalars['Int']
    worldRecords: (Scalars['Int'] | null)
    /** Reads a single `User` that is related to this `PlayerPoint`. */
    userByUser: (User | null)
    __typename: 'PlayerPoint'
}


/** A `PlayerPoint` edge in the connection. */
export interface PlayerPointsEdge {
    /** A cursor for use in pagination. */
    cursor: (Scalars['Cursor'] | null)
    /** The `PlayerPoint` at the end of the edge. */
    node: (PlayerPoint | null)
    __typename: 'PlayerPointsEdge'
}


/** Methods to use when ordering `PlayerPoint`. */
export type PlayerPointsOrderBy = 'NATURAL' | 'ID_ASC' | 'ID_DESC' | 'USER_ASC' | 'USER_DESC' | 'POINTS_ASC' | 'POINTS_DESC' | 'DATE_CREATED_ASC' | 'DATE_CREATED_DESC' | 'DATE_UPDATED_ASC' | 'DATE_UPDATED_DESC' | 'RANK_ASC' | 'RANK_DESC' | 'WORLD_RECORDS_ASC' | 'WORLD_RECORDS_DESC' | 'PRIMARY_KEY_ASC' | 'PRIMARY_KEY_DESC'


/** A `Favorite` edge in the connection. */
export interface FavoritesEdge {
    /** A cursor for use in pagination. */
    cursor: (Scalars['Cursor'] | null)
    /** The `Favorite` at the end of the edge. */
    node: (Favorite | null)
    __typename: 'FavoritesEdge'
}


/** A connection to a list of `LevelPoint` values. */
export interface LevelPointsConnection {
    /** A list of `LevelPoint` objects. */
    nodes: (LevelPoint | null)[]
    /** A list of edges which contains the `LevelPoint` and cursor to aid in pagination. */
    edges: LevelPointsEdge[]
    /** Information to aid in pagination. */
    pageInfo: PageInfo
    /** The count of *all* `LevelPoint` you could get from the connection. */
    totalCount: Scalars['Int']
    __typename: 'LevelPointsConnection'
}

export interface LevelPoint {
    /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
    nodeId: Scalars['ID']
    id: Scalars['Int']
    level: Scalars['String']
    points: Scalars['Int']
    dateCreated: Scalars['Datetime']
    dateUpdated: Scalars['Datetime']
    __typename: 'LevelPoint'
}


/** A `LevelPoint` edge in the connection. */
export interface LevelPointsEdge {
    /** A cursor for use in pagination. */
    cursor: (Scalars['Cursor'] | null)
    /** The `LevelPoint` at the end of the edge. */
    node: (LevelPoint | null)
    __typename: 'LevelPointsEdge'
}


/** Methods to use when ordering `LevelPoint`. */
export type LevelPointsOrderBy = 'NATURAL' | 'ID_ASC' | 'ID_DESC' | 'LEVEL_ASC' | 'LEVEL_DESC' | 'POINTS_ASC' | 'POINTS_DESC' | 'DATE_CREATED_ASC' | 'DATE_CREATED_DESC' | 'DATE_UPDATED_ASC' | 'DATE_UPDATED_DESC' | 'PRIMARY_KEY_ASC' | 'PRIMARY_KEY_DESC'


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


/** A connection to a list of `Request` values. */
export interface RequestsConnection {
    /** A list of `Request` objects. */
    nodes: (Request | null)[]
    /** A list of edges which contains the `Request` and cursor to aid in pagination. */
    edges: RequestsEdge[]
    /** Information to aid in pagination. */
    pageInfo: PageInfo
    /** The count of *all* `Request` you could get from the connection. */
    totalCount: Scalars['Int']
    __typename: 'RequestsConnection'
}

export interface Request {
    /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
    nodeId: Scalars['ID']
    id: Scalars['Int']
    workshopId: Scalars['BigFloat']
    uid: (Scalars['String'] | null)
    hash: (Scalars['String'] | null)
    dateCreated: Scalars['Datetime']
    __typename: 'Request'
}


/** A `Request` edge in the connection. */
export interface RequestsEdge {
    /** A cursor for use in pagination. */
    cursor: (Scalars['Cursor'] | null)
    /** The `Request` at the end of the edge. */
    node: (Request | null)
    __typename: 'RequestsEdge'
}


/** Methods to use when ordering `Request`. */
export type RequestsOrderBy = 'NATURAL' | 'ID_ASC' | 'ID_DESC' | 'WORKSHOP_ID_ASC' | 'WORKSHOP_ID_DESC' | 'UID_ASC' | 'UID_DESC' | 'HASH_ASC' | 'HASH_DESC' | 'DATE_CREATED_ASC' | 'DATE_CREATED_DESC' | 'PRIMARY_KEY_ASC' | 'PRIMARY_KEY_DESC'


/** A connection to a list of `User` values. */
export interface UsersConnection {
    /** A list of `User` objects. */
    nodes: (User | null)[]
    /** A list of edges which contains the `User` and cursor to aid in pagination. */
    edges: UsersEdge[]
    /** Information to aid in pagination. */
    pageInfo: PageInfo
    /** The count of *all* `User` you could get from the connection. */
    totalCount: Scalars['Int']
    __typename: 'UsersConnection'
}


/** A `User` edge in the connection. */
export interface UsersEdge {
    /** A cursor for use in pagination. */
    cursor: (Scalars['Cursor'] | null)
    /** The `User` at the end of the edge. */
    node: (User | null)
    __typename: 'UsersEdge'
}


/** Methods to use when ordering `User`. */
export type UsersOrderBy = 'NATURAL' | 'ID_ASC' | 'ID_DESC' | 'STEAM_ID_ASC' | 'STEAM_ID_DESC' | 'STEAM_NAME_ASC' | 'STEAM_NAME_DESC' | 'DISCORD_ID_ASC' | 'DISCORD_ID_DESC' | 'BANNED_ASC' | 'BANNED_DESC' | 'DATE_CREATED_ASC' | 'DATE_CREATED_DESC' | 'DATE_UPDATED_ASC' | 'DATE_UPDATED_DESC' | 'PRIMARY_KEY_ASC' | 'PRIMARY_KEY_DESC'


/** A connection to a list of `Version` values. */
export interface VersionsConnection {
    /** A list of `Version` objects. */
    nodes: (Version | null)[]
    /** A list of edges which contains the `Version` and cursor to aid in pagination. */
    edges: VersionsEdge[]
    /** Information to aid in pagination. */
    pageInfo: PageInfo
    /** The count of *all* `Version` you could get from the connection. */
    totalCount: Scalars['Int']
    __typename: 'VersionsConnection'
}

export interface Version {
    /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
    nodeId: Scalars['ID']
    id: Scalars['Int']
    minimum: (Scalars['String'] | null)
    latest: (Scalars['String'] | null)
    dateCreated: Scalars['Datetime']
    dateUpdated: Scalars['Datetime']
    __typename: 'Version'
}


/** A `Version` edge in the connection. */
export interface VersionsEdge {
    /** A cursor for use in pagination. */
    cursor: (Scalars['Cursor'] | null)
    /** The `Version` at the end of the edge. */
    node: (Version | null)
    __typename: 'VersionsEdge'
}


/** Methods to use when ordering `Version`. */
export type VersionsOrderBy = 'NATURAL' | 'ID_ASC' | 'ID_DESC' | 'MINIMUM_ASC' | 'MINIMUM_DESC' | 'LATEST_ASC' | 'LATEST_DESC' | 'DATE_CREATED_ASC' | 'DATE_CREATED_DESC' | 'DATE_UPDATED_ASC' | 'DATE_UPDATED_DESC' | 'PRIMARY_KEY_ASC' | 'PRIMARY_KEY_DESC'


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
    /** Reads and enables pagination through a set of `Favorite`. */
    allFavorites?: (FavoritesConnectionGenqlSelection & { __args?: {
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
    /** The method to use when ordering `Favorite`. */
    orderBy?: (FavoritesOrderBy[] | null), 
    /** A condition to be used in determining which values should be returned by the collection. */
    condition?: (FavoriteCondition | null)} })
    /** Reads and enables pagination through a set of `LevelPoint`. */
    allLevelPoints?: (LevelPointsConnectionGenqlSelection & { __args?: {
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
    /** The method to use when ordering `LevelPoint`. */
    orderBy?: (LevelPointsOrderBy[] | null), 
    /** A condition to be used in determining which values should be returned by the collection. */
    condition?: (LevelPointCondition | null)} })
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
    /** Reads and enables pagination through a set of `Media`. */
    allMedia?: (MediaConnectionGenqlSelection & { __args?: {
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
    /** The method to use when ordering `Media`. */
    orderBy?: (MediaOrderBy[] | null), 
    /** A condition to be used in determining which values should be returned by the collection. */
    condition?: (MediaCondition | null)} })
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
    /** Reads and enables pagination through a set of `PersonalBest`. */
    allPersonalBests?: (PersonalBestsConnectionGenqlSelection & { __args?: {
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
    /** The method to use when ordering `PersonalBest`. */
    orderBy?: (PersonalBestsOrderBy[] | null), 
    /** A condition to be used in determining which values should be returned by the collection. */
    condition?: (PersonalBestCondition | null)} })
    /** Reads and enables pagination through a set of `PlayerPoint`. */
    allPlayerPoints?: (PlayerPointsConnectionGenqlSelection & { __args?: {
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
    /** The method to use when ordering `PlayerPoint`. */
    orderBy?: (PlayerPointsOrderBy[] | null), 
    /** A condition to be used in determining which values should be returned by the collection. */
    condition?: (PlayerPointCondition | null)} })
    /** Reads and enables pagination through a set of `Record`. */
    allRecords?: (RecordsConnectionGenqlSelection & { __args?: {
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
    /** The method to use when ordering `Record`. */
    orderBy?: (RecordsOrderBy[] | null), 
    /** A condition to be used in determining which values should be returned by the collection. */
    condition?: (RecordCondition | null)} })
    /** Reads and enables pagination through a set of `Request`. */
    allRequests?: (RequestsConnectionGenqlSelection & { __args?: {
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
    /** The method to use when ordering `Request`. */
    orderBy?: (RequestsOrderBy[] | null), 
    /** A condition to be used in determining which values should be returned by the collection. */
    condition?: (RequestCondition | null)} })
    /** Reads and enables pagination through a set of `Stat`. */
    allStats?: (StatsConnectionGenqlSelection & { __args?: {
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
    /** The method to use when ordering `Stat`. */
    orderBy?: (StatsOrderBy[] | null), 
    /** A condition to be used in determining which values should be returned by the collection. */
    condition?: (StatCondition | null)} })
    /** Reads and enables pagination through a set of `Upvote`. */
    allUpvotes?: (UpvotesConnectionGenqlSelection & { __args?: {
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
    /** The method to use when ordering `Upvote`. */
    orderBy?: (UpvotesOrderBy[] | null), 
    /** A condition to be used in determining which values should be returned by the collection. */
    condition?: (UpvoteCondition | null)} })
    /** Reads and enables pagination through a set of `User`. */
    allUsers?: (UsersConnectionGenqlSelection & { __args?: {
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
    /** The method to use when ordering `User`. */
    orderBy?: (UsersOrderBy[] | null), 
    /** A condition to be used in determining which values should be returned by the collection. */
    condition?: (UserCondition | null)} })
    /** Reads and enables pagination through a set of `Version`. */
    allVersions?: (VersionsConnectionGenqlSelection & { __args?: {
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
    /** The method to use when ordering `Version`. */
    orderBy?: (VersionsOrderBy[] | null), 
    /** A condition to be used in determining which values should be returned by the collection. */
    condition?: (VersionCondition | null)} })
    /** Reads and enables pagination through a set of `Vote`. */
    allVotes?: (VotesConnectionGenqlSelection & { __args?: {
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
    /** The method to use when ordering `Vote`. */
    orderBy?: (VotesOrderBy[] | null), 
    /** A condition to be used in determining which values should be returned by the collection. */
    condition?: (VoteCondition | null)} })
    /** Reads and enables pagination through a set of `WorldRecord`. */
    allWorldRecords?: (WorldRecordsConnectionGenqlSelection & { __args?: {
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
    /** The method to use when ordering `WorldRecord`. */
    orderBy?: (WorldRecordsOrderBy[] | null), 
    /** A condition to be used in determining which values should be returned by the collection. */
    condition?: (WorldRecordCondition | null)} })
    favoriteById?: (FavoriteGenqlSelection & { __args: {id: Scalars['Int']} })
    levelPointById?: (LevelPointGenqlSelection & { __args: {id: Scalars['Int']} })
    levelById?: (LevelGenqlSelection & { __args: {id: Scalars['Int']} })
    mediaById?: (MediaGenqlSelection & { __args: {id: Scalars['Int']} })
    metadatumById?: (MetadatumGenqlSelection & { __args: {id: Scalars['Int']} })
    personalBestById?: (PersonalBestGenqlSelection & { __args: {id: Scalars['Int']} })
    playerPointById?: (PlayerPointGenqlSelection & { __args: {id: Scalars['Int']} })
    recordById?: (RecordGenqlSelection & { __args: {id: Scalars['Int']} })
    requestById?: (RequestGenqlSelection & { __args: {id: Scalars['Int']} })
    statById?: (StatGenqlSelection & { __args: {id: Scalars['Int']} })
    upvoteById?: (UpvoteGenqlSelection & { __args: {id: Scalars['Int']} })
    userById?: (UserGenqlSelection & { __args: {id: Scalars['Int']} })
    versionById?: (VersionGenqlSelection & { __args: {id: Scalars['Int']} })
    voteById?: (VoteGenqlSelection & { __args: {id: Scalars['Int']} })
    worldRecordById?: (WorldRecordGenqlSelection & { __args: {id: Scalars['Int']} })
    /** Reads a single `Favorite` using its globally unique `ID`. */
    favorite?: (FavoriteGenqlSelection & { __args: {
    /** The globally unique `ID` to be used in selecting a single `Favorite`. */
    nodeId: Scalars['ID']} })
    /** Reads a single `LevelPoint` using its globally unique `ID`. */
    levelPoint?: (LevelPointGenqlSelection & { __args: {
    /** The globally unique `ID` to be used in selecting a single `LevelPoint`. */
    nodeId: Scalars['ID']} })
    /** Reads a single `Level` using its globally unique `ID`. */
    level?: (LevelGenqlSelection & { __args: {
    /** The globally unique `ID` to be used in selecting a single `Level`. */
    nodeId: Scalars['ID']} })
    /** Reads a single `Media` using its globally unique `ID`. */
    media?: (MediaGenqlSelection & { __args: {
    /** The globally unique `ID` to be used in selecting a single `Media`. */
    nodeId: Scalars['ID']} })
    /** Reads a single `Metadatum` using its globally unique `ID`. */
    metadatum?: (MetadatumGenqlSelection & { __args: {
    /** The globally unique `ID` to be used in selecting a single `Metadatum`. */
    nodeId: Scalars['ID']} })
    /** Reads a single `PersonalBest` using its globally unique `ID`. */
    personalBest?: (PersonalBestGenqlSelection & { __args: {
    /** The globally unique `ID` to be used in selecting a single `PersonalBest`. */
    nodeId: Scalars['ID']} })
    /** Reads a single `PlayerPoint` using its globally unique `ID`. */
    playerPoint?: (PlayerPointGenqlSelection & { __args: {
    /** The globally unique `ID` to be used in selecting a single `PlayerPoint`. */
    nodeId: Scalars['ID']} })
    /** Reads a single `Record` using its globally unique `ID`. */
    record?: (RecordGenqlSelection & { __args: {
    /** The globally unique `ID` to be used in selecting a single `Record`. */
    nodeId: Scalars['ID']} })
    /** Reads a single `Request` using its globally unique `ID`. */
    request?: (RequestGenqlSelection & { __args: {
    /** The globally unique `ID` to be used in selecting a single `Request`. */
    nodeId: Scalars['ID']} })
    /** Reads a single `Stat` using its globally unique `ID`. */
    stat?: (StatGenqlSelection & { __args: {
    /** The globally unique `ID` to be used in selecting a single `Stat`. */
    nodeId: Scalars['ID']} })
    /** Reads a single `Upvote` using its globally unique `ID`. */
    upvote?: (UpvoteGenqlSelection & { __args: {
    /** The globally unique `ID` to be used in selecting a single `Upvote`. */
    nodeId: Scalars['ID']} })
    /** Reads a single `User` using its globally unique `ID`. */
    user?: (UserGenqlSelection & { __args: {
    /** The globally unique `ID` to be used in selecting a single `User`. */
    nodeId: Scalars['ID']} })
    /** Reads a single `Version` using its globally unique `ID`. */
    version?: (VersionGenqlSelection & { __args: {
    /** The globally unique `ID` to be used in selecting a single `Version`. */
    nodeId: Scalars['ID']} })
    /** Reads a single `Vote` using its globally unique `ID`. */
    vote?: (VoteGenqlSelection & { __args: {
    /** The globally unique `ID` to be used in selecting a single `Vote`. */
    nodeId: Scalars['ID']} })
    /** Reads a single `WorldRecord` using its globally unique `ID`. */
    worldRecord?: (WorldRecordGenqlSelection & { __args: {
    /** The globally unique `ID` to be used in selecting a single `WorldRecord`. */
    nodeId: Scalars['ID']} })
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** An object with a globally unique `ID`. */
export interface NodeGenqlSelection{
    /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
    nodeId?: boolean | number
    on_Query?: QueryGenqlSelection
    on_Favorite?: FavoriteGenqlSelection
    on_User?: UserGenqlSelection
    on_Record?: RecordGenqlSelection
    on_Media?: MediaGenqlSelection
    on_PersonalBest?: PersonalBestGenqlSelection
    on_WorldRecord?: WorldRecordGenqlSelection
    on_Stat?: StatGenqlSelection
    on_Upvote?: UpvoteGenqlSelection
    on_Vote?: VoteGenqlSelection
    on_PlayerPoint?: PlayerPointGenqlSelection
    on_LevelPoint?: LevelPointGenqlSelection
    on_Level?: LevelGenqlSelection
    on_Metadatum?: MetadatumGenqlSelection
    on_Request?: RequestGenqlSelection
    on_Version?: VersionGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** A connection to a list of `Favorite` values. */
export interface FavoritesConnectionGenqlSelection{
    /** A list of `Favorite` objects. */
    nodes?: FavoriteGenqlSelection
    /** A list of edges which contains the `Favorite` and cursor to aid in pagination. */
    edges?: FavoritesEdgeGenqlSelection
    /** Information to aid in pagination. */
    pageInfo?: PageInfoGenqlSelection
    /** The count of *all* `Favorite` you could get from the connection. */
    totalCount?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface FavoriteGenqlSelection{
    /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
    nodeId?: boolean | number
    id?: boolean | number
    user?: boolean | number
    level?: boolean | number
    dateCreated?: boolean | number
    dateUpdated?: boolean | number
    /** Reads a single `User` that is related to this `Favorite`. */
    userByUser?: UserGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface UserGenqlSelection{
    /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
    nodeId?: boolean | number
    id?: boolean | number
    steamId?: boolean | number
    steamName?: boolean | number
    discordId?: boolean | number
    banned?: boolean | number
    dateCreated?: boolean | number
    dateUpdated?: boolean | number
    /** Reads and enables pagination through a set of `Favorite`. */
    favoritesByUser?: (FavoritesConnectionGenqlSelection & { __args?: {
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
    /** The method to use when ordering `Favorite`. */
    orderBy?: (FavoritesOrderBy[] | null), 
    /** A condition to be used in determining which values should be returned by the collection. */
    condition?: (FavoriteCondition | null)} })
    /** Reads and enables pagination through a set of `Record`. */
    recordsByUser?: (RecordsConnectionGenqlSelection & { __args?: {
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
    /** The method to use when ordering `Record`. */
    orderBy?: (RecordsOrderBy[] | null), 
    /** A condition to be used in determining which values should be returned by the collection. */
    condition?: (RecordCondition | null)} })
    /** Reads and enables pagination through a set of `Stat`. */
    statsByUser?: (StatsConnectionGenqlSelection & { __args?: {
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
    /** The method to use when ordering `Stat`. */
    orderBy?: (StatsOrderBy[] | null), 
    /** A condition to be used in determining which values should be returned by the collection. */
    condition?: (StatCondition | null)} })
    /** Reads and enables pagination through a set of `Upvote`. */
    upvotesByUser?: (UpvotesConnectionGenqlSelection & { __args?: {
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
    /** The method to use when ordering `Upvote`. */
    orderBy?: (UpvotesOrderBy[] | null), 
    /** A condition to be used in determining which values should be returned by the collection. */
    condition?: (UpvoteCondition | null)} })
    /** Reads and enables pagination through a set of `Vote`. */
    votesByUser?: (VotesConnectionGenqlSelection & { __args?: {
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
    /** The method to use when ordering `Vote`. */
    orderBy?: (VotesOrderBy[] | null), 
    /** A condition to be used in determining which values should be returned by the collection. */
    condition?: (VoteCondition | null)} })
    /** Reads and enables pagination through a set of `PersonalBest`. */
    personalBestsByUser?: (PersonalBestsConnectionGenqlSelection & { __args?: {
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
    /** The method to use when ordering `PersonalBest`. */
    orderBy?: (PersonalBestsOrderBy[] | null), 
    /** A condition to be used in determining which values should be returned by the collection. */
    condition?: (PersonalBestCondition | null)} })
    /** Reads and enables pagination through a set of `WorldRecord`. */
    worldRecordsByUser?: (WorldRecordsConnectionGenqlSelection & { __args?: {
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
    /** The method to use when ordering `WorldRecord`. */
    orderBy?: (WorldRecordsOrderBy[] | null), 
    /** A condition to be used in determining which values should be returned by the collection. */
    condition?: (WorldRecordCondition | null)} })
    /** Reads and enables pagination through a set of `PlayerPoint`. */
    playerPointsByUser?: (PlayerPointsConnectionGenqlSelection & { __args?: {
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
    /** The method to use when ordering `PlayerPoint`. */
    orderBy?: (PlayerPointsOrderBy[] | null), 
    /** A condition to be used in determining which values should be returned by the collection. */
    condition?: (PlayerPointCondition | null)} })
    __typename?: boolean | number
    __scalar?: boolean | number
}


/**
 * A condition to be used against `Favorite` object types. All fields are tested
 * for equality and combined with a logical ‘and.’
 */
export interface FavoriteCondition {
/** Checks for equality with the object’s `id` field. */
id?: (Scalars['Int'] | null),
/** Checks for equality with the object’s `user` field. */
user?: (Scalars['Int'] | null),
/** Checks for equality with the object’s `level` field. */
level?: (Scalars['String'] | null),
/** Checks for equality with the object’s `dateCreated` field. */
dateCreated?: (Scalars['Datetime'] | null),
/** Checks for equality with the object’s `dateUpdated` field. */
dateUpdated?: (Scalars['Datetime'] | null)}


/** A connection to a list of `Record` values. */
export interface RecordsConnectionGenqlSelection{
    /** A list of `Record` objects. */
    nodes?: RecordGenqlSelection
    /** A list of edges which contains the `Record` and cursor to aid in pagination. */
    edges?: RecordsEdgeGenqlSelection
    /** Information to aid in pagination. */
    pageInfo?: PageInfoGenqlSelection
    /** The count of *all* `Record` you could get from the connection. */
    totalCount?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface RecordGenqlSelection{
    /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
    nodeId?: boolean | number
    id?: boolean | number
    user?: boolean | number
    time?: boolean | number
    splits?: boolean | number
    gameVersion?: boolean | number
    isValid?: boolean | number
    level?: boolean | number
    modVersion?: boolean | number
    dateCreated?: boolean | number
    dateUpdated?: boolean | number
    /** Reads a single `User` that is related to this `Record`. */
    userByUser?: UserGenqlSelection
    /** Reads and enables pagination through a set of `Media`. */
    mediaByRecord?: (MediaConnectionGenqlSelection & { __args?: {
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
    /** The method to use when ordering `Media`. */
    orderBy?: (MediaOrderBy[] | null), 
    /** A condition to be used in determining which values should be returned by the collection. */
    condition?: (MediaCondition | null)} })
    /** Reads and enables pagination through a set of `PersonalBest`. */
    personalBestsByRecord?: (PersonalBestsConnectionGenqlSelection & { __args?: {
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
    /** The method to use when ordering `PersonalBest`. */
    orderBy?: (PersonalBestsOrderBy[] | null), 
    /** A condition to be used in determining which values should be returned by the collection. */
    condition?: (PersonalBestCondition | null)} })
    /** Reads and enables pagination through a set of `WorldRecord`. */
    worldRecordsByRecord?: (WorldRecordsConnectionGenqlSelection & { __args?: {
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
    /** The method to use when ordering `WorldRecord`. */
    orderBy?: (WorldRecordsOrderBy[] | null), 
    /** A condition to be used in determining which values should be returned by the collection. */
    condition?: (WorldRecordCondition | null)} })
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** A connection to a list of `Media` values. */
export interface MediaConnectionGenqlSelection{
    /** A list of `Media` objects. */
    nodes?: MediaGenqlSelection
    /** A list of edges which contains the `Media` and cursor to aid in pagination. */
    edges?: MediaEdgeGenqlSelection
    /** Information to aid in pagination. */
    pageInfo?: PageInfoGenqlSelection
    /** The count of *all* `Media` you could get from the connection. */
    totalCount?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface MediaGenqlSelection{
    /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
    nodeId?: boolean | number
    id?: boolean | number
    record?: boolean | number
    ghostUrl?: boolean | number
    screenshotUrl?: boolean | number
    dateCreated?: boolean | number
    dateUpdated?: boolean | number
    /** Reads a single `Record` that is related to this `Media`. */
    recordByRecord?: RecordGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** A `Media` edge in the connection. */
export interface MediaEdgeGenqlSelection{
    /** A cursor for use in pagination. */
    cursor?: boolean | number
    /** The `Media` at the end of the edge. */
    node?: MediaGenqlSelection
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


/** A condition to be used against `Media` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export interface MediaCondition {
/** Checks for equality with the object’s `id` field. */
id?: (Scalars['Int'] | null),
/** Checks for equality with the object’s `record` field. */
record?: (Scalars['Int'] | null),
/** Checks for equality with the object’s `ghostUrl` field. */
ghostUrl?: (Scalars['String'] | null),
/** Checks for equality with the object’s `screenshotUrl` field. */
screenshotUrl?: (Scalars['String'] | null),
/** Checks for equality with the object’s `dateCreated` field. */
dateCreated?: (Scalars['Datetime'] | null),
/** Checks for equality with the object’s `dateUpdated` field. */
dateUpdated?: (Scalars['Datetime'] | null)}


/** A connection to a list of `PersonalBest` values. */
export interface PersonalBestsConnectionGenqlSelection{
    /** A list of `PersonalBest` objects. */
    nodes?: PersonalBestGenqlSelection
    /** A list of edges which contains the `PersonalBest` and cursor to aid in pagination. */
    edges?: PersonalBestsEdgeGenqlSelection
    /** Information to aid in pagination. */
    pageInfo?: PageInfoGenqlSelection
    /** The count of *all* `PersonalBest` you could get from the connection. */
    totalCount?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface PersonalBestGenqlSelection{
    /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
    nodeId?: boolean | number
    id?: boolean | number
    record?: boolean | number
    user?: boolean | number
    periodStart?: boolean | number
    periodEnd?: boolean | number
    level?: boolean | number
    dateCreated?: boolean | number
    dateUpdated?: boolean | number
    /** Reads a single `Record` that is related to this `PersonalBest`. */
    recordByRecord?: RecordGenqlSelection
    /** Reads a single `User` that is related to this `PersonalBest`. */
    userByUser?: UserGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** A `PersonalBest` edge in the connection. */
export interface PersonalBestsEdgeGenqlSelection{
    /** A cursor for use in pagination. */
    cursor?: boolean | number
    /** The `PersonalBest` at the end of the edge. */
    node?: PersonalBestGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/**
 * A condition to be used against `PersonalBest` object types. All fields are
 * tested for equality and combined with a logical ‘and.’
 */
export interface PersonalBestCondition {
/** Checks for equality with the object’s `id` field. */
id?: (Scalars['Int'] | null),
/** Checks for equality with the object’s `record` field. */
record?: (Scalars['Int'] | null),
/** Checks for equality with the object’s `user` field. */
user?: (Scalars['Int'] | null),
/** Checks for equality with the object’s `periodStart` field. */
periodStart?: (Scalars['Datetime'] | null),
/** Checks for equality with the object’s `periodEnd` field. */
periodEnd?: (Scalars['Datetime'] | null),
/** Checks for equality with the object’s `level` field. */
level?: (Scalars['String'] | null),
/** Checks for equality with the object’s `dateCreated` field. */
dateCreated?: (Scalars['Datetime'] | null),
/** Checks for equality with the object’s `dateUpdated` field. */
dateUpdated?: (Scalars['Datetime'] | null)}


/** A connection to a list of `WorldRecord` values. */
export interface WorldRecordsConnectionGenqlSelection{
    /** A list of `WorldRecord` objects. */
    nodes?: WorldRecordGenqlSelection
    /** A list of edges which contains the `WorldRecord` and cursor to aid in pagination. */
    edges?: WorldRecordsEdgeGenqlSelection
    /** Information to aid in pagination. */
    pageInfo?: PageInfoGenqlSelection
    /** The count of *all* `WorldRecord` you could get from the connection. */
    totalCount?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface WorldRecordGenqlSelection{
    /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
    nodeId?: boolean | number
    id?: boolean | number
    record?: boolean | number
    user?: boolean | number
    periodStart?: boolean | number
    periodEnd?: boolean | number
    level?: boolean | number
    dateCreated?: boolean | number
    dateUpdated?: boolean | number
    /** Reads a single `Record` that is related to this `WorldRecord`. */
    recordByRecord?: RecordGenqlSelection
    /** Reads a single `User` that is related to this `WorldRecord`. */
    userByUser?: UserGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** A `WorldRecord` edge in the connection. */
export interface WorldRecordsEdgeGenqlSelection{
    /** A cursor for use in pagination. */
    cursor?: boolean | number
    /** The `WorldRecord` at the end of the edge. */
    node?: WorldRecordGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/**
 * A condition to be used against `WorldRecord` object types. All fields are tested
 * for equality and combined with a logical ‘and.’
 */
export interface WorldRecordCondition {
/** Checks for equality with the object’s `id` field. */
id?: (Scalars['Int'] | null),
/** Checks for equality with the object’s `record` field. */
record?: (Scalars['Int'] | null),
/** Checks for equality with the object’s `user` field. */
user?: (Scalars['Int'] | null),
/** Checks for equality with the object’s `periodStart` field. */
periodStart?: (Scalars['Datetime'] | null),
/** Checks for equality with the object’s `periodEnd` field. */
periodEnd?: (Scalars['Datetime'] | null),
/** Checks for equality with the object’s `level` field. */
level?: (Scalars['String'] | null),
/** Checks for equality with the object’s `dateCreated` field. */
dateCreated?: (Scalars['Datetime'] | null),
/** Checks for equality with the object’s `dateUpdated` field. */
dateUpdated?: (Scalars['Datetime'] | null)}


/** A `Record` edge in the connection. */
export interface RecordsEdgeGenqlSelection{
    /** A cursor for use in pagination. */
    cursor?: boolean | number
    /** The `Record` at the end of the edge. */
    node?: RecordGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** A condition to be used against `Record` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export interface RecordCondition {
/** Checks for equality with the object’s `id` field. */
id?: (Scalars['Int'] | null),
/** Checks for equality with the object’s `user` field. */
user?: (Scalars['Int'] | null),
/** Checks for equality with the object’s `time` field. */
time?: (Scalars['Float'] | null),
/** Checks for equality with the object’s `splits` field. */
splits?: (Scalars['String'] | null),
/** Checks for equality with the object’s `gameVersion` field. */
gameVersion?: (Scalars['String'] | null),
/** Checks for equality with the object’s `isValid` field. */
isValid?: (Scalars['Boolean'] | null),
/** Checks for equality with the object’s `level` field. */
level?: (Scalars['String'] | null),
/** Checks for equality with the object’s `modVersion` field. */
modVersion?: (Scalars['String'] | null),
/** Checks for equality with the object’s `dateCreated` field. */
dateCreated?: (Scalars['Datetime'] | null),
/** Checks for equality with the object’s `dateUpdated` field. */
dateUpdated?: (Scalars['Datetime'] | null)}


/** A connection to a list of `Stat` values. */
export interface StatsConnectionGenqlSelection{
    /** A list of `Stat` objects. */
    nodes?: StatGenqlSelection
    /** A list of edges which contains the `Stat` and cursor to aid in pagination. */
    edges?: StatsEdgeGenqlSelection
    /** Information to aid in pagination. */
    pageInfo?: PageInfoGenqlSelection
    /** The count of *all* `Stat` you could get from the connection. */
    totalCount?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface StatGenqlSelection{
    /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
    nodeId?: boolean | number
    id?: boolean | number
    crashTotal?: boolean | number
    crashRegular?: boolean | number
    crashEye?: boolean | number
    crashGhost?: boolean | number
    crashSticky?: boolean | number
    distanceArmsUp?: boolean | number
    distanceBraking?: boolean | number
    distanceGrounded?: boolean | number
    distanceInAir?: boolean | number
    distanceOnNoWheels?: boolean | number
    distanceOnOneWheel?: boolean | number
    distanceOnTwoWheels?: boolean | number
    distanceOnThreeWheels?: boolean | number
    distanceOnFourWheels?: boolean | number
    distanceRagdoll?: boolean | number
    distanceWithNoWheels?: boolean | number
    distanceWithOneWheel?: boolean | number
    distanceWithTwoWheels?: boolean | number
    distanceWithThreeWheels?: boolean | number
    distanceWithFourWheels?: boolean | number
    distanceOnRegular?: boolean | number
    distanceOnGrass?: boolean | number
    distanceOnIce?: boolean | number
    timeArmsUp?: boolean | number
    timeBraking?: boolean | number
    timeGrounded?: boolean | number
    timeInAir?: boolean | number
    timeOnNoWheels?: boolean | number
    timeOnOneWheel?: boolean | number
    timeOnTwoWheels?: boolean | number
    timeOnThreeWheels?: boolean | number
    timeOnFourWheels?: boolean | number
    timeRagdoll?: boolean | number
    timeWithNoWheels?: boolean | number
    timeWithOneWheel?: boolean | number
    timeWithTwoWheels?: boolean | number
    timeWithThreeWheels?: boolean | number
    timeWithFourWheels?: boolean | number
    timeOnRegular?: boolean | number
    timeOnGrass?: boolean | number
    timeOnIce?: boolean | number
    timesStarted?: boolean | number
    timesFinished?: boolean | number
    wheelsBroken?: boolean | number
    checkpointsCrossed?: boolean | number
    user?: boolean | number
    month?: boolean | number
    year?: boolean | number
    dateCreated?: boolean | number
    dateUpdated?: boolean | number
    level?: boolean | number
    /** Reads a single `User` that is related to this `Stat`. */
    userByUser?: UserGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** A `Stat` edge in the connection. */
export interface StatsEdgeGenqlSelection{
    /** A cursor for use in pagination. */
    cursor?: boolean | number
    /** The `Stat` at the end of the edge. */
    node?: StatGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** A condition to be used against `Stat` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export interface StatCondition {
/** Checks for equality with the object’s `id` field. */
id?: (Scalars['Int'] | null),
/** Checks for equality with the object’s `crashTotal` field. */
crashTotal?: (Scalars['Int'] | null),
/** Checks for equality with the object’s `crashRegular` field. */
crashRegular?: (Scalars['Int'] | null),
/** Checks for equality with the object’s `crashEye` field. */
crashEye?: (Scalars['Int'] | null),
/** Checks for equality with the object’s `crashGhost` field. */
crashGhost?: (Scalars['Int'] | null),
/** Checks for equality with the object’s `crashSticky` field. */
crashSticky?: (Scalars['Int'] | null),
/** Checks for equality with the object’s `distanceArmsUp` field. */
distanceArmsUp?: (Scalars['Float'] | null),
/** Checks for equality with the object’s `distanceBraking` field. */
distanceBraking?: (Scalars['Float'] | null),
/** Checks for equality with the object’s `distanceGrounded` field. */
distanceGrounded?: (Scalars['Float'] | null),
/** Checks for equality with the object’s `distanceInAir` field. */
distanceInAir?: (Scalars['Float'] | null),
/** Checks for equality with the object’s `distanceOnNoWheels` field. */
distanceOnNoWheels?: (Scalars['Float'] | null),
/** Checks for equality with the object’s `distanceOnOneWheel` field. */
distanceOnOneWheel?: (Scalars['Float'] | null),
/** Checks for equality with the object’s `distanceOnTwoWheels` field. */
distanceOnTwoWheels?: (Scalars['Float'] | null),
/** Checks for equality with the object’s `distanceOnThreeWheels` field. */
distanceOnThreeWheels?: (Scalars['Float'] | null),
/** Checks for equality with the object’s `distanceOnFourWheels` field. */
distanceOnFourWheels?: (Scalars['Float'] | null),
/** Checks for equality with the object’s `distanceRagdoll` field. */
distanceRagdoll?: (Scalars['Float'] | null),
/** Checks for equality with the object’s `distanceWithNoWheels` field. */
distanceWithNoWheels?: (Scalars['Float'] | null),
/** Checks for equality with the object’s `distanceWithOneWheel` field. */
distanceWithOneWheel?: (Scalars['Float'] | null),
/** Checks for equality with the object’s `distanceWithTwoWheels` field. */
distanceWithTwoWheels?: (Scalars['Float'] | null),
/** Checks for equality with the object’s `distanceWithThreeWheels` field. */
distanceWithThreeWheels?: (Scalars['Float'] | null),
/** Checks for equality with the object’s `distanceWithFourWheels` field. */
distanceWithFourWheels?: (Scalars['Float'] | null),
/** Checks for equality with the object’s `distanceOnRegular` field. */
distanceOnRegular?: (Scalars['Float'] | null),
/** Checks for equality with the object’s `distanceOnGrass` field. */
distanceOnGrass?: (Scalars['Float'] | null),
/** Checks for equality with the object’s `distanceOnIce` field. */
distanceOnIce?: (Scalars['Float'] | null),
/** Checks for equality with the object’s `timeArmsUp` field. */
timeArmsUp?: (Scalars['Float'] | null),
/** Checks for equality with the object’s `timeBraking` field. */
timeBraking?: (Scalars['Float'] | null),
/** Checks for equality with the object’s `timeGrounded` field. */
timeGrounded?: (Scalars['Float'] | null),
/** Checks for equality with the object’s `timeInAir` field. */
timeInAir?: (Scalars['Float'] | null),
/** Checks for equality with the object’s `timeOnNoWheels` field. */
timeOnNoWheels?: (Scalars['Float'] | null),
/** Checks for equality with the object’s `timeOnOneWheel` field. */
timeOnOneWheel?: (Scalars['Float'] | null),
/** Checks for equality with the object’s `timeOnTwoWheels` field. */
timeOnTwoWheels?: (Scalars['Float'] | null),
/** Checks for equality with the object’s `timeOnThreeWheels` field. */
timeOnThreeWheels?: (Scalars['Float'] | null),
/** Checks for equality with the object’s `timeOnFourWheels` field. */
timeOnFourWheels?: (Scalars['Float'] | null),
/** Checks for equality with the object’s `timeRagdoll` field. */
timeRagdoll?: (Scalars['Float'] | null),
/** Checks for equality with the object’s `timeWithNoWheels` field. */
timeWithNoWheels?: (Scalars['Float'] | null),
/** Checks for equality with the object’s `timeWithOneWheel` field. */
timeWithOneWheel?: (Scalars['Float'] | null),
/** Checks for equality with the object’s `timeWithTwoWheels` field. */
timeWithTwoWheels?: (Scalars['Float'] | null),
/** Checks for equality with the object’s `timeWithThreeWheels` field. */
timeWithThreeWheels?: (Scalars['Float'] | null),
/** Checks for equality with the object’s `timeWithFourWheels` field. */
timeWithFourWheels?: (Scalars['Float'] | null),
/** Checks for equality with the object’s `timeOnRegular` field. */
timeOnRegular?: (Scalars['Float'] | null),
/** Checks for equality with the object’s `timeOnGrass` field. */
timeOnGrass?: (Scalars['Float'] | null),
/** Checks for equality with the object’s `timeOnIce` field. */
timeOnIce?: (Scalars['Float'] | null),
/** Checks for equality with the object’s `timesStarted` field. */
timesStarted?: (Scalars['Int'] | null),
/** Checks for equality with the object’s `timesFinished` field. */
timesFinished?: (Scalars['Int'] | null),
/** Checks for equality with the object’s `wheelsBroken` field. */
wheelsBroken?: (Scalars['Int'] | null),
/** Checks for equality with the object’s `checkpointsCrossed` field. */
checkpointsCrossed?: (Scalars['Int'] | null),
/** Checks for equality with the object’s `user` field. */
user?: (Scalars['Int'] | null),
/** Checks for equality with the object’s `month` field. */
month?: (Scalars['Int'] | null),
/** Checks for equality with the object’s `year` field. */
year?: (Scalars['Int'] | null),
/** Checks for equality with the object’s `dateCreated` field. */
dateCreated?: (Scalars['Datetime'] | null),
/** Checks for equality with the object’s `dateUpdated` field. */
dateUpdated?: (Scalars['Datetime'] | null),
/** Checks for equality with the object’s `level` field. */
level?: (Scalars['String'] | null)}


/** A connection to a list of `Upvote` values. */
export interface UpvotesConnectionGenqlSelection{
    /** A list of `Upvote` objects. */
    nodes?: UpvoteGenqlSelection
    /** A list of edges which contains the `Upvote` and cursor to aid in pagination. */
    edges?: UpvotesEdgeGenqlSelection
    /** Information to aid in pagination. */
    pageInfo?: PageInfoGenqlSelection
    /** The count of *all* `Upvote` you could get from the connection. */
    totalCount?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface UpvoteGenqlSelection{
    /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
    nodeId?: boolean | number
    id?: boolean | number
    user?: boolean | number
    level?: boolean | number
    dateCreated?: boolean | number
    dateUpdated?: boolean | number
    /** Reads a single `User` that is related to this `Upvote`. */
    userByUser?: UserGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** A `Upvote` edge in the connection. */
export interface UpvotesEdgeGenqlSelection{
    /** A cursor for use in pagination. */
    cursor?: boolean | number
    /** The `Upvote` at the end of the edge. */
    node?: UpvoteGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** A condition to be used against `Upvote` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export interface UpvoteCondition {
/** Checks for equality with the object’s `id` field. */
id?: (Scalars['Int'] | null),
/** Checks for equality with the object’s `user` field. */
user?: (Scalars['Int'] | null),
/** Checks for equality with the object’s `level` field. */
level?: (Scalars['String'] | null),
/** Checks for equality with the object’s `dateCreated` field. */
dateCreated?: (Scalars['Datetime'] | null),
/** Checks for equality with the object’s `dateUpdated` field. */
dateUpdated?: (Scalars['Datetime'] | null)}


/** A connection to a list of `Vote` values. */
export interface VotesConnectionGenqlSelection{
    /** A list of `Vote` objects. */
    nodes?: VoteGenqlSelection
    /** A list of edges which contains the `Vote` and cursor to aid in pagination. */
    edges?: VotesEdgeGenqlSelection
    /** Information to aid in pagination. */
    pageInfo?: PageInfoGenqlSelection
    /** The count of *all* `Vote` you could get from the connection. */
    totalCount?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface VoteGenqlSelection{
    /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
    nodeId?: boolean | number
    id?: boolean | number
    user?: boolean | number
    score?: boolean | number
    level?: boolean | number
    dateCreated?: boolean | number
    dateUpdated?: boolean | number
    /** Reads a single `User` that is related to this `Vote`. */
    userByUser?: UserGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** A `Vote` edge in the connection. */
export interface VotesEdgeGenqlSelection{
    /** A cursor for use in pagination. */
    cursor?: boolean | number
    /** The `Vote` at the end of the edge. */
    node?: VoteGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** A condition to be used against `Vote` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export interface VoteCondition {
/** Checks for equality with the object’s `id` field. */
id?: (Scalars['Int'] | null),
/** Checks for equality with the object’s `user` field. */
user?: (Scalars['Int'] | null),
/** Checks for equality with the object’s `score` field. */
score?: (Scalars['Int'] | null),
/** Checks for equality with the object’s `level` field. */
level?: (Scalars['String'] | null),
/** Checks for equality with the object’s `dateCreated` field. */
dateCreated?: (Scalars['Datetime'] | null),
/** Checks for equality with the object’s `dateUpdated` field. */
dateUpdated?: (Scalars['Datetime'] | null)}


/** A connection to a list of `PlayerPoint` values. */
export interface PlayerPointsConnectionGenqlSelection{
    /** A list of `PlayerPoint` objects. */
    nodes?: PlayerPointGenqlSelection
    /** A list of edges which contains the `PlayerPoint` and cursor to aid in pagination. */
    edges?: PlayerPointsEdgeGenqlSelection
    /** Information to aid in pagination. */
    pageInfo?: PageInfoGenqlSelection
    /** The count of *all* `PlayerPoint` you could get from the connection. */
    totalCount?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface PlayerPointGenqlSelection{
    /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
    nodeId?: boolean | number
    id?: boolean | number
    user?: boolean | number
    points?: boolean | number
    dateCreated?: boolean | number
    dateUpdated?: boolean | number
    rank?: boolean | number
    worldRecords?: boolean | number
    /** Reads a single `User` that is related to this `PlayerPoint`. */
    userByUser?: UserGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** A `PlayerPoint` edge in the connection. */
export interface PlayerPointsEdgeGenqlSelection{
    /** A cursor for use in pagination. */
    cursor?: boolean | number
    /** The `PlayerPoint` at the end of the edge. */
    node?: PlayerPointGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/**
 * A condition to be used against `PlayerPoint` object types. All fields are tested
 * for equality and combined with a logical ‘and.’
 */
export interface PlayerPointCondition {
/** Checks for equality with the object’s `id` field. */
id?: (Scalars['Int'] | null),
/** Checks for equality with the object’s `user` field. */
user?: (Scalars['Int'] | null),
/** Checks for equality with the object’s `points` field. */
points?: (Scalars['Int'] | null),
/** Checks for equality with the object’s `dateCreated` field. */
dateCreated?: (Scalars['Datetime'] | null),
/** Checks for equality with the object’s `dateUpdated` field. */
dateUpdated?: (Scalars['Datetime'] | null),
/** Checks for equality with the object’s `rank` field. */
rank?: (Scalars['Int'] | null),
/** Checks for equality with the object’s `worldRecords` field. */
worldRecords?: (Scalars['Int'] | null)}


/** A `Favorite` edge in the connection. */
export interface FavoritesEdgeGenqlSelection{
    /** A cursor for use in pagination. */
    cursor?: boolean | number
    /** The `Favorite` at the end of the edge. */
    node?: FavoriteGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** A connection to a list of `LevelPoint` values. */
export interface LevelPointsConnectionGenqlSelection{
    /** A list of `LevelPoint` objects. */
    nodes?: LevelPointGenqlSelection
    /** A list of edges which contains the `LevelPoint` and cursor to aid in pagination. */
    edges?: LevelPointsEdgeGenqlSelection
    /** Information to aid in pagination. */
    pageInfo?: PageInfoGenqlSelection
    /** The count of *all* `LevelPoint` you could get from the connection. */
    totalCount?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface LevelPointGenqlSelection{
    /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
    nodeId?: boolean | number
    id?: boolean | number
    level?: boolean | number
    points?: boolean | number
    dateCreated?: boolean | number
    dateUpdated?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** A `LevelPoint` edge in the connection. */
export interface LevelPointsEdgeGenqlSelection{
    /** A cursor for use in pagination. */
    cursor?: boolean | number
    /** The `LevelPoint` at the end of the edge. */
    node?: LevelPointGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/**
 * A condition to be used against `LevelPoint` object types. All fields are tested
 * for equality and combined with a logical ‘and.’
 */
export interface LevelPointCondition {
/** Checks for equality with the object’s `id` field. */
id?: (Scalars['Int'] | null),
/** Checks for equality with the object’s `level` field. */
level?: (Scalars['String'] | null),
/** Checks for equality with the object’s `points` field. */
points?: (Scalars['Int'] | null),
/** Checks for equality with the object’s `dateCreated` field. */
dateCreated?: (Scalars['Datetime'] | null),
/** Checks for equality with the object’s `dateUpdated` field. */
dateUpdated?: (Scalars['Datetime'] | null)}


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


/** A connection to a list of `Request` values. */
export interface RequestsConnectionGenqlSelection{
    /** A list of `Request` objects. */
    nodes?: RequestGenqlSelection
    /** A list of edges which contains the `Request` and cursor to aid in pagination. */
    edges?: RequestsEdgeGenqlSelection
    /** Information to aid in pagination. */
    pageInfo?: PageInfoGenqlSelection
    /** The count of *all* `Request` you could get from the connection. */
    totalCount?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface RequestGenqlSelection{
    /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
    nodeId?: boolean | number
    id?: boolean | number
    workshopId?: boolean | number
    uid?: boolean | number
    hash?: boolean | number
    dateCreated?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** A `Request` edge in the connection. */
export interface RequestsEdgeGenqlSelection{
    /** A cursor for use in pagination. */
    cursor?: boolean | number
    /** The `Request` at the end of the edge. */
    node?: RequestGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** A condition to be used against `Request` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export interface RequestCondition {
/** Checks for equality with the object’s `id` field. */
id?: (Scalars['Int'] | null),
/** Checks for equality with the object’s `workshopId` field. */
workshopId?: (Scalars['BigFloat'] | null),
/** Checks for equality with the object’s `uid` field. */
uid?: (Scalars['String'] | null),
/** Checks for equality with the object’s `hash` field. */
hash?: (Scalars['String'] | null),
/** Checks for equality with the object’s `dateCreated` field. */
dateCreated?: (Scalars['Datetime'] | null)}


/** A connection to a list of `User` values. */
export interface UsersConnectionGenqlSelection{
    /** A list of `User` objects. */
    nodes?: UserGenqlSelection
    /** A list of edges which contains the `User` and cursor to aid in pagination. */
    edges?: UsersEdgeGenqlSelection
    /** Information to aid in pagination. */
    pageInfo?: PageInfoGenqlSelection
    /** The count of *all* `User` you could get from the connection. */
    totalCount?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** A `User` edge in the connection. */
export interface UsersEdgeGenqlSelection{
    /** A cursor for use in pagination. */
    cursor?: boolean | number
    /** The `User` at the end of the edge. */
    node?: UserGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** A condition to be used against `User` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export interface UserCondition {
/** Checks for equality with the object’s `id` field. */
id?: (Scalars['Int'] | null),
/** Checks for equality with the object’s `steamId` field. */
steamId?: (Scalars['String'] | null),
/** Checks for equality with the object’s `steamName` field. */
steamName?: (Scalars['String'] | null),
/** Checks for equality with the object’s `discordId` field. */
discordId?: (Scalars['String'] | null),
/** Checks for equality with the object’s `banned` field. */
banned?: (Scalars['Boolean'] | null),
/** Checks for equality with the object’s `dateCreated` field. */
dateCreated?: (Scalars['Datetime'] | null),
/** Checks for equality with the object’s `dateUpdated` field. */
dateUpdated?: (Scalars['Datetime'] | null)}


/** A connection to a list of `Version` values. */
export interface VersionsConnectionGenqlSelection{
    /** A list of `Version` objects. */
    nodes?: VersionGenqlSelection
    /** A list of edges which contains the `Version` and cursor to aid in pagination. */
    edges?: VersionsEdgeGenqlSelection
    /** Information to aid in pagination. */
    pageInfo?: PageInfoGenqlSelection
    /** The count of *all* `Version` you could get from the connection. */
    totalCount?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface VersionGenqlSelection{
    /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
    nodeId?: boolean | number
    id?: boolean | number
    minimum?: boolean | number
    latest?: boolean | number
    dateCreated?: boolean | number
    dateUpdated?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** A `Version` edge in the connection. */
export interface VersionsEdgeGenqlSelection{
    /** A cursor for use in pagination. */
    cursor?: boolean | number
    /** The `Version` at the end of the edge. */
    node?: VersionGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** A condition to be used against `Version` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export interface VersionCondition {
/** Checks for equality with the object’s `id` field. */
id?: (Scalars['Int'] | null),
/** Checks for equality with the object’s `minimum` field. */
minimum?: (Scalars['String'] | null),
/** Checks for equality with the object’s `latest` field. */
latest?: (Scalars['String'] | null),
/** Checks for equality with the object’s `dateCreated` field. */
dateCreated?: (Scalars['Datetime'] | null),
/** Checks for equality with the object’s `dateUpdated` field. */
dateUpdated?: (Scalars['Datetime'] | null)}


    const Query_possibleTypes: string[] = ['Query']
    export const isQuery = (obj?: { __typename?: any } | null): obj is Query => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isQuery"')
      return Query_possibleTypes.includes(obj.__typename)
    }
    


    const Node_possibleTypes: string[] = ['Query','Favorite','User','Record','Media','PersonalBest','WorldRecord','Stat','Upvote','Vote','PlayerPoint','LevelPoint','Level','Metadatum','Request','Version']
    export const isNode = (obj?: { __typename?: any } | null): obj is Node => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isNode"')
      return Node_possibleTypes.includes(obj.__typename)
    }
    


    const FavoritesConnection_possibleTypes: string[] = ['FavoritesConnection']
    export const isFavoritesConnection = (obj?: { __typename?: any } | null): obj is FavoritesConnection => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isFavoritesConnection"')
      return FavoritesConnection_possibleTypes.includes(obj.__typename)
    }
    


    const Favorite_possibleTypes: string[] = ['Favorite']
    export const isFavorite = (obj?: { __typename?: any } | null): obj is Favorite => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isFavorite"')
      return Favorite_possibleTypes.includes(obj.__typename)
    }
    


    const User_possibleTypes: string[] = ['User']
    export const isUser = (obj?: { __typename?: any } | null): obj is User => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isUser"')
      return User_possibleTypes.includes(obj.__typename)
    }
    


    const RecordsConnection_possibleTypes: string[] = ['RecordsConnection']
    export const isRecordsConnection = (obj?: { __typename?: any } | null): obj is RecordsConnection => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isRecordsConnection"')
      return RecordsConnection_possibleTypes.includes(obj.__typename)
    }
    


    const Record_possibleTypes: string[] = ['Record']
    export const isRecord = (obj?: { __typename?: any } | null): obj is Record => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isRecord"')
      return Record_possibleTypes.includes(obj.__typename)
    }
    


    const MediaConnection_possibleTypes: string[] = ['MediaConnection']
    export const isMediaConnection = (obj?: { __typename?: any } | null): obj is MediaConnection => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isMediaConnection"')
      return MediaConnection_possibleTypes.includes(obj.__typename)
    }
    


    const Media_possibleTypes: string[] = ['Media']
    export const isMedia = (obj?: { __typename?: any } | null): obj is Media => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isMedia"')
      return Media_possibleTypes.includes(obj.__typename)
    }
    


    const MediaEdge_possibleTypes: string[] = ['MediaEdge']
    export const isMediaEdge = (obj?: { __typename?: any } | null): obj is MediaEdge => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isMediaEdge"')
      return MediaEdge_possibleTypes.includes(obj.__typename)
    }
    


    const PageInfo_possibleTypes: string[] = ['PageInfo']
    export const isPageInfo = (obj?: { __typename?: any } | null): obj is PageInfo => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isPageInfo"')
      return PageInfo_possibleTypes.includes(obj.__typename)
    }
    


    const PersonalBestsConnection_possibleTypes: string[] = ['PersonalBestsConnection']
    export const isPersonalBestsConnection = (obj?: { __typename?: any } | null): obj is PersonalBestsConnection => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isPersonalBestsConnection"')
      return PersonalBestsConnection_possibleTypes.includes(obj.__typename)
    }
    


    const PersonalBest_possibleTypes: string[] = ['PersonalBest']
    export const isPersonalBest = (obj?: { __typename?: any } | null): obj is PersonalBest => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isPersonalBest"')
      return PersonalBest_possibleTypes.includes(obj.__typename)
    }
    


    const PersonalBestsEdge_possibleTypes: string[] = ['PersonalBestsEdge']
    export const isPersonalBestsEdge = (obj?: { __typename?: any } | null): obj is PersonalBestsEdge => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isPersonalBestsEdge"')
      return PersonalBestsEdge_possibleTypes.includes(obj.__typename)
    }
    


    const WorldRecordsConnection_possibleTypes: string[] = ['WorldRecordsConnection']
    export const isWorldRecordsConnection = (obj?: { __typename?: any } | null): obj is WorldRecordsConnection => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isWorldRecordsConnection"')
      return WorldRecordsConnection_possibleTypes.includes(obj.__typename)
    }
    


    const WorldRecord_possibleTypes: string[] = ['WorldRecord']
    export const isWorldRecord = (obj?: { __typename?: any } | null): obj is WorldRecord => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isWorldRecord"')
      return WorldRecord_possibleTypes.includes(obj.__typename)
    }
    


    const WorldRecordsEdge_possibleTypes: string[] = ['WorldRecordsEdge']
    export const isWorldRecordsEdge = (obj?: { __typename?: any } | null): obj is WorldRecordsEdge => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isWorldRecordsEdge"')
      return WorldRecordsEdge_possibleTypes.includes(obj.__typename)
    }
    


    const RecordsEdge_possibleTypes: string[] = ['RecordsEdge']
    export const isRecordsEdge = (obj?: { __typename?: any } | null): obj is RecordsEdge => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isRecordsEdge"')
      return RecordsEdge_possibleTypes.includes(obj.__typename)
    }
    


    const StatsConnection_possibleTypes: string[] = ['StatsConnection']
    export const isStatsConnection = (obj?: { __typename?: any } | null): obj is StatsConnection => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isStatsConnection"')
      return StatsConnection_possibleTypes.includes(obj.__typename)
    }
    


    const Stat_possibleTypes: string[] = ['Stat']
    export const isStat = (obj?: { __typename?: any } | null): obj is Stat => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isStat"')
      return Stat_possibleTypes.includes(obj.__typename)
    }
    


    const StatsEdge_possibleTypes: string[] = ['StatsEdge']
    export const isStatsEdge = (obj?: { __typename?: any } | null): obj is StatsEdge => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isStatsEdge"')
      return StatsEdge_possibleTypes.includes(obj.__typename)
    }
    


    const UpvotesConnection_possibleTypes: string[] = ['UpvotesConnection']
    export const isUpvotesConnection = (obj?: { __typename?: any } | null): obj is UpvotesConnection => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isUpvotesConnection"')
      return UpvotesConnection_possibleTypes.includes(obj.__typename)
    }
    


    const Upvote_possibleTypes: string[] = ['Upvote']
    export const isUpvote = (obj?: { __typename?: any } | null): obj is Upvote => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isUpvote"')
      return Upvote_possibleTypes.includes(obj.__typename)
    }
    


    const UpvotesEdge_possibleTypes: string[] = ['UpvotesEdge']
    export const isUpvotesEdge = (obj?: { __typename?: any } | null): obj is UpvotesEdge => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isUpvotesEdge"')
      return UpvotesEdge_possibleTypes.includes(obj.__typename)
    }
    


    const VotesConnection_possibleTypes: string[] = ['VotesConnection']
    export const isVotesConnection = (obj?: { __typename?: any } | null): obj is VotesConnection => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isVotesConnection"')
      return VotesConnection_possibleTypes.includes(obj.__typename)
    }
    


    const Vote_possibleTypes: string[] = ['Vote']
    export const isVote = (obj?: { __typename?: any } | null): obj is Vote => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isVote"')
      return Vote_possibleTypes.includes(obj.__typename)
    }
    


    const VotesEdge_possibleTypes: string[] = ['VotesEdge']
    export const isVotesEdge = (obj?: { __typename?: any } | null): obj is VotesEdge => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isVotesEdge"')
      return VotesEdge_possibleTypes.includes(obj.__typename)
    }
    


    const PlayerPointsConnection_possibleTypes: string[] = ['PlayerPointsConnection']
    export const isPlayerPointsConnection = (obj?: { __typename?: any } | null): obj is PlayerPointsConnection => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isPlayerPointsConnection"')
      return PlayerPointsConnection_possibleTypes.includes(obj.__typename)
    }
    


    const PlayerPoint_possibleTypes: string[] = ['PlayerPoint']
    export const isPlayerPoint = (obj?: { __typename?: any } | null): obj is PlayerPoint => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isPlayerPoint"')
      return PlayerPoint_possibleTypes.includes(obj.__typename)
    }
    


    const PlayerPointsEdge_possibleTypes: string[] = ['PlayerPointsEdge']
    export const isPlayerPointsEdge = (obj?: { __typename?: any } | null): obj is PlayerPointsEdge => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isPlayerPointsEdge"')
      return PlayerPointsEdge_possibleTypes.includes(obj.__typename)
    }
    


    const FavoritesEdge_possibleTypes: string[] = ['FavoritesEdge']
    export const isFavoritesEdge = (obj?: { __typename?: any } | null): obj is FavoritesEdge => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isFavoritesEdge"')
      return FavoritesEdge_possibleTypes.includes(obj.__typename)
    }
    


    const LevelPointsConnection_possibleTypes: string[] = ['LevelPointsConnection']
    export const isLevelPointsConnection = (obj?: { __typename?: any } | null): obj is LevelPointsConnection => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isLevelPointsConnection"')
      return LevelPointsConnection_possibleTypes.includes(obj.__typename)
    }
    


    const LevelPoint_possibleTypes: string[] = ['LevelPoint']
    export const isLevelPoint = (obj?: { __typename?: any } | null): obj is LevelPoint => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isLevelPoint"')
      return LevelPoint_possibleTypes.includes(obj.__typename)
    }
    


    const LevelPointsEdge_possibleTypes: string[] = ['LevelPointsEdge']
    export const isLevelPointsEdge = (obj?: { __typename?: any } | null): obj is LevelPointsEdge => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isLevelPointsEdge"')
      return LevelPointsEdge_possibleTypes.includes(obj.__typename)
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
    


    const RequestsConnection_possibleTypes: string[] = ['RequestsConnection']
    export const isRequestsConnection = (obj?: { __typename?: any } | null): obj is RequestsConnection => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isRequestsConnection"')
      return RequestsConnection_possibleTypes.includes(obj.__typename)
    }
    


    const Request_possibleTypes: string[] = ['Request']
    export const isRequest = (obj?: { __typename?: any } | null): obj is Request => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isRequest"')
      return Request_possibleTypes.includes(obj.__typename)
    }
    


    const RequestsEdge_possibleTypes: string[] = ['RequestsEdge']
    export const isRequestsEdge = (obj?: { __typename?: any } | null): obj is RequestsEdge => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isRequestsEdge"')
      return RequestsEdge_possibleTypes.includes(obj.__typename)
    }
    


    const UsersConnection_possibleTypes: string[] = ['UsersConnection']
    export const isUsersConnection = (obj?: { __typename?: any } | null): obj is UsersConnection => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isUsersConnection"')
      return UsersConnection_possibleTypes.includes(obj.__typename)
    }
    


    const UsersEdge_possibleTypes: string[] = ['UsersEdge']
    export const isUsersEdge = (obj?: { __typename?: any } | null): obj is UsersEdge => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isUsersEdge"')
      return UsersEdge_possibleTypes.includes(obj.__typename)
    }
    


    const VersionsConnection_possibleTypes: string[] = ['VersionsConnection']
    export const isVersionsConnection = (obj?: { __typename?: any } | null): obj is VersionsConnection => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isVersionsConnection"')
      return VersionsConnection_possibleTypes.includes(obj.__typename)
    }
    


    const Version_possibleTypes: string[] = ['Version']
    export const isVersion = (obj?: { __typename?: any } | null): obj is Version => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isVersion"')
      return Version_possibleTypes.includes(obj.__typename)
    }
    


    const VersionsEdge_possibleTypes: string[] = ['VersionsEdge']
    export const isVersionsEdge = (obj?: { __typename?: any } | null): obj is VersionsEdge => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isVersionsEdge"')
      return VersionsEdge_possibleTypes.includes(obj.__typename)
    }
    

export const enumFavoritesOrderBy = {
   NATURAL: 'NATURAL' as const,
   ID_ASC: 'ID_ASC' as const,
   ID_DESC: 'ID_DESC' as const,
   USER_ASC: 'USER_ASC' as const,
   USER_DESC: 'USER_DESC' as const,
   LEVEL_ASC: 'LEVEL_ASC' as const,
   LEVEL_DESC: 'LEVEL_DESC' as const,
   DATE_CREATED_ASC: 'DATE_CREATED_ASC' as const,
   DATE_CREATED_DESC: 'DATE_CREATED_DESC' as const,
   DATE_UPDATED_ASC: 'DATE_UPDATED_ASC' as const,
   DATE_UPDATED_DESC: 'DATE_UPDATED_DESC' as const,
   PRIMARY_KEY_ASC: 'PRIMARY_KEY_ASC' as const,
   PRIMARY_KEY_DESC: 'PRIMARY_KEY_DESC' as const
}

export const enumMediaOrderBy = {
   NATURAL: 'NATURAL' as const,
   ID_ASC: 'ID_ASC' as const,
   ID_DESC: 'ID_DESC' as const,
   RECORD_ASC: 'RECORD_ASC' as const,
   RECORD_DESC: 'RECORD_DESC' as const,
   GHOST_URL_ASC: 'GHOST_URL_ASC' as const,
   GHOST_URL_DESC: 'GHOST_URL_DESC' as const,
   SCREENSHOT_URL_ASC: 'SCREENSHOT_URL_ASC' as const,
   SCREENSHOT_URL_DESC: 'SCREENSHOT_URL_DESC' as const,
   DATE_CREATED_ASC: 'DATE_CREATED_ASC' as const,
   DATE_CREATED_DESC: 'DATE_CREATED_DESC' as const,
   DATE_UPDATED_ASC: 'DATE_UPDATED_ASC' as const,
   DATE_UPDATED_DESC: 'DATE_UPDATED_DESC' as const,
   PRIMARY_KEY_ASC: 'PRIMARY_KEY_ASC' as const,
   PRIMARY_KEY_DESC: 'PRIMARY_KEY_DESC' as const
}

export const enumPersonalBestsOrderBy = {
   NATURAL: 'NATURAL' as const,
   ID_ASC: 'ID_ASC' as const,
   ID_DESC: 'ID_DESC' as const,
   RECORD_ASC: 'RECORD_ASC' as const,
   RECORD_DESC: 'RECORD_DESC' as const,
   USER_ASC: 'USER_ASC' as const,
   USER_DESC: 'USER_DESC' as const,
   PERIOD_START_ASC: 'PERIOD_START_ASC' as const,
   PERIOD_START_DESC: 'PERIOD_START_DESC' as const,
   PERIOD_END_ASC: 'PERIOD_END_ASC' as const,
   PERIOD_END_DESC: 'PERIOD_END_DESC' as const,
   LEVEL_ASC: 'LEVEL_ASC' as const,
   LEVEL_DESC: 'LEVEL_DESC' as const,
   DATE_CREATED_ASC: 'DATE_CREATED_ASC' as const,
   DATE_CREATED_DESC: 'DATE_CREATED_DESC' as const,
   DATE_UPDATED_ASC: 'DATE_UPDATED_ASC' as const,
   DATE_UPDATED_DESC: 'DATE_UPDATED_DESC' as const,
   PRIMARY_KEY_ASC: 'PRIMARY_KEY_ASC' as const,
   PRIMARY_KEY_DESC: 'PRIMARY_KEY_DESC' as const
}

export const enumWorldRecordsOrderBy = {
   NATURAL: 'NATURAL' as const,
   ID_ASC: 'ID_ASC' as const,
   ID_DESC: 'ID_DESC' as const,
   RECORD_ASC: 'RECORD_ASC' as const,
   RECORD_DESC: 'RECORD_DESC' as const,
   USER_ASC: 'USER_ASC' as const,
   USER_DESC: 'USER_DESC' as const,
   PERIOD_START_ASC: 'PERIOD_START_ASC' as const,
   PERIOD_START_DESC: 'PERIOD_START_DESC' as const,
   PERIOD_END_ASC: 'PERIOD_END_ASC' as const,
   PERIOD_END_DESC: 'PERIOD_END_DESC' as const,
   LEVEL_ASC: 'LEVEL_ASC' as const,
   LEVEL_DESC: 'LEVEL_DESC' as const,
   DATE_CREATED_ASC: 'DATE_CREATED_ASC' as const,
   DATE_CREATED_DESC: 'DATE_CREATED_DESC' as const,
   DATE_UPDATED_ASC: 'DATE_UPDATED_ASC' as const,
   DATE_UPDATED_DESC: 'DATE_UPDATED_DESC' as const,
   PRIMARY_KEY_ASC: 'PRIMARY_KEY_ASC' as const,
   PRIMARY_KEY_DESC: 'PRIMARY_KEY_DESC' as const
}

export const enumRecordsOrderBy = {
   NATURAL: 'NATURAL' as const,
   ID_ASC: 'ID_ASC' as const,
   ID_DESC: 'ID_DESC' as const,
   USER_ASC: 'USER_ASC' as const,
   USER_DESC: 'USER_DESC' as const,
   TIME_ASC: 'TIME_ASC' as const,
   TIME_DESC: 'TIME_DESC' as const,
   SPLITS_ASC: 'SPLITS_ASC' as const,
   SPLITS_DESC: 'SPLITS_DESC' as const,
   GAME_VERSION_ASC: 'GAME_VERSION_ASC' as const,
   GAME_VERSION_DESC: 'GAME_VERSION_DESC' as const,
   IS_VALID_ASC: 'IS_VALID_ASC' as const,
   IS_VALID_DESC: 'IS_VALID_DESC' as const,
   LEVEL_ASC: 'LEVEL_ASC' as const,
   LEVEL_DESC: 'LEVEL_DESC' as const,
   MOD_VERSION_ASC: 'MOD_VERSION_ASC' as const,
   MOD_VERSION_DESC: 'MOD_VERSION_DESC' as const,
   DATE_CREATED_ASC: 'DATE_CREATED_ASC' as const,
   DATE_CREATED_DESC: 'DATE_CREATED_DESC' as const,
   DATE_UPDATED_ASC: 'DATE_UPDATED_ASC' as const,
   DATE_UPDATED_DESC: 'DATE_UPDATED_DESC' as const,
   PRIMARY_KEY_ASC: 'PRIMARY_KEY_ASC' as const,
   PRIMARY_KEY_DESC: 'PRIMARY_KEY_DESC' as const
}

export const enumStatsOrderBy = {
   NATURAL: 'NATURAL' as const,
   ID_ASC: 'ID_ASC' as const,
   ID_DESC: 'ID_DESC' as const,
   CRASH_TOTAL_ASC: 'CRASH_TOTAL_ASC' as const,
   CRASH_TOTAL_DESC: 'CRASH_TOTAL_DESC' as const,
   CRASH_REGULAR_ASC: 'CRASH_REGULAR_ASC' as const,
   CRASH_REGULAR_DESC: 'CRASH_REGULAR_DESC' as const,
   CRASH_EYE_ASC: 'CRASH_EYE_ASC' as const,
   CRASH_EYE_DESC: 'CRASH_EYE_DESC' as const,
   CRASH_GHOST_ASC: 'CRASH_GHOST_ASC' as const,
   CRASH_GHOST_DESC: 'CRASH_GHOST_DESC' as const,
   CRASH_STICKY_ASC: 'CRASH_STICKY_ASC' as const,
   CRASH_STICKY_DESC: 'CRASH_STICKY_DESC' as const,
   DISTANCE_ARMS_UP_ASC: 'DISTANCE_ARMS_UP_ASC' as const,
   DISTANCE_ARMS_UP_DESC: 'DISTANCE_ARMS_UP_DESC' as const,
   DISTANCE_BRAKING_ASC: 'DISTANCE_BRAKING_ASC' as const,
   DISTANCE_BRAKING_DESC: 'DISTANCE_BRAKING_DESC' as const,
   DISTANCE_GROUNDED_ASC: 'DISTANCE_GROUNDED_ASC' as const,
   DISTANCE_GROUNDED_DESC: 'DISTANCE_GROUNDED_DESC' as const,
   DISTANCE_IN_AIR_ASC: 'DISTANCE_IN_AIR_ASC' as const,
   DISTANCE_IN_AIR_DESC: 'DISTANCE_IN_AIR_DESC' as const,
   DISTANCE_ON_NO_WHEELS_ASC: 'DISTANCE_ON_NO_WHEELS_ASC' as const,
   DISTANCE_ON_NO_WHEELS_DESC: 'DISTANCE_ON_NO_WHEELS_DESC' as const,
   DISTANCE_ON_ONE_WHEEL_ASC: 'DISTANCE_ON_ONE_WHEEL_ASC' as const,
   DISTANCE_ON_ONE_WHEEL_DESC: 'DISTANCE_ON_ONE_WHEEL_DESC' as const,
   DISTANCE_ON_TWO_WHEELS_ASC: 'DISTANCE_ON_TWO_WHEELS_ASC' as const,
   DISTANCE_ON_TWO_WHEELS_DESC: 'DISTANCE_ON_TWO_WHEELS_DESC' as const,
   DISTANCE_ON_THREE_WHEELS_ASC: 'DISTANCE_ON_THREE_WHEELS_ASC' as const,
   DISTANCE_ON_THREE_WHEELS_DESC: 'DISTANCE_ON_THREE_WHEELS_DESC' as const,
   DISTANCE_ON_FOUR_WHEELS_ASC: 'DISTANCE_ON_FOUR_WHEELS_ASC' as const,
   DISTANCE_ON_FOUR_WHEELS_DESC: 'DISTANCE_ON_FOUR_WHEELS_DESC' as const,
   DISTANCE_RAGDOLL_ASC: 'DISTANCE_RAGDOLL_ASC' as const,
   DISTANCE_RAGDOLL_DESC: 'DISTANCE_RAGDOLL_DESC' as const,
   DISTANCE_WITH_NO_WHEELS_ASC: 'DISTANCE_WITH_NO_WHEELS_ASC' as const,
   DISTANCE_WITH_NO_WHEELS_DESC: 'DISTANCE_WITH_NO_WHEELS_DESC' as const,
   DISTANCE_WITH_ONE_WHEEL_ASC: 'DISTANCE_WITH_ONE_WHEEL_ASC' as const,
   DISTANCE_WITH_ONE_WHEEL_DESC: 'DISTANCE_WITH_ONE_WHEEL_DESC' as const,
   DISTANCE_WITH_TWO_WHEELS_ASC: 'DISTANCE_WITH_TWO_WHEELS_ASC' as const,
   DISTANCE_WITH_TWO_WHEELS_DESC: 'DISTANCE_WITH_TWO_WHEELS_DESC' as const,
   DISTANCE_WITH_THREE_WHEELS_ASC: 'DISTANCE_WITH_THREE_WHEELS_ASC' as const,
   DISTANCE_WITH_THREE_WHEELS_DESC: 'DISTANCE_WITH_THREE_WHEELS_DESC' as const,
   DISTANCE_WITH_FOUR_WHEELS_ASC: 'DISTANCE_WITH_FOUR_WHEELS_ASC' as const,
   DISTANCE_WITH_FOUR_WHEELS_DESC: 'DISTANCE_WITH_FOUR_WHEELS_DESC' as const,
   DISTANCE_ON_REGULAR_ASC: 'DISTANCE_ON_REGULAR_ASC' as const,
   DISTANCE_ON_REGULAR_DESC: 'DISTANCE_ON_REGULAR_DESC' as const,
   DISTANCE_ON_GRASS_ASC: 'DISTANCE_ON_GRASS_ASC' as const,
   DISTANCE_ON_GRASS_DESC: 'DISTANCE_ON_GRASS_DESC' as const,
   DISTANCE_ON_ICE_ASC: 'DISTANCE_ON_ICE_ASC' as const,
   DISTANCE_ON_ICE_DESC: 'DISTANCE_ON_ICE_DESC' as const,
   TIME_ARMS_UP_ASC: 'TIME_ARMS_UP_ASC' as const,
   TIME_ARMS_UP_DESC: 'TIME_ARMS_UP_DESC' as const,
   TIME_BRAKING_ASC: 'TIME_BRAKING_ASC' as const,
   TIME_BRAKING_DESC: 'TIME_BRAKING_DESC' as const,
   TIME_GROUNDED_ASC: 'TIME_GROUNDED_ASC' as const,
   TIME_GROUNDED_DESC: 'TIME_GROUNDED_DESC' as const,
   TIME_IN_AIR_ASC: 'TIME_IN_AIR_ASC' as const,
   TIME_IN_AIR_DESC: 'TIME_IN_AIR_DESC' as const,
   TIME_ON_NO_WHEELS_ASC: 'TIME_ON_NO_WHEELS_ASC' as const,
   TIME_ON_NO_WHEELS_DESC: 'TIME_ON_NO_WHEELS_DESC' as const,
   TIME_ON_ONE_WHEEL_ASC: 'TIME_ON_ONE_WHEEL_ASC' as const,
   TIME_ON_ONE_WHEEL_DESC: 'TIME_ON_ONE_WHEEL_DESC' as const,
   TIME_ON_TWO_WHEELS_ASC: 'TIME_ON_TWO_WHEELS_ASC' as const,
   TIME_ON_TWO_WHEELS_DESC: 'TIME_ON_TWO_WHEELS_DESC' as const,
   TIME_ON_THREE_WHEELS_ASC: 'TIME_ON_THREE_WHEELS_ASC' as const,
   TIME_ON_THREE_WHEELS_DESC: 'TIME_ON_THREE_WHEELS_DESC' as const,
   TIME_ON_FOUR_WHEELS_ASC: 'TIME_ON_FOUR_WHEELS_ASC' as const,
   TIME_ON_FOUR_WHEELS_DESC: 'TIME_ON_FOUR_WHEELS_DESC' as const,
   TIME_RAGDOLL_ASC: 'TIME_RAGDOLL_ASC' as const,
   TIME_RAGDOLL_DESC: 'TIME_RAGDOLL_DESC' as const,
   TIME_WITH_NO_WHEELS_ASC: 'TIME_WITH_NO_WHEELS_ASC' as const,
   TIME_WITH_NO_WHEELS_DESC: 'TIME_WITH_NO_WHEELS_DESC' as const,
   TIME_WITH_ONE_WHEEL_ASC: 'TIME_WITH_ONE_WHEEL_ASC' as const,
   TIME_WITH_ONE_WHEEL_DESC: 'TIME_WITH_ONE_WHEEL_DESC' as const,
   TIME_WITH_TWO_WHEELS_ASC: 'TIME_WITH_TWO_WHEELS_ASC' as const,
   TIME_WITH_TWO_WHEELS_DESC: 'TIME_WITH_TWO_WHEELS_DESC' as const,
   TIME_WITH_THREE_WHEELS_ASC: 'TIME_WITH_THREE_WHEELS_ASC' as const,
   TIME_WITH_THREE_WHEELS_DESC: 'TIME_WITH_THREE_WHEELS_DESC' as const,
   TIME_WITH_FOUR_WHEELS_ASC: 'TIME_WITH_FOUR_WHEELS_ASC' as const,
   TIME_WITH_FOUR_WHEELS_DESC: 'TIME_WITH_FOUR_WHEELS_DESC' as const,
   TIME_ON_REGULAR_ASC: 'TIME_ON_REGULAR_ASC' as const,
   TIME_ON_REGULAR_DESC: 'TIME_ON_REGULAR_DESC' as const,
   TIME_ON_GRASS_ASC: 'TIME_ON_GRASS_ASC' as const,
   TIME_ON_GRASS_DESC: 'TIME_ON_GRASS_DESC' as const,
   TIME_ON_ICE_ASC: 'TIME_ON_ICE_ASC' as const,
   TIME_ON_ICE_DESC: 'TIME_ON_ICE_DESC' as const,
   TIMES_STARTED_ASC: 'TIMES_STARTED_ASC' as const,
   TIMES_STARTED_DESC: 'TIMES_STARTED_DESC' as const,
   TIMES_FINISHED_ASC: 'TIMES_FINISHED_ASC' as const,
   TIMES_FINISHED_DESC: 'TIMES_FINISHED_DESC' as const,
   WHEELS_BROKEN_ASC: 'WHEELS_BROKEN_ASC' as const,
   WHEELS_BROKEN_DESC: 'WHEELS_BROKEN_DESC' as const,
   CHECKPOINTS_CROSSED_ASC: 'CHECKPOINTS_CROSSED_ASC' as const,
   CHECKPOINTS_CROSSED_DESC: 'CHECKPOINTS_CROSSED_DESC' as const,
   USER_ASC: 'USER_ASC' as const,
   USER_DESC: 'USER_DESC' as const,
   MONTH_ASC: 'MONTH_ASC' as const,
   MONTH_DESC: 'MONTH_DESC' as const,
   YEAR_ASC: 'YEAR_ASC' as const,
   YEAR_DESC: 'YEAR_DESC' as const,
   DATE_CREATED_ASC: 'DATE_CREATED_ASC' as const,
   DATE_CREATED_DESC: 'DATE_CREATED_DESC' as const,
   DATE_UPDATED_ASC: 'DATE_UPDATED_ASC' as const,
   DATE_UPDATED_DESC: 'DATE_UPDATED_DESC' as const,
   LEVEL_ASC: 'LEVEL_ASC' as const,
   LEVEL_DESC: 'LEVEL_DESC' as const,
   PRIMARY_KEY_ASC: 'PRIMARY_KEY_ASC' as const,
   PRIMARY_KEY_DESC: 'PRIMARY_KEY_DESC' as const
}

export const enumUpvotesOrderBy = {
   NATURAL: 'NATURAL' as const,
   ID_ASC: 'ID_ASC' as const,
   ID_DESC: 'ID_DESC' as const,
   USER_ASC: 'USER_ASC' as const,
   USER_DESC: 'USER_DESC' as const,
   LEVEL_ASC: 'LEVEL_ASC' as const,
   LEVEL_DESC: 'LEVEL_DESC' as const,
   DATE_CREATED_ASC: 'DATE_CREATED_ASC' as const,
   DATE_CREATED_DESC: 'DATE_CREATED_DESC' as const,
   DATE_UPDATED_ASC: 'DATE_UPDATED_ASC' as const,
   DATE_UPDATED_DESC: 'DATE_UPDATED_DESC' as const,
   PRIMARY_KEY_ASC: 'PRIMARY_KEY_ASC' as const,
   PRIMARY_KEY_DESC: 'PRIMARY_KEY_DESC' as const
}

export const enumVotesOrderBy = {
   NATURAL: 'NATURAL' as const,
   ID_ASC: 'ID_ASC' as const,
   ID_DESC: 'ID_DESC' as const,
   USER_ASC: 'USER_ASC' as const,
   USER_DESC: 'USER_DESC' as const,
   SCORE_ASC: 'SCORE_ASC' as const,
   SCORE_DESC: 'SCORE_DESC' as const,
   LEVEL_ASC: 'LEVEL_ASC' as const,
   LEVEL_DESC: 'LEVEL_DESC' as const,
   DATE_CREATED_ASC: 'DATE_CREATED_ASC' as const,
   DATE_CREATED_DESC: 'DATE_CREATED_DESC' as const,
   DATE_UPDATED_ASC: 'DATE_UPDATED_ASC' as const,
   DATE_UPDATED_DESC: 'DATE_UPDATED_DESC' as const,
   PRIMARY_KEY_ASC: 'PRIMARY_KEY_ASC' as const,
   PRIMARY_KEY_DESC: 'PRIMARY_KEY_DESC' as const
}

export const enumPlayerPointsOrderBy = {
   NATURAL: 'NATURAL' as const,
   ID_ASC: 'ID_ASC' as const,
   ID_DESC: 'ID_DESC' as const,
   USER_ASC: 'USER_ASC' as const,
   USER_DESC: 'USER_DESC' as const,
   POINTS_ASC: 'POINTS_ASC' as const,
   POINTS_DESC: 'POINTS_DESC' as const,
   DATE_CREATED_ASC: 'DATE_CREATED_ASC' as const,
   DATE_CREATED_DESC: 'DATE_CREATED_DESC' as const,
   DATE_UPDATED_ASC: 'DATE_UPDATED_ASC' as const,
   DATE_UPDATED_DESC: 'DATE_UPDATED_DESC' as const,
   RANK_ASC: 'RANK_ASC' as const,
   RANK_DESC: 'RANK_DESC' as const,
   WORLD_RECORDS_ASC: 'WORLD_RECORDS_ASC' as const,
   WORLD_RECORDS_DESC: 'WORLD_RECORDS_DESC' as const,
   PRIMARY_KEY_ASC: 'PRIMARY_KEY_ASC' as const,
   PRIMARY_KEY_DESC: 'PRIMARY_KEY_DESC' as const
}

export const enumLevelPointsOrderBy = {
   NATURAL: 'NATURAL' as const,
   ID_ASC: 'ID_ASC' as const,
   ID_DESC: 'ID_DESC' as const,
   LEVEL_ASC: 'LEVEL_ASC' as const,
   LEVEL_DESC: 'LEVEL_DESC' as const,
   POINTS_ASC: 'POINTS_ASC' as const,
   POINTS_DESC: 'POINTS_DESC' as const,
   DATE_CREATED_ASC: 'DATE_CREATED_ASC' as const,
   DATE_CREATED_DESC: 'DATE_CREATED_DESC' as const,
   DATE_UPDATED_ASC: 'DATE_UPDATED_ASC' as const,
   DATE_UPDATED_DESC: 'DATE_UPDATED_DESC' as const,
   PRIMARY_KEY_ASC: 'PRIMARY_KEY_ASC' as const,
   PRIMARY_KEY_DESC: 'PRIMARY_KEY_DESC' as const
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

export const enumRequestsOrderBy = {
   NATURAL: 'NATURAL' as const,
   ID_ASC: 'ID_ASC' as const,
   ID_DESC: 'ID_DESC' as const,
   WORKSHOP_ID_ASC: 'WORKSHOP_ID_ASC' as const,
   WORKSHOP_ID_DESC: 'WORKSHOP_ID_DESC' as const,
   UID_ASC: 'UID_ASC' as const,
   UID_DESC: 'UID_DESC' as const,
   HASH_ASC: 'HASH_ASC' as const,
   HASH_DESC: 'HASH_DESC' as const,
   DATE_CREATED_ASC: 'DATE_CREATED_ASC' as const,
   DATE_CREATED_DESC: 'DATE_CREATED_DESC' as const,
   PRIMARY_KEY_ASC: 'PRIMARY_KEY_ASC' as const,
   PRIMARY_KEY_DESC: 'PRIMARY_KEY_DESC' as const
}

export const enumUsersOrderBy = {
   NATURAL: 'NATURAL' as const,
   ID_ASC: 'ID_ASC' as const,
   ID_DESC: 'ID_DESC' as const,
   STEAM_ID_ASC: 'STEAM_ID_ASC' as const,
   STEAM_ID_DESC: 'STEAM_ID_DESC' as const,
   STEAM_NAME_ASC: 'STEAM_NAME_ASC' as const,
   STEAM_NAME_DESC: 'STEAM_NAME_DESC' as const,
   DISCORD_ID_ASC: 'DISCORD_ID_ASC' as const,
   DISCORD_ID_DESC: 'DISCORD_ID_DESC' as const,
   BANNED_ASC: 'BANNED_ASC' as const,
   BANNED_DESC: 'BANNED_DESC' as const,
   DATE_CREATED_ASC: 'DATE_CREATED_ASC' as const,
   DATE_CREATED_DESC: 'DATE_CREATED_DESC' as const,
   DATE_UPDATED_ASC: 'DATE_UPDATED_ASC' as const,
   DATE_UPDATED_DESC: 'DATE_UPDATED_DESC' as const,
   PRIMARY_KEY_ASC: 'PRIMARY_KEY_ASC' as const,
   PRIMARY_KEY_DESC: 'PRIMARY_KEY_DESC' as const
}

export const enumVersionsOrderBy = {
   NATURAL: 'NATURAL' as const,
   ID_ASC: 'ID_ASC' as const,
   ID_DESC: 'ID_DESC' as const,
   MINIMUM_ASC: 'MINIMUM_ASC' as const,
   MINIMUM_DESC: 'MINIMUM_DESC' as const,
   LATEST_ASC: 'LATEST_ASC' as const,
   LATEST_DESC: 'LATEST_DESC' as const,
   DATE_CREATED_ASC: 'DATE_CREATED_ASC' as const,
   DATE_CREATED_DESC: 'DATE_CREATED_DESC' as const,
   DATE_UPDATED_ASC: 'DATE_UPDATED_ASC' as const,
   DATE_UPDATED_DESC: 'DATE_UPDATED_DESC' as const,
   PRIMARY_KEY_ASC: 'PRIMARY_KEY_ASC' as const,
   PRIMARY_KEY_DESC: 'PRIMARY_KEY_DESC' as const
}
