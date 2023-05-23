import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

const FriendDetail = () => {

    const friend = useLoaderData();
    console.log(friend);
    const navigate = useNavigate();
    const handleGoBack = () => {
        navigate(-1)
    }

    return (
        <div>
            <h1>Here is the detail of my friend</h1>
            <h3>Name: {friend.name}</h3>
            <h4>Username: {friend.username}</h4>
            <p>Phone: {friend.phone}</p>
            <p>Email: {friend.email}</p>
            <p>Website: {friend.website}</p>
            <p>Company: {friend.company.name}</p>
            <p>Address: <span>Street: {friend.address.street}</span> , 
                <span>Suite: {friend.address.suite}</span> , 
                <span>City: {friend.address.city}</span> , 
                <span>Zipcode: {friend.address.zipcode}</span> , 
                <span>Geo: {friend.address.geo.lng}</span>
            </p>
            <button onClick={handleGoBack}>Go Back</button>
        </div>
    );
};

export default FriendDetail;