const mongoose = require('mongoose');
const VoucherSchema = new mongoose.Schema({
  DisplayName: {
    type: String,
    required: true,
    unique: true,
  },

  discription: {
    type: String,
    
  },
    type: {
        type: String, // %
        required: true,
        
    },

});
module.exports = mongoose.model('Voucher', VoucherSchema);