import React, {useState} from 'react';
import {NavLink} from 'react-router-dom';
import './style.css';

/**
* @author
* @function Navbar
**/

const Navbar = (props) => {
// part 2, 6:00
const [search, setSearch] = useState(false);

const submitSearch = (e) =>{
  e.preventDefault();
  alert("searchInput");
}

const openSearch = () =>{
  setSearch(true);
}

const searchClass = search ? 'searchInput' : 'searchInput';

  return(
    <div className="navbar">

<ul className="navbarMenu">
    <li><NavLink  to="/">Home</NavLink></li>
    <li><NavLink  to="/about">About us</NavLink></li>
    <li><NavLink  to="/post">Posts</NavLink></li>

</ul>
<div className="search">
<form onSubmit={submitSearch}>
<input type="text" className="searchInput" placeholder="Search"/>
    <img onClick={openSearch} classname="searchIcon" src={require('../../assets/icons/search.png')} alt="Search" />
</form>
</div>

    </div>
   )

 }

export default Navbar