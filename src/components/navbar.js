import React from 'react';
import './carousel.css';
import techarena from "./tech arena.png";
import { Link , withRouter } from "react-router-dom"; 
function Navbar(){
    return(
        <div>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark" id="navbar-example2">
        <img src={techarena} id="logo"></img>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <a class="nav-link" href="/">Home <span class="sr-only">(current)</span></a>
          </li> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
          <li class="nav-item dropdown active">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">iPhone</a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
            <Link to="/Iphone12pro"><a class="dropdown-item" href="#">Iphone 12 Pro Max</a></Link>
              <Link to="/Iphone12"><a class="dropdown-item" href="#">Iphone 12</a></Link>
              <Link to="/Iphone11pro"><a class="dropdown-item" href="#">Iphone 11 Pro</a></Link>
              <Link to="/Iphone11"><a class="dropdown-item" href="#">Iphone 11</a></Link>
            </div>
          </li> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
			 <li class="nav-item dropdown active">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Samsung</a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
            <Link to="/Samsungnote20ultra"><a class="dropdown-item" href="#">Samsung Note 20 Ultra</a></Link>
              <Link to="/Samsungs20ultra"><a class="dropdown-item" href="#">Samsung S20 Ultra</a></Link>
              <Link to="/SamsungZ"><a class="dropdown-item" href="#">Samsung Zflip</a></Link>
              <Link to="/Samsungfold"><a class="dropdown-item" href="#">Samsung Fold</a></Link>
             
            </div>
          </li> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
			 <li class="nav-item dropdown active">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">OnePlus</a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <Link to="/oneplus9pro"><a class="dropdown-item" href="#">OnePlus 9 Pro</a></Link>
              <Link to="/oneplus9"><a class="dropdown-item" href="#">OnePlus 9</a></Link>
              <Link to="/oneplus8pro"><a class="dropdown-item" href="#">OnePlus 8 Pro</a></Link>
              <Link to="/oneplus8"><a class="dropdown-item" href="#">OnePlus 8</a></Link>
             
            </div>
          </li>
        </ul>
       
      </div>
      
    </nav>

    </div>
    )
}
export default withRouter(Navbar)