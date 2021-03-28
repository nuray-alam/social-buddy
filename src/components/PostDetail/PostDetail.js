import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Comment from '../Comment/Comment';
import './PostDetail.css'
const PostDetail = () => {

    const { id } = useParams();
    const [post, setPost] = useState({});
    const [comments, setComments] = useState([]);
    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/posts/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setPost(data))
    }, [id])
    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/comments?postId=${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setComments(data))
    }, [id])
    return (
        <div>
            <h1>This is Post Detail id: {id}</h1>
            <h3>User posted : {post.userId}</h3>
            <p>Title: {post.title}</p>
            <p>Post body: {post.body}</p>
            <p>Number of comments: {comments.length}</p>
            {
                comments.map(comment => <Comment comment = {comment}></Comment>)
            }
        </div>
    );
};

export default PostDetail; <h1>This is Post Detail Component</h1>