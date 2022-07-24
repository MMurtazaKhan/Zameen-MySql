import React from "react";
import { Link } from "react-router-dom";
import "./Blog.css";
import blogs from "./Blogdata";

const BlogMain = () => {
  return (
    <>
      <div className="project-head">
        <h1
          className="project-heading"
          style={{ color: "wheat", fontSize: "45px" }}
        >
          Blog
        </h1>
        <h3
          className="project-heading"
          style={{ color: "wheat", fontSize: "35px" }}
        >
          Read the <span className="yellow-color">Amazing Blogs</span> from Us!
        </h3>
      </div>
      <div className="bloglist">
        {blogs.map((blog) => {
          return (
            <div className="blog-card">
          <Link to={`/Blogs/Blogdata/${blog.id}`} className="blog-link">

            <div className="blogPreview" key={blog.id}>

              <h1>Title: {blog.title}</h1>
              <h2>Written by {blog.author}</h2>
              <p>{blog.body.substring(0, 200)}...</p>
              <button className="btn btn-success">View More</button>
            </div>
            
            </Link>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default BlogMain;
