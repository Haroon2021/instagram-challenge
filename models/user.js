const mongoose = require("mongoose");
const jwt = require('jsonwebtoken')

const userSchema = new mongoose.Schema({
    name: {type: String, require: true},
    userName: {type: String, require: true},
    email: {type: String, require: true},
    password: {type: String, require: true},
})

userSchema.methods.generateAuthToken = function () {
    const token = jwt.sign(_id: this_id).process.env.JWTPRIVATEKEY)
}

const User = mongoose.model("User", UserSchema)

module.exports = User;