import React from 'react'
import '../App.css'
import './Home.css'
import HeroSection from'../components/HeroSection'
import Cards from '../components/Cards';
import Footer from '../components/footer';

function Home () {
    return (
        <>
            <HeroSection />
            <Cards/>
            <Footer/>
        </>
    );
}

export default Home;