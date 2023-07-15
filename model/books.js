const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  name: { type: String, required: true,unique:true },
  author: { type: String, required: true},
  section: { type: String }
 });

const Books= mongoose.model('Books', bookSchema);

// Books.insertMany([
//   { name: "ABCD", author: "XYZ", section: "1" },
//   { name: "Mathematics", author: "R.D. Sharma", section: "Civil Engineering" },
//   { name: "Engineering Mechanics", author: "R.C. Hibbeler", section: "Mechanical Engineering" },
//   { name: "Introduction to Electric Circuits", author: "James A. Svoboda", section: "Electrical Engineering" },
//   { name: "Data Structures and Algorithms in Java", author: "Robert Lafore", section: "Computer Science Engineering" },
//   { name: "Chemical Process Principles", author: "Hougen and Watson", section: "Chemical Engineering" },
//   { name: "Aircraft Structures", author: "T.H.G. Megson", section: "Aerospace Engineering" },
//   { name: "Water Resources Engineering", author: "Larry W. Mays", section: "Environmental Engineering" },
//   { name: "Biomedical Signal Processing", author: "Rangaraj M. Rangayyan", section: "Biomedical Engineering" },
//   { name: "Structural Analysis", author: "R.C. Hibbeler", section: "Civil Engineering" },
//   { name: "Machine Design", author: "Robert L. Norton", section: "Mechanical Engineering" },
//   { name: "Power System Analysis and Design", author: "J. Duncan Glover", section: "Electrical Engineering" },
//   { name: "Operating System Concepts", author: "Abraham Silberschatz", section: "Computer Science Engineering" },
//   { name: "Transport Phenomena", author: "Bird, Stewart, and Lightfoot", section: "Chemical Engineering" },
//   { name: "Introduction to Flight", author: "John D. Anderson Jr.", section: "Aerospace Engineering" },
//   { name: "Environmental Engineering: Fundamentals, Sustainability, Design", author: "James R. Mihelcic", section: "Environmental Engineering" },
//   { name: "Biomedical Instrumentation and Measurements", author: "Leslie Cromwell", section: "Biomedical Engineering" },
//   { name: "Structural Dynamics: Theory and Computation", author: "Mario Paz", section: "Civil Engineering" },
//   { name: "Thermal Engineering", author: "R.K. Rajput", section: "Mechanical Engineering" },
//   { name: "Power Electronics", author: "Muhammad H. Rashid", section: "Electrical Engineering" }
// ]);

module.exports = Books;