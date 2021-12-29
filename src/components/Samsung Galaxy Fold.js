import React from 'react';
import './page1.css';
class Fold extends React.Component{
  constructor(props) {
    super(props);
    this.state = {price: "1,54,000"};
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({price: "1,39,999"})
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
              Samsung Galaxy Fold</p>
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
            <img id="fold" src="fold.png" />
            <div id="d2" class="card bg-light text-dark">
            <p id="p2">Released on 2019, September</p>
            </div>
            <br/>
            
            <div class="card bg-light text-dark" id="d3">
            <p id="p2">263g weight, 6.9mm thickness.</p>
            </div>
            <br/>
            
            
            <div class="card bg-light text-dark" id="d2">
              <p id="p2">Android 9, OneUI 1.5  </p>
              </div>
              <br/>
              
            <div class="card bg-light text-dark" id="d3">
              <p id="p2">512GB storage, microSDXC not supported.</p>
              </div>
              <br/>
            
              <div class="card bg-light text-dark" id="d2">
                <p id="p2">7.3", 1536X2152 pixels Display Screen.</p>
                </div>
                <br/>
                
                <div class="card bg-light text-dark" id="d3">
                <p id="p2">16 MP, 2160p Main Camera.</p>
                </div>
                <br/>
                
                
                <div class="card bg-light text-dark" id="d2">
                  <p id="p2">Snapdragon 855 Processor with 12GB of RAM </p>
                  </div>
                  <br/>
                  
                <div class="card bg-light text-dark" id="d3">
                  <p id="p2">4380 mAh of Li-Po Battery.</p>
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
                <td>GSM/HSPA/LTE</td>
              </tr>
            
            
              <tr>
                  <td rowspan="2" >LAUNCH</td>
                <td>Announced</td>
                <td>2019, February</td>
              </tr>
              <tr>
                <td >Status</td>
                <td >Available. Released 2019, September</td>
              </tr>
              <tr>
                  <td rowspan="4" >BODY</td>
                <td >Dimensions </td>
                <td>Unfolded: 160.9 x 117.9 x 6.9 mm<br/>Folded: 160.9 x 62.9 x 15.5 mm</td></tr>
                <tr>
                    <td>Weight</td>	<td>263 g (9.28 oz)</td></tr>
                    <tr><td>Build</td>	<td>Glass front (folded), plastic front (unfolded), glass back, aluminum frame</td></tr>
                     <tr> <td>SIM</td>	<td>Nano-SIM, eSIM</td>     
                </tr>
              <tr>
                  <td rowspan="4" >DISPLAY</td>	<td>Type</td>	<td>Foldable Dynamic AMOLED capacitive touchscreen, 16M colors</td></tr>
              <tr><td>Size</td>	<td>7.3 inches, 162.6 cm2 (~85.7% screen-to-body ratio)</td></tr>
              <tr><td>Resolution</td>	<td>1536 x 2152 pixels (~362 ppi density)</td></tr>
            <tr><td>Protection</td>	<td>Cover display: 4.6"<br/>Super AMOLED, 720 x 1680 pixels (21:9)<br/>HDR 10+</td></tr>
              <tr><td rowspan="4" >PLATFORM</td>	<td>OS</td>	<td>Android 9, One UI 1.5</td></tr>
              <tr><td>Chipset</td>	<td>Qualcomm SM8150 Snapdragon 855 (7 nm)</td></tr>
              <tr><td>CPU</td>	<td>Octa-core (1x2.95 GHz Kryo 485 & 3x2.41 GHz Kryo 485 & 4x1.78 GHz Kryo 485)</td></tr>
            <tr><td>GPU</td>	<td>Adreno 640 (700 MHz)</td></tr>
                 
                 <tr>
                     <td rowspan="2" >MEMORY</td><td>	Card slot</td><td>No</td></tr>
            <tr><td>Internal</td>	<td>512GB 12GB RAM - UFS 3.0</td>
                     </tr>
                     <tr><td rowspan="3">MAIN CAMERA</td>	<td>Triple</td>	<td>2 MP, f/1.5-2.4, 27mm (wide), 1/2.55", 1.4µm, Dual Pixel PDAF, OIS<br/>
12 MP, f/2.4, 52mm (telephoto), 1/3.6", 1.0µm, AF, OIS, 2x optical zoom<br/>
16 MP, f/2.2, 12mm (ultrawide), 1/3.1", 1.0µm<br/>
                    </td></tr>
                     <tr><td>Features</td>	<td>LED flash, auto-HDR, panorama</td></tr>
                     <tr><td>Video</td>	<td>4K@60fps, 1080p@60/240fps (gyro-EIS), 720p@960fps (gyro-EIS), HDR10</td></tr>
                     <tr><td rowspan="3" >SELFIE CAMERA</td><td>Dual</td><td>10 MP, f/2.2, 26mm (wide), 1/3", 1.22µm<br/>8 MP, f/1.9, 24mm (wide), 1.22µm, depth sensor<br/>Cover camera:
10 MP, f/2.2, 26mm (wide), 1/3", 1.22µm<br/></td></tr>
                     <tr><td>Features</td>	<td>HDR</td></tr>
                     <tr><td>Video</td>	<td>4K@30/60fps</td></tr>
                     <tr><td rowspan="2">SOUND</td>	<td>Loudspeaker</td><td>Yes, with stereo speakers, Tuned by AKG.</td></tr>
                     <tr><td>3.5mm jack</td> <td>No</td></tr>
                    
                     <tr><td rowspan="6">COMMS</td><td>WLAN</td><td>Wi-Fi 802.11 a/b/g/n/ac, dual-band, Wi-Fi Direct, hotspot</td></tr>
                     <tr><td>Bluetooth</td><td>5.0, A2DP, LE, aptX</td></tr>
                     <tr><td>GPS</td><td>Yes, with A-GPS, GLONASS, BDS, GALILEO</td></tr>
                     <tr><td>NFC</td>	<td>Yes</td></tr>
                     <tr><td>Radio</td>	<td>No</td></tr>
                     <tr><td>USB</td>	<td>3.1, Type-C 1.0 reversible connector</td></tr>
                     <tr><td >FEATURES</td><td>Sensors</td><td>Fingerprint (side-mounted), accelerometer, gyro, proximity, compass, barometer.
                      </td></tr>
                     
                     <tr><td rowspan="2">BATTERY</td><td>Type</td><td>Li-Po 4380 mAh, non-removable</td></tr>
                     <tr><td>Charging</td>	<td>Fast charging 15W, Fast wireless charging, Reverse wireless charging 9W.</td></tr>
                     <tr><td rowspan="3">MISC</td><td>Colors</td><td>Space Silver, Cosmos Black, Martian Green, Astro Blue</td></tr>
                     <tr><td>Models</td>	<td>SM-F900F, SM-F9000, SM-F900W, SM-F900U, SM-F900N</td></tr>
                     <tr><td>Price</td>	<td>₹ 1,54,000 / $ 1,149.99 / £ 1,476.49 </td></tr>
                   
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
            <iframe id="frame" src="https://www.youtube.com/embed/VSqkL31w69k" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> </div>
            <br/>
            <br/>
            

      <br></br><br></br>
            </div>
        )
    
    }
}
export default Fold;