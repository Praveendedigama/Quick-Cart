 const mongoose = require('mongoose');
 const PaymentSchema = new mongoose.Schema({
   Order: {
     type: Object,
     required: true,
     unique: true,
   },
 
   amount: {
     type: Number,
     required: true,
     
   },
     tax: {
         type: Number, 
         required: true,
         
     },
 
     discount: {
         type: Number, 
         required: true,
         
     },
     extraChargers: {
        type: Number, 
        required: true,
        
    },
    date: {
        type: Date,
        required: true,
        
    },
    transactionDetails: {
        type: Object, // {transactionId, paymentMethod, status}
        required: true,
        
    },
     
 
 });
 module.exports = mongoose.model('Payment', PaymentSchema);
 