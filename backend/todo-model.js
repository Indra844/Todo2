const Mongoose = require('mongoose');

const schema = Mongoose.Schema;

let Todo = new schema({
    description:{
        type:String
    },
    responsibility:{
        type:String
    },
    priority:{
        type:String
    },
    completed:{
        type:Boolean
    }
});
module.exports = Mongoose.model('Todo',Todo);
