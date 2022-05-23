const mongoose = require("mongoose");

const registerSchema = new mongoose.Schema({
  registeredAt: {
    type: Date,
    default: Date.now,
  },

  //   User who registered:
  user: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
    required: true,
  },

  totalInstallments: {
    type: Number,
    default: 0,
  },

  // property Id:
  project: {
    type: mongoose.Schema.ObjectId,
    ref: "Project",
    required: true,
  },
});

module.exports = mongoose.model("register", registerSchema);
