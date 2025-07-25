const mongoose = require('mongoose');
const ReviewSchema = new mongoose.Schema({
  user: {
    type: Object,
    required: true,
    
  },

  product: {
    type: Object,
    required:true,
    
  },
  resource: {
    type: Object,
    required:true,
    
  },
    date: {
        type:Date,  
        required: true,
        
    },
    starCount:{
        type: Number,
        required: true,
    },
    comment: {
        type: String,
        required: true,
        
    },

});
module.exports = mongoose.model('Review', ReviewSchema);
