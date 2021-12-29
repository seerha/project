import React from 'react';
import './page1.css';
class S20 extends React.Component{
  constructor(props) {
    super(props);
    this.state = {price: "1,08,000"};
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({price: "1,00,999"})
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
              Samsung Galaxy Z Flip</p>
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
            <img id="fold" src="Zflip.png" />
            <div id="d2" class="card bg-light text-dark">
            <p id="p2">Released on February 14, 2020.</p>
            </div>
            <br/>
            
            <div class="card bg-light text-dark" id="d3">
            <p id="p2">183g weight, 7.2mm thickness.</p>
            </div>
            <br/>
            
            
            <div class="card bg-light text-dark" id="d2">
              <p id="p2">Android 10, OneUI 2.0  </p>
              </div>
              <br/>
              
            <div class="card bg-light text-dark" id="d3">
              <p id="p2">256GB storage, microSDXC not supported.</p>
              </div>
              <br/>
            
              <div class="card bg-light text-dark" id="d2">
                <p id="p2">6.7", 1080X2636 pixels Display Screen.</p>
                </div>
                <br/>
                
                <div class="card bg-light text-dark" id="d3">
                <p id="p2">12 MP, 2160p Main Camera.</p>
                </div>
                <br/>
                
                
                <div class="card bg-light text-dark" id="d2">
                  <p id="p2">Snapdragon 855+ Processor with 8GB of RAM </p>
                  </div>
                  <br/>
                  
                <div class="card bg-light text-dark" id="d3">
                  <p id="p2">3300 mAh of Li-Po Battery.</p>
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
                <td>2020, February 11</td>
              </tr>
              <tr>
                <td >Status</td>
                <td >Available. Released 2020, February 14</td>
              </tr>
              <tr>
                  <td rowspan="4" >BODY</td>
                <td >Dimensions </td>
                <td>Unfolded: 167.3 x 73.6 x 7.2 mm<br/>Folded: 87.4 x 73.6 x 17.3 mm</td></tr>
                <tr>
                    <td>Weight</td>	<td>183 g (6.46 oz)</td></tr>
                    <tr><td>Build</td>	<td>Plastic front, glass back (Gorilla Glass 6), aluminum frame</td></tr>
                     <tr> <td>SIM</td>	<td>Nano-SIM, eSIM</td>     
                </tr>
              <tr>
                  <td rowspan="4" >DISPLAY</td>	<td>Type</td>	<td>Foldable Dynamic AMOLED capacitive touchscreen, 16M colors</td></tr>
              <tr><td>Size</td>	<td>6.7 inches, 101.6 cm2 (~82.5% screen-to-body ratio)</td></tr>
              <tr><td>Resolution</td>	<td>1080 x 2636 pixels (~425 ppi density)</td></tr>
            <tr><td>Protection</td>	<td>Cover display: 1.1", Super AMOLED, 112 x 300 pixels, HDR 10+</td></tr>
              <tr><td rowspan="4" >PLATFORM</td>	<td>OS</td>	<td>Android 10, One UI 2.0</td></tr>
              <tr><td>Chipset</td>	<td>Qualcomm SM8150 Snapdragon 855+ (7 nm)</td></tr>
              <tr><td>CPU</td>	<td>Octa-core (1x2.95 GHz Kryo 485 & 3x2.41 GHz Kryo 485 & 4x1.78 GHz Kryo 485)</td></tr>
            <tr><td>GPU</td>	<td>Adreno 640 (700 MHz)</td></tr>
                 
                 <tr>
                     <td rowspan="2" >MEMORY</td><td>	Card slot</td><td>No</td></tr>
            <tr><td>Internal</td>	<td>128GB 12GB RAM - UFS 3.0</td>
                     </tr>
                     <tr><td rowspan="3">MAIN CAMERA</td>	<td>Dual</td>	<td>12 MP, f/1.8, 27mm (wide), 1/2.55", 1.4µm, Dual Pixel PDAF, OIS<br/>
		 12 MP, f/2.2, 123˚ (ultrawide), 1.12µm<br/>
                    </td></tr>
                     <tr><td>Features</td>	<td>LED flash, auto-HDR, panorama</td></tr>
                     <tr><td>Video</td>	<td>4K@30/60fps, 1080p@60/240fps, 720p@960fps, HDR10+</td></tr>
                     <tr><td rowspan="3" >SELFIE CAMERA</td><td>Single</td><td>10 MP, f/2.4, 26mm (wide), 1.22µm</td></tr>
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
                     
                     <tr><td rowspan="2">BATTERY</td><td>Type</td><td>Li-Po 3300 mAh, non-removable</td></tr>
                     <tr><td>Charging</td>	<td>Fast charging 15W, Fast wireless charging.</td></tr>
                     <tr><td rowspan="3">MISC</td><td>Colors</td><td>Mirror Black, Mirror Purple, Mirror Gold, Thom Browne Edition</td></tr>
                     <tr><td>Models</td>	<td>SM-F700, SM-F700F, SM-F700F/DS, SM-F700U/DS, SM-F700U1/DS, SM-F700N, M-F7000, SM-F700W/DS</td></tr>
                     <tr><td>Price</td>	<td>₹ 1,08,999 / $ 1,099.00 / £ 1,016.99 / € 939.99</td></tr>
                   
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
            <iframe id="frame" src="https://www.youtube.com/embed/2f9kJzsn4wM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> </div>
            <br/>
            <br/>
            

      <br></br><br></br>
            </div>
        )
    
    }
}
export default S20;