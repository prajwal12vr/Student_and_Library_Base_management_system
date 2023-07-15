const mongoose = require('mongoose');

const adminSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phoneNumber: { type: String },
  branch: { type: String, required: true },
  password: { type: String, required: true }
});

const Admin= mongoose.model('Admin', adminSchema);

// Admin.insertMany({
// name:"Praj",
// email:"prajwalrandive@gmail.com",
// phoneNumber:"9869383486",
// branch:"Electrical",
// password:"Pass@123"
// });
module.exports = Admin;