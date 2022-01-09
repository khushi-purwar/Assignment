const LogModel = require('./models/logModel');

const resolvers = {
    Query: {
        hello : ()=>{
            return 'hello world'
        },
        getAllLogs : async ()=>{
            return await LogModel.find();
        }
    },

    Mutation: {
        createLog: async (parent, args, context1 , info)=>{
             const {
                createdAt,
                severity,
                component,
                context,
                message,
                date
            } = args.log;
        const log = new LogModel({createdAt, severity, component, context,message, date})
        await log.save();
        return log
        }
    }
}

module.exports = resolvers;