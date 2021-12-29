import React from 'react';
import './page1.css';
class iphone12 extends React.Component{
  constructor(props) {
    super(props);
    this.state = {price: "70,900"};
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({price: "70,000"})
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
              Iphone 12</p>
            </div>
            <div class="bg-dark rounded">
            <div id="dprice">
            <p class="display-3 text-light"> Price : {this.state.price}</p>
              <p id="price1" class="display-5 text-light"></p>
              <p id="price2" class="display-5 text-light"></p>
              </div>

            </div>
            <div class="card bg-dark text-light" >
    
    <p id="p1">
      iphone 12</p>
    </div>
  
    <div class="bg-dark rounded">
    <div>
      
    <img id="i1" src="iphone121.png" />
    <div id="d2" class="card bg-light text-dark">
    <p id="p2">2020, October 13
</p>
    </div>
    <br/>
    
    <div class="card bg-light text-dark" id="d3">
    <p id="p2">194g, 8.3mm thickness</p>
    </div>
    <br/>
    
    
    <div class="card bg-light text-dark" id="d2">
      <p id="p2">iOS 13, up to iOS 14.5.1
 </p>
      </div>
      <br/>
      
    <div class="card bg-light text-dark" id="d3">
      <p id="p2">64GB/128GB/256GB storage, no card slot
</p>
      </div>
      <br/>
    
      <div class="card bg-light text-dark" id="d2">
        <p id="p2">6.9", 828x1792  pixels Display Screen.</p>
        </div>
        <br/>
        
        <div class="card bg-light text-dark" id="d3">
        <p id="p2">108 MP, 2160pp Main Camera. </p>
        </div>
        <br/>
        
        
        <div class="card bg-light text-dark" id="d2">
          <p id="p2">Exynos 990 Processor with 4GB of RAM.</p>
          </div>
          <br/>
          
        <div class="card bg-light text-dark" id="d3">
          <p id="p2">3110mAh of Li-Po Battery.</p>
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
        <td>2020, October 13
</td>
      </tr>
      <tr>
        <td >Status</td>
        <td >Available. Released 2020, October 23
</td>
      </tr>
      <tr>
          <td rowspan="4" >BODY</td>
        <td >Dimensions </td>
        <td>150.9 x 75.7 x 8.3 mm (5.94 x 2.98 x 0.33 in)</td></tr>
        <tr>
            <td>Weight</td>	<td>194 g (6.84 oz)</td></tr>
            <tr><td>Build</td>	<td>Glass front (Gorilla Glass), glass back (Gorilla Glass), aluminum frame (7000 series</td></tr>
             <tr> <td>SIM</td>	<td>Single SIM (Nano-SIM and/or eSIM) or Hybrid Dual SIM (Nano-SIM, dual stand-by)<br/>Samsung Pay (Visa, MasterCard certified)<br/>IP68 dust/water resistant (up to 1.5m for 30 mins)</td>     
        </tr>
      <tr>
          <td rowspan="4" >DISPLAY</td>	<td>Type</td>	<td>Dynamic AMOLED 2X capacitive touchscreen, 16M colors</td></tr>
      <tr><td>Size</td>	<td>6.9 inches, 114.0 cm2 (~89.9% screen-to-body ratio)</td></tr>
      <tr><td>Resolution</td>	<td>1440 x 3200 pixels, 20:9 ratio (~511 ppi density)</td></tr>
    <tr><td>Protection</td>	<td>Corning Gorilla Glass 6<br/>HDR10+<br/>Always-on display<br/>120Hz@FHD/60Hz@QHD refresh rate</td></tr>
      <tr><td rowspan="4" >PLATFORM</td>	<td>OS</td>	<td>iOS 13, upgradable to iOS 14.5.1</td></tr>
      <tr><td>Chipset</td>	<td>Exynos 990 (7 nm+)/Qualcomm SM8250 Snapdragon 865 (7 nm+)</td></tr>
      <tr><td>CPU</td>	<td>Octa-core (2x2.73 GHz Mongoose M5 & 2x2.50 GHz Cortex-A76 & 4x2.0 GHz Cortex-A55)<br/>Octa-core (1x2.84 GHz Kryo 585 & 3x2.42 GHz Kryo 585 & 4x1.8 GHz Kryo 585)</td></tr>
    <tr><td>GPU</td>	<td>Mali-G77 MP11/Adreno 650</td></tr>
         
         <tr>
             <td rowspan="2" >MEMORY</td><td>	Card slot</td><td>microSDXC (uses shared SIM slot)</td></tr>
    <tr><td>Internal</td>	<td>128GB 12GB RAM - UFS 3.0</td>
             </tr>
             <tr><td rowspan="3">MAIN CAMERA</td>	<td> Quad</td>	<td>108 MP, f/1.8, 26mm (wide), 1/1.33", 0.8µm, PDAF, OIS<br/>
    48 MP, f/3.5, 103mm (periscope telephoto), 1/2.0", 0.8µm, PDAF, OIS, 4x optical zoom, 10x hybrid zoom<br/>
    12 MP, f/2.2, 13mm (ultrawide), 1.4µm, Super Steady video<br/>
    0.3 MP, TOF 3D, f/1.0, (depth)</td></tr>
             <tr><td>Features</td>	<td>LED flash, auto-HDR, panorama</td></tr>
             <tr><td>Video</td>	<td>8K@24fps, 4K@30/60fps, 1080p@30/60/240fps, 720p@960fps, HDR10+, stereo sound rec., gyro-EIS & OIS</td></tr>
             <tr><td rowspan="3" >SELFIE CAMERA</td><td>Single</td><td>40 MP, f/2.2, 26mm (wide), 0.7µm, PDAF</td></tr>
             <tr><td>Features</td>	<td>Dual video call, Auto-HDR</td></tr>
             <tr><td>Video</td>	<td>4K@30/60fps,1080p@30fps</td></tr>
             <tr><td rowspan="2">SOUND</td>	<td>Loudspeaker</td><td>Yes, with stereo speakers</td></tr>
             <tr><td>3.5mm jack</td> <td>No<br/>32-bit/384kHz audio<br/>Tuned by AKG</td></tr>
            
             <tr><td rowspan="6">COMMS</td><td>WLAN</td><td>Wi-Fi 802.11 a/b/g/n/ac/6, dual-band, Wi-Fi Direct, hotspot</td></tr>
             <tr><td>Bluetooth</td><td>5.0, A2DP, LE</td></tr>
             <tr><td>GPS</td><td>Yes, with A-GPS, GLONASS, GALILEO, BDS</td></tr>
             <tr><td>NFC</td>	<td>Yes</td></tr>
             <tr><td>Radio</td>	<td>Unspecified</td></tr>
             <tr><td>USB</td>	<td>3.2, Type-C 1.0 reversible connector, USB On-The-Go</td></tr>
             <tr><td >FEATURES</td><td>Sensors</td><td> accelerometer, gyro, proximity, compass, barometer </td></tr>
             <tr><td></td><td></td><td>ANT+<br/>Bixby natural language commands and dictation<br/>Samsung DeX (desktop experience support</td></tr>
             <tr><td rowspan="2">BATTERY</td><td>Type</td><td>Non-removable Li-Po 5000 mAh battery</td></tr>
             <tr><td>Charging</td>	<td>Fast charging 45W<br/>USB Power Delivery 3.0<br/>Fast Qi/PMA wireless charging 15W<br/>Reverse wireless charging 9W</td></tr>
             <tr><td rowspan="3">MISC</td><td>Colors</td><td>Cosmic Grey, Cosmic Black, Cloud White</td></tr>
             <tr><td>Models</td>	<td>A2221, A2111, A2223, iPhone12,1</td></tr>
             <tr><td>Price</td>	<td>₹ 70,900 / $ 739.00 / £ 649.00 / € 792.90
</td></tr>
           
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
    <iframe id="frame" src="https://www.youtube.com/embed/X1b3C2081-Q" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> </div>
    <br/>
    <br/>
    </div>
    
        )
    
    }
}
export default iphone12;