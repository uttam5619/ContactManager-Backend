const asyncHandler =require('express-async-handler');
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const User = require('../model/userModel')

//post method
//access public
const registerUser = asyncHandler(async (req,res)=>{

    const { name, email, password } = req.body
    console.log(name, email, password)
    if(!name|| !email|| !password)
    return res.status(400).json({sucess:false, message:`All fields are mandatory`})

    const isUserExist= await User.findOne({email})
    if(isUserExist)return res.status(404).json({sucess:false, message:`user already exists`}) 

    //hash password
    const hashPassword =await bcrypt.hash(password,10)
    console.log('hash password:',hashPassword)
    // creating the entry of user in database with hashed password
    const userInfo= await User.create({name,email,password:hashPassword})
    if(!userInfo) return res.status(400).json({sucess:false, message:`failed to create user`})
    res.status(200).json({ sucess:true, message:`Successfully registered`, data:userInfo})

})

//post Method
//access Public
const loginUser =asyncHandler(async (req,res)=>{

    const {email, password} =req.body
    if(!email ||!password )return res.status(400).json({sucess:false, message:`all fields are required`})

    const user =await User.findOne({email})
    if(!user) return res.status(400).json({sucess:false, message:`user not found`})

    if(user && (await bcrypt.compare(password,user.password))){
        const accessToken =jwt.sign({
            user:{
                name:user.name,
                email:user.email,
                id:user.id
            }
        },process.env.ACCESS_TOKEN_SECRET,
        {expiresIn:"5m"}
        )
        return res.status(200).json({sucess:true, token:accessToken})
    }else{
        return res.status(400).json({sucess:false,message:`got issues with access token`})
    }


    //res.status(200).json({ sucess:true, message:`Successfully login`})
})

//get method
//access Private
const currentUser =asyncHandler(async (req, res)=>{
    res.status(200).json({ sucess:true, message:` i am the user `})
})

module.exports = { registerUser, loginUser, currentUser }