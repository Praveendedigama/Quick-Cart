 const mongoose = require('mongoose');
 const RefundSchema = new mongoose.Schema({
   order: {
     type: Object,//[productData,discount,qty]
     required: true,
     unique: true,
   },
    
     returnData: {
         type: Object,  
         required: true,
         
     },
     reason: {
         type: String, 
         required: true,
         
     },
     status: {
         type: String, 
         required: true,
         
     },
     refundProcess: {
         type: Array,//process Date
         
     },
     requestDate: {
         type: Date,
         required: true,
         
     },
    refundAmount: {
         type: Number
    }
 });
 module.exports = mongoose.model('Refund', RefundSchema);
 