import React from "react";
import Navbar from "./section/Navbar";
import Header from "./section/Header";
import Services from "./section/Services";
import WhyUs from "./section/WhyUs";
import ContactForm from "./components/ContactForm";
import CFO from "./section/CFO";
import Carousel from "./section/Carousel";
import Help from "./section/Help";
import LandingPage from "./section/LandingPage";
import Card from "./section/Card";
import Team from "./section/Team";
import Stepper from "./section/Stepper";
import GsapTest from "./section/GsapTest";
// import ImageScroll from "./section/ImageScroll";

const App = () => {
  return (
    <>
    {/* <GsapTest/> */}
      <Navbar />
      <LandingPage />
      <Stepper />
      <Header />
      {/* <Services /> */}
      <ContactForm />
      <Carousel />
      <CFO />
      <Help />
      <Card />
      <WhyUs />
      <Team />
    </>
  );
};

export default App;
