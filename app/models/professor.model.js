const mongoose = require('mongoose');
const User = require("./user.model");

const Professor = User.discriminator('Professor',
  new mongoose.Schema({ 
    position:{ type : String, default:"teacher"},
    faculty:{ type : String, required : true},
    field:{ type : String, required : true}
}, {discriminatorKey: 'kind'}));

module.exports = Professor;