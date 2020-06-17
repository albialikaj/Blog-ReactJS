import React from 'react';
import './style.css';

/**
* @author
* @function Header
**/

const Header = (props) => {
  return(
    <div>
    <header className="header">
        <nav className="headerMenu">
            <a href="">Home</a>
            <a href="">About us</a>
        </nav>
        <div>
            <a href="#"><i className="fa fa-facebook-square"></i> </a>
            <a href="#"><i className="fa fa-linkedin-square"></i> </a>
            <a href="#"><i className="fa fa-github-square"></i> </a>
        </div>
     </header>
    </div>
   )

 }

export default Header