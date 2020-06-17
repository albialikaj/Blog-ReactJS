import React from 'react';
import './style.css';

/**
* @author
* @function Navbar
**/

const Navbar = (props) => {
  return(
    <div className="navbar">

<ul className="navbarMenu">
    <li><a href="#">Home</a></li>
    <li><a href="#">About us</a></li>
    <li><a href="#">Posts</a></li>

</ul>
<div>
    <input placeholder="Search"/>
    {/* <img src={require('../../assets/icons/search.png')} alt="Search" /> */}
</div>

    </div>
   )

 }

export default Navbar