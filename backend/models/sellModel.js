const mongoose = require("mongoose");

const sellSchema = new mongoose.Schema({
  // Property type and location:
  purpose: {
    type: String,
    required: [true, "Please Enter Purpose Of Your Property"],
    trim: true,
  },

  propertyType: {
    type: String,
    required: [true, "Please Enter Property Type"],
  },

  city: {
    type: String,
    required: [true, "Please Enter City"],
  },

  location: {
    type: String,
    required: [true, "Please Enter Location Of Your Property"],
  },

  // Property Details:
  propertyTitle: {
    type: String,
    required: [true, "Please Enter Property Title"],
  },

  description: {
    type: String,
    // required: [true, "Please Enter Product Description"],
  },

  price: {
    type: Number,
    required: [true, "Please Enter Property Price"],
    minLength: [4, "Price should more than 4 characters"],
  },

  landArea: {
    type: Number,
    required: [true, "Please Enter Property Land Area"],
    minLength: [1, "Price should more than 1 characters"],
  },

  units: {
    type: String,
    default: "sq yd",
    required: [true, "Please Enter units Of Your Land Area"],
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },

  // how many people rated s
  ratings: {
    type: Number,
    default: 0,
  },

  numOfReviews: {
    type: Number,
    default: 0
},

  reviews: [
    {
      user: {
        type: mongoose.Schema.ObjectId,
        ref: "User",
        required: true,
      },
      name: {
        type: String,
        required: true,
      },
      rating: {
        type: Number,
        required: true,
      },
    },
  ],
  views: {
    type: Number,
    default: 0,
  },

  // Images:
  images: [
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
  ],

  // User who created:
  user: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
    required: true,
  },
});

module.exports = mongoose.model("Property", sellSchema);
