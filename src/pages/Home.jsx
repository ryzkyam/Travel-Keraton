import React from "react";
import Header from "../components/Header";
import Caraousel from "./Caraousel";
import MainContent from "./MainContent";
import Hero from "./Hero";
import MainSecond from "./MainSecond";
import Footer from "../components/Footer";
function Home() {
  return (
    <>
    
      <Hero />
      <Caraousel />

      <MainContent />
      <MainSecond />
 
    </>
  );
}

export default Home;
