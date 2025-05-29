const mongoose = require('mongoose');
const RoleSchema = new mongoose.Schema({
  role: {
    type: String,
    required: true,
    unique: true,
  },

  discription: {
    type: String,
    required: true,
  },

});
module.exports = mongoose.model('Role', RoleSchema);