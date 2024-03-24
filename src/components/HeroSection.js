import React, { useEffect, useRef, useState } from 'react';
import '../App.css';
import { Link } from 'react-router-dom'
import { Button } from './Button';
import './HeroSection.css';
import logo from '../assets/VelocigraftLogoTransparent.png';
import EmailPopup from './EmailPopup';
import videoSrc from '../assets/SurgicalVideo.mp4';


function HeroSection() {
  const videoRef = useRef(null);
  const [ setClick] = useState(false); // Define the state variable and its setter function
  const closeMobileMenu = () => setClick(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    const handleLoadedData = () => {
      console.log('Video loaded successfully');
      video.playbackRate = 0.5;
    };
    handleLoadedData();
  }, []);

  return (
    <div className='hero-container'>
<video ref={videoRef} autoPlay loop muted playsInline className='hero-video'>
  <source src={videoSrc} type="video/mp4" />
</video>
      <div className='overlay'></div> 
      <div className='hero-content'>
        <Link to="/" className="navbar-logo" onClick={closeMobileMenu}> 
          <img src={logo} alt="Logo" style={{width: 'auto', height: '400px'}} />
        </Link>
        <div style={{ height: '80px' }}></div>
        <div className="hero-btns">
        <Link to="/products">
          <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>
            LEARN MORE
          </Button>
        </Link>
        <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large' onClick={() => setIsPopupOpen(true)}>
          GET UPDATES
        </Button>
      </div>
      </div>
      {isPopupOpen && <EmailPopup onClose={() => setIsPopupOpen(false)} />}
    </div>
  );
}

export default HeroSection;