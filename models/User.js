const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  googleID: String,
  email: String,
  first_name: String,
  last_name: String
});

mongoose.model('users', userSchema);
