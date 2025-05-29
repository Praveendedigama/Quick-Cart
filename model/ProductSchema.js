const mongoose = require('mongoose');
const Productschema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },

  discription: {
    type: String,
    required: true,
  },
  category: {
    type: String,
  },
  dealData: {
    type: Object, 
  } ,
  displayPrice: {
    type: Number,

  },
  actualPrice: {
    type: Number,
  },
    image: {
        type: Array,//[{hash,resouceUrl,fileName}]
        required: true,
    },
   qty: {
    type: Number,
    required: true, 
   },
   brand: {
    type: String,
    required: true,
   }

});
module.exports = mongoose.model('Product', Productschema);
