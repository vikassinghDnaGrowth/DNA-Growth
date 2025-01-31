import React, { Suspense, useRef } from "react";
const Navbar = React.lazy(() => import("./section/Navbar"));
const Header = React.lazy(() => import("./section/Header"));
const WhyUs = React.lazy(() => import("./section/WhyUs"));
const ContactForm = React.lazy(() => import("./components/ContactForm"));
const CFO = React.lazy(() => import("./section/CFO"));
const Carousel = React.lazy(() => import("./section/Carousel"));
const LandingPage = React.lazy(() => import("./section/LandingPage"));
const Card = React.lazy(() => import("./section/Card"));
const Team = React.lazy(() => import("./section/Team"));
const Stepper = React.lazy(() => import("./section/Stepper"));
const Testimonial = React.lazy(() => import("./section/Testimonial"));
const Footer = React.lazy(() => import("./section/Footer"));

const App = () => {
  // Create refs for each section
  const contactRef = useRef(null);
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const servicesRef = useRef(null);

  // Function to scroll to a section
  const scrollToSection = (ref) => {
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <>
      {/* Pass the scrollToSection function to Navbar */}
      <Navbar
        scrollToSection={scrollToSection}
        homeRef={homeRef}
        aboutRef={aboutRef}
        servicesRef={servicesRef}
        contactRef={contactRef}
      />

      <Suspense>
        <div ref={homeRef}>
          <LandingPage />
        </div>
        <Stepper />
        <Card />
        <CFO />
        <div ref={aboutRef}>
          <WhyUs />
        </div>
        <Carousel />
        <Team />
        <Header />
        <div ref={servicesRef}>
          <Testimonial />
        </div>
        <div ref={contactRef}>
          <ContactForm />
        </div>
        <Footer />
      </Suspense>
    </>
  );
};

export default App;
