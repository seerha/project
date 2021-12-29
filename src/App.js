import './App.css';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Home from "./components/home"
import Navbar from './components/navbar' 
import Nord from './components/Nord'
import Oneplus9pro from './components/oneplus9pro'
import Oneplus9 from './components/oneplus9'
import Oneplus8pro from './components/oneplus8pro'
import Oneplus8 from './components/oneplus8'
import Footer from './components/footer';
import Iphone12pro from './components/iphone12pro';
import Iphone11pro from './components/iphone11pro';
import Iphone12 from './components/iphone12';
import Iphone11 from './components/iphone11';
import Samsungfold from './components/Samsung Galaxy Fold';
import SamsungZ from './components/Samsung Galaxy Z Flip';
import Samsungnote20ultra from './components/Samsung Note 20 Ultra';
import Samsungs20ultra from './components/Samsung S20 Ultra';
function App() {
  return (
    <div className="App">
      <Router>
     <Navbar/>
     <br></br>
      <header className="App-header">
       <div>
         
           <Switch>
             <Route path='/' exact component ={Home}/>
            <Route path='/nord' exact component ={Nord}/>
            <Route path='/oneplus9pro' exact component ={Oneplus9pro}/>
            <Route path='/oneplus9' exact component ={Oneplus9}/>
            <Route path='/oneplus8pro' exact component ={Oneplus8pro}/>
            <Route path='/oneplus8' exact component ={Oneplus8}/>
            <Route path='/Iphone12pro' exact component ={Iphone12pro}/>
            <Route path='/Iphone11pro' exact component ={Iphone11pro}/>
            <Route path='/Iphone12' exact component ={Iphone12}/>
            <Route path='/Iphone11' exact component ={Iphone11}/>
            <Route path='/Samsungfold' exact component ={Samsungfold}/>
            <Route path='/SamsungZ' exact component ={SamsungZ}/>
            <Route path='/Samsungs20ultra' exact component ={Samsungs20ultra}/>
            <Route path='/Samsungnote20ultra' exact component ={Samsungnote20ultra}/>

        </Switch>
       
        </div>
      </header>
      <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br>
      <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br>
      <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br>
      <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br>
      <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br>
      <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br>
      <br></br> <br></br> <br></br> <br></br> 
      <Footer/>
      </Router>
     
    </div>
  );
}

export default App;
