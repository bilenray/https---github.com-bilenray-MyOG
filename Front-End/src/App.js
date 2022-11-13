import React,{useState} from 'react';
import './App.css';
import Filter from './components/Website/Filter/Filter';
import ComNav from './components/Website/Home/ComNav/ComNav';
import HomePage from './components/Website/Home/HomePage/HomePage';
import MobNav from './components/Website/Home/MobNav/MobNav';
import LandingPage from './components/Website/Landing/LandingPage';
import Map from './components/Website/Map/Map';
import SellerCard from './components/Service/SellerCard/SellerCard/SellerCard'
import SellerDetails  from './components/Service/SellerCard/sellerDetails/sellerDetails';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ClientOrGarage from './components/Service/Registration/ClientOrGarage';
import DecidingModal from './components/Log/DecidingModal';
import GarageForm from './components/Service/Registration/GarageForm';
import ClientLogin from './components/Client/ClientLogin';
import CurrentPosition from './components/Website/Map/currentPosition';

function App() {

  const [screenWidth, setScreenWidth] = React.useState(true)

  React.useEffect(()=>{
    console.log("useEffect is running")
    if (window.innerWidth>700){
        setScreenWidth(false)
    }
  },[screenWidth])

  const [isDisplayed, setIsDisplayed] = useState(false);
  const [isLandingPageDisplayed, setLandingPageDisplayed] = useState(false)

  // React.useEffect(() => {
  //   setInterval(() => {
  //   setIsDisplayed(true); 
  // }, 11000);
  // }, []);

  // React.useEffect(() => {
  //   setInterval(() => {
  //   setLandingPageDisplayed(true); 
  // }, 0);
  // }, []);

  React.useEffect(() => {
    setInterval(() => {
    setLandingPageDisplayed(true); 
  }, 3000);
  }, []);

  if (isLandingPageDisplayed == true){
    setInterval(() => {
      setIsDisplayed(true); 
    }, 2000);
  }

  return (
    <div className="App" >
      <Map/>
      {/* <CurrentPosition/> */}
      {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={
          isLandingPageDisplayed?
          <HomePage navi={screenWidth ? <MobNav sellerCard={<SellerCard/>} /> : <ComNav/>} decidingModal={isDisplayed? <DecidingModal/>:null} />:
          <LandingPage/>
          }/>
          <Route path='/home' element={<HomePage/>}/>
          <Route path='/garage/:id' element={<SellerDetails/>}/>
          <Route path='/garage-form' element={<GarageForm/>}/>
          <Route path='/client-or-garage' element={<ClientOrGarage/>}/>
          <Route path='/client-google-auth' element={<ClientLogin/>}/>
        </Routes>
      </BrowserRouter> */}
    </div>
  )
}

export default App;
