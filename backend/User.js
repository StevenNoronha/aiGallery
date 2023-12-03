const mongoose = require('mongoose');
const { Schema } = mongoose;

// schema model used for data insertion in mongodb documents
const UserSchema = new Schema({
    username: {
        type:String,
        required: true
    },
    email: {
        type:String,
        required: true
    },
    password: {
        type:String,
        required: true
    },
    org: {
        type:String,
        required: true
    },
});

module.exports = mongoose.model('user', UserSchema);