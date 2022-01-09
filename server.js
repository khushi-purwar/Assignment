const express = require('express');
const {ApolloServer} = require('apollo-server-express');
const mongoose = require('mongoose');


const typeDefs = require('./typeDefs');
const resolvers = require('./resolver');



async function startServer(){
   const app = express();
   const apolloServer = new ApolloServer({
       typeDefs,
       resolvers
   })

   await apolloServer.start();
   apolloServer.applyMiddleware({app: app});

   app.use(( req, res, next)=>{
      res.send("First server on graphql")
   })

   await mongoose.connect(process.env.MONGO_URI,{
       useUnifiedTopology: true,
       useNewUrlParser: true
   });

   app.listen(4000, ()=>{
       console.log("Server is running on port 4000");
   })

   console.log("Database connected!");
   
}

startServer();