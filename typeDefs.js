const { gql} = require('apollo-server-express');

const typeDefs = gql
` 

 type Log {
    id: ID
    createdAt: String
    severity: String
    component: String
    context: String
    message: String
    date : String
 }


 type Query{
    hello: String
    getAllLogs : [Log]
 }

 input tagInput {
    name : String
 }

 input LogInput{
    createdAt: String
    severity: String
    component: String
    context: String
    message: String
    date : String
 }

 type Mutation{
    createLog(
        log: LogInput
    ) : Log
 }
`

module.exports = typeDefs;