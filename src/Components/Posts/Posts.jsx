import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Post from '../Post/Post';
import './Posts.css'

const Posts = () => {
    const posts = useLoaderData();
    return (
        <div>
            <h1>All posts are here:{posts.length}</h1>
            <div className='posts'>
                {
                    posts.map(post => <Post
                        key={post.id}
                        post={post}
                    ></Post>)
                }
            </div>

        </div>
    );
};

export default Posts;