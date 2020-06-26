
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
<h3>Related posts</h3>
{
  posts.map(post => {

    return(
      <ul>
      <NavLink key={post.id} to={`/post/${post.id}`}>
      <div className="recentPost">
    
          <li>{post.blogTitle}</li>
     

      </div>
  </NavLink>
  </ul>
    )

  })
}

    </div>
   )

 }

export default Sidebar 