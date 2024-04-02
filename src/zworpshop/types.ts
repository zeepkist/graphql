export default {
    scalars: [2, 5, 6, 7, 8, 9, 11, 12, 13, 19, 24],
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
                    before: [12],
                    after: [12],
                    orderBy: [13, '[LevelsOrderBy!]'],
                    condition: [14]
                }
            ],
            allMetadata: [
                17,
                {
                    first: [5],
                    last: [5],
                    offset: [5],
                    before: [12],
                    after: [12],
                    orderBy: [19, '[MetadataOrderBy!]'],
                    condition: [20]
                }
            ],
            allRequests: [
                21,
                {
                    first: [5],
                    last: [5],
                    offset: [5],
                    before: [12],
                    after: [12],
                    orderBy: [24, '[RequestsOrderBy!]'],
                    condition: [25]
                }
            ],
            levelById: [
                4,
                {
                    id: [5, 'Int!']
                }
            ],
            metadatumById: [
                10,
                {
                    id: [5, 'Int!']
                }
            ],
            requestById: [
                22,
                {
                    id: [5, 'Int!']
                }
            ],
            level: [
                4,
                {
                    nodeId: [2, 'ID!']
                }
            ],
            metadatum: [
                10,
                {
                    nodeId: [2, 'ID!']
                }
            ],
            request: [
                22,
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
            on_Metadatum: [10],
            on_Request: [22],
            __typename: [6]
        },
        ID: {},
        LevelsConnection: {
            nodes: [4],
            edges: [15],
            pageInfo: [16],
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
            metadataId: [5],
            metadatumByMetadataId: [10],
            __typename: [6]
        },
        Int: {},
        String: {},
        Datetime: {},
        BigFloat: {},
        Boolean: {},
        Metadatum: {
            nodeId: [2],
            hash: [6],
            valid: [9],
            checkpoints: [5],
            blocks: [6],
            validation: [11],
            gold: [11],
            silver: [11],
            bronze: [11],
            ground: [5],
            skybox: [5],
            id: [5],
            levelsByMetadataId: [
                3,
                {
                    first: [5],
                    last: [5],
                    offset: [5],
                    before: [12],
                    after: [12],
                    orderBy: [13, '[LevelsOrderBy!]'],
                    condition: [14]
                }
            ],
            __typename: [6]
        },
        Float: {},
        Cursor: {},
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
            metadataId: [5],
            __typename: [6]
        },
        LevelsEdge: {
            cursor: [12],
            node: [4],
            __typename: [6]
        },
        PageInfo: {
            hasNextPage: [9],
            hasPreviousPage: [9],
            startCursor: [12],
            endCursor: [12],
            __typename: [6]
        },
        MetadataConnection: {
            nodes: [10],
            edges: [18],
            pageInfo: [16],
            totalCount: [5],
            __typename: [6]
        },
        MetadataEdge: {
            cursor: [12],
            node: [10],
            __typename: [6]
        },
        MetadataOrderBy: {},
        MetadatumCondition: {
            hash: [6],
            valid: [9],
            checkpoints: [5],
            blocks: [6],
            validation: [11],
            gold: [11],
            silver: [11],
            bronze: [11],
            ground: [5],
            skybox: [5],
            id: [5],
            __typename: [6]
        },
        RequestsConnection: {
            nodes: [22],
            edges: [23],
            pageInfo: [16],
            totalCount: [5],
            __typename: [6]
        },
        Request: {
            nodeId: [2],
            id: [5],
            workshopId: [8],
            uid: [6],
            hash: [6],
            dateCreated: [7],
            __typename: [6]
        },
        RequestsEdge: {
            cursor: [12],
            node: [22],
            __typename: [6]
        },
        RequestsOrderBy: {},
        RequestCondition: {
            id: [5],
            workshopId: [8],
            uid: [6],
            hash: [6],
            dateCreated: [7],
            __typename: [6]
        }
    }
}
