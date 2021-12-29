import React from "react";
import './carousel.css';

const App = ()=>{
    return (
        <div  id="div3">
            <h1 className="display-3">&nbsp;&nbsp;&nbsp;Samsung</h1>
        <div id="carouselExampleIndicators2" className="carousel slide" data-interval="3000" data-ride="carousel" data-pause="false">
        
        <div className="carousel-inner">
        <div className="carousel-item active">
            <img  src="s21ultra2.png" alt="First slide" id="img3"/>
            <br></br><br></br><br></br><br></br><br></br>
            <div className="carousel-caption" id="div4"><p>S21 Ultra</p></div>
          </div>
          <div className="carousel-item ">
            <img  src="s21.png" alt="First slide" id="img4"/>
            <br></br><br></br><br></br><br></br><br></br>
            <div className="carousel-caption" id="div4"><p>S21</p></div>
          </div>
          <div className="carousel-item">
            <img  src="note20ultra.png" alt="First slide" id="img2"/>
            
            <div className="carousel-caption" id="div4"><p>Note 20 Ultra</p></div>
          </div>
          <div className="carousel-item">
            <img  src="s20ultra.png" id="img2" alt="Second slide"/>
          
            <div className="carousel-caption" id="div4"><p>&nbsp;&nbsp;&nbsp;S20 Ultra</p></div>
          </div>
          <div className="carousel-item">
            <img  src="fold.png" id="img2" alt="Third slide"/>
       
            <div className="carousel-caption" id="div4"><p>&nbsp;&nbsp;&nbsp;Galaxy Fold</p></div>
          </div>
          <div className="carousel-item">
            <img  src="zflip.png" id="img2" alt="Third slide"/>
         
            <div className="carousel-caption" id="div4"><p>&nbsp;&nbsp;&nbsp;&nbsp;Galaxy Zflip</p></div>
          </div>
        </div>
        <a className="carousel-control-prev" href="#carouselExampleIndicators2" role="button" data-slide="prev">
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleIndicators2" role="button" data-slide="next">
          <span className="sr-only">Next</span>
        </a>
      </div>
      </div>
    )
}
export default App