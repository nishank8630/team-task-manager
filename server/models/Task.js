const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema(
{
  title: {
    type: String,
    required: true
  },

  assignedTo: {
    type: String,
    default: "Unassigned"
  },

  status: {
    type: String,
    default: "Pending"
  },

  dueDate: {
    type: String,
    default: ""
  }
},
{ timestamps: true }
);

module.exports = mongoose.model("Task", TaskSchema);