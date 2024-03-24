import React from 'react';
import Navbar from './components/Navbar';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import './App.css';
import Home from './pages/Home';
import OurPeople from './pages/OurPeople';
import Products from './pages/Products';
import Awards from './pages/Awards';

const theme = createTheme();



function App() {
  return (
    <ThemeProvider theme={theme}>
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Velocigraft' element={<Home/>} />
        <Route path='/our-people' element={<OurPeople />} />
        <Route path='/Products' element={<Products />} />
        <Route path='/Awards' element={<Awards />} />
      </Routes>
    </Router>
    </ThemeProvider>
  );
}
export default App;