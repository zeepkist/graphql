export default {
    scalars: [
        2, 5, 6, 8, 9, 10, 11, 12, 26, 42, 113, 118, 123, 125, 129, 134, 139,
        144, 149, 154, 159, 164, 169, 174, 179, 184, 189, 194, 199, 204, 209,
        214, 219, 224, 230, 235, 240, 245, 250
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
                    before: [11],
                    after: [11],
                    orderBy: [12, '[FavoritesOrderBy!]'],
                    condition: [13],
                    filter: [14]
                }
            ],
            allLevels: [
                233,
                {
                    first: [5],
                    last: [5],
                    offset: [5],
                    before: [11],
                    after: [11],
                    orderBy: [235, '[LevelsOrderBy!]'],
                    condition: [236],
                    filter: [33]
                }
            ],
            allLevelItems: [
                115,
                {
                    first: [5],
                    last: [5],
                    offset: [5],
                    before: [11],
                    after: [11],
                    orderBy: [118, '[LevelItemsOrderBy!]'],
                    condition: [119],
                    filter: [38]
                }
            ],
            allLevelMetadata: [
                120,
                {
                    first: [5],
                    last: [5],
                    offset: [5],
                    before: [11],
                    after: [11],
                    orderBy: [123, '[LevelMetadataOrderBy!]'],
                    condition: [124],
                    filter: [40]
                }
            ],
            allLevelPoints: [
                109,
                {
                    first: [5],
                    last: [5],
                    offset: [5],
                    before: [11],
                    after: [11],
                    orderBy: [113, '[LevelPointsOrderBy!]'],
                    condition: [114],
                    filter: [36]
                }
            ],
            allLevelRequests: [
                237,
                {
                    first: [5],
                    last: [5],
                    offset: [5],
                    before: [11],
                    after: [11],
                    orderBy: [240, '[LevelRequestsOrderBy!]'],
                    condition: [241],
                    filter: [242]
                }
            ],
            allPersonalBestDailies: [
                161,
                {
                    first: [5],
                    last: [5],
                    offset: [5],
                    before: [11],
                    after: [11],
                    orderBy: [164, '[PersonalBestDailiesOrderBy!]'],
                    condition: [165],
                    filter: [57]
                }
            ],
            allPersonalBestGlobals: [
                105,
                {
                    first: [5],
                    last: [5],
                    offset: [5],
                    before: [11],
                    after: [11],
                    orderBy: [125, '[PersonalBestGlobalsOrderBy!]'],
                    condition: [126],
                    filter: [23]
                }
            ],
            allPersonalBestMonthlies: [
                151,
                {
                    first: [5],
                    last: [5],
                    offset: [5],
                    before: [11],
                    after: [11],
                    orderBy: [154, '[PersonalBestMonthliesOrderBy!]'],
                    condition: [155],
                    filter: [53]
                }
            ],
            allPersonalBestQuarterlies: [
                206,
                {
                    first: [5],
                    last: [5],
                    offset: [5],
                    before: [11],
                    after: [11],
                    orderBy: [209, '[PersonalBestQuarterliesOrderBy!]'],
                    condition: [210],
                    filter: [75]
                }
            ],
            allPersonalBestWeeklies: [
                156,
                {
                    first: [5],
                    last: [5],
                    offset: [5],
                    before: [11],
                    after: [11],
                    orderBy: [159, '[PersonalBestWeekliesOrderBy!]'],
                    condition: [160],
                    filter: [55]
                }
            ],
            allPersonalBestYearlies: [
                146,
                {
                    first: [5],
                    last: [5],
                    offset: [5],
                    before: [11],
                    after: [11],
                    orderBy: [149, '[PersonalBestYearliesOrderBy!]'],
                    condition: [150],
                    filter: [51]
                }
            ],
            allRecords: [
                127,
                {
                    first: [5],
                    last: [5],
                    offset: [5],
                    before: [11],
                    after: [11],
                    orderBy: [129, '[RecordsOrderBy!]'],
                    condition: [130],
                    filter: [24]
                }
            ],
            allRecordMedias: [
                221,
                {
                    first: [5],
                    last: [5],
                    offset: [5],
                    before: [11],
                    after: [11],
                    orderBy: [224, '[RecordMediasOrderBy!]'],
                    condition: [225],
                    filter: [29]
                }
            ],
            allStatsDailies: [
                201,
                {
                    first: [5],
                    last: [5],
                    offset: [5],
                    before: [11],
                    after: [11],
                    orderBy: [204, '[StatsDailiesOrderBy!]'],
                    condition: [205],
                    filter: [73]
                }
            ],
            allStatsGlobals: [
                131,
                {
                    first: [5],
                    last: [5],
                    offset: [5],
                    before: [11],
                    after: [11],
                    orderBy: [134, '[StatsGlobalsOrderBy!]'],
                    condition: [135],
                    filter: [46]
                }
            ],
            allStatsMonthlies: [
                186,
                {
                    first: [5],
                    last: [5],
                    offset: [5],
                    before: [11],
                    after: [11],
                    orderBy: [189, '[StatsMonthliesOrderBy!]'],
                    condition: [190],
                    filter: [67]
                }
            ],
            allStatsQuarterlies: [
                211,
                {
                    first: [5],
                    last: [5],
                    offset: [5],
                    before: [11],
                    after: [11],
                    orderBy: [214, '[StatsQuarterliesOrderBy!]'],
                    condition: [215],
                    filter: [77]
                }
            ],
            allStatsWeeklies: [
                196,
                {
                    first: [5],
                    last: [5],
                    offset: [5],
                    before: [11],
                    after: [11],
                    orderBy: [199, '[StatsWeekliesOrderBy!]'],
                    condition: [200],
                    filter: [71]
                }
            ],
            allStatsYearlies: [
                191,
                {
                    first: [5],
                    last: [5],
                    offset: [5],
                    before: [11],
                    after: [11],
                    orderBy: [194, '[StatsYearliesOrderBy!]'],
                    condition: [195],
                    filter: [69]
                }
            ],
            allUpvotes: [
                136,
                {
                    first: [5],
                    last: [5],
                    offset: [5],
                    before: [11],
                    after: [11],
                    orderBy: [139, '[UpvotesOrderBy!]'],
                    condition: [140],
                    filter: [48]
                }
            ],
            allUsers: [
                243,
                {
                    first: [5],
                    last: [5],
                    offset: [5],
                    before: [11],
                    after: [11],
                    orderBy: [245, '[UsersOrderBy!]'],
                    condition: [246],
                    filter: [17]
                }
            ],
            allUserPoints: [
                227,
                {
                    first: [5],
                    last: [5],
                    offset: [5],
                    before: [11],
                    after: [11],
                    orderBy: [230, '[UserPointsOrderBy!]'],
                    condition: [231],
                    filter: [91]
                }
            ],
            allVersions: [
                247,
                {
                    first: [5],
                    last: [5],
                    offset: [5],
                    before: [11],
                    after: [11],
                    orderBy: [250, '[VersionsOrderBy!]'],
                    condition: [251],
                    filter: [252]
                }
            ],
            allWorldRecordDailies: [
                181,
                {
                    first: [5],
                    last: [5],
                    offset: [5],
                    before: [11],
                    after: [11],
                    orderBy: [184, '[WorldRecordDailiesOrderBy!]'],
                    condition: [185],
                    filter: [65]
                }
            ],
            allWorldRecordGlobals: [
                141,
                {
                    first: [5],
                    last: [5],
                    offset: [5],
                    before: [11],
                    after: [11],
                    orderBy: [144, '[WorldRecordGlobalsOrderBy!]'],
                    condition: [145],
                    filter: [32]
                }
            ],
            allWorldRecordMonthlies: [
                166,
                {
                    first: [5],
                    last: [5],
                    offset: [5],
                    before: [11],
                    after: [11],
                    orderBy: [169, '[WorldRecordMonthliesOrderBy!]'],
                    condition: [170],
                    filter: [59]
                }
            ],
            allWorldRecordQuarterlies: [
                216,
                {
                    first: [5],
                    last: [5],
                    offset: [5],
                    before: [11],
                    after: [11],
                    orderBy: [219, '[WorldRecordQuarterliesOrderBy!]'],
                    condition: [220],
                    filter: [79]
                }
            ],
            allWorldRecordWeeklies: [
                176,
                {
                    first: [5],
                    last: [5],
                    offset: [5],
                    before: [11],
                    after: [11],
                    orderBy: [179, '[WorldRecordWeekliesOrderBy!]'],
                    condition: [180],
                    filter: [63]
                }
            ],
            allWorldRecordYearlies: [
                171,
                {
                    first: [5],
                    last: [5],
                    offset: [5],
                    before: [11],
                    after: [11],
                    orderBy: [174, '[WorldRecordYearliesOrderBy!]'],
                    condition: [175],
                    filter: [61]
                }
            ],
            favoriteById: [
                4,
                {
                    id: [5, 'Int!']
                }
            ],
            levelById: [
                108,
                {
                    id: [5, 'Int!']
                }
            ],
            levelByHash: [
                108,
                {
                    hash: [8, 'String!']
                }
            ],
            levelItemById: [
                116,
                {
                    id: [5, 'Int!']
                }
            ],
            levelMetadatumById: [
                121,
                {
                    id: [5, 'Int!']
                }
            ],
            levelPointById: [
                110,
                {
                    id: [5, 'Int!']
                }
            ],
            levelRequestById: [
                238,
                {
                    id: [5, 'Int!']
                }
            ],
            personalBestDailyById: [
                162,
                {
                    id: [5, 'Int!']
                }
            ],
            personalBestGlobalById: [
                106,
                {
                    id: [5, 'Int!']
                }
            ],
            personalBestMonthlyById: [
                152,
                {
                    id: [5, 'Int!']
                }
            ],
            personalBestQuarterlyById: [
                207,
                {
                    id: [5, 'Int!']
                }
            ],
            personalBestWeeklyById: [
                157,
                {
                    id: [5, 'Int!']
                }
            ],
            personalBestYearlyById: [
                147,
                {
                    id: [5, 'Int!']
                }
            ],
            recordById: [
                107,
                {
                    id: [5, 'Int!']
                }
            ],
            recordMediaById: [
                222,
                {
                    id: [5, 'Int!']
                }
            ],
            statsDailyById: [
                202,
                {
                    id: [5, 'Int!']
                }
            ],
            statsGlobalById: [
                132,
                {
                    id: [5, 'Int!']
                }
            ],
            statsMonthlyById: [
                187,
                {
                    id: [5, 'Int!']
                }
            ],
            statsQuarterlyById: [
                212,
                {
                    id: [5, 'Int!']
                }
            ],
            statsWeeklyById: [
                197,
                {
                    id: [5, 'Int!']
                }
            ],
            statsYearlyById: [
                192,
                {
                    id: [5, 'Int!']
                }
            ],
            upvoteById: [
                137,
                {
                    id: [5, 'Int!']
                }
            ],
            userById: [
                7,
                {
                    id: [5, 'Int!']
                }
            ],
            userPointById: [
                228,
                {
                    id: [5, 'Int!']
                }
            ],
            versionById: [
                248,
                {
                    id: [5, 'Int!']
                }
            ],
            worldRecordDailyById: [
                182,
                {
                    id: [5, 'Int!']
                }
            ],
            worldRecordGlobalById: [
                142,
                {
                    id: [5, 'Int!']
                }
            ],
            worldRecordMonthlyById: [
                167,
                {
                    id: [5, 'Int!']
                }
            ],
            worldRecordQuarterlyById: [
                217,
                {
                    id: [5, 'Int!']
                }
            ],
            worldRecordWeeklyById: [
                177,
                {
                    id: [5, 'Int!']
                }
            ],
            worldRecordYearlyById: [
                172,
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
                108,
                {
                    nodeId: [2, 'ID!']
                }
            ],
            levelItem: [
                116,
                {
                    nodeId: [2, 'ID!']
                }
            ],
            levelMetadatum: [
                121,
                {
                    nodeId: [2, 'ID!']
                }
            ],
            levelPoint: [
                110,
                {
                    nodeId: [2, 'ID!']
                }
            ],
            levelRequest: [
                238,
                {
                    nodeId: [2, 'ID!']
                }
            ],
            personalBestDaily: [
                162,
                {
                    nodeId: [2, 'ID!']
                }
            ],
            personalBestGlobal: [
                106,
                {
                    nodeId: [2, 'ID!']
                }
            ],
            personalBestMonthly: [
                152,
                {
                    nodeId: [2, 'ID!']
                }
            ],
            personalBestQuarterly: [
                207,
                {
                    nodeId: [2, 'ID!']
                }
            ],
            personalBestWeekly: [
                157,
                {
                    nodeId: [2, 'ID!']
                }
            ],
            personalBestYearly: [
                147,
                {
                    nodeId: [2, 'ID!']
                }
            ],
            record: [
                107,
                {
                    nodeId: [2, 'ID!']
                }
            ],
            recordMedia: [
                222,
                {
                    nodeId: [2, 'ID!']
                }
            ],
            statsDaily: [
                202,
                {
                    nodeId: [2, 'ID!']
                }
            ],
            statsGlobal: [
                132,
                {
                    nodeId: [2, 'ID!']
                }
            ],
            statsMonthly: [
                187,
                {
                    nodeId: [2, 'ID!']
                }
            ],
            statsQuarterly: [
                212,
                {
                    nodeId: [2, 'ID!']
                }
            ],
            statsWeekly: [
                197,
                {
                    nodeId: [2, 'ID!']
                }
            ],
            statsYearly: [
                192,
                {
                    nodeId: [2, 'ID!']
                }
            ],
            upvote: [
                137,
                {
                    nodeId: [2, 'ID!']
                }
            ],
            user: [
                7,
                {
                    nodeId: [2, 'ID!']
                }
            ],
            userPoint: [
                228,
                {
                    nodeId: [2, 'ID!']
                }
            ],
            version: [
                248,
                {
                    nodeId: [2, 'ID!']
                }
            ],
            worldRecordDaily: [
                182,
                {
                    nodeId: [2, 'ID!']
                }
            ],
            worldRecordGlobal: [
                142,
                {
                    nodeId: [2, 'ID!']
                }
            ],
            worldRecordMonthly: [
                167,
                {
                    nodeId: [2, 'ID!']
                }
            ],
            worldRecordQuarterly: [
                217,
                {
                    nodeId: [2, 'ID!']
                }
            ],
            worldRecordWeekly: [
                177,
                {
                    nodeId: [2, 'ID!']
                }
            ],
            worldRecordYearly: [
                172,
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
            on_User: [7],
            on_PersonalBestGlobal: [106],
            on_Record: [107],
            on_Level: [108],
            on_LevelPoint: [110],
            on_LevelItem: [116],
            on_LevelMetadatum: [121],
            on_StatsGlobal: [132],
            on_Upvote: [137],
            on_WorldRecordGlobal: [142],
            on_PersonalBestYearly: [147],
            on_PersonalBestMonthly: [152],
            on_PersonalBestWeekly: [157],
            on_PersonalBestDaily: [162],
            on_WorldRecordMonthly: [167],
            on_WorldRecordYearly: [172],
            on_WorldRecordWeekly: [177],
            on_WorldRecordDaily: [182],
            on_StatsMonthly: [187],
            on_StatsYearly: [192],
            on_StatsWeekly: [197],
            on_StatsDaily: [202],
            on_PersonalBestQuarterly: [207],
            on_StatsQuarterly: [212],
            on_WorldRecordQuarterly: [217],
            on_RecordMedia: [222],
            on_UserPoint: [228],
            on_LevelRequest: [238],
            on_Version: [248],
            __typename: [8]
        },
        ID: {},
        FavoritesConnection: {
            nodes: [4],
            edges: [232],
            pageInfo: [112],
            totalCount: [5],
            __typename: [8]
        },
        Favorite: {
            nodeId: [2],
            id: [5],
            idUser: [5],
            dateCreated: [6],
            dateUpdated: [6],
            idLevel: [5],
            userByIdUser: [7],
            levelByIdLevel: [108],
            __typename: [8]
        },
        Int: {},
        Datetime: {},
        User: {
            nodeId: [2],
            id: [5],
            steamName: [8],
            banned: [9],
            dateCreated: [6],
            dateUpdated: [6],
            steamId: [10],
            discordId: [10],
            favoritesByIdUser: [
                3,
                {
                    first: [5],
                    last: [5],
                    offset: [5],
                    before: [11],
                    after: [11],
                    orderBy: [12, '[FavoritesOrderBy!]'],
                    condition: [13],
                    filter: [14]
                }
            ],
            personalBestGlobalsByIdUser: [
                105,
                {
                    first: [5],
                    last: [5],
                    offset: [5],
                    before: [11],
                    after: [11],
                    orderBy: [125, '[PersonalBestGlobalsOrderBy!]'],
                    condition: [126],
                    filter: [23]
                }
            ],
            userPointsByIdUser: [
                227,
                {
                    first: [5],
                    last: [5],
                    offset: [5],
                    before: [11],
                    after: [11],
                    orderBy: [230, '[UserPointsOrderBy!]'],
                    condition: [231],
                    filter: [91]
                }
            ],
            recordsByIdUser: [
                127,
                {
                    first: [5],
                    last: [5],
                    offset: [5],
                    before: [11],
                    after: [11],
                    orderBy: [129, '[RecordsOrderBy!]'],
                    condition: [130],
                    filter: [24]
                }
            ],
            statsGlobalsByIdUser: [
                131,
                {
                    first: [5],
                    last: [5],
                    offset: [5],
                    before: [11],
                    after: [11],
                    orderBy: [134, '[StatsGlobalsOrderBy!]'],
                    condition: [135],
                    filter: [46]
                }
            ],
            upvotesByIdUser: [
                136,
                {
                    first: [5],
                    last: [5],
                    offset: [5],
                    before: [11],
                    after: [11],
                    orderBy: [139, '[UpvotesOrderBy!]'],
                    condition: [140],
                    filter: [48]
                }
            ],
            personalBestYearliesByIdUser: [
                146,
                {
                    first: [5],
                    last: [5],
                    offset: [5],
                    before: [11],
                    after: [11],
                    orderBy: [149, '[PersonalBestYearliesOrderBy!]'],
                    condition: [150],
                    filter: [51]
                }
            ],
            personalBestMonthliesByIdUser: [
                151,
                {
                    first: [5],
                    last: [5],
                    offset: [5],
                    before: [11],
                    after: [11],
                    orderBy: [154, '[PersonalBestMonthliesOrderBy!]'],
                    condition: [155],
                    filter: [53]
                }
            ],
            personalBestWeekliesByIdUser: [
                156,
                {
                    first: [5],
                    last: [5],
                    offset: [5],
                    before: [11],
                    after: [11],
                    orderBy: [159, '[PersonalBestWeekliesOrderBy!]'],
                    condition: [160],
                    filter: [55]
                }
            ],
            personalBestDailiesByIdUser: [
                161,
                {
                    first: [5],
                    last: [5],
                    offset: [5],
                    before: [11],
                    after: [11],
                    orderBy: [164, '[PersonalBestDailiesOrderBy!]'],
                    condition: [165],
                    filter: [57]
                }
            ],
            statsMonthliesByIdUser: [
                186,
                {
                    first: [5],
                    last: [5],
                    offset: [5],
                    before: [11],
                    after: [11],
                    orderBy: [189, '[StatsMonthliesOrderBy!]'],
                    condition: [190],
                    filter: [67]
                }
            ],
            statsYearliesByIdUser: [
                191,
                {
                    first: [5],
                    last: [5],
                    offset: [5],
                    before: [11],
                    after: [11],
                    orderBy: [194, '[StatsYearliesOrderBy!]'],
                    condition: [195],
                    filter: [69]
                }
            ],
            statsWeekliesByIdUser: [
                196,
                {
                    first: [5],
                    last: [5],
                    offset: [5],
                    before: [11],
                    after: [11],
                    orderBy: [199, '[StatsWeekliesOrderBy!]'],
                    condition: [200],
                    filter: [71]
                }
            ],
            statsDailiesByIdUser: [
                201,
                {
                    first: [5],
                    last: [5],
                    offset: [5],
                    before: [11],
                    after: [11],
                    orderBy: [204, '[StatsDailiesOrderBy!]'],
                    condition: [205],
                    filter: [73]
                }
            ],
            personalBestQuarterliesByIdUser: [
                206,
                {
                    first: [5],
                    last: [5],
                    offset: [5],
                    before: [11],
                    after: [11],
                    orderBy: [209, '[PersonalBestQuarterliesOrderBy!]'],
                    condition: [210],
                    filter: [75]
                }
            ],
            statsQuarterliesByIdUser: [
                211,
                {
                    first: [5],
                    last: [5],
                    offset: [5],
                    before: [11],
                    after: [11],
                    orderBy: [214, '[StatsQuarterliesOrderBy!]'],
                    condition: [215],
                    filter: [77]
                }
            ],
            __typename: [8]
        },
        String: {},
        Boolean: {},
        BigFloat: {},
        Cursor: {},
        FavoritesOrderBy: {},
        FavoriteCondition: {
            id: [5],
            idUser: [5],
            dateCreated: [6],
            dateUpdated: [6],
            idLevel: [5],
            __typename: [8]
        },
        FavoriteFilter: {
            id: [15],
            idUser: [15],
            dateCreated: [16],
            dateUpdated: [16],
            idLevel: [15],
            userByIdUser: [17],
            levelByIdLevel: [33],
            and: [14],
            or: [14],
            not: [14],
            __typename: [8]
        },
        IntFilter: {
            isNull: [9],
            equalTo: [5],
            notEqualTo: [5],
            distinctFrom: [5],
            notDistinctFrom: [5],
            in: [5],
            notIn: [5],
            lessThan: [5],
            lessThanOrEqualTo: [5],
            greaterThan: [5],
            greaterThanOrEqualTo: [5],
            __typename: [8]
        },
        DatetimeFilter: {
            isNull: [9],
            equalTo: [6],
            notEqualTo: [6],
            distinctFrom: [6],
            notDistinctFrom: [6],
            in: [6],
            notIn: [6],
            lessThan: [6],
            lessThanOrEqualTo: [6],
            greaterThan: [6],
            greaterThanOrEqualTo: [6],
            __typename: [8]
        },
        UserFilter: {
            id: [15],
            steamName: [18],
            banned: [19],
            dateCreated: [16],
            dateUpdated: [16],
            steamId: [20],
            discordId: [20],
            favoritesByIdUser: [21],
            favoritesByIdUserExist: [9],
            personalBestGlobalsByIdUser: [22],
            personalBestGlobalsByIdUserExist: [9],
            userPointsByIdUser: [90],
            userPointsByIdUserExist: [9],
            recordsByIdUser: [92],
            recordsByIdUserExist: [9],
            statsGlobalsByIdUser: [93],
            statsGlobalsByIdUserExist: [9],
            upvotesByIdUser: [94],
            upvotesByIdUserExist: [9],
            personalBestYearliesByIdUser: [95],
            personalBestYearliesByIdUserExist: [9],
            personalBestMonthliesByIdUser: [96],
            personalBestMonthliesByIdUserExist: [9],
            personalBestWeekliesByIdUser: [97],
            personalBestWeekliesByIdUserExist: [9],
            personalBestDailiesByIdUser: [98],
            personalBestDailiesByIdUserExist: [9],
            statsMonthliesByIdUser: [99],
            statsMonthliesByIdUserExist: [9],
            statsYearliesByIdUser: [100],
            statsYearliesByIdUserExist: [9],
            statsWeekliesByIdUser: [101],
            statsWeekliesByIdUserExist: [9],
            statsDailiesByIdUser: [102],
            statsDailiesByIdUserExist: [9],
            personalBestQuarterliesByIdUser: [103],
            personalBestQuarterliesByIdUserExist: [9],
            statsQuarterliesByIdUser: [104],
            statsQuarterliesByIdUserExist: [9],
            and: [17],
            or: [17],
            not: [17],
            __typename: [8]
        },
        StringFilter: {
            isNull: [9],
            equalTo: [8],
            notEqualTo: [8],
            distinctFrom: [8],
            notDistinctFrom: [8],
            in: [8],
            notIn: [8],
            lessThan: [8],
            lessThanOrEqualTo: [8],
            greaterThan: [8],
            greaterThanOrEqualTo: [8],
            includes: [8],
            notIncludes: [8],
            includesInsensitive: [8],
            notIncludesInsensitive: [8],
            startsWith: [8],
            notStartsWith: [8],
            startsWithInsensitive: [8],
            notStartsWithInsensitive: [8],
            endsWith: [8],
            notEndsWith: [8],
            endsWithInsensitive: [8],
            notEndsWithInsensitive: [8],
            like: [8],
            notLike: [8],
            likeInsensitive: [8],
            notLikeInsensitive: [8],
            equalToInsensitive: [8],
            notEqualToInsensitive: [8],
            distinctFromInsensitive: [8],
            notDistinctFromInsensitive: [8],
            inInsensitive: [8],
            notInInsensitive: [8],
            lessThanInsensitive: [8],
            lessThanOrEqualToInsensitive: [8],
            greaterThanInsensitive: [8],
            greaterThanOrEqualToInsensitive: [8],
            __typename: [8]
        },
        BooleanFilter: {
            isNull: [9],
            equalTo: [9],
            notEqualTo: [9],
            distinctFrom: [9],
            notDistinctFrom: [9],
            in: [9],
            notIn: [9],
            lessThan: [9],
            lessThanOrEqualTo: [9],
            greaterThan: [9],
            greaterThanOrEqualTo: [9],
            __typename: [8]
        },
        BigFloatFilter: {
            isNull: [9],
            equalTo: [10],
            notEqualTo: [10],
            distinctFrom: [10],
            notDistinctFrom: [10],
            in: [10],
            notIn: [10],
            lessThan: [10],
            lessThanOrEqualTo: [10],
            greaterThan: [10],
            greaterThanOrEqualTo: [10],
            __typename: [8]
        },
        UserToManyFavoriteFilter: {
            every: [14],
            some: [14],
            none: [14],
            __typename: [8]
        },
        UserToManyPersonalBestGlobalFilter: {
            every: [23],
            some: [23],
            none: [23],
            __typename: [8]
        },
        PersonalBestGlobalFilter: {
            id: [15],
            idRecord: [15],
            idUser: [15],
            idLevel: [15],
            dateCreated: [16],
            dateUpdated: [16],
            recordByIdRecord: [24],
            userByIdUser: [17],
            levelByIdLevel: [33],
            and: [23],
            or: [23],
            not: [23],
            __typename: [8]
        },
        RecordFilter: {
            id: [15],
            idUser: [15],
            time: [25],
            gameVersion: [18],
            isValid: [19],
            idLevel: [15],
            modVersion: [18],
            dateCreated: [16],
            dateUpdated: [16],
            splits: [27],
            speeds: [27],
            recordMediasByIdRecord: [28],
            recordMediasByIdRecordExist: [9],
            personalBestGlobalsByIdRecord: [30],
            personalBestGlobalsByIdRecordExist: [9],
            worldRecordGlobalsByIdRecord: [31],
            worldRecordGlobalsByIdRecordExist: [9],
            personalBestYearliesByIdRecord: [80],
            personalBestYearliesByIdRecordExist: [9],
            personalBestMonthliesByIdRecord: [81],
            personalBestMonthliesByIdRecordExist: [9],
            personalBestWeekliesByIdRecord: [82],
            personalBestWeekliesByIdRecordExist: [9],
            personalBestDailiesByIdRecord: [83],
            personalBestDailiesByIdRecordExist: [9],
            worldRecordMonthliesByIdRecord: [84],
            worldRecordMonthliesByIdRecordExist: [9],
            worldRecordYearliesByIdRecord: [85],
            worldRecordYearliesByIdRecordExist: [9],
            worldRecordWeekliesByIdRecord: [86],
            worldRecordWeekliesByIdRecordExist: [9],
            worldRecordDailiesByIdRecord: [87],
            worldRecordDailiesByIdRecordExist: [9],
            personalBestQuarterliesByIdRecord: [88],
            personalBestQuarterliesByIdRecordExist: [9],
            worldRecordQuarterliesByIdRecord: [89],
            worldRecordQuarterliesByIdRecordExist: [9],
            userByIdUser: [17],
            levelByIdLevel: [33],
            and: [24],
            or: [24],
            not: [24],
            __typename: [8]
        },
        FloatFilter: {
            isNull: [9],
            equalTo: [26],
            notEqualTo: [26],
            distinctFrom: [26],
            notDistinctFrom: [26],
            in: [26],
            notIn: [26],
            lessThan: [26],
            lessThanOrEqualTo: [26],
            greaterThan: [26],
            greaterThanOrEqualTo: [26],
            __typename: [8]
        },
        Float: {},
        FloatListFilter: {
            isNull: [9],
            equalTo: [26],
            notEqualTo: [26],
            distinctFrom: [26],
            notDistinctFrom: [26],
            lessThan: [26],
            lessThanOrEqualTo: [26],
            greaterThan: [26],
            greaterThanOrEqualTo: [26],
            contains: [26],
            containedBy: [26],
            overlaps: [26],
            anyEqualTo: [26],
            anyNotEqualTo: [26],
            anyLessThan: [26],
            anyLessThanOrEqualTo: [26],
            anyGreaterThan: [26],
            anyGreaterThanOrEqualTo: [26],
            __typename: [8]
        },
        RecordToManyRecordMediaFilter: {
            every: [29],
            some: [29],
            none: [29],
            __typename: [8]
        },
        RecordMediaFilter: {
            id: [15],
            idRecord: [15],
            ghostUrl: [18],
            screenshotUrl: [18],
            dateCreated: [16],
            dateUpdated: [16],
            recordByIdRecord: [24],
            and: [29],
            or: [29],
            not: [29],
            __typename: [8]
        },
        RecordToManyPersonalBestGlobalFilter: {
            every: [23],
            some: [23],
            none: [23],
            __typename: [8]
        },
        RecordToManyWorldRecordGlobalFilter: {
            every: [32],
            some: [32],
            none: [32],
            __typename: [8]
        },
        WorldRecordGlobalFilter: {
            id: [15],
            idRecord: [15],
            idLevel: [15],
            dateCreated: [16],
            dateUpdated: [16],
            recordByIdRecord: [24],
            levelByIdLevel: [33],
            and: [32],
            or: [32],
            not: [32],
            __typename: [8]
        },
        LevelFilter: {
            id: [15],
            hash: [18],
            dateCreated: [16],
            dateUpdated: [16],
            favoritesByIdLevel: [34],
            favoritesByIdLevelExist: [9],
            levelPointsByIdLevel: [35],
            levelPointsByIdLevelExist: [9],
            levelItemsByIdLevel: [37],
            levelItemsByIdLevelExist: [9],
            levelMetadataByIdLevel: [39],
            levelMetadataByIdLevelExist: [9],
            personalBestGlobalsByIdLevel: [43],
            personalBestGlobalsByIdLevelExist: [9],
            recordsByIdLevel: [44],
            recordsByIdLevelExist: [9],
            statsGlobalsByIdLevel: [45],
            statsGlobalsByIdLevelExist: [9],
            upvotesByIdLevel: [47],
            upvotesByIdLevelExist: [9],
            worldRecordGlobalsByIdLevel: [49],
            worldRecordGlobalsByIdLevelExist: [9],
            personalBestYearliesByIdLevel: [50],
            personalBestYearliesByIdLevelExist: [9],
            personalBestMonthliesByIdLevel: [52],
            personalBestMonthliesByIdLevelExist: [9],
            personalBestWeekliesByIdLevel: [54],
            personalBestWeekliesByIdLevelExist: [9],
            personalBestDailiesByIdLevel: [56],
            personalBestDailiesByIdLevelExist: [9],
            worldRecordMonthliesByIdLevel: [58],
            worldRecordMonthliesByIdLevelExist: [9],
            worldRecordYearliesByIdLevel: [60],
            worldRecordYearliesByIdLevelExist: [9],
            worldRecordWeekliesByIdLevel: [62],
            worldRecordWeekliesByIdLevelExist: [9],
            worldRecordDailiesByIdLevel: [64],
            worldRecordDailiesByIdLevelExist: [9],
            statsMonthliesByIdLevel: [66],
            statsMonthliesByIdLevelExist: [9],
            statsYearliesByIdLevel: [68],
            statsYearliesByIdLevelExist: [9],
            statsWeekliesByIdLevel: [70],
            statsWeekliesByIdLevelExist: [9],
            statsDailiesByIdLevel: [72],
            statsDailiesByIdLevelExist: [9],
            personalBestQuarterliesByIdLevel: [74],
            personalBestQuarterliesByIdLevelExist: [9],
            statsQuarterliesByIdLevel: [76],
            statsQuarterliesByIdLevelExist: [9],
            worldRecordQuarterliesByIdLevel: [78],
            worldRecordQuarterliesByIdLevelExist: [9],
            and: [33],
            or: [33],
            not: [33],
            __typename: [8]
        },
        LevelToManyFavoriteFilter: {
            every: [14],
            some: [14],
            none: [14],
            __typename: [8]
        },
        LevelToManyLevelPointFilter: {
            every: [36],
            some: [36],
            none: [36],
            __typename: [8]
        },
        LevelPointFilter: {
            id: [15],
            points: [15],
            idLevel: [15],
            dateCreated: [16],
            dateUpdated: [16],
            levelByIdLevel: [33],
            and: [36],
            or: [36],
            not: [36],
            __typename: [8]
        },
        LevelToManyLevelItemFilter: {
            every: [38],
            some: [38],
            none: [38],
            __typename: [8]
        },
        LevelItemFilter: {
            id: [15],
            idLevel: [15],
            workshopId: [20],
            authorId: [20],
            name: [18],
            imageUrl: [18],
            fileAuthor: [18],
            fileUid: [18],
            validationTimeAuthor: [25],
            validationTimeGold: [25],
            validationTimeSilver: [25],
            validationTimeBronze: [25],
            deleted: [19],
            createdAt: [16],
            updatedAt: [16],
            dateCreated: [16],
            dateUpdated: [16],
            levelByIdLevel: [33],
            and: [38],
            or: [38],
            not: [38],
            __typename: [8]
        },
        LevelToManyLevelMetadatumFilter: {
            every: [40],
            some: [40],
            none: [40],
            __typename: [8]
        },
        LevelMetadatumFilter: {
            id: [15],
            idLevel: [15],
            amountCheckpoints: [15],
            amountFinishes: [15],
            amountBlocks: [15],
            typeGround: [15],
            typeSkybox: [15],
            blocks: [41],
            dateCreated: [16],
            dateUpdated: [16],
            levelByIdLevel: [33],
            and: [40],
            or: [40],
            not: [40],
            __typename: [8]
        },
        JSONFilter: {
            isNull: [9],
            equalTo: [42],
            notEqualTo: [42],
            distinctFrom: [42],
            notDistinctFrom: [42],
            in: [42],
            notIn: [42],
            lessThan: [42],
            lessThanOrEqualTo: [42],
            greaterThan: [42],
            greaterThanOrEqualTo: [42],
            contains: [42],
            containsKey: [8],
            containsAllKeys: [8],
            containsAnyKeys: [8],
            containedBy: [42],
            __typename: [8]
        },
        JSON: {},
        LevelToManyPersonalBestGlobalFilter: {
            every: [23],
            some: [23],
            none: [23],
            __typename: [8]
        },
        LevelToManyRecordFilter: {
            every: [24],
            some: [24],
            none: [24],
            __typename: [8]
        },
        LevelToManyStatsGlobalFilter: {
            every: [46],
            some: [46],
            none: [46],
            __typename: [8]
        },
        StatsGlobalFilter: {
            id: [15],
            idUser: [15],
            idLevel: [15],
            key: [18],
            dateCreated: [16],
            dateUpdated: [16],
            value: [20],
            userByIdUser: [17],
            levelByIdLevel: [33],
            levelByIdLevelExists: [9],
            and: [46],
            or: [46],
            not: [46],
            __typename: [8]
        },
        LevelToManyUpvoteFilter: {
            every: [48],
            some: [48],
            none: [48],
            __typename: [8]
        },
        UpvoteFilter: {
            id: [15],
            idUser: [15],
            idLevel: [15],
            dateCreated: [16],
            dateUpdated: [16],
            userByIdUser: [17],
            levelByIdLevel: [33],
            and: [48],
            or: [48],
            not: [48],
            __typename: [8]
        },
        LevelToManyWorldRecordGlobalFilter: {
            every: [32],
            some: [32],
            none: [32],
            __typename: [8]
        },
        LevelToManyPersonalBestYearlyFilter: {
            every: [51],
            some: [51],
            none: [51],
            __typename: [8]
        },
        PersonalBestYearlyFilter: {
            id: [15],
            idRecord: [15],
            idUser: [15],
            idLevel: [15],
            dateCreated: [16],
            dateUpdated: [16],
            year: [15],
            recordByIdRecord: [24],
            userByIdUser: [17],
            levelByIdLevel: [33],
            and: [51],
            or: [51],
            not: [51],
            __typename: [8]
        },
        LevelToManyPersonalBestMonthlyFilter: {
            every: [53],
            some: [53],
            none: [53],
            __typename: [8]
        },
        PersonalBestMonthlyFilter: {
            id: [15],
            idRecord: [15],
            idUser: [15],
            idLevel: [15],
            dateCreated: [16],
            dateUpdated: [16],
            year: [15],
            month: [15],
            recordByIdRecord: [24],
            userByIdUser: [17],
            levelByIdLevel: [33],
            and: [53],
            or: [53],
            not: [53],
            __typename: [8]
        },
        LevelToManyPersonalBestWeeklyFilter: {
            every: [55],
            some: [55],
            none: [55],
            __typename: [8]
        },
        PersonalBestWeeklyFilter: {
            id: [15],
            idRecord: [15],
            idUser: [15],
            idLevel: [15],
            dateCreated: [16],
            dateUpdated: [16],
            year: [15],
            week: [15],
            recordByIdRecord: [24],
            userByIdUser: [17],
            levelByIdLevel: [33],
            and: [55],
            or: [55],
            not: [55],
            __typename: [8]
        },
        LevelToManyPersonalBestDailyFilter: {
            every: [57],
            some: [57],
            none: [57],
            __typename: [8]
        },
        PersonalBestDailyFilter: {
            id: [15],
            idRecord: [15],
            idUser: [15],
            idLevel: [15],
            dateCreated: [16],
            dateUpdated: [16],
            year: [15],
            day: [15],
            recordByIdRecord: [24],
            userByIdUser: [17],
            levelByIdLevel: [33],
            and: [57],
            or: [57],
            not: [57],
            __typename: [8]
        },
        LevelToManyWorldRecordMonthlyFilter: {
            every: [59],
            some: [59],
            none: [59],
            __typename: [8]
        },
        WorldRecordMonthlyFilter: {
            id: [15],
            idRecord: [15],
            idLevel: [15],
            dateCreated: [16],
            dateUpdated: [16],
            year: [15],
            month: [15],
            recordByIdRecord: [24],
            levelByIdLevel: [33],
            and: [59],
            or: [59],
            not: [59],
            __typename: [8]
        },
        LevelToManyWorldRecordYearlyFilter: {
            every: [61],
            some: [61],
            none: [61],
            __typename: [8]
        },
        WorldRecordYearlyFilter: {
            id: [15],
            idRecord: [15],
            idLevel: [15],
            dateCreated: [16],
            dateUpdated: [16],
            year: [15],
            recordByIdRecord: [24],
            levelByIdLevel: [33],
            and: [61],
            or: [61],
            not: [61],
            __typename: [8]
        },
        LevelToManyWorldRecordWeeklyFilter: {
            every: [63],
            some: [63],
            none: [63],
            __typename: [8]
        },
        WorldRecordWeeklyFilter: {
            id: [15],
            idRecord: [15],
            idLevel: [15],
            dateCreated: [16],
            dateUpdated: [16],
            year: [15],
            week: [15],
            recordByIdRecord: [24],
            levelByIdLevel: [33],
            levelByIdLevelExists: [9],
            and: [63],
            or: [63],
            not: [63],
            __typename: [8]
        },
        LevelToManyWorldRecordDailyFilter: {
            every: [65],
            some: [65],
            none: [65],
            __typename: [8]
        },
        WorldRecordDailyFilter: {
            id: [15],
            idRecord: [15],
            idLevel: [15],
            dateCreated: [16],
            dateUpdated: [16],
            year: [15],
            day: [15],
            recordByIdRecord: [24],
            levelByIdLevel: [33],
            and: [65],
            or: [65],
            not: [65],
            __typename: [8]
        },
        LevelToManyStatsMonthlyFilter: {
            every: [67],
            some: [67],
            none: [67],
            __typename: [8]
        },
        StatsMonthlyFilter: {
            id: [15],
            idUser: [15],
            idLevel: [15],
            key: [18],
            dateCreated: [16],
            dateUpdated: [16],
            year: [15],
            month: [15],
            value: [20],
            userByIdUser: [17],
            levelByIdLevel: [33],
            levelByIdLevelExists: [9],
            and: [67],
            or: [67],
            not: [67],
            __typename: [8]
        },
        LevelToManyStatsYearlyFilter: {
            every: [69],
            some: [69],
            none: [69],
            __typename: [8]
        },
        StatsYearlyFilter: {
            id: [15],
            idUser: [15],
            idLevel: [15],
            key: [18],
            dateCreated: [16],
            dateUpdated: [16],
            year: [15],
            value: [20],
            userByIdUser: [17],
            levelByIdLevel: [33],
            levelByIdLevelExists: [9],
            and: [69],
            or: [69],
            not: [69],
            __typename: [8]
        },
        LevelToManyStatsWeeklyFilter: {
            every: [71],
            some: [71],
            none: [71],
            __typename: [8]
        },
        StatsWeeklyFilter: {
            id: [15],
            idUser: [15],
            idLevel: [15],
            key: [18],
            dateCreated: [16],
            dateUpdated: [16],
            year: [15],
            week: [15],
            value: [20],
            userByIdUser: [17],
            levelByIdLevel: [33],
            levelByIdLevelExists: [9],
            and: [71],
            or: [71],
            not: [71],
            __typename: [8]
        },
        LevelToManyStatsDailyFilter: {
            every: [73],
            some: [73],
            none: [73],
            __typename: [8]
        },
        StatsDailyFilter: {
            id: [15],
            idUser: [15],
            idLevel: [15],
            key: [18],
            dateCreated: [16],
            dateUpdated: [16],
            year: [15],
            day: [15],
            value: [20],
            userByIdUser: [17],
            levelByIdLevel: [33],
            levelByIdLevelExists: [9],
            and: [73],
            or: [73],
            not: [73],
            __typename: [8]
        },
        LevelToManyPersonalBestQuarterlyFilter: {
            every: [75],
            some: [75],
            none: [75],
            __typename: [8]
        },
        PersonalBestQuarterlyFilter: {
            id: [15],
            idRecord: [15],
            idUser: [15],
            idLevel: [15],
            dateCreated: [16],
            dateUpdated: [16],
            year: [15],
            quarter: [15],
            recordByIdRecord: [24],
            userByIdUser: [17],
            levelByIdLevel: [33],
            and: [75],
            or: [75],
            not: [75],
            __typename: [8]
        },
        LevelToManyStatsQuarterlyFilter: {
            every: [77],
            some: [77],
            none: [77],
            __typename: [8]
        },
        StatsQuarterlyFilter: {
            id: [15],
            idUser: [15],
            idLevel: [15],
            key: [18],
            dateCreated: [16],
            dateUpdated: [16],
            year: [15],
            quarter: [15],
            value: [20],
            userByIdUser: [17],
            levelByIdLevel: [33],
            levelByIdLevelExists: [9],
            and: [77],
            or: [77],
            not: [77],
            __typename: [8]
        },
        LevelToManyWorldRecordQuarterlyFilter: {
            every: [79],
            some: [79],
            none: [79],
            __typename: [8]
        },
        WorldRecordQuarterlyFilter: {
            id: [15],
            idRecord: [15],
            idLevel: [15],
            dateCreated: [16],
            dateUpdated: [16],
            year: [15],
            quarter: [15],
            recordByIdRecord: [24],
            levelByIdLevel: [33],
            and: [79],
            or: [79],
            not: [79],
            __typename: [8]
        },
        RecordToManyPersonalBestYearlyFilter: {
            every: [51],
            some: [51],
            none: [51],
            __typename: [8]
        },
        RecordToManyPersonalBestMonthlyFilter: {
            every: [53],
            some: [53],
            none: [53],
            __typename: [8]
        },
        RecordToManyPersonalBestWeeklyFilter: {
            every: [55],
            some: [55],
            none: [55],
            __typename: [8]
        },
        RecordToManyPersonalBestDailyFilter: {
            every: [57],
            some: [57],
            none: [57],
            __typename: [8]
        },
        RecordToManyWorldRecordMonthlyFilter: {
            every: [59],
            some: [59],
            none: [59],
            __typename: [8]
        },
        RecordToManyWorldRecordYearlyFilter: {
            every: [61],
            some: [61],
            none: [61],
            __typename: [8]
        },
        RecordToManyWorldRecordWeeklyFilter: {
            every: [63],
            some: [63],
            none: [63],
            __typename: [8]
        },
        RecordToManyWorldRecordDailyFilter: {
            every: [65],
            some: [65],
            none: [65],
            __typename: [8]
        },
        RecordToManyPersonalBestQuarterlyFilter: {
            every: [75],
            some: [75],
            none: [75],
            __typename: [8]
        },
        RecordToManyWorldRecordQuarterlyFilter: {
            every: [79],
            some: [79],
            none: [79],
            __typename: [8]
        },
        UserToManyUserPointFilter: {
            every: [91],
            some: [91],
            none: [91],
            __typename: [8]
        },
        UserPointFilter: {
            id: [15],
            idUser: [15],
            points: [15],
            dateCreated: [16],
            dateUpdated: [16],
            rank: [15],
            worldRecords: [15],
            userByIdUser: [17],
            and: [91],
            or: [91],
            not: [91],
            __typename: [8]
        },
        UserToManyRecordFilter: {
            every: [24],
            some: [24],
            none: [24],
            __typename: [8]
        },
        UserToManyStatsGlobalFilter: {
            every: [46],
            some: [46],
            none: [46],
            __typename: [8]
        },
        UserToManyUpvoteFilter: {
            every: [48],
            some: [48],
            none: [48],
            __typename: [8]
        },
        UserToManyPersonalBestYearlyFilter: {
            every: [51],
            some: [51],
            none: [51],
            __typename: [8]
        },
        UserToManyPersonalBestMonthlyFilter: {
            every: [53],
            some: [53],
            none: [53],
            __typename: [8]
        },
        UserToManyPersonalBestWeeklyFilter: {
            every: [55],
            some: [55],
            none: [55],
            __typename: [8]
        },
        UserToManyPersonalBestDailyFilter: {
            every: [57],
            some: [57],
            none: [57],
            __typename: [8]
        },
        UserToManyStatsMonthlyFilter: {
            every: [67],
            some: [67],
            none: [67],
            __typename: [8]
        },
        UserToManyStatsYearlyFilter: {
            every: [69],
            some: [69],
            none: [69],
            __typename: [8]
        },
        UserToManyStatsWeeklyFilter: {
            every: [71],
            some: [71],
            none: [71],
            __typename: [8]
        },
        UserToManyStatsDailyFilter: {
            every: [73],
            some: [73],
            none: [73],
            __typename: [8]
        },
        UserToManyPersonalBestQuarterlyFilter: {
            every: [75],
            some: [75],
            none: [75],
            __typename: [8]
        },
        UserToManyStatsQuarterlyFilter: {
            every: [77],
            some: [77],
            none: [77],
            __typename: [8]
        },
        PersonalBestGlobalsConnection: {
            nodes: [106],
            edges: [226],
            pageInfo: [112],
            totalCount: [5],
            __typename: [8]
        },
        PersonalBestGlobal: {
            nodeId: [2],
            id: [5],
            idRecord: [5],
            idUser: [5],
            idLevel: [5],
            dateCreated: [6],
            dateUpdated: [6],
            recordByIdRecord: [107],
            userByIdUser: [7],
            levelByIdLevel: [108],
            __typename: [8]
        },
        Record: {
            nodeId: [2],
            id: [5],
            idUser: [5],
            time: [26],
            gameVersion: [8],
            isValid: [9],
            idLevel: [5],
            modVersion: [8],
            dateCreated: [6],
            dateUpdated: [6],
            splits: [26],
            speeds: [26],
            userByIdUser: [7],
            levelByIdLevel: [108],
            recordMediasByIdRecord: [
                221,
                {
                    first: [5],
                    last: [5],
                    offset: [5],
                    before: [11],
                    after: [11],
                    orderBy: [224, '[RecordMediasOrderBy!]'],
                    condition: [225],
                    filter: [29]
                }
            ],
            personalBestGlobalsByIdRecord: [
                105,
                {
                    first: [5],
                    last: [5],
                    offset: [5],
                    before: [11],
                    after: [11],
                    orderBy: [125, '[PersonalBestGlobalsOrderBy!]'],
                    condition: [126],
                    filter: [23]
                }
            ],
            worldRecordGlobalsByIdRecord: [
                141,
                {
                    first: [5],
                    last: [5],
                    offset: [5],
                    before: [11],
                    after: [11],
                    orderBy: [144, '[WorldRecordGlobalsOrderBy!]'],
                    condition: [145],
                    filter: [32]
                }
            ],
            personalBestYearliesByIdRecord: [
                146,
                {
                    first: [5],
                    last: [5],
                    offset: [5],
                    before: [11],
                    after: [11],
                    orderBy: [149, '[PersonalBestYearliesOrderBy!]'],
                    condition: [150],
                    filter: [51]
                }
            ],
            personalBestMonthliesByIdRecord: [
                151,
                {
                    first: [5],
                    last: [5],
                    offset: [5],
                    before: [11],
                    after: [11],
                    orderBy: [154, '[PersonalBestMonthliesOrderBy!]'],
                    condition: [155],
                    filter: [53]
                }
            ],
            personalBestWeekliesByIdRecord: [
                156,
                {
                    first: [5],
                    last: [5],
                    offset: [5],
                    before: [11],
                    after: [11],
                    orderBy: [159, '[PersonalBestWeekliesOrderBy!]'],
                    condition: [160],
                    filter: [55]
                }
            ],
            personalBestDailiesByIdRecord: [
                161,
                {
                    first: [5],
                    last: [5],
                    offset: [5],
                    before: [11],
                    after: [11],
                    orderBy: [164, '[PersonalBestDailiesOrderBy!]'],
                    condition: [165],
                    filter: [57]
                }
            ],
            worldRecordMonthliesByIdRecord: [
                166,
                {
                    first: [5],
                    last: [5],
                    offset: [5],
                    before: [11],
                    after: [11],
                    orderBy: [169, '[WorldRecordMonthliesOrderBy!]'],
                    condition: [170],
                    filter: [59]
                }
            ],
            worldRecordYearliesByIdRecord: [
                171,
                {
                    first: [5],
                    last: [5],
                    offset: [5],
                    before: [11],
                    after: [11],
                    orderBy: [174, '[WorldRecordYearliesOrderBy!]'],
                    condition: [175],
                    filter: [61]
                }
            ],
            worldRecordWeekliesByIdRecord: [
                176,
                {
                    first: [5],
                    last: [5],
                    offset: [5],
                    before: [11],
                    after: [11],
                    orderBy: [179, '[WorldRecordWeekliesOrderBy!]'],
                    condition: [180],
                    filter: [63]
                }
            ],
            worldRecordDailiesByIdRecord: [
                181,
                {
                    first: [5],
                    last: [5],
                    offset: [5],
                    before: [11],
                    after: [11],
                    orderBy: [184, '[WorldRecordDailiesOrderBy!]'],
                    condition: [185],
                    filter: [65]
                }
            ],
            personalBestQuarterliesByIdRecord: [
                206,
                {
                    first: [5],
                    last: [5],
                    offset: [5],
                    before: [11],
                    after: [11],
                    orderBy: [209, '[PersonalBestQuarterliesOrderBy!]'],
                    condition: [210],
                    filter: [75]
                }
            ],
            worldRecordQuarterliesByIdRecord: [
                216,
                {
                    first: [5],
                    last: [5],
                    offset: [5],
                    before: [11],
                    after: [11],
                    orderBy: [219, '[WorldRecordQuarterliesOrderBy!]'],
                    condition: [220],
                    filter: [79]
                }
            ],
            __typename: [8]
        },
        Level: {
            nodeId: [2],
            id: [5],
            hash: [8],
            dateCreated: [6],
            dateUpdated: [6],
            favoritesByIdLevel: [
                3,
                {
                    first: [5],
                    last: [5],
                    offset: [5],
                    before: [11],
                    after: [11],
                    orderBy: [12, '[FavoritesOrderBy!]'],
                    condition: [13],
                    filter: [14]
                }
            ],
            levelPointsByIdLevel: [
                109,
                {
                    first: [5],
                    last: [5],
                    offset: [5],
                    before: [11],
                    after: [11],
                    orderBy: [113, '[LevelPointsOrderBy!]'],
                    condition: [114],
                    filter: [36]
                }
            ],
            levelItemsByIdLevel: [
                115,
                {
                    first: [5],
                    last: [5],
                    offset: [5],
                    before: [11],
                    after: [11],
                    orderBy: [118, '[LevelItemsOrderBy!]'],
                    condition: [119],
                    filter: [38]
                }
            ],
            levelMetadataByIdLevel: [
                120,
                {
                    first: [5],
                    last: [5],
                    offset: [5],
                    before: [11],
                    after: [11],
                    orderBy: [123, '[LevelMetadataOrderBy!]'],
                    condition: [124],
                    filter: [40]
                }
            ],
            personalBestGlobalsByIdLevel: [
                105,
                {
                    first: [5],
                    last: [5],
                    offset: [5],
                    before: [11],
                    after: [11],
                    orderBy: [125, '[PersonalBestGlobalsOrderBy!]'],
                    condition: [126],
                    filter: [23]
                }
            ],
            recordsByIdLevel: [
                127,
                {
                    first: [5],
                    last: [5],
                    offset: [5],
                    before: [11],
                    after: [11],
                    orderBy: [129, '[RecordsOrderBy!]'],
                    condition: [130],
                    filter: [24]
                }
            ],
            statsGlobalsByIdLevel: [
                131,
                {
                    first: [5],
                    last: [5],
                    offset: [5],
                    before: [11],
                    after: [11],
                    orderBy: [134, '[StatsGlobalsOrderBy!]'],
                    condition: [135],
                    filter: [46]
                }
            ],
            upvotesByIdLevel: [
                136,
                {
                    first: [5],
                    last: [5],
                    offset: [5],
                    before: [11],
                    after: [11],
                    orderBy: [139, '[UpvotesOrderBy!]'],
                    condition: [140],
                    filter: [48]
                }
            ],
            worldRecordGlobalsByIdLevel: [
                141,
                {
                    first: [5],
                    last: [5],
                    offset: [5],
                    before: [11],
                    after: [11],
                    orderBy: [144, '[WorldRecordGlobalsOrderBy!]'],
                    condition: [145],
                    filter: [32]
                }
            ],
            personalBestYearliesByIdLevel: [
                146,
                {
                    first: [5],
                    last: [5],
                    offset: [5],
                    before: [11],
                    after: [11],
                    orderBy: [149, '[PersonalBestYearliesOrderBy!]'],
                    condition: [150],
                    filter: [51]
                }
            ],
            personalBestMonthliesByIdLevel: [
                151,
                {
                    first: [5],
                    last: [5],
                    offset: [5],
                    before: [11],
                    after: [11],
                    orderBy: [154, '[PersonalBestMonthliesOrderBy!]'],
                    condition: [155],
                    filter: [53]
                }
            ],
            personalBestWeekliesByIdLevel: [
                156,
                {
                    first: [5],
                    last: [5],
                    offset: [5],
                    before: [11],
                    after: [11],
                    orderBy: [159, '[PersonalBestWeekliesOrderBy!]'],
                    condition: [160],
                    filter: [55]
                }
            ],
            personalBestDailiesByIdLevel: [
                161,
                {
                    first: [5],
                    last: [5],
                    offset: [5],
                    before: [11],
                    after: [11],
                    orderBy: [164, '[PersonalBestDailiesOrderBy!]'],
                    condition: [165],
                    filter: [57]
                }
            ],
            worldRecordMonthliesByIdLevel: [
                166,
                {
                    first: [5],
                    last: [5],
                    offset: [5],
                    before: [11],
                    after: [11],
                    orderBy: [169, '[WorldRecordMonthliesOrderBy!]'],
                    condition: [170],
                    filter: [59]
                }
            ],
            worldRecordYearliesByIdLevel: [
                171,
                {
                    first: [5],
                    last: [5],
                    offset: [5],
                    before: [11],
                    after: [11],
                    orderBy: [174, '[WorldRecordYearliesOrderBy!]'],
                    condition: [175],
                    filter: [61]
                }
            ],
            worldRecordWeekliesByIdLevel: [
                176,
                {
                    first: [5],
                    last: [5],
                    offset: [5],
                    before: [11],
                    after: [11],
                    orderBy: [179, '[WorldRecordWeekliesOrderBy!]'],
                    condition: [180],
                    filter: [63]
                }
            ],
            worldRecordDailiesByIdLevel: [
                181,
                {
                    first: [5],
                    last: [5],
                    offset: [5],
                    before: [11],
                    after: [11],
                    orderBy: [184, '[WorldRecordDailiesOrderBy!]'],
                    condition: [185],
                    filter: [65]
                }
            ],
            statsMonthliesByIdLevel: [
                186,
                {
                    first: [5],
                    last: [5],
                    offset: [5],
                    before: [11],
                    after: [11],
                    orderBy: [189, '[StatsMonthliesOrderBy!]'],
                    condition: [190],
                    filter: [67]
                }
            ],
            statsYearliesByIdLevel: [
                191,
                {
                    first: [5],
                    last: [5],
                    offset: [5],
                    before: [11],
                    after: [11],
                    orderBy: [194, '[StatsYearliesOrderBy!]'],
                    condition: [195],
                    filter: [69]
                }
            ],
            statsWeekliesByIdLevel: [
                196,
                {
                    first: [5],
                    last: [5],
                    offset: [5],
                    before: [11],
                    after: [11],
                    orderBy: [199, '[StatsWeekliesOrderBy!]'],
                    condition: [200],
                    filter: [71]
                }
            ],
            statsDailiesByIdLevel: [
                201,
                {
                    first: [5],
                    last: [5],
                    offset: [5],
                    before: [11],
                    after: [11],
                    orderBy: [204, '[StatsDailiesOrderBy!]'],
                    condition: [205],
                    filter: [73]
                }
            ],
            personalBestQuarterliesByIdLevel: [
                206,
                {
                    first: [5],
                    last: [5],
                    offset: [5],
                    before: [11],
                    after: [11],
                    orderBy: [209, '[PersonalBestQuarterliesOrderBy!]'],
                    condition: [210],
                    filter: [75]
                }
            ],
            statsQuarterliesByIdLevel: [
                211,
                {
                    first: [5],
                    last: [5],
                    offset: [5],
                    before: [11],
                    after: [11],
                    orderBy: [214, '[StatsQuarterliesOrderBy!]'],
                    condition: [215],
                    filter: [77]
                }
            ],
            worldRecordQuarterliesByIdLevel: [
                216,
                {
                    first: [5],
                    last: [5],
                    offset: [5],
                    before: [11],
                    after: [11],
                    orderBy: [219, '[WorldRecordQuarterliesOrderBy!]'],
                    condition: [220],
                    filter: [79]
                }
            ],
            __typename: [8]
        },
        LevelPointsConnection: {
            nodes: [110],
            edges: [111],
            pageInfo: [112],
            totalCount: [5],
            __typename: [8]
        },
        LevelPoint: {
            nodeId: [2],
            id: [5],
            points: [5],
            idLevel: [5],
            dateCreated: [6],
            dateUpdated: [6],
            levelByIdLevel: [108],
            __typename: [8]
        },
        LevelPointsEdge: {
            cursor: [11],
            node: [110],
            __typename: [8]
        },
        PageInfo: {
            hasNextPage: [9],
            hasPreviousPage: [9],
            startCursor: [11],
            endCursor: [11],
            __typename: [8]
        },
        LevelPointsOrderBy: {},
        LevelPointCondition: {
            id: [5],
            points: [5],
            idLevel: [5],
            dateCreated: [6],
            dateUpdated: [6],
            __typename: [8]
        },
        LevelItemsConnection: {
            nodes: [116],
            edges: [117],
            pageInfo: [112],
            totalCount: [5],
            __typename: [8]
        },
        LevelItem: {
            nodeId: [2],
            id: [5],
            idLevel: [5],
            workshopId: [10],
            authorId: [10],
            name: [8],
            imageUrl: [8],
            fileAuthor: [8],
            fileUid: [8],
            validationTimeAuthor: [26],
            validationTimeGold: [26],
            validationTimeSilver: [26],
            validationTimeBronze: [26],
            deleted: [9],
            createdAt: [6],
            updatedAt: [6],
            dateCreated: [6],
            dateUpdated: [6],
            levelByIdLevel: [108],
            __typename: [8]
        },
        LevelItemsEdge: {
            cursor: [11],
            node: [116],
            __typename: [8]
        },
        LevelItemsOrderBy: {},
        LevelItemCondition: {
            id: [5],
            idLevel: [5],
            workshopId: [10],
            authorId: [10],
            name: [8],
            imageUrl: [8],
            fileAuthor: [8],
            fileUid: [8],
            validationTimeAuthor: [26],
            validationTimeGold: [26],
            validationTimeSilver: [26],
            validationTimeBronze: [26],
            deleted: [9],
            createdAt: [6],
            updatedAt: [6],
            dateCreated: [6],
            dateUpdated: [6],
            __typename: [8]
        },
        LevelMetadataConnection: {
            nodes: [121],
            edges: [122],
            pageInfo: [112],
            totalCount: [5],
            __typename: [8]
        },
        LevelMetadatum: {
            nodeId: [2],
            id: [5],
            idLevel: [5],
            amountCheckpoints: [5],
            amountFinishes: [5],
            amountBlocks: [5],
            typeGround: [5],
            typeSkybox: [5],
            blocks: [42],
            dateCreated: [6],
            dateUpdated: [6],
            levelByIdLevel: [108],
            __typename: [8]
        },
        LevelMetadataEdge: {
            cursor: [11],
            node: [121],
            __typename: [8]
        },
        LevelMetadataOrderBy: {},
        LevelMetadatumCondition: {
            id: [5],
            idLevel: [5],
            amountCheckpoints: [5],
            amountFinishes: [5],
            amountBlocks: [5],
            typeGround: [5],
            typeSkybox: [5],
            blocks: [42],
            dateCreated: [6],
            dateUpdated: [6],
            __typename: [8]
        },
        PersonalBestGlobalsOrderBy: {},
        PersonalBestGlobalCondition: {
            id: [5],
            idRecord: [5],
            idUser: [5],
            idLevel: [5],
            dateCreated: [6],
            dateUpdated: [6],
            __typename: [8]
        },
        RecordsConnection: {
            nodes: [107],
            edges: [128],
            pageInfo: [112],
            totalCount: [5],
            __typename: [8]
        },
        RecordsEdge: {
            cursor: [11],
            node: [107],
            __typename: [8]
        },
        RecordsOrderBy: {},
        RecordCondition: {
            id: [5],
            idUser: [5],
            time: [26],
            gameVersion: [8],
            isValid: [9],
            idLevel: [5],
            modVersion: [8],
            dateCreated: [6],
            dateUpdated: [6],
            splits: [26],
            speeds: [26],
            __typename: [8]
        },
        StatsGlobalsConnection: {
            nodes: [132],
            edges: [133],
            pageInfo: [112],
            totalCount: [5],
            __typename: [8]
        },
        StatsGlobal: {
            nodeId: [2],
            id: [5],
            idUser: [5],
            idLevel: [5],
            key: [8],
            dateCreated: [6],
            dateUpdated: [6],
            value: [10],
            userByIdUser: [7],
            levelByIdLevel: [108],
            __typename: [8]
        },
        StatsGlobalsEdge: {
            cursor: [11],
            node: [132],
            __typename: [8]
        },
        StatsGlobalsOrderBy: {},
        StatsGlobalCondition: {
            id: [5],
            idUser: [5],
            idLevel: [5],
            key: [8],
            dateCreated: [6],
            dateUpdated: [6],
            value: [10],
            __typename: [8]
        },
        UpvotesConnection: {
            nodes: [137],
            edges: [138],
            pageInfo: [112],
            totalCount: [5],
            __typename: [8]
        },
        Upvote: {
            nodeId: [2],
            id: [5],
            idUser: [5],
            idLevel: [5],
            dateCreated: [6],
            dateUpdated: [6],
            userByIdUser: [7],
            levelByIdLevel: [108],
            __typename: [8]
        },
        UpvotesEdge: {
            cursor: [11],
            node: [137],
            __typename: [8]
        },
        UpvotesOrderBy: {},
        UpvoteCondition: {
            id: [5],
            idUser: [5],
            idLevel: [5],
            dateCreated: [6],
            dateUpdated: [6],
            __typename: [8]
        },
        WorldRecordGlobalsConnection: {
            nodes: [142],
            edges: [143],
            pageInfo: [112],
            totalCount: [5],
            __typename: [8]
        },
        WorldRecordGlobal: {
            nodeId: [2],
            id: [5],
            idRecord: [5],
            idLevel: [5],
            dateCreated: [6],
            dateUpdated: [6],
            recordByIdRecord: [107],
            levelByIdLevel: [108],
            __typename: [8]
        },
        WorldRecordGlobalsEdge: {
            cursor: [11],
            node: [142],
            __typename: [8]
        },
        WorldRecordGlobalsOrderBy: {},
        WorldRecordGlobalCondition: {
            id: [5],
            idRecord: [5],
            idLevel: [5],
            dateCreated: [6],
            dateUpdated: [6],
            __typename: [8]
        },
        PersonalBestYearliesConnection: {
            nodes: [147],
            edges: [148],
            pageInfo: [112],
            totalCount: [5],
            __typename: [8]
        },
        PersonalBestYearly: {
            nodeId: [2],
            id: [5],
            idRecord: [5],
            idUser: [5],
            idLevel: [5],
            dateCreated: [6],
            dateUpdated: [6],
            year: [5],
            recordByIdRecord: [107],
            userByIdUser: [7],
            levelByIdLevel: [108],
            __typename: [8]
        },
        PersonalBestYearliesEdge: {
            cursor: [11],
            node: [147],
            __typename: [8]
        },
        PersonalBestYearliesOrderBy: {},
        PersonalBestYearlyCondition: {
            id: [5],
            idRecord: [5],
            idUser: [5],
            idLevel: [5],
            dateCreated: [6],
            dateUpdated: [6],
            year: [5],
            __typename: [8]
        },
        PersonalBestMonthliesConnection: {
            nodes: [152],
            edges: [153],
            pageInfo: [112],
            totalCount: [5],
            __typename: [8]
        },
        PersonalBestMonthly: {
            nodeId: [2],
            id: [5],
            idRecord: [5],
            idUser: [5],
            idLevel: [5],
            dateCreated: [6],
            dateUpdated: [6],
            year: [5],
            month: [5],
            recordByIdRecord: [107],
            userByIdUser: [7],
            levelByIdLevel: [108],
            __typename: [8]
        },
        PersonalBestMonthliesEdge: {
            cursor: [11],
            node: [152],
            __typename: [8]
        },
        PersonalBestMonthliesOrderBy: {},
        PersonalBestMonthlyCondition: {
            id: [5],
            idRecord: [5],
            idUser: [5],
            idLevel: [5],
            dateCreated: [6],
            dateUpdated: [6],
            year: [5],
            month: [5],
            __typename: [8]
        },
        PersonalBestWeekliesConnection: {
            nodes: [157],
            edges: [158],
            pageInfo: [112],
            totalCount: [5],
            __typename: [8]
        },
        PersonalBestWeekly: {
            nodeId: [2],
            id: [5],
            idRecord: [5],
            idUser: [5],
            idLevel: [5],
            dateCreated: [6],
            dateUpdated: [6],
            year: [5],
            week: [5],
            recordByIdRecord: [107],
            userByIdUser: [7],
            levelByIdLevel: [108],
            __typename: [8]
        },
        PersonalBestWeekliesEdge: {
            cursor: [11],
            node: [157],
            __typename: [8]
        },
        PersonalBestWeekliesOrderBy: {},
        PersonalBestWeeklyCondition: {
            id: [5],
            idRecord: [5],
            idUser: [5],
            idLevel: [5],
            dateCreated: [6],
            dateUpdated: [6],
            year: [5],
            week: [5],
            __typename: [8]
        },
        PersonalBestDailiesConnection: {
            nodes: [162],
            edges: [163],
            pageInfo: [112],
            totalCount: [5],
            __typename: [8]
        },
        PersonalBestDaily: {
            nodeId: [2],
            id: [5],
            idRecord: [5],
            idUser: [5],
            idLevel: [5],
            dateCreated: [6],
            dateUpdated: [6],
            year: [5],
            day: [5],
            recordByIdRecord: [107],
            userByIdUser: [7],
            levelByIdLevel: [108],
            __typename: [8]
        },
        PersonalBestDailiesEdge: {
            cursor: [11],
            node: [162],
            __typename: [8]
        },
        PersonalBestDailiesOrderBy: {},
        PersonalBestDailyCondition: {
            id: [5],
            idRecord: [5],
            idUser: [5],
            idLevel: [5],
            dateCreated: [6],
            dateUpdated: [6],
            year: [5],
            day: [5],
            __typename: [8]
        },
        WorldRecordMonthliesConnection: {
            nodes: [167],
            edges: [168],
            pageInfo: [112],
            totalCount: [5],
            __typename: [8]
        },
        WorldRecordMonthly: {
            nodeId: [2],
            id: [5],
            idRecord: [5],
            idLevel: [5],
            dateCreated: [6],
            dateUpdated: [6],
            year: [5],
            month: [5],
            recordByIdRecord: [107],
            levelByIdLevel: [108],
            __typename: [8]
        },
        WorldRecordMonthliesEdge: {
            cursor: [11],
            node: [167],
            __typename: [8]
        },
        WorldRecordMonthliesOrderBy: {},
        WorldRecordMonthlyCondition: {
            id: [5],
            idRecord: [5],
            idLevel: [5],
            dateCreated: [6],
            dateUpdated: [6],
            year: [5],
            month: [5],
            __typename: [8]
        },
        WorldRecordYearliesConnection: {
            nodes: [172],
            edges: [173],
            pageInfo: [112],
            totalCount: [5],
            __typename: [8]
        },
        WorldRecordYearly: {
            nodeId: [2],
            id: [5],
            idRecord: [5],
            idLevel: [5],
            dateCreated: [6],
            dateUpdated: [6],
            year: [5],
            recordByIdRecord: [107],
            levelByIdLevel: [108],
            __typename: [8]
        },
        WorldRecordYearliesEdge: {
            cursor: [11],
            node: [172],
            __typename: [8]
        },
        WorldRecordYearliesOrderBy: {},
        WorldRecordYearlyCondition: {
            id: [5],
            idRecord: [5],
            idLevel: [5],
            dateCreated: [6],
            dateUpdated: [6],
            year: [5],
            __typename: [8]
        },
        WorldRecordWeekliesConnection: {
            nodes: [177],
            edges: [178],
            pageInfo: [112],
            totalCount: [5],
            __typename: [8]
        },
        WorldRecordWeekly: {
            nodeId: [2],
            id: [5],
            idRecord: [5],
            idLevel: [5],
            dateCreated: [6],
            dateUpdated: [6],
            year: [5],
            week: [5],
            recordByIdRecord: [107],
            levelByIdLevel: [108],
            __typename: [8]
        },
        WorldRecordWeekliesEdge: {
            cursor: [11],
            node: [177],
            __typename: [8]
        },
        WorldRecordWeekliesOrderBy: {},
        WorldRecordWeeklyCondition: {
            id: [5],
            idRecord: [5],
            idLevel: [5],
            dateCreated: [6],
            dateUpdated: [6],
            year: [5],
            week: [5],
            __typename: [8]
        },
        WorldRecordDailiesConnection: {
            nodes: [182],
            edges: [183],
            pageInfo: [112],
            totalCount: [5],
            __typename: [8]
        },
        WorldRecordDaily: {
            nodeId: [2],
            id: [5],
            idRecord: [5],
            idLevel: [5],
            dateCreated: [6],
            dateUpdated: [6],
            year: [5],
            day: [5],
            recordByIdRecord: [107],
            levelByIdLevel: [108],
            __typename: [8]
        },
        WorldRecordDailiesEdge: {
            cursor: [11],
            node: [182],
            __typename: [8]
        },
        WorldRecordDailiesOrderBy: {},
        WorldRecordDailyCondition: {
            id: [5],
            idRecord: [5],
            idLevel: [5],
            dateCreated: [6],
            dateUpdated: [6],
            year: [5],
            day: [5],
            __typename: [8]
        },
        StatsMonthliesConnection: {
            nodes: [187],
            edges: [188],
            pageInfo: [112],
            totalCount: [5],
            __typename: [8]
        },
        StatsMonthly: {
            nodeId: [2],
            id: [5],
            idUser: [5],
            idLevel: [5],
            key: [8],
            dateCreated: [6],
            dateUpdated: [6],
            year: [5],
            month: [5],
            value: [10],
            userByIdUser: [7],
            levelByIdLevel: [108],
            __typename: [8]
        },
        StatsMonthliesEdge: {
            cursor: [11],
            node: [187],
            __typename: [8]
        },
        StatsMonthliesOrderBy: {},
        StatsMonthlyCondition: {
            id: [5],
            idUser: [5],
            idLevel: [5],
            key: [8],
            dateCreated: [6],
            dateUpdated: [6],
            year: [5],
            month: [5],
            value: [10],
            __typename: [8]
        },
        StatsYearliesConnection: {
            nodes: [192],
            edges: [193],
            pageInfo: [112],
            totalCount: [5],
            __typename: [8]
        },
        StatsYearly: {
            nodeId: [2],
            id: [5],
            idUser: [5],
            idLevel: [5],
            key: [8],
            dateCreated: [6],
            dateUpdated: [6],
            year: [5],
            value: [10],
            userByIdUser: [7],
            levelByIdLevel: [108],
            __typename: [8]
        },
        StatsYearliesEdge: {
            cursor: [11],
            node: [192],
            __typename: [8]
        },
        StatsYearliesOrderBy: {},
        StatsYearlyCondition: {
            id: [5],
            idUser: [5],
            idLevel: [5],
            key: [8],
            dateCreated: [6],
            dateUpdated: [6],
            year: [5],
            value: [10],
            __typename: [8]
        },
        StatsWeekliesConnection: {
            nodes: [197],
            edges: [198],
            pageInfo: [112],
            totalCount: [5],
            __typename: [8]
        },
        StatsWeekly: {
            nodeId: [2],
            id: [5],
            idUser: [5],
            idLevel: [5],
            key: [8],
            dateCreated: [6],
            dateUpdated: [6],
            year: [5],
            week: [5],
            value: [10],
            userByIdUser: [7],
            levelByIdLevel: [108],
            __typename: [8]
        },
        StatsWeekliesEdge: {
            cursor: [11],
            node: [197],
            __typename: [8]
        },
        StatsWeekliesOrderBy: {},
        StatsWeeklyCondition: {
            id: [5],
            idUser: [5],
            idLevel: [5],
            key: [8],
            dateCreated: [6],
            dateUpdated: [6],
            year: [5],
            week: [5],
            value: [10],
            __typename: [8]
        },
        StatsDailiesConnection: {
            nodes: [202],
            edges: [203],
            pageInfo: [112],
            totalCount: [5],
            __typename: [8]
        },
        StatsDaily: {
            nodeId: [2],
            id: [5],
            idUser: [5],
            idLevel: [5],
            key: [8],
            dateCreated: [6],
            dateUpdated: [6],
            year: [5],
            day: [5],
            value: [10],
            userByIdUser: [7],
            levelByIdLevel: [108],
            __typename: [8]
        },
        StatsDailiesEdge: {
            cursor: [11],
            node: [202],
            __typename: [8]
        },
        StatsDailiesOrderBy: {},
        StatsDailyCondition: {
            id: [5],
            idUser: [5],
            idLevel: [5],
            key: [8],
            dateCreated: [6],
            dateUpdated: [6],
            year: [5],
            day: [5],
            value: [10],
            __typename: [8]
        },
        PersonalBestQuarterliesConnection: {
            nodes: [207],
            edges: [208],
            pageInfo: [112],
            totalCount: [5],
            __typename: [8]
        },
        PersonalBestQuarterly: {
            nodeId: [2],
            id: [5],
            idRecord: [5],
            idUser: [5],
            idLevel: [5],
            dateCreated: [6],
            dateUpdated: [6],
            year: [5],
            quarter: [5],
            recordByIdRecord: [107],
            userByIdUser: [7],
            levelByIdLevel: [108],
            __typename: [8]
        },
        PersonalBestQuarterliesEdge: {
            cursor: [11],
            node: [207],
            __typename: [8]
        },
        PersonalBestQuarterliesOrderBy: {},
        PersonalBestQuarterlyCondition: {
            id: [5],
            idRecord: [5],
            idUser: [5],
            idLevel: [5],
            dateCreated: [6],
            dateUpdated: [6],
            year: [5],
            quarter: [5],
            __typename: [8]
        },
        StatsQuarterliesConnection: {
            nodes: [212],
            edges: [213],
            pageInfo: [112],
            totalCount: [5],
            __typename: [8]
        },
        StatsQuarterly: {
            nodeId: [2],
            id: [5],
            idUser: [5],
            idLevel: [5],
            key: [8],
            dateCreated: [6],
            dateUpdated: [6],
            year: [5],
            quarter: [5],
            value: [10],
            userByIdUser: [7],
            levelByIdLevel: [108],
            __typename: [8]
        },
        StatsQuarterliesEdge: {
            cursor: [11],
            node: [212],
            __typename: [8]
        },
        StatsQuarterliesOrderBy: {},
        StatsQuarterlyCondition: {
            id: [5],
            idUser: [5],
            idLevel: [5],
            key: [8],
            dateCreated: [6],
            dateUpdated: [6],
            year: [5],
            quarter: [5],
            value: [10],
            __typename: [8]
        },
        WorldRecordQuarterliesConnection: {
            nodes: [217],
            edges: [218],
            pageInfo: [112],
            totalCount: [5],
            __typename: [8]
        },
        WorldRecordQuarterly: {
            nodeId: [2],
            id: [5],
            idRecord: [5],
            idLevel: [5],
            dateCreated: [6],
            dateUpdated: [6],
            year: [5],
            quarter: [5],
            recordByIdRecord: [107],
            levelByIdLevel: [108],
            __typename: [8]
        },
        WorldRecordQuarterliesEdge: {
            cursor: [11],
            node: [217],
            __typename: [8]
        },
        WorldRecordQuarterliesOrderBy: {},
        WorldRecordQuarterlyCondition: {
            id: [5],
            idRecord: [5],
            idLevel: [5],
            dateCreated: [6],
            dateUpdated: [6],
            year: [5],
            quarter: [5],
            __typename: [8]
        },
        RecordMediasConnection: {
            nodes: [222],
            edges: [223],
            pageInfo: [112],
            totalCount: [5],
            __typename: [8]
        },
        RecordMedia: {
            nodeId: [2],
            id: [5],
            idRecord: [5],
            ghostUrl: [8],
            screenshotUrl: [8],
            dateCreated: [6],
            dateUpdated: [6],
            recordByIdRecord: [107],
            __typename: [8]
        },
        RecordMediasEdge: {
            cursor: [11],
            node: [222],
            __typename: [8]
        },
        RecordMediasOrderBy: {},
        RecordMediaCondition: {
            id: [5],
            idRecord: [5],
            ghostUrl: [8],
            screenshotUrl: [8],
            dateCreated: [6],
            dateUpdated: [6],
            __typename: [8]
        },
        PersonalBestGlobalsEdge: {
            cursor: [11],
            node: [106],
            __typename: [8]
        },
        UserPointsConnection: {
            nodes: [228],
            edges: [229],
            pageInfo: [112],
            totalCount: [5],
            __typename: [8]
        },
        UserPoint: {
            nodeId: [2],
            id: [5],
            idUser: [5],
            points: [5],
            dateCreated: [6],
            dateUpdated: [6],
            rank: [5],
            worldRecords: [5],
            userByIdUser: [7],
            __typename: [8]
        },
        UserPointsEdge: {
            cursor: [11],
            node: [228],
            __typename: [8]
        },
        UserPointsOrderBy: {},
        UserPointCondition: {
            id: [5],
            idUser: [5],
            points: [5],
            dateCreated: [6],
            dateUpdated: [6],
            rank: [5],
            worldRecords: [5],
            __typename: [8]
        },
        FavoritesEdge: {
            cursor: [11],
            node: [4],
            __typename: [8]
        },
        LevelsConnection: {
            nodes: [108],
            edges: [234],
            pageInfo: [112],
            totalCount: [5],
            __typename: [8]
        },
        LevelsEdge: {
            cursor: [11],
            node: [108],
            __typename: [8]
        },
        LevelsOrderBy: {},
        LevelCondition: {
            id: [5],
            hash: [8],
            dateCreated: [6],
            dateUpdated: [6],
            __typename: [8]
        },
        LevelRequestsConnection: {
            nodes: [238],
            edges: [239],
            pageInfo: [112],
            totalCount: [5],
            __typename: [8]
        },
        LevelRequest: {
            nodeId: [2],
            id: [5],
            workshopId: [10],
            uid: [8],
            hash: [8],
            dateCreated: [6],
            dateUpdated: [6],
            __typename: [8]
        },
        LevelRequestsEdge: {
            cursor: [11],
            node: [238],
            __typename: [8]
        },
        LevelRequestsOrderBy: {},
        LevelRequestCondition: {
            id: [5],
            workshopId: [10],
            uid: [8],
            hash: [8],
            dateCreated: [6],
            dateUpdated: [6],
            __typename: [8]
        },
        LevelRequestFilter: {
            id: [15],
            workshopId: [20],
            uid: [18],
            hash: [18],
            dateCreated: [16],
            dateUpdated: [16],
            and: [242],
            or: [242],
            not: [242],
            __typename: [8]
        },
        UsersConnection: {
            nodes: [7],
            edges: [244],
            pageInfo: [112],
            totalCount: [5],
            __typename: [8]
        },
        UsersEdge: {
            cursor: [11],
            node: [7],
            __typename: [8]
        },
        UsersOrderBy: {},
        UserCondition: {
            id: [5],
            steamName: [8],
            banned: [9],
            dateCreated: [6],
            dateUpdated: [6],
            steamId: [10],
            discordId: [10],
            __typename: [8]
        },
        VersionsConnection: {
            nodes: [248],
            edges: [249],
            pageInfo: [112],
            totalCount: [5],
            __typename: [8]
        },
        Version: {
            nodeId: [2],
            id: [5],
            minimum: [8],
            latest: [8],
            dateCreated: [6],
            dateUpdated: [6],
            __typename: [8]
        },
        VersionsEdge: {
            cursor: [11],
            node: [248],
            __typename: [8]
        },
        VersionsOrderBy: {},
        VersionCondition: {
            id: [5],
            minimum: [8],
            latest: [8],
            dateCreated: [6],
            dateUpdated: [6],
            __typename: [8]
        },
        VersionFilter: {
            id: [15],
            minimum: [18],
            latest: [18],
            dateCreated: [16],
            dateUpdated: [16],
            and: [252],
            or: [252],
            not: [252],
            __typename: [8]
        }
    }
}
