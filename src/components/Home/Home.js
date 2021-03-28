import React, { useEffect, useState } from 'react';
import Post from '../Post/Post';
import './Home.css'

const Home = () => {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/posts`;
        fetch(url)
        .then(res => res.json())
        .then(data => setPosts(data))
    }, [])
    return (
        <div>
            <h1>This is Home Component</h1>
            <h2>I have got {posts.length} posts</h2>
            {
                posts.map(pt => <Post post={pt}></Post>)
            }
        </div>
    );
};

export default Home;