import Carone from './carousel'
import Carapple from './carouselapple';
import Carsam from './carouselsamsung';
import About from './About';
import React from "react";
import New from "./new"

import './carousel.css';
const Home = ()=>{
    return(
        <body>
            
        <div id="div6">
            <Carone></Carone>
            <Carapple></Carapple>
            <Carsam/>
            <New/>
            <About/>

        </div>
        
        
        </body>
        
    )
} 
export default Home;