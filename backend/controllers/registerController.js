const Register = require("../models/registerModel");
const ErrorHandler = require("../utils/errorHandler");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");

exports.registerationInProject = catchAsyncErrors(async (req, res, next) => {
  // const register = await Register.findOne({user:req.user.id, project:req.params.id});

  // if(register){
  //     res.status(101).json({
  //        message:"You are already registered in this project"
  //       });
  // }

  // else{
  //     res.status(201).json({
  //         success: true,
  //         register,
  //       });
  // }

  req.body.user = req.user.id;

  let register = await Register.findOne({
    user: req.user.id,
    project: req.params.id,
  });

  if (register) {
    res.status(400).json({
      message: "You are already registered in this project",
    });
  } 
  
  else {
    register = await Register.create({ project: req.params.id, user:req.user.id });

    res.status(201).json({
      success: true,
      register,
    });
  }

  // register = await Register.create(req.body);

  // res.status(201).json({
  //   success: true,
  //   register,
  // });
});


  exports.getAllRegisterations = catchAsyncErrors(async (req, res, next) => {
    const registerations = await Register.find();
  
    res.status(200).json({
      success: true,
      registerations,
    });
  });
  

exports.getAllRegistrationProjectOfSpecificUser = catchAsyncErrors(
  async (req, res, next) => {
    // req.body.user = req.user.id;

    const register = await Register.find({ user: req.user.id });

    res.status(201).json({
      success: true,
      register,
    });
  }
);

exports.updateInstallmentStatus = catchAsyncErrors(async (req, res, next) => {
  // req.body.user = req.user.id;

  const register = await Register.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
      runValidators: true,
      useFindAndModify: false,
    }
  );

  // const register = await Register.findOne(user);

  res.status(201).json({
    success: true,
    register,
  });
});
