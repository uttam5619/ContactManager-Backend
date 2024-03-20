require('dotenv').config();
const app= require('./app');
const connectDB = require('./src/config/databaseConfig');

const PORT=process.env.PORT ||8001

connectDB()


app.listen(PORT,()=>{
    console.log(`server running and listening on ${PORT}`)
})