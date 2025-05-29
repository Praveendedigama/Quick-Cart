const mongoose = require('mongoose');
const CategorySchema = new mongoose.Schema({
  category: {
    type: String,
    required: true,
    unique: true,
  },

  discription: {
    type: String,
    
  },
    image: {
        type: Object,
        required: true,
        
    },

});
module.exports = mongoose.model('Category', CategorySchema);