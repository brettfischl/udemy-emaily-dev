const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  googleID: String,
  email: String,
  first_name: String,
  last_name: String,
  credits: { type: Number, default: 0 }
});

mongoose.model('users', userSchema);
