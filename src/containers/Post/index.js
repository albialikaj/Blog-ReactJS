import React from 'react'
import './style.css';
import Card from '../../components/UI/Card';
import BlogPost from '../../components/BlogPost';
import Sidebar from '../../components/Sidebar';
/**
* @author
* @function Post
**/

const Post = (props) => {

console.log(props);


  return(
   <section className="container"> 

<BlogPost {...props}/>
<Sidebar />

        {/* <Card>ss</Card> */}

  
   </section>
   )

 }

export default Post