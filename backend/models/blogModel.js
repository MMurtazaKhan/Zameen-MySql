const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({

  name: {
    type: String,
    required: [true, "Please Enter Project Name"],
  },

  content: {
    type: String,
    required: [true, "Please Enter Product Description"],
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },

  // Images:
  image: 
    {
      public_id: {
        type: String,
        required: true,
      },
      url: {
        type: String,
        required: true,
      },
    },



});

module.exports = mongoose.model("Blog", blogSchema);
