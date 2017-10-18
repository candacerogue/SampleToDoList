const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const User = new Schema (
    {
        'username': String,
        'password' : String
    }
)

const users = mongoose.model('users', User);

// You must export your model through module.exports
// The collection name should be 'student'
module.exports = users;