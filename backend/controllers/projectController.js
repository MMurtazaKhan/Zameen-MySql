const Project = require("../models/projectModel");
const ErrorHandler = require("../utils/errorHandler");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const ApiFeatures = require("../utils/apifeatures");


// Create Project :
exports.createProject = catchAsyncErrors(async (req, res, next) => {
    // let images = [];
  
    //   if (typeof req.body.images === "string") {
    //     images.push(req.body.images);
    //   } else {
    //     images = req.body.images;
    //   }
  
    //   const imagesLinks = [];
  
    //   for (let i = 0; i < images.length; i++) {
    //     const result = await cloudinary.v2.uploader.upload(images[i], {
    //       folder: "products",
    //     });
  
    //     imagesLinks.push({
    //       public_id: result.public_id,
    //       url: result.secure_url,
    //     });
    //   }
  
    //   req.body.images = imagesLinks;
  
    req.body.user = req.user.id;
  
    const project = await Project.create(req.body);
  
    res.status(201).json({
      success: true,
      project,
    });
  });

  // Get All Projects
exports.getAllProjects = catchAsyncErrors(async (req, res, next) => {
  const resultPerPage = 4;
  const projectCount = await Project.countDocuments();
  const apiFeature = new ApiFeatures(Project.find(), req.query)
  .filter()
  .search();
  // .filter();
  // .pagination(resultPerPage);

  let project = await apiFeature.query;
  let filteredProjectCount = project.length;
  apiFeature.pagination(resultPerPage);

  // const products = await Product.find();
  project = await apiFeature.query;

  res.status(200).json({
    success: true,
    project,
    projectCount,
    resultPerPage,
    filteredProjectCount,
  });
  });
  
  // Get Project Details:
  exports.getProjectDetails = catchAsyncErrors(async (req, res, next) => {
    const project = await Project.findById(req.params.id);
  
    if (!project) {
      return next(new ErrorHandler("project with given id is not found", 404));
    }
  
    res.status(200).json({
      success: true,
      project,
    });
  });
  
  
  // Update Project --Admin
  
  exports.updateProject = catchAsyncErrors(async (req, res, next) => {
    let project = await Project.findById(req.params.id);
  
    if (!project) {
      return next(new ErrorHandler("project not found", 404));
    }
  
    // Images Start Here
    // let images = [];
  
    // if (typeof req.body.images === "string") {
    //   images.push(req.body.images);
    // } else {
    //   images = req.body.images;
    // }
  
    // if (images !== undefined) {
    //   // Deleting Images From Cloudinary
    //   for (let i = 0; i < product.images.length; i++) {
    //     await cloudinary.v2.uploader.destroy(product.images[i].public_id);
    //   }
  
    //   const imagesLinks = [];
  
    //   for (let i = 0; i < images.length; i++) {
    //     const result = await cloudinary.v2.uploader.upload(images[i], {
    //       folder: "products",
    //     });
  
    //     imagesLinks.push({
    //       public_id: result.public_id,
    //       url: result.secure_url,
    //     });
    //   }
  
    //   req.body.images = imagesLinks;
    // }
  
    project = await Project.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
      useFindAndModify: false,
    });
  
    res.status(200).json({
      success: true,
      project,
    });
  });
  
  // Delete project --Admin
  
  exports.deleteProject = catchAsyncErrors(async (req, res, next) => {
    const project = await Project.findById(req.params.id);
  
    if (!project) {
      return next(new ErrorHander("project not found", 404));
    }
  
    // Deleting Images From Cloudinary
    // for (let i = 0; i < product.images.length; i++) {
    //   await cloudinary.v2.uploader.destroy(product.images[i].public_id);
    // }
  
    await project.remove();
  
    res.status(200).json({
      success: true,
      message: "project Delete Successfully",
    });
  });
  
  
  // Create New Review or Update the review:
  
  exports.createProjectReview = catchAsyncErrors(async (req, res, next) => {
    const { rating, comment, productId } = req.body;
  
    const review = {
      user: req.user._id,
      name: req.user.name,
      rating: Number(rating),
    };
  
    const project = await Project.findById(productId);
  
    const isReviewed = project.reviews.find(
      (rev) => rev.user.toString() === req.user._id.toString()
    );
  
    if (isReviewed) {
        project.reviews.forEach((rev) => {
        if (rev.user.toString() === req.user._id.toString())
          (rev.rating = rating);
      });
    } else {
        project.reviews.push(review);
        project.numOfReviews = project.reviews.length;
    }
  
    let avg = 0;
    project.reviews.forEach((rev) => {
        avg += rev.rating;
      }) 
      project.ratings= avg / project.reviews.length;
  
    await project.save({ validateBeforeSave: false });
  
    res.status(200).json({
      success: true,
    });
  });
  
  // Get all reviews of a  product:
  exports.getProjectReviews = catchAsyncErrors(async (req, res, next) => {
    const project = await Project.findById(req.query.id);
    if (!project) {
      return next(new ErrorHandler("project not found", 404));
    }
    res.status(200).json({
      success: true,
      reviews: project.reviews
    });
  });