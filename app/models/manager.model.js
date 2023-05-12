const mongoose = require('mongoose');
const User = require("./user.model");

const Manager = User.discriminator('Manager',
  new mongoose.Schema({ 
    faculty:{ type : String, required : true}
}, {discriminatorKey: 'kind'}));

module.exports = Manager;