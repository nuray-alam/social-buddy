import React from 'react';
import { useHistory } from 'react-router';
import './Post.css'
const Post = (props) => {
    const { id, title, body } = props.post;
    const history = useHistory();
    const showComments = () => {
        const url = `/post/${id}`;
        history.push(url);
    }
    return (
        <div className='post'>
            <h3> <strong>ID: {id}</strong> Title: {title}</h3>
            <p>{body}</p>
            <button onClick={() => showComments(id)}>Show comments</button>
        </div>
    );
};

export default Post;