import React from 'react';
import './Friend.css'
import { Link } from 'react-router-dom';

const Friend = ({friend}) => {
    // console.log(friend);
    const {name,email,company,id,userName,phone} = friend;
    return (
        <div className='friend'>
            <h2>{name}</h2>
            <p>{email}</p>
            <span>{company.name}</span>
            <p><Link to={`/friend/${id}`}>Show me details</Link></p>
        </div>
    );
};

export default Friend;