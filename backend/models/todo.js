const mongoose = require('mongoose');

const Schema = mongoose.Schema;

let Todo = new Schema({
    title: {
        type: String
    },
    description: {
        type: String
    },
    is_complete: {
        type: Boolean
    },
    due_date: {
        type: Date
    }
});

db.createUser({user: "username", pwd: "password", roles: ["readWrite", "dbAdmin"]});

module.exports = mongoose.model('Todo', Todo);