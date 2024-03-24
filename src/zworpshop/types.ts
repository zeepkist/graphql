export default {
    scalars: [2, 5, 6, 7, 8, 9, 11, 13, 17, 19],
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
            allLevels: [
                3,
                {
                    first: [5],
                    last: [5],
                    offset: [5],
                    before: [11],
                    after: [11],
                    orderBy: [13, '[LevelsOrderBy!]'],
                    condition: [14]
                }
            ],
            allMetadata: [
                15,
                {
                    first: [5],
                    last: [5],
                    offset: [5],
                    before: [11],
                    after: [11],
                    orderBy: [19, '[MetadataOrderBy!]'],
                    condition: [20]
                }
            ],
            levelById: [
                4,
                {
                    id: [5, 'Int!']
                }
            ],
            metadatumByHash: [
                16,
                {
                    hash: [6, 'String!']
                }
            ],
            level: [
                4,
                {
                    nodeId: [2, 'ID!']
                }
            ],
            metadatum: [
                16,
                {
                    nodeId: [2, 'ID!']
                }
            ],
            __typename: [6]
        },
        Node: {
            nodeId: [2],
            on_Query: [0],
            on_Level: [4],
            on_Metadatum: [16],
            __typename: [6]
        },
        ID: {},
        LevelsConnection: {
            nodes: [4],
            edges: [10],
            pageInfo: [12],
            totalCount: [5],
            __typename: [6]
        },
        Level: {
            nodeId: [2],
            id: [5],
            name: [6],
            imageUrl: [6],
            createdAt: [7],
            updatedAt: [7],
            workshopId: [8],
            authorId: [8],
            fileHash: [6],
            fileUrl: [6],
            fileAuthor: [6],
            fileUid: [6],
            replacedBy: [5],
            deleted: [9],
            __typename: [6]
        },
        Int: {},
        String: {},
        Datetime: {},
        BigFloat: {},
        Boolean: {},
        LevelsEdge: {
            cursor: [11],
            node: [4],
            __typename: [6]
        },
        Cursor: {},
        PageInfo: {
            hasNextPage: [9],
            hasPreviousPage: [9],
            startCursor: [11],
            endCursor: [11],
            __typename: [6]
        },
        LevelsOrderBy: {},
        LevelCondition: {
            id: [5],
            name: [6],
            imageUrl: [6],
            createdAt: [7],
            updatedAt: [7],
            workshopId: [8],
            authorId: [8],
            fileHash: [6],
            fileUrl: [6],
            fileAuthor: [6],
            fileUid: [6],
            replacedBy: [5],
            deleted: [9],
            __typename: [6]
        },
        MetadataConnection: {
            nodes: [16],
            edges: [18],
            pageInfo: [12],
            totalCount: [5],
            __typename: [6]
        },
        Metadatum: {
            nodeId: [2],
            hash: [6],
            valid: [9],
            checkpoints: [5],
            blocks: [6],
            validation: [17],
            gold: [17],
            silver: [17],
            bronze: [17],
            ground: [5],
            skybox: [5],
            __typename: [6]
        },
        Float: {},
        MetadataEdge: {
            cursor: [11],
            node: [16],
            __typename: [6]
        },
        MetadataOrderBy: {},
        MetadatumCondition: {
            hash: [6],
            valid: [9],
            checkpoints: [5],
            blocks: [6],
            validation: [17],
            gold: [17],
            silver: [17],
            bronze: [17],
            ground: [5],
            skybox: [5],
            __typename: [6]
        }
    }
}
