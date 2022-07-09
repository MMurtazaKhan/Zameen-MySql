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
            <div className="blogPreview" key={blog.id}>
              <h2>Written by {blog.author}</h2>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default BlogMain;
