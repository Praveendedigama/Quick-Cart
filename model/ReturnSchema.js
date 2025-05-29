const mongoose = require('mongoose');
const ReturnSchema = new mongoose.Schema({
    
    order: {
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
       completedData: {
            type: String //Refund,new Product
       }
});

module.exports = mongoose.model('Return', ReturnSchema);