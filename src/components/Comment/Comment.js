import React from 'react';
import './Comment.css'
const Comment = ({ comment }) => {
    const { name, email } = comment;
    return (
        <div>
            <h1>This is comment component</h1>
            <p>Name: {name}</p>
            <p>Email: {email}</p>
        </div>
    );
};

export default Comment;