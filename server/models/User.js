// const mongoose = require("mongoose");

// const UserSchema = new mongoose.Schema({
//     name:String,
//     email:String,
//     password:String,
//     role:{
//         type:String,
//         default:"member"
//     }
// });

// module.exports = mongoose.model("User", UserSchema);
// new
const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: {
    type: String
  },

  email: {
    type: String,
    unique: true
  },

  password: {
    type: String
  },

  role: {
    type: String,
    default: "member"
  }
});

module.exports = mongoose.model("User", UserSchema);