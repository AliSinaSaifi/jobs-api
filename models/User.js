const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();


const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'name must be provided'],
    minlength: 3,
    maxlength: 50
  },
  email: {
    type: String,
    required: [true, 'email must be provided'],
    unique: true,
    match: [
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      'please provide a valid email'
    ],
  },
  password: {
    type: String,
    required: [true, 'password must be provided'],
    minlength: 6,
  }
});

UserSchema.pre("save", async function(next){
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

UserSchema.methods.createJWT = function(){
return jwt.sign({userId: this._id, name: this.name}, process.env.JWT_SECRET, {expiresIn: process.env.JWT_LIFETIME});
};

UserSchema.methods.comparePassword = async function(candidatePassword){
  const isMatch = await bcrypt.compare(candidatePassword, this.password);
  return isMatch;
}

module.exports = mongoose.model('User', UserSchema);
