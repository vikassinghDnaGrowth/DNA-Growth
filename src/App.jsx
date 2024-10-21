import React from "react";
import Navbar from "./section/Navbar";
import Header from "./section/Header";
import Services from "./section/Services";
import WhyUs from "./section/WhyUs";
import ContactForm from "./components/ContactForm";

const App = () => {
  return <>
  <Navbar/>
  <Header/>
  <Services/>
  <ContactForm/>
  <WhyUs/>
  </>;
};

export default App;
