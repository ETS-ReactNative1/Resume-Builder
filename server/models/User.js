const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema.Types;

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
})

mongoose.model("User", UserSchema)