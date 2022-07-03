import React from 'react'
import { Link } from "react-router-dom";
import "./Blog.css";
import blogs from './Blogdata'


const BlogMain = () => {


    return (
        <div className='bloglist'>


            {blogs.map((blog) => {
                return (
                    <div className="blogPreview" key={blog.id}>

                        <Link to={`/Blogs/Blogdata/${blog.id}`}>
                            <div className="blogImages"><img src={blog.img}></img></div>
                            <div className="blogInfo">
                                <h1>{blog.title}</h1>
                                <h2>Written by {blog.author}</h2>
                            </div>
                        </Link>
                    </div>
                )

            })}

        </div>

    )
}

export default BlogMain
