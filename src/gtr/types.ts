export default {
    scalars: [
        2, 5, 6, 7, 9, 10, 11, 15, 20, 25, 30, 33, 38, 43, 48, 53, 59, 63, 68
    ],
    types: {
        Query: {
            query: [0],
            nodeId: [2],
            node: [
                1,
                {
                    nodeId: [2, 'ID!']
                }
            ],
            allFavorites: [
                3,
                {
                    first: [5],
                    last: [5],
                    offset: [5],
                    before: [10],
                    after: [10],
                    orderBy: [11, '[FavoritesOrderBy!]'],
                    condition: [12]
                }
            ],
            allLevelPoints: [
                56,
                {
                    first: [5],
                    last: [5],
                    offset: [5],
                    before: [10],
                    after: [10],
                    orderBy: [59, '[LevelPointsOrderBy!]'],
                    condition: [60]
                }
            ],
            allMedia: [
                16,
                {
                    first: [5],
                    last: [5],
                    offset: [5],
                    before: [10],
                    after: [10],
                    orderBy: [20, '[MediaOrderBy!]'],
                    condition: [21]
                }
            ],
            allPersonalBests: [
                22,
                {
                    first: [5],
                    last: [5],
                    offset: [5],
                    before: [10],
                    after: [10],
                    orderBy: [25, '[PersonalBestsOrderBy!]'],
                    condition: [26]
                }
            ],
            allPlayerPoints: [
                50,
                {
                    first: [5],
                    last: [5],
                    offset: [5],
                    before: [10],
                    after: [10],
                    orderBy: [53, '[PlayerPointsOrderBy!]'],
                    condition: [54]
                }
            ],
            allRecords: [
                13,
                {
                    first: [5],
                    last: [5],
                    offset: [5],
                    before: [10],
                    after: [10],
                    orderBy: [33, '[RecordsOrderBy!]'],
                    condition: [34]
                }
            ],
            allStats: [
                35,
                {
                    first: [5],
                    last: [5],
                    offset: [5],
                    before: [10],
                    after: [10],
                    orderBy: [38, '[StatsOrderBy!]'],
                    condition: [39]
                }
            ],
            allUpvotes: [
                40,
                {
                    first: [5],
                    last: [5],
                    offset: [5],
                    before: [10],
                    after: [10],
                    orderBy: [43, '[UpvotesOrderBy!]'],
                    condition: [44]
                }
            ],
            allUsers: [
                61,
                {
                    first: [5],
                    last: [5],
                    offset: [5],
                    before: [10],
                    after: [10],
                    orderBy: [63, '[UsersOrderBy!]'],
                    condition: [64]
                }
            ],
            allVersions: [
                65,
                {
                    first: [5],
                    last: [5],
                    offset: [5],
                    before: [10],
                    after: [10],
                    orderBy: [68, '[VersionsOrderBy!]'],
                    condition: [69]
                }
            ],
            allVotes: [
                45,
                {
                    first: [5],
                    last: [5],
                    offset: [5],
                    before: [10],
                    after: [10],
                    orderBy: [48, '[VotesOrderBy!]'],
                    condition: [49]
                }
            ],
            allWorldRecords: [
                27,
                {
                    first: [5],
                    last: [5],
                    offset: [5],
                    before: [10],
                    after: [10],
                    orderBy: [30, '[WorldRecordsOrderBy!]'],
                    condition: [31]
                }
            ],
            favoriteById: [
                4,
                {
                    id: [5, 'Int!']
                }
            ],
            levelPointById: [
                57,
                {
                    id: [5, 'Int!']
                }
            ],
            mediaById: [
                17,
                {
                    id: [5, 'Int!']
                }
            ],
            personalBestById: [
                23,
                {
                    id: [5, 'Int!']
                }
            ],
            playerPointById: [
                51,
                {
                    id: [5, 'Int!']
                }
            ],
            recordById: [
                14,
                {
                    id: [5, 'Int!']
                }
            ],
            statById: [
                36,
                {
                    id: [5, 'Int!']
                }
            ],
            upvoteById: [
                41,
                {
                    id: [5, 'Int!']
                }
            ],
            userById: [
                8,
                {
                    id: [5, 'Int!']
                }
            ],
            versionById: [
                66,
                {
                    id: [5, 'Int!']
                }
            ],
            voteById: [
                46,
                {
                    id: [5, 'Int!']
                }
            ],
            worldRecordById: [
                28,
                {
                    id: [5, 'Int!']
                }
            ],
            favorite: [
                4,
                {
                    nodeId: [2, 'ID!']
                }
            ],
            levelPoint: [
                57,
                {
                    nodeId: [2, 'ID!']
                }
            ],
            media: [
                17,
                {
                    nodeId: [2, 'ID!']
                }
            ],
            personalBest: [
                23,
                {
                    nodeId: [2, 'ID!']
                }
            ],
            playerPoint: [
                51,
                {
                    nodeId: [2, 'ID!']
                }
            ],
            record: [
                14,
                {
                    nodeId: [2, 'ID!']
                }
            ],
            stat: [
                36,
                {
                    nodeId: [2, 'ID!']
                }
            ],
            upvote: [
                41,
                {
                    nodeId: [2, 'ID!']
                }
            ],
            user: [
                8,
                {
                    nodeId: [2, 'ID!']
                }
            ],
            version: [
                66,
                {
                    nodeId: [2, 'ID!']
                }
            ],
            vote: [
                46,
                {
                    nodeId: [2, 'ID!']
                }
            ],
            worldRecord: [
                28,
                {
                    nodeId: [2, 'ID!']
                }
            ],
            __typename: [6]
        },
        Node: {
            nodeId: [2],
            on_Query: [0],
            on_Favorite: [4],
            on_User: [8],
            on_Record: [14],
            on_Media: [17],
            on_PersonalBest: [23],
            on_WorldRecord: [28],
            on_Stat: [36],
            on_Upvote: [41],
            on_Vote: [46],
            on_PlayerPoint: [51],
            on_LevelPoint: [57],
            on_Version: [66],
            __typename: [6]
        },
        ID: {},
        FavoritesConnection: {
            nodes: [4],
            edges: [55],
            pageInfo: [19],
            totalCount: [5],
            __typename: [6]
        },
        Favorite: {
            nodeId: [2],
            id: [5],
            user: [5],
            level: [6],
            dateCreated: [7],
            dateUpdated: [7],
            userByUser: [8],
            __typename: [6]
        },
        Int: {},
        String: {},
        Datetime: {},
        User: {
            nodeId: [2],
            id: [5],
            steamId: [6],
            steamName: [6],
            discordId: [6],
            banned: [9],
            dateCreated: [7],
            dateUpdated: [7],
            favoritesByUser: [
                3,
                {
                    first: [5],
                    last: [5],
                    offset: [5],
                    before: [10],
                    after: [10],
                    orderBy: [11, '[FavoritesOrderBy!]'],
                    condition: [12]
                }
            ],
            recordsByUser: [
                13,
                {
                    first: [5],
                    last: [5],
                    offset: [5],
                    before: [10],
                    after: [10],
                    orderBy: [33, '[RecordsOrderBy!]'],
                    condition: [34]
                }
            ],
            statsByUser: [
                35,
                {
                    first: [5],
                    last: [5],
                    offset: [5],
                    before: [10],
                    after: [10],
                    orderBy: [38, '[StatsOrderBy!]'],
                    condition: [39]
                }
            ],
            upvotesByUser: [
                40,
                {
                    first: [5],
                    last: [5],
                    offset: [5],
                    before: [10],
                    after: [10],
                    orderBy: [43, '[UpvotesOrderBy!]'],
                    condition: [44]
                }
            ],
            votesByUser: [
                45,
                {
                    first: [5],
                    last: [5],
                    offset: [5],
                    before: [10],
                    after: [10],
                    orderBy: [48, '[VotesOrderBy!]'],
                    condition: [49]
                }
            ],
            personalBestsByUser: [
                22,
                {
                    first: [5],
                    last: [5],
                    offset: [5],
                    before: [10],
                    after: [10],
                    orderBy: [25, '[PersonalBestsOrderBy!]'],
                    condition: [26]
                }
            ],
            worldRecordsByUser: [
                27,
                {
                    first: [5],
                    last: [5],
                    offset: [5],
                    before: [10],
                    after: [10],
                    orderBy: [30, '[WorldRecordsOrderBy!]'],
                    condition: [31]
                }
            ],
            playerPointsByUser: [
                50,
                {
                    first: [5],
                    last: [5],
                    offset: [5],
                    before: [10],
                    after: [10],
                    orderBy: [53, '[PlayerPointsOrderBy!]'],
                    condition: [54]
                }
            ],
            __typename: [6]
        },
        Boolean: {},
        Cursor: {},
        FavoritesOrderBy: {},
        FavoriteCondition: {
            id: [5],
            user: [5],
            level: [6],
            dateCreated: [7],
            dateUpdated: [7],
            __typename: [6]
        },
        RecordsConnection: {
            nodes: [14],
            edges: [32],
            pageInfo: [19],
            totalCount: [5],
            __typename: [6]
        },
        Record: {
            nodeId: [2],
            id: [5],
            user: [5],
            time: [15],
            splits: [6],
            gameVersion: [6],
            isValid: [9],
            level: [6],
            modVersion: [6],
            dateCreated: [7],
            dateUpdated: [7],
            userByUser: [8],
            mediaByRecord: [
                16,
                {
                    first: [5],
                    last: [5],
                    offset: [5],
                    before: [10],
                    after: [10],
                    orderBy: [20, '[MediaOrderBy!]'],
                    condition: [21]
                }
            ],
            personalBestsByRecord: [
                22,
                {
                    first: [5],
                    last: [5],
                    offset: [5],
                    before: [10],
                    after: [10],
                    orderBy: [25, '[PersonalBestsOrderBy!]'],
                    condition: [26]
                }
            ],
            worldRecordsByRecord: [
                27,
                {
                    first: [5],
                    last: [5],
                    offset: [5],
                    before: [10],
                    after: [10],
                    orderBy: [30, '[WorldRecordsOrderBy!]'],
                    condition: [31]
                }
            ],
            __typename: [6]
        },
        Float: {},
        MediaConnection: {
            nodes: [17],
            edges: [18],
            pageInfo: [19],
            totalCount: [5],
            __typename: [6]
        },
        Media: {
            nodeId: [2],
            id: [5],
            record: [5],
            ghostUrl: [6],
            screenshotUrl: [6],
            dateCreated: [7],
            dateUpdated: [7],
            recordByRecord: [14],
            __typename: [6]
        },
        MediaEdge: {
            cursor: [10],
            node: [17],
            __typename: [6]
        },
        PageInfo: {
            hasNextPage: [9],
            hasPreviousPage: [9],
            startCursor: [10],
            endCursor: [10],
            __typename: [6]
        },
        MediaOrderBy: {},
        MediaCondition: {
            id: [5],
            record: [5],
            ghostUrl: [6],
            screenshotUrl: [6],
            dateCreated: [7],
            dateUpdated: [7],
            __typename: [6]
        },
        PersonalBestsConnection: {
            nodes: [23],
            edges: [24],
            pageInfo: [19],
            totalCount: [5],
            __typename: [6]
        },
        PersonalBest: {
            nodeId: [2],
            id: [5],
            record: [5],
            user: [5],
            periodStart: [7],
            periodEnd: [7],
            level: [6],
            dateCreated: [7],
            dateUpdated: [7],
            recordByRecord: [14],
            userByUser: [8],
            __typename: [6]
        },
        PersonalBestsEdge: {
            cursor: [10],
            node: [23],
            __typename: [6]
        },
        PersonalBestsOrderBy: {},
        PersonalBestCondition: {
            id: [5],
            record: [5],
            user: [5],
            periodStart: [7],
            periodEnd: [7],
            level: [6],
            dateCreated: [7],
            dateUpdated: [7],
            __typename: [6]
        },
        WorldRecordsConnection: {
            nodes: [28],
            edges: [29],
            pageInfo: [19],
            totalCount: [5],
            __typename: [6]
        },
        WorldRecord: {
            nodeId: [2],
            id: [5],
            record: [5],
            user: [5],
            periodStart: [7],
            periodEnd: [7],
            level: [6],
            dateCreated: [7],
            dateUpdated: [7],
            recordByRecord: [14],
            userByUser: [8],
            __typename: [6]
        },
        WorldRecordsEdge: {
            cursor: [10],
            node: [28],
            __typename: [6]
        },
        WorldRecordsOrderBy: {},
        WorldRecordCondition: {
            id: [5],
            record: [5],
            user: [5],
            periodStart: [7],
            periodEnd: [7],
            level: [6],
            dateCreated: [7],
            dateUpdated: [7],
            __typename: [6]
        },
        RecordsEdge: {
            cursor: [10],
            node: [14],
            __typename: [6]
        },
        RecordsOrderBy: {},
        RecordCondition: {
            id: [5],
            user: [5],
            time: [15],
            splits: [6],
            gameVersion: [6],
            isValid: [9],
            level: [6],
            modVersion: [6],
            dateCreated: [7],
            dateUpdated: [7],
            __typename: [6]
        },
        StatsConnection: {
            nodes: [36],
            edges: [37],
            pageInfo: [19],
            totalCount: [5],
            __typename: [6]
        },
        Stat: {
            nodeId: [2],
            id: [5],
            crashTotal: [5],
            crashRegular: [5],
            crashEye: [5],
            crashGhost: [5],
            crashSticky: [5],
            distanceArmsUp: [15],
            distanceBraking: [15],
            distanceGrounded: [15],
            distanceInAir: [15],
            distanceOnNoWheels: [15],
            distanceOnOneWheel: [15],
            distanceOnTwoWheels: [15],
            distanceOnThreeWheels: [15],
            distanceOnFourWheels: [15],
            distanceRagdoll: [15],
            distanceWithNoWheels: [15],
            distanceWithOneWheel: [15],
            distanceWithTwoWheels: [15],
            distanceWithThreeWheels: [15],
            distanceWithFourWheels: [15],
            distanceOnRegular: [15],
            distanceOnGrass: [15],
            distanceOnIce: [15],
            timeArmsUp: [15],
            timeBraking: [15],
            timeGrounded: [15],
            timeInAir: [15],
            timeOnNoWheels: [15],
            timeOnOneWheel: [15],
            timeOnTwoWheels: [15],
            timeOnThreeWheels: [15],
            timeOnFourWheels: [15],
            timeRagdoll: [15],
            timeWithNoWheels: [15],
            timeWithOneWheel: [15],
            timeWithTwoWheels: [15],
            timeWithThreeWheels: [15],
            timeWithFourWheels: [15],
            timeOnRegular: [15],
            timeOnGrass: [15],
            timeOnIce: [15],
            timesStarted: [5],
            timesFinished: [5],
            wheelsBroken: [5],
            checkpointsCrossed: [5],
            user: [5],
            month: [5],
            year: [5],
            dateCreated: [7],
            dateUpdated: [7],
            userByUser: [8],
            __typename: [6]
        },
        StatsEdge: {
            cursor: [10],
            node: [36],
            __typename: [6]
        },
        StatsOrderBy: {},
        StatCondition: {
            id: [5],
            crashTotal: [5],
            crashRegular: [5],
            crashEye: [5],
            crashGhost: [5],
            crashSticky: [5],
            distanceArmsUp: [15],
            distanceBraking: [15],
            distanceGrounded: [15],
            distanceInAir: [15],
            distanceOnNoWheels: [15],
            distanceOnOneWheel: [15],
            distanceOnTwoWheels: [15],
            distanceOnThreeWheels: [15],
            distanceOnFourWheels: [15],
            distanceRagdoll: [15],
            distanceWithNoWheels: [15],
            distanceWithOneWheel: [15],
            distanceWithTwoWheels: [15],
            distanceWithThreeWheels: [15],
            distanceWithFourWheels: [15],
            distanceOnRegular: [15],
            distanceOnGrass: [15],
            distanceOnIce: [15],
            timeArmsUp: [15],
            timeBraking: [15],
            timeGrounded: [15],
            timeInAir: [15],
            timeOnNoWheels: [15],
            timeOnOneWheel: [15],
            timeOnTwoWheels: [15],
            timeOnThreeWheels: [15],
            timeOnFourWheels: [15],
            timeRagdoll: [15],
            timeWithNoWheels: [15],
            timeWithOneWheel: [15],
            timeWithTwoWheels: [15],
            timeWithThreeWheels: [15],
            timeWithFourWheels: [15],
            timeOnRegular: [15],
            timeOnGrass: [15],
            timeOnIce: [15],
            timesStarted: [5],
            timesFinished: [5],
            wheelsBroken: [5],
            checkpointsCrossed: [5],
            user: [5],
            month: [5],
            year: [5],
            dateCreated: [7],
            dateUpdated: [7],
            __typename: [6]
        },
        UpvotesConnection: {
            nodes: [41],
            edges: [42],
            pageInfo: [19],
            totalCount: [5],
            __typename: [6]
        },
        Upvote: {
            nodeId: [2],
            id: [5],
            user: [5],
            level: [6],
            dateCreated: [7],
            dateUpdated: [7],
            userByUser: [8],
            __typename: [6]
        },
        UpvotesEdge: {
            cursor: [10],
            node: [41],
            __typename: [6]
        },
        UpvotesOrderBy: {},
        UpvoteCondition: {
            id: [5],
            user: [5],
            level: [6],
            dateCreated: [7],
            dateUpdated: [7],
            __typename: [6]
        },
        VotesConnection: {
            nodes: [46],
            edges: [47],
            pageInfo: [19],
            totalCount: [5],
            __typename: [6]
        },
        Vote: {
            nodeId: [2],
            id: [5],
            user: [5],
            score: [5],
            level: [6],
            dateCreated: [7],
            dateUpdated: [7],
            userByUser: [8],
            __typename: [6]
        },
        VotesEdge: {
            cursor: [10],
            node: [46],
            __typename: [6]
        },
        VotesOrderBy: {},
        VoteCondition: {
            id: [5],
            user: [5],
            score: [5],
            level: [6],
            dateCreated: [7],
            dateUpdated: [7],
            __typename: [6]
        },
        PlayerPointsConnection: {
            nodes: [51],
            edges: [52],
            pageInfo: [19],
            totalCount: [5],
            __typename: [6]
        },
        PlayerPoint: {
            nodeId: [2],
            id: [5],
            user: [5],
            points: [5],
            dateCreated: [7],
            dateUpdated: [7],
            rank: [5],
            userByUser: [8],
            __typename: [6]
        },
        PlayerPointsEdge: {
            cursor: [10],
            node: [51],
            __typename: [6]
        },
        PlayerPointsOrderBy: {},
        PlayerPointCondition: {
            id: [5],
            user: [5],
            points: [5],
            dateCreated: [7],
            dateUpdated: [7],
            rank: [5],
            __typename: [6]
        },
        FavoritesEdge: {
            cursor: [10],
            node: [4],
            __typename: [6]
        },
        LevelPointsConnection: {
            nodes: [57],
            edges: [58],
            pageInfo: [19],
            totalCount: [5],
            __typename: [6]
        },
        LevelPoint: {
            nodeId: [2],
            id: [5],
            level: [6],
            points: [5],
            dateCreated: [7],
            dateUpdated: [7],
            __typename: [6]
        },
        LevelPointsEdge: {
            cursor: [10],
            node: [57],
            __typename: [6]
        },
        LevelPointsOrderBy: {},
        LevelPointCondition: {
            id: [5],
            level: [6],
            points: [5],
            dateCreated: [7],
            dateUpdated: [7],
            __typename: [6]
        },
        UsersConnection: {
            nodes: [8],
            edges: [62],
            pageInfo: [19],
            totalCount: [5],
            __typename: [6]
        },
        UsersEdge: {
            cursor: [10],
            node: [8],
            __typename: [6]
        },
        UsersOrderBy: {},
        UserCondition: {
            id: [5],
            steamId: [6],
            steamName: [6],
            discordId: [6],
            banned: [9],
            dateCreated: [7],
            dateUpdated: [7],
            __typename: [6]
        },
        VersionsConnection: {
            nodes: [66],
            edges: [67],
            pageInfo: [19],
            totalCount: [5],
            __typename: [6]
        },
        Version: {
            nodeId: [2],
            id: [5],
            minimum: [6],
            latest: [6],
            dateCreated: [7],
            dateUpdated: [7],
            __typename: [6]
        },
        VersionsEdge: {
            cursor: [10],
            node: [66],
            __typename: [6]
        },
        VersionsOrderBy: {},
        VersionCondition: {
            id: [5],
            minimum: [6],
            latest: [6],
            dateCreated: [7],
            dateUpdated: [7],
            __typename: [6]
        }
    }
}
