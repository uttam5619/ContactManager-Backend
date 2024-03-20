const asyncHandler =require('express-async-handler')
const jwt = require('jsonwebtoken')


const validateToken = asyncHandler(async (req, res, next)=>{

    let token;
    let authHeader = req.headers.authorization || req.headers.authorization
    if(authHeader && authHeader.startsWith('Bearer')){
        token =authHeader.split(' ')[1]
        jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded)=>{
            if(err){
                return res.status(401).json({message:`not a valid token`})
            }
            console.log(decoded)
        })
    }
    next()
})

module.exports = validateToken