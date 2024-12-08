import React from "react";
import "./App.css";

import Header from "./Components/Header";
import HeroSection from "./Components/HeroSection";
import Menu from "./Components/Menu";
import Gallery from "./Components/Gallery";
import Reviews from "./Components/Reviews";
import Footer from "./Components/Footer";
import Contact from './Components/Contact';


import dish1 from "./images/dish1.jpg";
import dish2 from "./images/dish2.jpg";
import dish3 from "./images/dish3.jpg";

const App = () => {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <Menu />
      <Gallery images={[dish1, dish2, dish3]} />
      <Reviews />
      <Footer />
      <Contact />

    </div>
  );
};

export default App;
