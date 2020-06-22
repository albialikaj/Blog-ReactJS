import React , {useState, useEffect} from 'react';

import Card from '../UI/Card';
import blogPost from '../../data/blog.json';

/**
* @author
* @function BlogPost
**/

const BlogPost = (props) => {

const [post,setPost] = useState({});
//reload the content
const[postId,setPostId] = useState("");

useEffect(()=>{
  const postId = props.match.params.postId;
  const post = blogPost.data.find(post => post.id == postId);
  setPost(post);
  setPostId(postId);
}, [post, props.match.params.postId]);

if(post.blogImage == "") return null;

  return(

<div className="blog-post-container">
<Card>

<div className="blogHeader">
<span>Featured</span>
  <h1>{post.blogTitle}</h1>
<span>Posted on: 16 Jan 2020 by Albi Alikaj</span>
</div>
<div className="post-thumb">
  <img src={post.blogImage}/>
  {/* <img src={require('../../assets/images/mustang.jpg')} /> */}
</div>

</Card>
</div>

   )

 }

export default BlogPost