const mongoose = require('mongoose');
// const Schema = mongoose.Schema; this is the same as teh code immediately below. this is de-structuring
const { Schema } = mongoose;

const UserSchema = new Schema({
  googleId: String
});

mongoose.model('users', UserSchema);
