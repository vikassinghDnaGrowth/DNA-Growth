// App.jsx
import React, { Suspense, useRef, useCallback } from "react";
import LandingpageShimmer from "./components/LandingpageShimmer";

// Lazy load other sections
const Header = React.lazy(() => import("./section/Header"));
const WhyUs = React.lazy(() => import("./section/WhyUs"));
const ContactForm = React.lazy(() => import("./components/ContactForm"));
const CFO = React.lazy(() => import("./section/CFO"));
const Carousel = React.lazy(() => import("./section/Carousel"));
const LandingPage = React.lazy(() => import("./section/LandingPage"));
const Card = React.lazy(() => import("./section/Card"));
const Team = React.lazy(() => import("./section/Team"));
const Stepper = React.lazy(() => import("./section/Stepper"));
const Footer = React.lazy(() => import("./section/Footer"));
const Navbar = React.lazy(() => import("./section/Navbar"));
const Testimonial = React.lazy(() => import("./section/Testimonial"));

const App = () => {
  console.log("App rendered");

  // Create refs for each section
  const contactRef = useRef(null);
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const servicesRef = useRef(null);

  // Function to scroll to a section
  const scrollToSection = useCallback((ref) => {
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }, []);

  return (
    <>
      <Navbar
        scrollToSection={scrollToSection}
        homeRef={homeRef}
        aboutRef={aboutRef}
        servicesRef={servicesRef}
        contactRef={contactRef}
      />
      <Suspense
        fallback={
          <div>
            <LandingpageShimmer />
          </div>
        }
      >
        {/* Sections of your page */}
        <div ref={homeRef}>
          <LandingPage
            scrollToSection={scrollToSection}
            contactRef={contactRef}
          />
        </div>
        <Stepper scrollToSection={scrollToSection} contactRef={contactRef} />
        <Card />
        <CFO />
        <div ref={aboutRef}>
          <WhyUs />
        </div>
        <Carousel />
        <Team />
        <Header scrollToSection={scrollToSection} contactRef={contactRef} />
        <Testimonial />
        <div ref={contactRef}>
          <ContactForm />
        </div>
        <Footer scrollToSection={scrollToSection} contactRef={contactRef}  />
      </Suspense>
    </>
  );
};

export default App;
