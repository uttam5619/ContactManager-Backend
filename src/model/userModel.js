const mongoose =require('mongoose')

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'please provide the user name']
    },
    email:{
        type: String,
        required: [true, 'please provide the user email'],
       // unique: [true, 'email already exist']
    },
    password:{
        type: String,
        required: [true, 'please provide the user password']
    }
},{timestamps: true})


module.exports = mongoose.model('User',userSchema)