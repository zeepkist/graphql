export default {
    scalars: [2, 5, 6, 7, 8, 9, 10, 12, 14, 19],
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
            allLevelsViews: [
                3,
                {
                    first: [5],
                    last: [5],
                    offset: [5],
                    before: [12],
                    after: [12],
                    orderBy: [14, '[LevelsViewsOrderBy!]'],
                    condition: [15]
                }
            ],
            allLevels: [
                16,
                {
                    first: [5],
                    last: [5],
                    offset: [5],
                    before: [12],
                    after: [12],
                    orderBy: [19, '[LevelsOrderBy!]'],
                    condition: [20]
                }
            ],
            levelById: [
                17,
                {
                    id: [5, 'Int!']
                }
            ],
            level: [
                17,
                {
                    nodeId: [2, 'ID!']
                }
            ],
            __typename: [7]
        },
        Node: {
            nodeId: [2],
            on_Query: [0],
            on_Level: [17],
            __typename: [7]
        },
        ID: {},
        LevelsViewsConnection: {
            nodes: [4],
            edges: [11],
            pageInfo: [13],
            totalCount: [5],
            __typename: [7]
        },
        LevelsView: {
            id: [5],
            workshopId: [6],
            authorId: [6],
            name: [7],
            createdAt: [8],
            updatedAt: [8],
            imageUrl: [7],
            fileUrl: [7],
            fileUid: [7],
            fileHash: [7],
            fileAuthor: [7],
            valid: [9],
            validation: [10],
            gold: [10],
            silver: [10],
            bronze: [10],
            __typename: [7]
        },
        Int: {},
        BigFloat: {},
        String: {},
        Datetime: {},
        Boolean: {},
        Float: {},
        LevelsViewsEdge: {
            cursor: [12],
            node: [4],
            __typename: [7]
        },
        Cursor: {},
        PageInfo: {
            hasNextPage: [9],
            hasPreviousPage: [9],
            startCursor: [12],
            endCursor: [12],
            __typename: [7]
        },
        LevelsViewsOrderBy: {},
        LevelsViewCondition: {
            id: [5],
            workshopId: [6],
            authorId: [6],
            name: [7],
            createdAt: [8],
            updatedAt: [8],
            imageUrl: [7],
            fileUrl: [7],
            fileUid: [7],
            fileHash: [7],
            fileAuthor: [7],
            valid: [9],
            validation: [10],
            gold: [10],
            silver: [10],
            bronze: [10],
            __typename: [7]
        },
        LevelsConnection: {
            nodes: [17],
            edges: [18],
            pageInfo: [13],
            totalCount: [5],
            __typename: [7]
        },
        Level: {
            nodeId: [2],
            id: [5],
            name: [7],
            imageUrl: [7],
            createdAt: [8],
            updatedAt: [8],
            workshopId: [6],
            valid: [9],
            validation: [10],
            gold: [10],
            silver: [10],
            bronze: [10],
            authorId: [6],
            fileHash: [7],
            fileUrl: [7],
            fileAuthor: [7],
            fileUid: [7],
            replacedBy: [5],
            __typename: [7]
        },
        LevelsEdge: {
            cursor: [12],
            node: [17],
            __typename: [7]
        },
        LevelsOrderBy: {},
        LevelCondition: {
            id: [5],
            name: [7],
            imageUrl: [7],
            createdAt: [8],
            updatedAt: [8],
            workshopId: [6],
            valid: [9],
            validation: [10],
            gold: [10],
            silver: [10],
            bronze: [10],
            authorId: [6],
            fileHash: [7],
            fileUrl: [7],
            fileAuthor: [7],
            fileUid: [7],
            replacedBy: [5],
            __typename: [7]
        }
    }
}
