import React from 'react';
import './Navbar.css';
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <div class="topnav" id="myTopnav">
       <Link to="/slide"> Home </Link>
        <Link to="/news"> Menu </Link>
        <a href="/contact">Contact</a>
        <a href="/about">About</a>
        <a href="javascript:void(0);" class="icon" onclick="myFunction()">
          <i class="fa fa-bars"></i>
        </a>
      </div>
    )
}

export default Navbar;
