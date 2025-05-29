const mongoose = require('mongoose');
const VoucherDetailsSchema = new mongoose.Schema({
  voucher: {
    type: String,
    required: true,
    
  },

  user: {
    type: Object,
    
  },
    recipient: {
        type: Object,  
        required: true,
        
    },
    cost:{
        type: Number,
        required: true,
    },
    qr:{
        type: Object,  
        required: true,  
    }

});
module.exports = mongoose.model('VoucherDetails', VoucherDetailsSchema);
