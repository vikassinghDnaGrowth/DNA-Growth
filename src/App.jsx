import React from "react";
import Navbar from "./section/Navbar";
import Header from "./section/Header";
import Services from "./section/Services";
import WhyUs from "./section/WhyUs";
import ContactForm from "./components/ContactForm";
import CFO from "./section/CFO";
import Carousel from "./section/Carousel";
import LandingPage from "./section/LandingPage";
import Card from "./section/Card";
import Team from "./section/Team";
import Stepper from "./section/Stepper";
import Testimonial from "./section/Testimonial";
// import GsapTest from "./section/GsapTest";

const App = () => {
  return (
    <>
      {/* <GsapTest/> */}
      {/* <Navbar />/ */}
      <LandingPage />
      <Stepper />
      <Card />
      <CFO />
      <WhyUs />
      <Carousel />
      <Team />
      <Header />
      <Testimonial />
      <ContactForm />
      {/* <Services /> */}
      {/* <GsapTest/> */}

    </>
  );
};

export default App;
