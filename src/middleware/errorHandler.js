const {constant} =require('../utils/constant');

const errorHandler=(err, req, res, next)=>{

    const statusCode= req.statusCode? res.statusCode:500

    switch(statusCode) {

        case constant.VALIDATION_ERROR:
           res.json({
            title: "Validation Error",
            statusCode: 400,
            message: err.message,
            stackTrace:err.stack
           })
           break;

        case constant.NOT_FOUND:
            res.json({
                title: "Not Found",
                statusCode:404,
                message: err.message,
                stackTrace:err.stack
            })
            break;

        case constant.NOT_FOUND:
            res.json({
                title: "Not Found",
                statusCode:404,
                message: err.message,
                stackTrace:err.stack
            })
            break;

        case constant.UNAUTHORISED:
            res.json({
                title: "unaruthorised",
                statusCode:401,
                message: err.message,
                stackTrace:err.stack
            })
            break;

        case constant.FORBIDDEN:
            res.json({
                title: "Forbidden",
                statusCode:403,
                message: err.message,
                stackTrace:err.stack
            })
            break;    

        case constant.SERVER_ERROR:
            res.json({
                title: "Not Found",
                statusCode:404,
                message: err.message,
                stackTrace:err.stack
            })
            break;
            
        default:
            console.log('No Error found')
            break;
    }

    next()
}

module.exports = errorHandler