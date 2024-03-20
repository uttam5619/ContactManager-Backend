const express = require('express')
const { registerUser, loginUser, currentUser} =require('../controller/userController')
const validateToken = require('../middleware/validateToken')
const userRoute= express.Router()



userRoute.post('/register', registerUser)

userRoute.post('/login', loginUser)

userRoute.get('/current',validateToken, currentUser)

module.exports= userRoute