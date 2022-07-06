import React from 'react'
import { Link } from "react-router-dom";
import "./Blog.css";
import blogs from './Blogdata'


const BlogMain = () => {


    return (
        <>

        <div className='project-head'>
        <h1 className="project-heading" style={{color: "wheat", fontSize:"45px"}}>Blog</h1>
        <h3 className="project-heading" style={{color: "wheat", fontSize: "35px"}}>Read the <span className='yellow-color'>Amazing Blogs</span> from Us!</h3>
        </div>
        <div className='bloglist'>


            {blogs.map((blog) => {
                return (
                    <div className="blogPreview" key={blog.id}>

<<<<<<< HEAD
                        <Link to={`/Blogs/Blogdata/${blog.id}`}>
                            <div className="blogImages"><img src={blog.img}></img></div>
                            <div className="blogInfo">
                                <h1>{blog.title}</h1>
=======
>>>>>>> 4f55ffce7feeb2870d272fe2e27b0af8b6c77d7c
                                <h2>Written by {blog.author}</h2>
                            </div>
                   
                )

            })}

        </div>
        </>
    )
}

export default BlogMain
