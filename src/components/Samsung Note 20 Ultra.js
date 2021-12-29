import React from 'react';
import './page1.css';
class S20 extends React.Component{
  constructor(props) {
    super(props);
    this.state = {price: "99999"};
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({price: "94999"})
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
              Samsung Galaxy Note 20 Ultra </p>
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
            <img id="ultra" src="note20ultra.png" />
            <div id="d2" class="card bg-light text-dark">
            <p id="p2">Released 2020, August 21</p>
            </div>
            <br/>
            
            <div class="card bg-light text-dark" id="d3">
            <p id="p2">200 g weight, 8.1 mm thickness.</p>
            </div>
            <br/>
            
            
            <div class="card bg-light text-dark" id="d2">
              <p id="p2">Android 10, OneUI 3.0  </p>
              </div>
              <br/>
              
            <div class="card bg-light text-dark" id="d3">
              <p id="p2">256GB / 512GB storage, microSDXC supported.</p>
              </div>
              <br/>
            
              <div class="card bg-light text-dark" id="d2">
                <p id="p2">6.9", 1440x3088 Pixels Display Screen.</p>
                </div>
                <br/>
                
                <div class="card bg-light text-dark" id="d3">
                <p id="p2">108MP, 4320p Main Camera. </p>
                </div>
                <br/>
                
                
                <div class="card bg-light text-dark" id="d2">
                  <p id="p2">Samsung Exynos 990 5G Processor with 12GB of RAM </p>
                  </div>
                  <br/>
                  
                <div class="card bg-light text-dark" id="d3">
                  <p id="p2">4500 mAh of Li-Ion Battery.</p>
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
                <td>2020, August 5</td>
              </tr>
              <tr>
                <td >Status</td>
                <td >Available. Released 2020, August 21</td>
              </tr>
              <tr>
                  <td rowspan="4" >BODY</td>
                <td >Dimensions </td>
                <td>164.8 x 77.2 x 8.1 mm (6.49 x 3.04 x 0.32 in)</td></tr>
                <tr>
                    <td>Weight</td>	<td>208 g (7.34 oz)</td></tr>
                    <tr><td>Build</td>	<td>Glass front (Gorilla Glass Victus), glass back (Gorilla Glass Victus), stainless steel frame</td></tr>
                     <tr> <td>SIM</td>	<td>Single SIM (Nano-SIM and/or eSIM) or Hybrid Dual SIM (Nano-SIM, dual stand-by)</td>     
                </tr>
              <tr>
                  <td rowspan="4" >DISPLAY</td>	<td>Type</td>	<td>Dynamic AMOLED 2X capacitive touchscreen, 16M colors</td></tr>
              <tr><td>Size</td>	<td>6.9 inches, 116.7 cm2 (~91.7% screen-to-body ratio)</td></tr>
              <tr><td>Resolution</td>	<td>1440 x 3088 pixels (~496 ppi density)</td></tr>
            <tr><td>Protection</td>	<td>Corning Gorilla Glass Victus</td></tr>
              <tr><td rowspan="4" >PLATFORM</td>	<td>OS</td>	<td>Android 10, One UI 3.0</td></tr>
              <tr><td>Chipset</td>	<td>Qualcomm SM8250 Snapdragon 865+ (7 nm+) - USA, Exynos 990 (7 nm+) - Global</td></tr>
              <tr><td>CPU</td>	<td>Octa-core (2x2.73 GHz Mongoose M5 & 2x2.50 GHz Cortex-A76 & 4x2.0 GHz Cortex-A55)</td></tr>
            <tr><td>GPU</td>	<td>Mali-G77 MP11 - Global/Adreno 650 - USA</td></tr>
                 
                 <tr>
                     <td rowspan="2" >MEMORY</td><td>	Card slot</td><td>YES</td></tr>
            <tr><td>Internal</td>	<td>256GB 8GB RAM, 512GB 8GB RAM - UFS 3.0</td>
                     </tr>
                     <tr><td rowspan="3">MAIN CAMERA</td>	<td>Triple</td>	<td>108 MP, f/1.8, 26mm (wide), 1/1.33", 0.8µm, PDAF, Laser AF, OIS<br/>
                     12 MP, f/3.0, 120mm (periscope telephoto), 1.0µm, PDAF, OIS, 5x optical zoom, 50x hybrid zoom<br/>
                     12 MP, f/2.2, 120˚, 13mm (ultrawide), 1/2.55", 1.4µm<br/>
                    </td></tr>
                     <tr><td>Features</td>	<td>LED flash, auto-HDR, panorama</td></tr>
                     <tr><td>Video</td>	<td>8K@24fps, 4K@30/60fps, 1080p@30/60/240fps, 720p@960fps, HDR10+, stereo sound rec., gyro-EIS & OIS</td></tr>
                     <tr><td rowspan="3" >SELFIE CAMERA</td><td>Single</td><td>10 MP, f/2.2, 26mm (wide), 1/3.2", 1.22µm, Dual Pixel PDAF</td></tr>
                     <tr><td>Features</td>	<td>Dual video call, Auto-HDR</td></tr>
                     <tr><td>Video</td>	<td>4K@30/60fps, 1080p@30fps</td></tr>
                     <tr><td rowspan="2">SOUND</td>	<td>Loudspeaker</td><td>Yes, with stereo speakers, Tuned by AKG.</td></tr>
                     <tr><td>3.5mm jack</td> <td>No</td></tr>
                    
                     <tr><td rowspan="6">COMMS</td><td>WLAN</td><td>Wi-Fi 802.11 a/b/g/n/ac, dual-band, Wi-Fi Direct, hotspot</td></tr>
                     <tr><td>Bluetooth</td><td>5.0, A2DP, LE, aptX</td></tr>
                     <tr><td>GPS</td><td>Yes, with A-GPS, GLONASS, BDS, GALILEO</td></tr>
                     <tr><td>NFC</td>	<td>Yes</td></tr>
                     <tr><td>Radio</td>	<td>FM radio (Snapdragon model only; market/operator dependent)</td></tr>
                     <tr><td>USB</td>	<td>3.2, Type-C 1.0 reversible connector, USB On-The-Go</td></tr>
                     <tr><td >FEATURES</td><td>Sensors</td><td>Fingerprint (under display, ultrasonic), accelerometer, gyro, proximity, compass, barometer.
                      </td></tr>
                     
                     <tr><td rowspan="2">BATTERY</td><td>Type</td><td>Li-Ion 4500 mAh, non-removable</td></tr>
                     <tr><td>Charging</td>	<td>Fast charging 25W, USB Power Delivery 3.0, Fast Qi/PMA wireless charging, Reverse wireless charging 9W</td></tr>
                     <tr><td rowspan="3">MISC</td><td>Colors</td><td>Mystic Bronze, Mystic Black, Mystic White</td></tr>
                     <tr><td>Models</td>	<td>SM-N985F, SM-N985F/DS</td></tr>
                     <tr><td>Price</td>	<td>₹ 99,999 / $ 999.99 / € 1200.00</td></tr>
                   
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
            <iframe id="frame" src="https://www.youtube.com/embed/5IPvqS0NTzU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> </div>
            <br/>
            <br/>
            

      <br></br><br></br>
            </div>
        )
    
    }
}
export default S20;