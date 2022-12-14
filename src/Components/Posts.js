import React from "react";

const Posts = ({posts, loading}) => {
    if (loading) {
        return <h2>loading...</h2>;
    }

    return (
        <ul>
        {posts.map(user => (
            <li key={post.id} className='list-item'>
                {post.title}
            </li>
        ))}
        </ul> 
    );
        
    
};   