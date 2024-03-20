const express =require('express');
const {getContact, getIndividualContact, postContact, patchContact, putContact, deleteContact } =require('../controller/contactController.js')


const contactRouter= express.Router()



contactRouter.route('/').get(getContact).post(postContact)

contactRouter.route('/:id').get(getIndividualContact)
.patch(patchContact)
.put(putContact)
.delete(deleteContact)


module.exports = contactRouter