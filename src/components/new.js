import React from "react";
import './carousel.css'

class New extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          oneplus9pro: "",
          oneplus9: "",
          oneplus8pro: "",
          oneplus8: "",
          oneplus7tpro: "",
          oneplusnord: "",
          iphone11promax:"",
          iphone12pro:"",
          iphone12:"",
          iphone11pro:"",
          iphone11:"",
          iphonexr:"",
          s21ultra:"",
          s21:"",
          note20ultra:"",
          s20ultra:"",
          galaxyfold:"",
          galaxyzflip:"",
        };
      }
      changePrice = () => {
        this.setState({oneplus9pro: "Rs-64,999",
        oneplus9: "Rs-49,999",
        oneplus8pro: "Rs-48,999",
        oneplus8: "Rs-41,999",
        oneplus7tpro: "Rs-43,999",
        oneplusnord: "Rs-29,999",
        iphone11promax:"Rs-1,17,100",
        iphone12pro:"Rs-1,15,900",
        iphone12:"Rs-84,900",
        iphone11pro:"Rs-1,06,600",
        iphone11:"Rs-49,999",
        iphonexr:"Rs-40,999",
        s21ultra:"Rs-1,05,900",
        s21:"Rs-69,999",
        note20ultra:"Rs-1,04,600",
        s20ultra:"Rs-87,999",
        galaxyfold:"Rs-1,14,990",
        galaxyzflip:"Rs-84,999",});
      }
      changeApplePrice = () =>{
          this.setState({
        iphone11promax:"Rs-1,16,100",
        iphone12pro:"Rs-1,14,900",
        iphone12:"Rs-83,900",
        iphone11pro:"Rs-1,05,600",
        iphone11:"Rs-48,999",
        iphonexr:"Rs-39,999",});
      }
      changeSamPrice = () =>{
        this.setState({
        s21ultra:"Rs-1,04,900",
        s21:"Rs-68,999",
        note20ultra:"Rs-1,03,600",
        s20ultra:"Rs-86,999",
        galaxyfold:"Rs-1,13,990",
        galaxyzflip:"Rs-83,999",
      });
    }
    changeOnePrice = () =>{
        this.setState({
            oneplus9pro: "Rs-63,999",
        oneplus9: "Rs-48,999",
        oneplus8pro: "Rs-47,999",
        oneplus8: "Rs-40,999",
        oneplus7tpro: "Rs-42,999",
        oneplusnord: "Rs-28,999",
      });
    }
    render(){
        return(
            <div id="price">
                <div class="container mt-2">
      <div class="row">
        <div class="col-12"> </div>
      </div>
    </div>
<hr/>
<hr/>
<div class="container" id="divprice">
 
        
         
              <h2 class="text-center">Pricing Table</h2>
              <hr/>
              <div class="row no-gutters">
              <div class="col-md-3 rounded" id="oneList">
                  <div class="list-group text-center">
                    <div class="list-group-item text-white bg-dark">
                      <h4 class="text-center my-1">OnePlus<br/></h4>
                      
                    </div>
                   
                    <p class="list-group-item">
                        OnePlus 9 Pro <strong>{this.state.oneplus9pro}</strong>
                    </p>
                    <p class="list-group-item">
                        OnePlus 9 <strong>{this.state.oneplus9}</strong>
                    </p>
                    <p class="list-group-item">
                        OnePlus 8 Pro <strong>{this.state.oneplus8pro}</strong>
                    </p>
                    <p class="list-group-item">
                        OnePlus 8 <strong>{this.state.oneplus8}</strong>
                    </p>
                    <p class="list-group-item">
                        OnePlus 7t pro <strong>{this.state.oneplus7tpro}</strong>
                    </p>
                    <p class="list-group-item">
                        OnePlus Nord <strong>{this.state.oneplusnord}</strong>
                    </p>
                    
                  </div>
                  <div class="col-md-12 text-center">
              <button
          type="button" class="btn btn-secondary " 
          onClick={this.changeOnePrice}
        >Discounted Price</button>
        </div>
                </div>
                <div class="col-md-3 rounded" id="appleList">
                  <div class="list-group text-center">
                    <div class="list-group-item text-white bg-dark">
                      <h4 class="text-center my-1">Apple<br/></h4>
                    </div>
                    <p class="list-group-item">
                        Iphone 12 Pro <strong>{this.state.iphone12pro}</strong>
                    </p>
                    <p class="list-group-item">
                        Iphone 12 <strong>{this.state.iphone12}</strong>
                    </p>
                    <p class="list-group-item">
                        Iphone 11 Pro Max <strong>{this.state.iphone11promax}</strong>
                    </p>
                    <p class="list-group-item">
                        Iphone 11 Pro <strong>{this.state.iphone11pro}</strong>
                    </p>
                    <p class="list-group-item">
                        Iphone 11 <strong>{this.state.iphone11}</strong>
                    </p>
                    <p class="list-group-item">
                        Iphone Xr <strong>{this.state.iphonexr}</strong>
                    </p>
                  </div>
                  <div class="col-md-12 text-center">
              <button
          type="button" class="btn btn-secondary " 
          onClick={this.changeApplePrice}
        >Discounted Price</button>
        </div>
                </div>
                <div class="col-md-3 rounded" id="samList">
                  <div class="list-group text-center">
                    <div class="list-group-item text-white bg-dark">
                    <h4 class="text-center my-1">Samsung<br/></h4>
                    </div>
                    <p class="list-group-item">
                        S21 Ultra <strong>{this.state.s21ultra}</strong>
                    </p>
                    <p class="list-group-item">
                        S21 <strong>{this.state.s21}</strong>
                    </p>
                    <p class="list-group-item">
                        Note 20 Ultra <strong>{this.state.note20ultra}</strong>
                    </p>
                    <p class="list-group-item">
                        S20 Ultra <strong>{this.state.s20ultra}</strong>
                    </p>
                    <p class="list-group-item">
                        Galaxy Fold <strong>{this.state.galaxyfold}</strong>
                    </p>
                    <p class="list-group-item">
                         Galaxy Zflip <strong>{this.state.galaxyzflip}</strong>
                    </p>
                  </div>
                  <div class="col-md-12 text-center">
              <button
          type="button" class="btn btn-secondary " 
          onClick={this.changeSamPrice}
        >Discounted Price</button>
        </div>
              </div>
              <br></br>
              <div class="col-md-12 text-center">
                  <br></br>
              <button
          type="button" class="btn btn-success btn-lg" 
          onClick={this.changePrice}
        >Show Pricing</button>
        </div>
        
	  
  </div>
  </div>
    <hr/>
    <br></br><br></br>
	   <section>
      <h2 class="text-center" id="hcolor">Trending Reviews</h2>
     
        
           
            <iframe width="560" height="315" src="https://www.youtube.com/embed/qrzCLgDplTw" title="YouTube video player" frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen id="iframe1"></iframe>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/8eNNJESKjrE" title="YouTube video player" frameborder="0"
             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen id="iframe2"></iframe>
             <iframe width="560" height="315" src="https://www.youtube.com/embed/tn2AgrwXpNQ" title="YouTube video player" frameborder="0" 
             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen id="iframe3"></iframe>
            
   

    </section>
    <br></br><br></br>
            </div>
        )
    }
}
export default New