const mongoose = require('mongoose');

const logSchema =  new mongoose.Schema({
    severity : {
        type: String
    },
    component : {
        type: String
    },
    context : {
        type: String
    },
    message : {
        type: String
    },
    tags : [{
        type: String
    }],
    createdAt : {
        type : Date
    }

})

const Log = mongoose.model('log', logSchema);
module.exports = Log;