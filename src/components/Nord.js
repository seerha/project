import React from 'react';
import './page1.css';
class Nord extends React.Component{
  constructor(props) {
    super(props);
    this.state = {price: "30000"};
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({price: "29000"})
    }, 3000)
  }
  getSnapshotBeforeUpdate(prevProps, prevState) {
    document.getElementById("price1").innerHTML =
    "Without Discount Price : " + prevState.price;
  }
  componentDidUpdate() {
    document.getElementById("price2").innerHTML =
    "With Discount Price : " + this.state.price;
  }
    render(){
        return(
            <div class="container">
            <br/>
            <br/>
        
            <div class="card bg-dark text-light" >
            
            <p id="p1">
              OnePlus Nord </p>
            </div>
            <div class="bg-dark rounded">
            <div id="dprice">
            <p class="display-3 text-light"> Price : {this.state.price}</p>
              <p id="price1" class="display-5 text-light"></p>
              <p id="price2" class="display-5 text-light"></p>
              </div>
              </div>
            <div class="bg-dark rounded">
            <div>
              <br/>
            <img id="i1" src="oneplusnord.png" />
            <div id="d2" class="card bg-light text-dark">
            <p id="p2">Released on 2020, August 04.</p>
            </div>
            <br/>
            
            <div class="card bg-light text-dark" id="d3">
            <p id="p2">184 g weight, 8.2 mm thickness.</p>
            </div>
            <br/>
            
            
            <div class="card bg-light text-dark" id="d2">
              <p id="p2">Android 11, OxygenOS 11.1  </p>
              </div>
              <br/>
              
            <div class="card bg-light text-dark" id="d3">
              <p id="p2">64GB 6GB RAM, 128GB 8GB RAM, 256GB 12GB RAM storage options</p>
              </div>
              <br/>
            
              <div class="card bg-light text-dark" id="d2">
                <p id="p2">6.4", 1080 x 2400 pixels Display Screen.</p>
                </div>
                <br/>
                
                <div class="card bg-light text-dark" id="d3">
                <p id="p2">48 MP, f/1.8, 26mm (wide) Main Camera. </p>
                </div>
                <br/>
                
                
                <div class="card bg-light text-dark" id="d2">
                  <p id="p2">Qualcomm SM7250 Snapdragon 765G 5G Processor </p>
                  </div>
                  <br/>
                  
                <div class="card bg-light text-dark" id="d3">
                  <p id="p2">4115 mAh of Li-Po Battery.</p>
                  </div>
                  <br/>
            </div>
            
            </div>
            <br/>
            <div class="d1">	
            
              <div class="card bg-dark text-light" >
            
                <p id="p1">
                 Complete Specifications</p>
                </div>
            
                <br/>
            
            <div class="table-responsive{-sm|-md|-lg|-xl}" id="table">
            <table class="table table-bordered table-dark table-sm" id="t1" >
              <tr>
                <td>NETWORK</td>
                <td>Technology</td>
                <td>GSM/CDMA/HSPA/EVDO/LTE</td>
              </tr>
            
            
              <tr>
                  <td rowspan="2" >LAUNCH</td>
                <td>Announced</td>
                <td>2020, July 21</td>
              </tr>
              <tr>
                <td >Status</td>
                <td >Available. Released 2020, August 04</td>
              </tr>
              <tr>
                  <td rowspan="4" >BODY</td>
                <td >Dimensions </td>
                <td>158.3 x 73.3 x 8.2 mm (6.23 x 2.89 x 0.32 in)</td></tr>
                <tr>
                    <td>Weight</td>	<td>184 g (6.49 oz)</td></tr>
                    <tr><td>Build</td>	<td>Glass front (Gorilla Glass 5), glass back (Gorilla Glass 5), plastic frame</td></tr>
                     <tr> <td>SIM</td>	<td>Dual SIM (Nano-SIM, dual stand-by)</td>     
                </tr>
              <tr>
                  <td rowspan="4" >DISPLAY</td>	<td>Type</td>	<td>Fluid AMOLED, 90Hz, HDR10+</td></tr>
              <tr><td>Size</td>	<td>6.44 inches, 100.6 cm2 (~86.7% screen-to-body ratio)</td></tr>
              <tr><td>Resolution</td>	<td>1080 x 2400 pixels, 20:9 ratio (~408 ppi density)</td></tr>
            <tr><td>Protection</td>	<td>Corning Gorilla Glass 5</td></tr>
              <tr><td rowspan="4" >PLATFORM</td>	<td>OS</td>	<td>Android 10, upgradable to Android 11, OxygenOS 11.1</td></tr>
              <tr><td>Chipset</td>	<td>Qualcomm SM7250 Snapdragon 765G 5G (7 nm)</td></tr>
              <tr><td>CPU</td>	<td>Octa-core (1x2.4 GHz Kryo 475 Prime & 1x2.2 GHz Kryo 475 Gold & 6x1.8 GHz Kryo 475 Silver)</td></tr>
            <tr><td>GPU</td>	<td>Adreno 620</td></tr>
                 
                 <tr>
                     <td rowspan="2" >MEMORY</td><td>	Card slot</td><td>No</td></tr>
            <tr><td>Internal</td>	<td>64GB 6GB RAM, 128GB 8GB RAM, 256GB 12GB RAM</td>
                     </tr>
                     <tr><td rowspan="3">MAIN CAMERA</td>	<td>Quad</td>	<td>48 MP, f/1.8, 26mm (wide), 1/2.0", 0.8µm, PDAF, OIS<br/>
                     8 MP, f/2.3, 119˚ (ultrawide)<br/>
                     5 MP, f/2.4, (depth)<br/>
                     2 MP, f/2.4, (macro)</td></tr>
                     <tr><td>Features</td>	<td>Dual-LED flash, HDR, panorama</td></tr>
                     <tr><td>Video</td>	<td>4K@30fps, 1080p@30/60/240fps, gyro-EIS</td></tr>
                     <tr><td rowspan="3" >SELFIE CAMERA</td><td>Dual</td><td>32 MP, f/2.5, (wide), 1/2.8", 0.8µm<br/>8 MP, f/2.5, 105˚ (ultrawide), 1/4.0", 1.12µm</td></tr>
                     <tr><td>Features</td>	<td>HDR</td></tr>
                     <tr><td>Video</td>	<td>4K@30/60fps, 1080p@30/60fps</td></tr>
                     <tr><td rowspan="2">SOUND</td>	<td>Loudspeaker</td><td>Yes</td></tr>
                     <tr><td>3.5mm jack</td> <td>No</td></tr>
                    
                     <tr><td rowspan="6">COMMS</td><td>WLAN</td><td>Wi-Fi 802.11 a/b/g/n/ac, dual-band, Wi-Fi Direct, hotspot</td></tr>
                     <tr><td>Bluetooth</td><td>5.1, A2DP, LE, aptX HD</td></tr>
                     <tr><td>GPS</td><td>Yes, with dual-band A-GPS, GLONASS, GALILEO, BDS, SBAS, NavIC</td></tr>
                     <tr><td>NFC</td>	<td>Yes</td></tr>
                     <tr><td>Radio</td>	<td>No</td></tr>
                     <tr><td>USB</td>	<td>USB Type-C 2.0, USB On-The-Go</td></tr>
                     <tr><td >FEATURES</td><td>Sensors</td><td>Fingerprint (under display, optical), accelerometer, gyro, proximity, compass
                      </td></tr>
                     
                     <tr><td rowspan="2">BATTERY</td><td>Type</td><td>Li-Po 4115 mAh, non-removable</td></tr>
                     <tr><td>Charging</td>	<td>Fast charging 30W, 70% in 30 min</td></tr>
                     <tr><td rowspan="3">MISC</td><td>Colors</td><td>Blue Marble, Gray Onyx (Gray Ash)</td></tr>
                     <tr><td>Models</td>	<td>AC2001, AC2003</td></tr>
                     <tr><td>Price</td>	<td>₹ 29,999 / $ 399.99 / £ 329.95 / € 335.00</td></tr>
                   
            </table>
            </div>
            </div>
            <br/>
            
            <div class="card text-white bg-dark mb-3">
              
            <p id="p3">" Here is reference video from one of best tech enthusiasts for the same device.<br/> This would give you better clearity of the fetures and specifications of the device.<br/>Hope you Like it."
            </p>
            </div>
            <br/>
            <br/>
            <div id="d5">
            <iframe id="frame" src="https://www.youtube.com/embed/Xzh8BdaaAvs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> </div>
            <br/>
            <br/>
            

      <br></br><br></br>
            </div>
        )
    
    }
}
export default Nord;