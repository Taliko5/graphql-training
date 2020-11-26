const graphql = require('graphql')

const { graphQLObjectType, graphQLID, graphQLString } = graphql;

const MovieType = new graphQLObjectType({
    name: 'Movie',
    fields: () => ({
        id: { type: graphQLID },
        name: { type: graphQLString },
        gerne: { type: graphQLString }
    })
})

const RootQuery = new graphQLObjectType({
    name: 'RootQuery',
    fields: {
        movie: {
            type: MovieType,
            args: { id: { type: graphQLString } },
            // though args we get data
            resolve(parents, args) {

            }
        }
    }
})