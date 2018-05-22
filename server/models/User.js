const mongoose = require('mongoose');
// const Schema = mongoose.Schema; this is the same as teh code immediately below. this is de-structuring
const { Schema } = mongoose;

const UserSchema = new Schema({
  googleId: String,
  credits: { type: Number, default: 0 }
});

mongoose.model('users', UserSchema);
