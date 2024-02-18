const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

//  mongoose.model('Customer', customerSchema);
module.exports = mongoose.models.User || mongoose.model('User', UserSchema);
