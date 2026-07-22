import { BrowserRouter, Routes, Route } from "react-router-dom";
import AnnouncementRibbon from "./components/AnnouncementRibbon";
import Header from "./components/Header";
import Hero from "./components/Hero";
import WhatThisMeans from "./components/WhatThisMeans";
import TwoLocations from "./components/TwoLocations";
import ServicesSection from "./components/Services";
import Trust from "./components/Trust";
import CTABand from "./components/CTABand";
import Footer from "./components/Footer";
import NewOfficeLanding from "./pages/NewOfficeLanding";

function Home() {
  return (
    <>
      <Hero />
      <WhatThisMeans />
      <TwoLocations />
      <ServicesSection />
      <Trust />
      <CTABand />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AnnouncementRibbon />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new-office" element={<NewOfficeLanding />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
