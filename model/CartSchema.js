const mongoose = require('mongoose');
const CartSchema = new mongoose.Schema({
  user: {
    type: Object,
    required: true,
    
  },

  product: {
    type: Object,//productname,productID
    required: true,
  },
  date: {
    type: Date,
    required: true,

 },
 qty: {
    type: Number,
    required: true,
    
  },
  

  
 
 });
module.exports = mongoose.model('Cart', CartSchema);