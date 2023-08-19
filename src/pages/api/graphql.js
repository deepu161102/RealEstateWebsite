
import { gql, ApolloServer } from "apollo-server-micro";
import {ApolloServerPluginLandingPageGraphQLPlayground} from "apollo-server-core"
import mongoose from "mongoose";
import resolvers from "../../db/resolvers";
import typeDefs from "../../db/typeDefs";
const mongoString= process.env.MONGO_DB_URI ?  process.env.MONGO_DB_URI :'mongodb://localhost:27017/'


mongoose.connect(mongoString,{useNewUrlParser:true}).then(()=>{
    console.log("db connected..");
    // return server.listen({port:5000})
}).then((res)=>{
    console.log('server running');
}).then(()=>{
    
})




const apolloServer = new ApolloServer({
    typeDefs,
    resolvers,
    playground: true,
    plugins: [ApolloServerPluginLandingPageGraphQLPlayground()],
});

const startServer = apolloServer.start();

export default async function handler(req, res) {
    await startServer;
    await apolloServer.createHandler({
        path: "/api/graphql",
    })(req, res);
}

export const config = {
    api: {
        bodyParser: false,
    },
};