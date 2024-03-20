const asyncHandler =require('express-async-handler')
const Contact = require('../model/contactModel.js')


const getContact =asyncHandler(async (req,res)=>{
    const contacts=await Contact.find()
    res.status(200).json({contacts})
})


const getIndividualContact= asyncHandler(async(req,res)=>{

    try{
    const contact =await Contact.findById(req.params.id)
    res.status(200).json({contact})
    }catch(err){
        res.status(400).json({message: err.message})
    }
 
})


const postContact =asyncHandler(async (req,res)=>{
    
    const { name, email, phone } =req.body
    
    console.log(name, email, phone)
    if(!name || !email || !phone)
    return response.status(400).json({
        sucess: false,
        message:'please enter all the required information'
    })

    try {
        const contact = await Contact.create({
            name, email, phone
        })
        res.status(200).json({contact})
    }catch(err){
       console.log('document creation failed: ')
    }

       
})



const patchContact = asyncHandler((req,res)=>{
        res.status(200).json({
            message:`this is get patch for sn individual ${req.params.id}`
        })
})



const putContact =asyncHandler(async(req,res)=>{

    const { name, email, phone } =req.body
    console.log(name, email, phone)
    if(!name || !email || !phone)
    return res.status(404).json({message: `details not found`})

    try{
        const contact = await Contact.findById(req.params.id) 
        const updateContact = await Contact.findByIdAndUpdate(req.params.id, req.body, {new: true})
        res.status(200).json({updateContact})
    }catch(err){
        res.status(400).json({
            message:`failed to update contact`
        })
    }  
})



const deleteContact = asyncHandler(async (req,res)=>{

    try{
        const contact= await Contact.findById(req.params.id)
        if (!contact) return res.status(404).json({ sucess:false, message:`contact not found to delete`})
        if (contact) console.log('contact found',contact)
        await Contact.remove();
        res.status(200).json({success:true, message:`contact deleted successfully`})
    }catch(err){
        res.status(400).json({
            message:`failed to delete contact`
        })
    }

})


module.exports ={ 
    getContact,
    putContact,
    deleteContact,
    patchContact, 
    getIndividualContact, 
    postContact
}