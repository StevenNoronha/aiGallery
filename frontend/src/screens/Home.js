import React from "react";
import Footer from "../components/Footer";
import Gallery from "../components/Gallery";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";

function Home() {           {/*  Home page screen, contains other elements*/}
  return (        
    <div>
      <Navbar />                  {/* Navbar loaded as a react component */}
      <div className="main">            {/* Main content of the page */}
        <Hero />                        {/* Hero section, title section of the page */}
        <Gallery />                     {/*  Gallery section component */}
        <Footer />                      {/* Footer component section */}
      </div>
    </div>
  );
}

export default Home;
