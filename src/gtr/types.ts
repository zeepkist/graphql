export default {
    scalars: [
        2, 5, 6, 8, 9, 10, 14, 16, 23, 28, 33, 36, 41, 43, 48, 53, 58, 63
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
                    before: [14],
                    after: [14],
                    orderBy: [43, '[FavoritesOrderBy!]'],
                    condition: [44]
                }
            ],
            allLevels: [
                12,
                {
                    first: [5],
                    last: [5],
                    offset: [5],
                    before: [14],
                    after: [14],
                    orderBy: [16, '[LevelsOrderBy!]'],
                    condition: [17]
                }
            ],
            allMedia: [
                30,
                {
                    first: [5],
                    last: [5],
                    offset: [5],
                    before: [14],
                    after: [14],
                    orderBy: [33, '[MediaOrderBy!]'],
                    condition: [34]
                }
            ],
            allPersonalBests: [
                20,
                {
                    first: [5],
                    last: [5],
                    offset: [5],
                    before: [14],
                    after: [14],
                    orderBy: [23, '[PersonalBestsOrderBy!]'],
                    condition: [24]
                }
            ],
            allRecords: [
                18,
                {
                    first: [5],
                    last: [5],
                    offset: [5],
                    before: [14],
                    after: [14],
                    orderBy: [36, '[RecordsOrderBy!]'],
                    condition: [37]
                }
            ],
            allStats: [
                50,
                {
                    first: [5],
                    last: [5],
                    offset: [5],
                    before: [14],
                    after: [14],
                    orderBy: [53, '[StatsOrderBy!]'],
                    condition: [54]
                }
            ],
            allUpvotes: [
                45,
                {
                    first: [5],
                    last: [5],
                    offset: [5],
                    before: [14],
                    after: [14],
                    orderBy: [48, '[UpvotesOrderBy!]'],
                    condition: [49]
                }
            ],
            allUsers: [
                56,
                {
                    first: [5],
                    last: [5],
                    offset: [5],
                    before: [14],
                    after: [14],
                    orderBy: [58, '[UsersOrderBy!]'],
                    condition: [59]
                }
            ],
            allVersions: [
                60,
                {
                    first: [5],
                    last: [5],
                    offset: [5],
                    before: [14],
                    after: [14],
                    orderBy: [63, '[VersionsOrderBy!]'],
                    condition: [64]
                }
            ],
            allVotes: [
                38,
                {
                    first: [5],
                    last: [5],
                    offset: [5],
                    before: [14],
                    after: [14],
                    orderBy: [41, '[VotesOrderBy!]'],
                    condition: [42]
                }
            ],
            allWorldRecords: [
                25,
                {
                    first: [5],
                    last: [5],
                    offset: [5],
                    before: [14],
                    after: [14],
                    orderBy: [28, '[WorldRecordsOrderBy!]'],
                    condition: [29]
                }
            ],
            favoriteById: [
                4,
                {
                    id: [5, 'Int!']
                }
            ],
            levelById: [
                7,
                {
                    id: [5, 'Int!']
                }
            ],
            mediaById: [
                31,
                {
                    id: [5, 'Int!']
                }
            ],
            personalBestById: [
                21,
                {
                    id: [5, 'Int!']
                }
            ],
            recordById: [
                19,
                {
                    id: [5, 'Int!']
                }
            ],
            statById: [
                51,
                {
                    id: [5, 'Int!']
                }
            ],
            upvoteById: [
                46,
                {
                    id: [5, 'Int!']
                }
            ],
            userById: [
                11,
                {
                    id: [5, 'Int!']
                }
            ],
            versionById: [
                61,
                {
                    id: [5, 'Int!']
                }
            ],
            voteById: [
                39,
                {
                    id: [5, 'Int!']
                }
            ],
            worldRecordById: [
                26,
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
            level: [
                7,
                {
                    nodeId: [2, 'ID!']
                }
            ],
            media: [
                31,
                {
                    nodeId: [2, 'ID!']
                }
            ],
            personalBest: [
                21,
                {
                    nodeId: [2, 'ID!']
                }
            ],
            record: [
                19,
                {
                    nodeId: [2, 'ID!']
                }
            ],
            stat: [
                51,
                {
                    nodeId: [2, 'ID!']
                }
            ],
            upvote: [
                46,
                {
                    nodeId: [2, 'ID!']
                }
            ],
            user: [
                11,
                {
                    nodeId: [2, 'ID!']
                }
            ],
            version: [
                61,
                {
                    nodeId: [2, 'ID!']
                }
            ],
            vote: [
                39,
                {
                    nodeId: [2, 'ID!']
                }
            ],
            worldRecord: [
                26,
                {
                    nodeId: [2, 'ID!']
                }
            ],
            __typename: [8]
        },
        Node: {
            nodeId: [2],
            on_Query: [0],
            on_Favorite: [4],
            on_Level: [7],
            on_User: [11],
            on_Record: [19],
            on_PersonalBest: [21],
            on_WorldRecord: [26],
            on_Media: [31],
            on_Vote: [39],
            on_Upvote: [46],
            on_Stat: [51],
            on_Version: [61],
            __typename: [8]
        },
        ID: {},
        FavoritesConnection: {
            nodes: [4],
            edges: [55],
            pageInfo: [15],
            totalCount: [5],
            __typename: [8]
        },
        Favorite: {
            nodeId: [2],
            id: [5],
            dateCreated: [6],
            dateUpdated: [6],
            level: [5],
            user: [5],
            levelByLevel: [7],
            userByUser: [11],
            __typename: [8]
        },
        Int: {},
        Datetime: {},
        Level: {
            nodeId: [2],
            id: [5],
            dateCreated: [6],
            dateUpdated: [6],
            uid: [8],
            name: [8],
            author: [8],
            timeAuthor: [9],
            timeGold: [9],
            timeSilver: [9],
            timeBronze: [9],
            createdBy: [5],
            wid: [8],
            isValid: [10],
            thumbnailUrl: [8],
            rank: [5],
            points: [5],
            blocked: [10],
            userByCreatedBy: [11],
            recordsByLevel: [
                18,
                {
                    first: [5],
                    last: [5],
                    offset: [5],
                    before: [14],
                    after: [14],
                    orderBy: [36, '[RecordsOrderBy!]'],
                    condition: [37]
                }
            ],
            votesByLevel: [
                38,
                {
                    first: [5],
                    last: [5],
                    offset: [5],
                    before: [14],
                    after: [14],
                    orderBy: [41, '[VotesOrderBy!]'],
                    condition: [42]
                }
            ],
            favoritesByLevel: [
                3,
                {
                    first: [5],
                    last: [5],
                    offset: [5],
                    before: [14],
                    after: [14],
                    orderBy: [43, '[FavoritesOrderBy!]'],
                    condition: [44]
                }
            ],
            upvotesByLevel: [
                45,
                {
                    first: [5],
                    last: [5],
                    offset: [5],
                    before: [14],
                    after: [14],
                    orderBy: [48, '[UpvotesOrderBy!]'],
                    condition: [49]
                }
            ],
            personalBestsByLevel: [
                20,
                {
                    first: [5],
                    last: [5],
                    offset: [5],
                    before: [14],
                    after: [14],
                    orderBy: [23, '[PersonalBestsOrderBy!]'],
                    condition: [24]
                }
            ],
            worldRecordsByLevel: [
                25,
                {
                    first: [5],
                    last: [5],
                    offset: [5],
                    before: [14],
                    after: [14],
                    orderBy: [28, '[WorldRecordsOrderBy!]'],
                    condition: [29]
                }
            ],
            __typename: [8]
        },
        String: {},
        Float: {},
        Boolean: {},
        User: {
            nodeId: [2],
            id: [5],
            dateCreated: [6],
            dateUpdated: [6],
            steamId: [8],
            steamName: [8],
            position: [5],
            score: [9],
            worldRecords: [5],
            discordId: [8],
            banned: [10],
            levelsByCreatedBy: [
                12,
                {
                    first: [5],
                    last: [5],
                    offset: [5],
                    before: [14],
                    after: [14],
                    orderBy: [16, '[LevelsOrderBy!]'],
                    condition: [17]
                }
            ],
            recordsByUser: [
                18,
                {
                    first: [5],
                    last: [5],
                    offset: [5],
                    before: [14],
                    after: [14],
                    orderBy: [36, '[RecordsOrderBy!]'],
                    condition: [37]
                }
            ],
            votesByUser: [
                38,
                {
                    first: [5],
                    last: [5],
                    offset: [5],
                    before: [14],
                    after: [14],
                    orderBy: [41, '[VotesOrderBy!]'],
                    condition: [42]
                }
            ],
            favoritesByUser: [
                3,
                {
                    first: [5],
                    last: [5],
                    offset: [5],
                    before: [14],
                    after: [14],
                    orderBy: [43, '[FavoritesOrderBy!]'],
                    condition: [44]
                }
            ],
            upvotesByUser: [
                45,
                {
                    first: [5],
                    last: [5],
                    offset: [5],
                    before: [14],
                    after: [14],
                    orderBy: [48, '[UpvotesOrderBy!]'],
                    condition: [49]
                }
            ],
            statsByUser: [
                50,
                {
                    first: [5],
                    last: [5],
                    offset: [5],
                    before: [14],
                    after: [14],
                    orderBy: [53, '[StatsOrderBy!]'],
                    condition: [54]
                }
            ],
            personalBestsByUser: [
                20,
                {
                    first: [5],
                    last: [5],
                    offset: [5],
                    before: [14],
                    after: [14],
                    orderBy: [23, '[PersonalBestsOrderBy!]'],
                    condition: [24]
                }
            ],
            worldRecordsByUser: [
                25,
                {
                    first: [5],
                    last: [5],
                    offset: [5],
                    before: [14],
                    after: [14],
                    orderBy: [28, '[WorldRecordsOrderBy!]'],
                    condition: [29]
                }
            ],
            __typename: [8]
        },
        LevelsConnection: {
            nodes: [7],
            edges: [13],
            pageInfo: [15],
            totalCount: [5],
            __typename: [8]
        },
        LevelsEdge: {
            cursor: [14],
            node: [7],
            __typename: [8]
        },
        Cursor: {},
        PageInfo: {
            hasNextPage: [10],
            hasPreviousPage: [10],
            startCursor: [14],
            endCursor: [14],
            __typename: [8]
        },
        LevelsOrderBy: {},
        LevelCondition: {
            id: [5],
            dateCreated: [6],
            dateUpdated: [6],
            uid: [8],
            name: [8],
            author: [8],
            timeAuthor: [9],
            timeGold: [9],
            timeSilver: [9],
            timeBronze: [9],
            createdBy: [5],
            wid: [8],
            isValid: [10],
            thumbnailUrl: [8],
            rank: [5],
            points: [5],
            blocked: [10],
            __typename: [8]
        },
        RecordsConnection: {
            nodes: [19],
            edges: [35],
            pageInfo: [15],
            totalCount: [5],
            __typename: [8]
        },
        Record: {
            nodeId: [2],
            id: [5],
            dateCreated: [6],
            dateUpdated: [6],
            level: [5],
            user: [5],
            time: [9],
            isBest: [10],
            splits: [8],
            ghostUrl: [8],
            screenshotUrl: [8],
            gameVersion: [8],
            isValid: [10],
            isWr: [10],
            levelHash: [8],
            modVersion: [8],
            levelByLevel: [7],
            userByUser: [11],
            personalBestsByRecord: [
                20,
                {
                    first: [5],
                    last: [5],
                    offset: [5],
                    before: [14],
                    after: [14],
                    orderBy: [23, '[PersonalBestsOrderBy!]'],
                    condition: [24]
                }
            ],
            worldRecordsByRecord: [
                25,
                {
                    first: [5],
                    last: [5],
                    offset: [5],
                    before: [14],
                    after: [14],
                    orderBy: [28, '[WorldRecordsOrderBy!]'],
                    condition: [29]
                }
            ],
            mediaByRecord: [
                30,
                {
                    first: [5],
                    last: [5],
                    offset: [5],
                    before: [14],
                    after: [14],
                    orderBy: [33, '[MediaOrderBy!]'],
                    condition: [34]
                }
            ],
            __typename: [8]
        },
        PersonalBestsConnection: {
            nodes: [21],
            edges: [22],
            pageInfo: [15],
            totalCount: [5],
            __typename: [8]
        },
        PersonalBest: {
            nodeId: [2],
            id: [5],
            record: [5],
            user: [5],
            level: [5],
            periodStart: [6],
            periodEnd: [6],
            dateCreated: [6],
            dateUpdated: [6],
            recordByRecord: [19],
            userByUser: [11],
            levelByLevel: [7],
            __typename: [8]
        },
        PersonalBestsEdge: {
            cursor: [14],
            node: [21],
            __typename: [8]
        },
        PersonalBestsOrderBy: {},
        PersonalBestCondition: {
            id: [5],
            record: [5],
            user: [5],
            level: [5],
            periodStart: [6],
            periodEnd: [6],
            dateCreated: [6],
            dateUpdated: [6],
            __typename: [8]
        },
        WorldRecordsConnection: {
            nodes: [26],
            edges: [27],
            pageInfo: [15],
            totalCount: [5],
            __typename: [8]
        },
        WorldRecord: {
            nodeId: [2],
            id: [5],
            record: [5],
            user: [5],
            level: [5],
            periodStart: [6],
            periodEnd: [6],
            dateCreated: [6],
            dateUpdated: [6],
            recordByRecord: [19],
            userByUser: [11],
            levelByLevel: [7],
            __typename: [8]
        },
        WorldRecordsEdge: {
            cursor: [14],
            node: [26],
            __typename: [8]
        },
        WorldRecordsOrderBy: {},
        WorldRecordCondition: {
            id: [5],
            record: [5],
            user: [5],
            level: [5],
            periodStart: [6],
            periodEnd: [6],
            dateCreated: [6],
            dateUpdated: [6],
            __typename: [8]
        },
        MediaConnection: {
            nodes: [31],
            edges: [32],
            pageInfo: [15],
            totalCount: [5],
            __typename: [8]
        },
        Media: {
            nodeId: [2],
            id: [5],
            record: [5],
            ghostUrl: [8],
            screenshotUrl: [8],
            dateCreated: [6],
            dateUpdated: [6],
            recordByRecord: [19],
            __typename: [8]
        },
        MediaEdge: {
            cursor: [14],
            node: [31],
            __typename: [8]
        },
        MediaOrderBy: {},
        MediaCondition: {
            id: [5],
            record: [5],
            ghostUrl: [8],
            screenshotUrl: [8],
            dateCreated: [6],
            dateUpdated: [6],
            __typename: [8]
        },
        RecordsEdge: {
            cursor: [14],
            node: [19],
            __typename: [8]
        },
        RecordsOrderBy: {},
        RecordCondition: {
            id: [5],
            dateCreated: [6],
            dateUpdated: [6],
            level: [5],
            user: [5],
            time: [9],
            isBest: [10],
            splits: [8],
            ghostUrl: [8],
            screenshotUrl: [8],
            gameVersion: [8],
            isValid: [10],
            isWr: [10],
            levelHash: [8],
            modVersion: [8],
            __typename: [8]
        },
        VotesConnection: {
            nodes: [39],
            edges: [40],
            pageInfo: [15],
            totalCount: [5],
            __typename: [8]
        },
        Vote: {
            nodeId: [2],
            id: [5],
            dateCreated: [6],
            dateUpdated: [6],
            level: [5],
            user: [5],
            score: [5],
            category: [5],
            levelByLevel: [7],
            userByUser: [11],
            __typename: [8]
        },
        VotesEdge: {
            cursor: [14],
            node: [39],
            __typename: [8]
        },
        VotesOrderBy: {},
        VoteCondition: {
            id: [5],
            dateCreated: [6],
            dateUpdated: [6],
            level: [5],
            user: [5],
            score: [5],
            category: [5],
            __typename: [8]
        },
        FavoritesOrderBy: {},
        FavoriteCondition: {
            id: [5],
            dateCreated: [6],
            dateUpdated: [6],
            level: [5],
            user: [5],
            __typename: [8]
        },
        UpvotesConnection: {
            nodes: [46],
            edges: [47],
            pageInfo: [15],
            totalCount: [5],
            __typename: [8]
        },
        Upvote: {
            nodeId: [2],
            id: [5],
            dateCreated: [6],
            dateUpdated: [6],
            level: [5],
            user: [5],
            levelByLevel: [7],
            userByUser: [11],
            __typename: [8]
        },
        UpvotesEdge: {
            cursor: [14],
            node: [46],
            __typename: [8]
        },
        UpvotesOrderBy: {},
        UpvoteCondition: {
            id: [5],
            dateCreated: [6],
            dateUpdated: [6],
            level: [5],
            user: [5],
            __typename: [8]
        },
        StatsConnection: {
            nodes: [51],
            edges: [52],
            pageInfo: [15],
            totalCount: [5],
            __typename: [8]
        },
        Stat: {
            nodeId: [2],
            id: [5],
            crashTotal: [5],
            crashRegular: [5],
            crashEye: [5],
            crashGhost: [5],
            crashSticky: [5],
            distanceArmsUp: [9],
            distanceBraking: [9],
            distanceGrounded: [9],
            distanceInAir: [9],
            distanceOnNoWheels: [9],
            distanceOnOneWheel: [9],
            distanceOnTwoWheels: [9],
            distanceOnThreeWheels: [9],
            distanceOnFourWheels: [9],
            distanceRagdoll: [9],
            distanceWithNoWheels: [9],
            distanceWithOneWheel: [9],
            distanceWithTwoWheels: [9],
            distanceWithThreeWheels: [9],
            distanceWithFourWheels: [9],
            distanceOnRegular: [9],
            distanceOnGrass: [9],
            distanceOnIce: [9],
            timeArmsUp: [9],
            timeBraking: [9],
            timeGrounded: [9],
            timeInAir: [9],
            timeOnNoWheels: [9],
            timeOnOneWheel: [9],
            timeOnTwoWheels: [9],
            timeOnThreeWheels: [9],
            timeOnFourWheels: [9],
            timeRagdoll: [9],
            timeWithNoWheels: [9],
            timeWithOneWheel: [9],
            timeWithTwoWheels: [9],
            timeWithThreeWheels: [9],
            timeWithFourWheels: [9],
            timeOnRegular: [9],
            timeOnGrass: [9],
            timeOnIce: [9],
            dateCreated: [6],
            dateUpdated: [6],
            timesStarted: [5],
            timesFinished: [5],
            wheelsBroken: [5],
            checkpointsCrossed: [5],
            user: [5],
            month: [5],
            year: [5],
            userByUser: [11],
            __typename: [8]
        },
        StatsEdge: {
            cursor: [14],
            node: [51],
            __typename: [8]
        },
        StatsOrderBy: {},
        StatCondition: {
            id: [5],
            crashTotal: [5],
            crashRegular: [5],
            crashEye: [5],
            crashGhost: [5],
            crashSticky: [5],
            distanceArmsUp: [9],
            distanceBraking: [9],
            distanceGrounded: [9],
            distanceInAir: [9],
            distanceOnNoWheels: [9],
            distanceOnOneWheel: [9],
            distanceOnTwoWheels: [9],
            distanceOnThreeWheels: [9],
            distanceOnFourWheels: [9],
            distanceRagdoll: [9],
            distanceWithNoWheels: [9],
            distanceWithOneWheel: [9],
            distanceWithTwoWheels: [9],
            distanceWithThreeWheels: [9],
            distanceWithFourWheels: [9],
            distanceOnRegular: [9],
            distanceOnGrass: [9],
            distanceOnIce: [9],
            timeArmsUp: [9],
            timeBraking: [9],
            timeGrounded: [9],
            timeInAir: [9],
            timeOnNoWheels: [9],
            timeOnOneWheel: [9],
            timeOnTwoWheels: [9],
            timeOnThreeWheels: [9],
            timeOnFourWheels: [9],
            timeRagdoll: [9],
            timeWithNoWheels: [9],
            timeWithOneWheel: [9],
            timeWithTwoWheels: [9],
            timeWithThreeWheels: [9],
            timeWithFourWheels: [9],
            timeOnRegular: [9],
            timeOnGrass: [9],
            timeOnIce: [9],
            dateCreated: [6],
            dateUpdated: [6],
            timesStarted: [5],
            timesFinished: [5],
            wheelsBroken: [5],
            checkpointsCrossed: [5],
            user: [5],
            month: [5],
            year: [5],
            __typename: [8]
        },
        FavoritesEdge: {
            cursor: [14],
            node: [4],
            __typename: [8]
        },
        UsersConnection: {
            nodes: [11],
            edges: [57],
            pageInfo: [15],
            totalCount: [5],
            __typename: [8]
        },
        UsersEdge: {
            cursor: [14],
            node: [11],
            __typename: [8]
        },
        UsersOrderBy: {},
        UserCondition: {
            id: [5],
            dateCreated: [6],
            dateUpdated: [6],
            steamId: [8],
            steamName: [8],
            position: [5],
            score: [9],
            worldRecords: [5],
            discordId: [8],
            banned: [10],
            __typename: [8]
        },
        VersionsConnection: {
            nodes: [61],
            edges: [62],
            pageInfo: [15],
            totalCount: [5],
            __typename: [8]
        },
        Version: {
            nodeId: [2],
            id: [5],
            minimum: [8],
            latest: [8],
            __typename: [8]
        },
        VersionsEdge: {
            cursor: [14],
            node: [61],
            __typename: [8]
        },
        VersionsOrderBy: {},
        VersionCondition: {
            id: [5],
            minimum: [8],
            latest: [8],
            __typename: [8]
        },
        Mutation: {
            fixWr: [
                66,
                {
                    input: [67, 'FixWrInput!']
                }
            ],
            updatePb: [
                68,
                {
                    input: [69, 'UpdatePbInput!']
                }
            ],
            updateWr: [
                70,
                {
                    input: [71, 'UpdateWrInput!']
                }
            ],
            __typename: [8]
        },
        FixWrPayload: {
            clientMutationId: [8],
            query: [0],
            __typename: [8]
        },
        FixWrInput: {
            clientMutationId: [8],
            __typename: [8]
        },
        UpdatePbPayload: {
            clientMutationId: [8],
            query: [0],
            __typename: [8]
        },
        UpdatePbInput: {
            clientMutationId: [8],
            pUser: [5],
            pLevel: [5],
            __typename: [8]
        },
        UpdateWrPayload: {
            clientMutationId: [8],
            query: [0],
            __typename: [8]
        },
        UpdateWrInput: {
            clientMutationId: [8],
            pLevel: [5],
            __typename: [8]
        }
    }
}
