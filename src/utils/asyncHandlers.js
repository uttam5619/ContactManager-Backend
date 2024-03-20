
const asyncHandler = (requestHandler) => async(req, res, next) =>{

    try{
        requestHandler(req, res, next)
    }catch(err){
        res.status(400).json({
            sucess:false,
            message:err.message
        })
    }

}

