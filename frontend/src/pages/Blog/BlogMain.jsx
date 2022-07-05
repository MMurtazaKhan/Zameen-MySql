import React from 'react'
import { Link } from "react-router-dom";
import "./Blog.css";


const BlogMain = () => {
    const blogs = [
        {
            "title": "Importance Of Houses",

            author: "Abdullah Aziz",
            body: "Lorem ipsum11..",
            id: 1,
            img: "/blogimg1.jpg"
        },
        {
            "title": "Which house is perfect for your living",

            author: "Abdullah Imdad",
            body: "Lorem ipsum22...",
            id: 2,
            img: "/blogimg2.jpg"
        },
        {
            "title": "Increasing Crisis of Houses in Pakistan",

            author: "Murtaza khan",
            body: "Lorem ipsum33...",
            id: 3,
            img: "/blogimg3.jpg"
        },
        {
            "title": "Estate Agencies and Their Roles",

            author: "Abdullah Aziz",
            body: "Lorem ipsum44...",
            id: 4,
            img: "/blogimg4.jpg"
        }

    ];
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

                        <Link to={`/blogs/${blog.id}`}>
                            <div className="blogImages"><img src={blog.img} alt="blogimage"></img></div>
                            <div className="blogInfo">
                                <h1>{blog.title}</h1>
                                <h2>Written by {blog.author}</h2>
                            </div>
                        </Link>
                    </div>
                )

            })}

        </div>
        </>
    )
}

export default BlogMain
