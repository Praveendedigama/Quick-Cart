const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: true,
    unique: true,
  },

  displayName: {
    type: String,
    required: true,
  },
  avatar: {
    type: Object,
 },

  password: {
    type: String,
    required: true,
  },    
  roles: {
    type:Array,
    required: true,
  },
  isactive: {
    type: Boolean,
    required: true,
  },
  otp:{
    type: Number,
    
  },
  billingAddress: {
    type: Object,
    
  },
  shippingAddress: {
    type: Object,
  },
 });
 module.exports = mongoose.model('User', UserSchema);
