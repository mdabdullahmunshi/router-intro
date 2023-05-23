import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

const PostDetail = () => {
    const post = useLoaderData();
    const navigate = useNavigate();
    const goBack = () => {
        navigate(-1)
    }
    return (
        <div>
            <h1>Here is the detail of this post-</h1>
            <h4>Id: {post.id}</h4>
            <p>Title: {post.title}</p>
            <p>Body: {post.body}</p>
            <button onClick={goBack}>Go Back</button>
        </div>
    );
};

export default PostDetail;