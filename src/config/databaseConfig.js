const mongoose = require('mongoose')

const connectDB= ()=>{
    
   mongoose.connect('mongodb://localhost:27017/contactManager')
   .then((e)=>{
    console.log(`database connection established ${e.connection.host}`)
   })
   .catch((err)=>{
    console.log(`database connection failed: ${err}`)
   })
}


module.exports = connectDB