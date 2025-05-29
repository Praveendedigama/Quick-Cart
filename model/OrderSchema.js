const mongoose = require('mongoose');
const OrderSchema = new mongoose.Schema({
  products: {
    type: Array,//[productData,discount,qty]
    required: true,
    unique: true,
  },

  total: {
    type: Number,
    
  },
    status: {
        type: String, // pending,cancelled,completed
        required: true,
        
    },

    customer: {
        type: Object, // {userId,email,name}
        required: true,
        
    },
    trackingData: {
        type: Array, 
        required: true,
        
    },
    placedDate: {
        type: Date,
        required: true,
        
    },
    shippedDate: {
        type: Date,
        required: true,
        
    },

});
module.exports = mongoose.model('Order', OrderSchema);