const Blog = require("../models/blogModel");
const ErrorHandler = require("../utils/errorHandler");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");

// Create Blog :
exports.createBlog = catchAsyncErrors(async (req, res, next) => {
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

  // req.body.user = req.user.id;

  const blog = await Blog.create(req.body);

  res.status(201).json({
    success: true,
    blog,
  });
});

// Get All Blog 
exports.getAllBlogs = catchAsyncErrors(async (req, res, next) => {
  const blogs = await Blog.find();

  res.status(200).json({
    success: true,
    blogs,
  });
});



// Delete Blog --User

exports.deleteBlog = catchAsyncErrors(async (req, res, next) => {
  const blog = await Blog.findById(req.params.id);

  if (!blog) {
    return next(new ErrorHander("Blog not found", 404));
  }

  // Deleting Images From Cloudinary
  // for (let i = 0; i < product.images.length; i++) {
  //   await cloudinary.v2.uploader.destroy(product.images[i].public_id);
  // }

  await blog.remove();

  res.status(200).json({
    success: true,
    message: "Blog Delete Successfully",
  });
});

