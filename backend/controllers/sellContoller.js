const Property = require("../models/sellModel");
const ErrorHandler = require("../utils/errorHandler");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const ApiFeatures = require("../utils/apifeatures");
const cloudinary = require("cloudinary");
const User = require("../models/userModel");
// Create Property :

exports.createProperty = catchAsyncErrors(async (req, res, next) => {
  let images = [];

  if (typeof req.body.images === "string") {
    images.push(req.body.images);
  } else {
    images = req.body.images;
  }

  const imagesLinks = [];

  for (let i = 0; i < images.length; i++) {
    const result = await cloudinary.v2.uploader.upload(images[i], {
      folder: "property",
    });

    imagesLinks.push({
      public_id: result.public_id,
      url: result.secure_url,
    });
  }



  req.body.images = imagesLinks;
  // const property = await Property.findById(req.params.id);
  const userr = await User.findById(req.user.id);

  req.body.user = userr;

  const property = await Property.create(req.body);

  res.status(201).json({
    success: true,
    property,
  });
});

// Get All Property -->User
exports.getAllProperties = catchAsyncErrors(async (req, res, next) => {
  const resultPerPage = 10;
  const propertyCount = await Property.countDocuments();
  const apiFeature = new ApiFeatures(Property.find(), req.query)
    .search()
    .filter();
  // .pagination(resultPerPage);

  let property = await apiFeature.query;
  let filteredPropertyCount = property.length;
  apiFeature.pagination(resultPerPage);

  // const products = await Product.find();
  property = await apiFeature.query;

  res.status(200).json({
    success: true,
    property,
    propertyCount,
    resultPerPage,
    filteredPropertyCount,
  });
});

// Get Property Details:
exports.getPropertyDetails = catchAsyncErrors(async (req, res, next) => {
  const property = await Property.findById(req.params.id);

  if (!property) {
    return next(new ErrorHandler("Property with given id is not found", 404));
  }

  res.status(200).json({
    success: true,
    property,
  });
});

// Get All Property --Admin:
exports.getAllPropertiesForAdmin = catchAsyncErrors(async (req, res, next) => {
  const property = await Property.find();

  res.status(200).json({
    success: true,
    property,
  });
});

// Update Property --User

exports.updateProperty = catchAsyncErrors(async (req, res, next) => {
  let property = await Property.findById(req.params.id);

  if (!property) {
    return next(new ErrorHandler("Property not found", 404));
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

  property = await Property.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });

  res.status(200).json({
    success: true,
    property,
  });
});

// Delete Property --User

exports.deleteProperty = catchAsyncErrors(async (req, res, next) => {
  const property = await Property.findById(req.params.id);

  if (!property) {
    return next(new ErrorHander("Property not found", 404));
  }

  // Deleting Images From Cloudinary
  // for (let i = 0; i < product.images.length; i++) {
  //   await cloudinary.v2.uploader.destroy(product.images[i].public_id);
  // }

  await property.remove();

  res.status(200).json({
    success: true,
    message: "Property Delete Successfully",
  });
});

// Get All Properties of a specific user :
exports.getAllPropertiesOfSpecificUser = catchAsyncErrors(
  async (req, res, next) => {
    let property = await Property.find({ user: req.user.id });

    res.status(200).json({
      success: true,
      property,
    });
  }
);

// Create New Review or Update the review:

exports.createPropertyReview = catchAsyncErrors(async (req, res, next) => {
  const { rating, comment, productId } = req.body;

  const review = {
    user: req.user._id,
    name: req.user.name,
    rating: Number(rating),
  };

  const property = await Property.findById(productId);

  const isReviewed = property.reviews.find(
    (rev) => rev.user.toString() === req.user._id.toString()
  );

  if (isReviewed) {
    property.reviews.forEach((rev) => {
      if (rev.user.toString() === req.user._id.toString()) rev.rating = rating;
    });
  } else {
    property.reviews.push(review);
    property.numOfReviews = property.reviews.length;
  }

  let avg = 0;
  property.reviews.forEach((rev) => {
    avg += rev.rating;
  });
  property.ratings = avg / property.reviews.length;

  await property.save({ validateBeforeSave: false });

  res.status(200).json({
    success: true,
  });
});

// Get all reviews of a  product:
exports.getPropertyReviews = catchAsyncErrors(async (req, res, next) => {
  const property = await Property.findById(req.query.id);
  if (!property) {
    return next(new ErrorHandler("Product not found", 404));
  }
  res.status(200).json({
    success: true,
    reviews: property.reviews,
  });
});
