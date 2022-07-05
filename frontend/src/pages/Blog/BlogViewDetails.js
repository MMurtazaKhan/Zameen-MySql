import React from 'react'
import blogs from './Blogdata'
import "./Blog.css";
import { useParams } from 'react-router-dom';
import { useState } from 'react';


const BlogViewDetails = () => {
    const { id } = useParams();
    const { title, author, body, img } = blogs[id];






    return (
        <div className='BlogViewDetails' key={id}>
            <article>
                <div className="blogViewHeader">
                    <div className="blogViewHeadInfo">
                        <h1>{title}</h1>
                        <h2>Written By{author}</h2>
                    </div>
                    <div className="blogViewHeadImg">
                        <img src={img}></img>

                    </div>
                </div>

                <div className='blogParadetails'><p>{body}</p></div>
            </article>

        </div>
    )


}

export default BlogViewDetails
