import React from 'react';
import './Post.css'
import { Link, useNavigate } from 'react-router-dom';

const Post = ({post}) => {
    const {id,title,body} = post;
    const navigate = useNavigate();
    const handleNavigation = () => {
        navigate(`/post/${id}`);
    }
    return (
        <div className='post'>
            <h4>Id: {id}</h4>
            <p>Title: {title}</p>
            <Link to={`/post/${id}`}>Show Details</Link>
            <button onClick={handleNavigation}>With btn Handler</button>
        </div>
    );
};

export default Post;