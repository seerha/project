import React from "react";
import './carousel.css';


class App extends React.Component{
   
    render(){
        
    return (
        <div  id="div2">
            <h1 className="display-3" id="applehead">&nbsp;&nbsp;&nbsp;&nbsp;Apple</h1>
        <div id="carouselExampleIndicators1" className="carousel slide" data-interval="3000" data-ride="carousel" data-pause="false">
        
        <div className="carousel-inner">
        <div className="carousel-item active">
            <img  src="iphone12pro(1).png" alt="First slide" id="img5"/>
            <br/><br></br><br/>
            <div className="carousel-caption" id="div7"><p>Iphone 12 Pro</p></div>
          </div>
          <div className="carousel-item">
            <img  src="iphone121.png" alt="First slide" id="img6"/>
            <br/><br></br><br/><br/><br></br><br></br>
            <div className="carousel-caption" id="div8"><p>Iphone 12</p></div>
          </div>
          <div className="carousel-item">
            <img  src="iphone11promax.png" alt="First slide" id="img1"/>
            <br/><br></br><br/><br></br><br></br>
            <div className="carousel-caption" id="div7"><p>Iphone 11 Pro Max</p></div>
          </div>
          <div className="carousel-item">
            <img  src="iphone11pro.png" id="img1" alt="Second slide"/>
            <br/><br></br><br/><br></br><br></br>
            <div className="carousel-caption" id="div7"><p>Iphone 11 Pro</p></div>
          </div>
          <div className="carousel-item">
            <img  src="iphone11.png" id="img1" alt="Third slide"/>
            <br/><br></br><br/><br></br><br></br>
            <div className="carousel-caption" id="div7"><p>Iphone 11</p></div>
          </div>
          <div className="carousel-item">
            <img  src="iphonexr.png" id="img1" alt="Third slide"/>
            <br/><br></br><br/><br></br><br></br>
            <div className="carousel-caption"id="div7"><p>
                Iphone Xr</p></div>
          </div>
        </div>
        <a className="carousel-control-prev" href="#carouselExampleIndicators1" role="button" data-slide="prev">
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleIndicators1" role="button" data-slide="next">
          <span className="sr-only">Next</span>
        </a>
      </div>
      </div>
    )
    }
}


export default App