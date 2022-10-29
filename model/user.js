const mongoose = require(`mongoose`);

const userSchema = mongoose.Schema({
  firstName: { type: String, requires: true },
  LastName: { type: String, requires: true },
  email: { type: String, requires: true },
  password: { type: String, requires: true },
  confirmed: {type:Boolean,default:false},
}
,
{
  timestamps:true
});

module.exports = mongoose.model(`user`, userSchema);
