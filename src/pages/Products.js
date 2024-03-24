import React from 'react';
import '../App.css';
import { makeStyles } from '@material-ui/core/styles';
import logo from '../assets/VelocigraftLogoTransparent.png';




const Products = () => {

  return (
    <div className="team-container">
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '0px' }}>
            <img src={logo} alt="Logo" style={{width: 'auto', height: '350px', margin: '0 10px'}} />
            <h1> Coming Soon!</h1>
        </div>
    </div>
);
};
export default Products;