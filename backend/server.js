const app = require("./app");
const dotenv = require("dotenv");
const connectDataBase = require("./config/database");
const cloudinary = require("cloudinary")

// Handling Uncaught Exception:

process.on("uncaughtException", (err)=>{
    console.log(`Error ${err.message}`);
    console.log(`Shutting down the server due to unhandled exception`);
    process.exit(1);
})




//Connecting to database:
connectDataBase();


// Cloudinary:
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const server = app.listen(process.env.PORT, () => {
  console.log(`Server is working on port http:localhost:${process.env.PORT}`);
});

// Unhandled Promise Rejection:

process.on("unhandledRejection", (err) => {
  console.log(`Error ${err.message}`);
  console.log(`Shutting down the server due to Promise Rejection`);

  server.close(() => {
    process.exit(1);
  });
});
