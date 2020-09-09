import React from 'react'


import BlogPost from '../../components/BlogPost';
import Sidebar from '../../components/Sidebar';
/**
* @author
* @function Post
**/

const Post = (props) => {

  return(

<div className="row justify-content-between">
<div class="col-md-8 ">
<BlogPost {...props}/>


</div>
<div class="col-md-offset-2 col-md-2 mt-5" style={{height:"50vh", overflow:"hidden;"}}><Sidebar /></div>

</div>

   )

 }

export default Post