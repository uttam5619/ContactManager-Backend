const express=require('express');
const contactRouter = require('./src/router/contactRoutes.js');
const userRouter= require('./src/router/userRouter.js');

const app = express();

app.use(express.json())
app.use('/api/contact',contactRouter)
app.use('/api/user',userRouter)

app.get('/', (req, res) => {
    res.send({message: 'namaste to the dev'})
})



module.exports=app
