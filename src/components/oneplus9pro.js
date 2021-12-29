import React from 'react';
import './page1.css';
class One9pro extends React.Component{
  constructor(props) {
    super(props);
    this.state = {price: "64,999"};
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({price: "63,999"})
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
              OnePlus 9 pro</p>
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
            <img id="i1" src="oneplus9pro(1).png"/>
            <div id="d2" class="card bg-light text-dark">
            <p id="p2">Released on March 30, 2021.</p>
            </div>
            <br/>
            
            <div class="card bg-light text-dark" id="d3">
            <p id="p2">197g, 8.7mm thickness</p>
            </div>
            <br/>
            
            
            <div class="card bg-light text-dark" id="d2">
              <p id="p2">Android 11, OxygenOS 11.2.5.5 </p>
              </div>
              <br/>
              
            <div class="card bg-light text-dark" id="d3">
              <p id="p2">128GB/256GB storage, no card slot</p>
              </div>
              <br/>
            
              <div class="card bg-light text-dark" id="d2">
                <p id="p2">6.7",1440x3216 pixels</p>
                </div>
                <br/>
                
                <div class="card bg-light text-dark" id="d3">
                <p id="p2">50 MP, 4320p Main Camera. </p>
                </div>
                <br/>
                
                
                <div class="card bg-light text-dark" id="d2">
                  <p id="p2">8/12 Gb RAM, Snapdragon 888 5g.</p>
                  </div>
                  <br/>
                  
                <div class="card bg-light text-dark" id="d3">
                  <p id="p2">4500mAh of Li-Po Battery.</p>
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
                <td>GSM/CDMA/HSPA/5G/LTE</td>
              </tr>
            
            
              <tr>
                  <td rowspan="2" >LAUNCH</td>
                <td>Announced</td>
                <td>2021, March 23</td>
              </tr>
              <tr>
                <td >Status</td>
                <td >Available. Released 2021, March 23</td>
              </tr>
              <tr>
                  <td rowspan="4" >BODY</td>
                <td >Dimensions </td>
                <td>163.2 x 73.6 x 8.7 mm (6.43 x 2.90 x 0.34 in)</td></tr>
                <tr>
                    <td>Weight</td>	<td>197 g (6.95 oz)</td></tr>
                    <tr><td>Build</td>	<td>Glass front (Gorilla Glass 5), glass back (Gorilla Glass 5), aluminum frame</td></tr>
                     <tr> <td>SIM</td>	<td>Dual SIM (Nano-SIM, dual stand-by)<br/>
                     IP68 dust/water resistant (up to 1.5m for 30 mins)</td>     
                </tr>
              <tr>
                  <td rowspan="4" >DISPLAY</td>	<td>Type</td>	<td>LTPO Fluid2 AMOLED, 1B colors, 120Hz, HDR10+, 1300 nits (peak)</td></tr>
              <tr><td>Size</td>	<td>6.7 inches, 108.4 cm2 (~90.3% screen-to-body ratio)</td></tr>
              <tr><td>Resolution</td>	<td>1440 x 3216 pixels, 20:9 ratio (~525 ppi density)</td></tr>
            <tr><td>Protection</td>	<td>Corning Gorilla Glass 5<br/>Always-on display</td></tr>
              <tr><td rowspan="4" >PLATFORM</td>	<td>OS</td>	<td>Android 11, OxygenOS 11.2.5.5</td></tr>
              <tr><td>Chipset</td>	<td>Qualcomm SM8350 Snapdragon 888 5G (5 nm)</td></tr>
              <tr><td>CPU</td>	<td>Octa-core (1x2.84 GHz Kryo 680 & 3x2.42 GHz Kryo 680 & 4x1.80 GHz Kryo 680</td></tr>
            <tr><td>GPU</td>	<td>Adreno 660</td></tr>
                 
                 <tr>
                     <td rowspan="2" >MEMORY</td><td>	Card slot</td><td>No</td></tr>
            <tr><td>Internal</td>	<td>128GB 8GB RAM, 256GB 8GB RAM, 256GB 12GB RAM UFS 3.1</td>
                     </tr>
                     <tr><td rowspan="3">MAIN CAMERA</td>	<td>Quad</td>	<td>48 MP, f/1.8, 23mm (wide), 1/1.43", 1.12µm, omnidirectional PDAF, Laser AF, OIS<br/>
                     8 MP, f/2.4, 77mm (telephoto), 1.0µm, PDAF, OIS, 3.3x optical zoom<br/>
                     50 MP, f/2.2, 14mm (ultrawide), 1/1.56", 1.0µm<br/>
                     2 MP, f/2.4, (monochrome)</td></tr>
                     <tr><td>Features</td>	<td>Hasselblad Color Calibration, dual-LED flash, HDR, panorama</td></tr>
                     <tr><td>Video</td>	<td>8K@30fps, 4K@30/60/120fps, 1080p@30/60/240fps, Auto HDR, gyro-EIS</td></tr>
                     <tr><td rowspan="3" >SELFIE CAMERA</td><td>Single</td><td>16 MP, f/2.4, (wide), 1/3.06", 1.0µm</td></tr>
                     <tr><td>Features</td>	<td>Auto-HDR</td></tr>
                     <tr><td>Video</td>	<td>1080p@30fps, gyro-EIS</td></tr>
                     <tr><td rowspan="2">SOUND</td>	<td>Loudspeaker</td><td>Yes, with stereo speakers</td></tr>
                     <tr><td>3.5mm jack</td> <td>No<br/>24-bit/192kHz audio</td></tr>
                    
                     <tr><td rowspan="6">COMMS</td><td>WLAN</td><td>Wi-Fi 802.11 a/b/g/n/ac/6, dual-band, Wi-Fi Direct, DLNA, hotspot</td></tr>
                     <tr><td>Bluetooth</td><td>5.2, A2DP, LE, aptX HD</td></tr>
                     <tr><td>GPS</td><td>Yes, with dual-band A-GPS, GLONASS, BDS, GALILEO, SBAS</td></tr>
                     <tr><td>NFC</td>	<td>Yes</td></tr>
                     <tr><td>Radio</td>	<td>No</td></tr>
                     <tr><td>USB</td>	<td>USB Type-C 3.1, USB On-The-Go</td></tr>
                     <tr><td >FEATURES</td><td>Sensors</td><td>Fingerprint (under display, optical), accelerometer, gyro, proximity, compass, color spectrum
                      </td></tr>
                    
                     <tr><td rowspan="2">BATTERY</td><td>Type</td><td>Li-Po 4500 mAh, non-removable</td></tr>
                     <tr><td>Charging</td>	<td>Fast charging 65W, 1-100% in 29 min (advertised)<br/>Fast wireless charging 50W, 1-100% in 43 min (advertised)<br/>
                     USB Power Delivery</td></tr>
                     <tr><td rowspan="3">MISC</td><td>Colors</td><td>Morning Mist, Forest Green, Stellar Black</td></tr>
                     <tr><td>Models</td>	<td>LE2121, LE2125, LE2123, LE2120</td></tr>
                     <tr><td>Price</td>	<td>₹ 64,999 / $ 829.00 / £ 799.99 / € 867.16</td></tr>
                   
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
            <iframe id="frame" src="https://www.youtube.com/embed/8eNNJESKjrE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> </div>
            <br/>
            <br/>
            

      <br></br><br></br>
            </div>
        )
    
    }
}
export default One9pro;