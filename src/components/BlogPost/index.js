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





<h3 class="my-5">{post.blogTitle}</h3>
<div className="post-thumb">

  
  <img src={post.blogImage}/>
  {/* <img src={require('../../assets/images/mustang.jpg')} /> */}
</div>
<div className="blog-post-text">
<span class="blog-post-tag">Posted on: 16 Jan 2020 by Albi Alikaj</span>
<div class="clearfix"></div>

{post.blogText}
</div>
</Card>
</div>

   )

 }

export default BlogPost