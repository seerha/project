import React from "react";
import './carousel.css';

const App = ()=>{
    return (
        <div  id="div1">
            <h1 className="display-3">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Oneplus</h1>
        <div id="carouselExampleIndicators" className="carousel slide" data-interval="3000" data-ride="carousel" data-pause="false">
        
        <div className="carousel-inner">
        <div className="carousel-item active">
            <img  src="oneplus9pro(1).png" id="img" alt="Third slide"/>
            <br></br><br></br><br></br><br></br>
            <div className="carousel-caption" id="div5"><p>&nbsp;&nbsp;&nbsp;&nbsp;OnePlus 9 Pro</p></div>
          </div>
          <div className="carousel-item">
            <img  src="oneplus9(1).png" id="img" alt="Third slide"/>
            <br></br><br></br><br></br><br></br>
            <div className="carousel-caption" id="div5"><p>&nbsp;&nbsp;&nbsp;&nbsp;OnePlus 9</p></div>
          </div>
          <div className="carousel-item">
            <img  src="oneplus8pro.png" alt="First slide" id="img"/>
          <br></br><br></br><br></br><br></br>
            <div className="carousel-caption" id="div5"><p>&nbsp;&nbsp;&nbsp;&nbsp;OnePlus 8 Pro</p></div>
          </div>
          <div className="carousel-item">
            <img  src="oneplus8.png" id="img" alt="Second slide"/>
            <br></br><br></br><br></br><br></br>
            <div className="carousel-caption" id="div5"><p>&nbsp;&nbsp;&nbsp;&nbsp;OnePlus 8</p></div>
          </div>
          <div className="carousel-item">
            <img  src="oneplusnord.png" id="img" alt="Third slide"/>
            <br></br><br></br><br></br><br></br>
            <div className="carousel-caption" id="div5" ><p>&nbsp;&nbsp;&nbsp;&nbsp;OnePlus Nord</p></div>
          </div>
          <div className="carousel-item">
            <img  src="oneplus7pro.png" id="img" alt="Third slide"/>
            <br></br><br></br><br></br><br></br>
            <div className="carousel-caption" id="div5"><p>&nbsp;&nbsp;&nbsp;&nbsp;OnePlus 7t Pro</p></div>
          </div>
          
        </div>
        
        <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
          <span className="sr-only">Next</span>
        </a>
      </div>
      </div>
    )
}
export default App