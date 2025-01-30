import React, { Suspense } from "react";

// Lazy load components (excluding Navbar)
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
  return (
    <>
      <Navbar /> {/* No lazy loading for Navbar */}
      <Suspense>
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
        <Footer />
      </Suspense>
    </>
  );
};

export default App;
