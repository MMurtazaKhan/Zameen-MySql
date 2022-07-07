const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
  // project type and location:

  projectName: {
    type: String,
    required: [true, "Please Enter Project Name"],
  },

  city: {
    type: String,
    required: [true, "Please Enter City"],
  },

  location: {
    type: String,
    required: [true, "Please Enter Location Of Your Property"],
  },

  // project Details:

  description: {
    type: String,
    // required: [true, "Please Enter Product Description"],
  },

  // price: {
  //   type: Number,
  //   required: [true, "Please Enter Property Price"],
  //   minLength: [4, "Price should more than 4 characters"],
  // },

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

  views: {
    type: Number,
    default: 0,
  },

  startTime: {
    type: Date,
    default: Date.now,
  },

  endTime: {
    type: Date,
    default: Date.now,
  },

  totalCapacity:{
    type:Number,
    require:true,
    default:100,
  },

  // how many people rated
  ratings: {
    type: Number,
    default: 0,
  },

  numOfReviews: {
    type: Number,
    default: 0,
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



  monthlyInstallations: {
    type: Number,
    default: 25000,
  },

  inverstors: 
    {
      companyName: [
        {
          type: String,
          required: true,
        },
      ],
      totalInvestors: {
        type: Number,
        default: 0,
      },
    },
  
});

module.exports = mongoose.model("Project", projectSchema);
