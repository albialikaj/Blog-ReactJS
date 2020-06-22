
import React, { useState, useEffect } from 'react';
import blogPost from '../../data/blog.json';
import { NavLink } from 'react-router-dom';

/**
* @author
* @function Sidebar 
**/

const Sidebar  = (props) => {

  const [posts, setPosts] = useState([]);

  useEffect(()=>{

    const posts = blogPost.data;
    setPosts(posts);
  }, posts);

  return(

    <div className="sideBar">
recent
{
  posts.map(post => {

    return(
      <NavLink key={post.id} to={`/post/${post.id}`}>
      <div className="recentPost">
          <h3>{post.blogTitle}</h3>
          <span>{post.postedOn}</span>
      </div>
  </NavLink>
    )

  })
}

    </div>
   )

 }

export default Sidebar 