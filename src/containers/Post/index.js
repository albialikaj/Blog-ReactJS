import React from 'react'

import Card from '../../components/UI/Card';
import BlogPost from '../../components/BlogPost';
import Sidebar from '../../components/Sidebar';
/**
* @author
* @function Post
**/

const Post = (props) => {

  return(
   <section className="main"> 

<div class="col-md-8">
<BlogPost {...props}/>
</div>
<Sidebar />

   </section>
   )

 }

export default Post