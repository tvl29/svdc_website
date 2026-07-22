import { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
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

// React Router doesn't reset scroll position on navigation by default —
// without this, clicking "New Office" from partway down the homepage lands
// you partway down the new-office page too. Instant jump to top on every
// route change, not a smooth scroll (that would feel like an unwanted
// scroll-past-everything animation rather than a clean landing).
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    // The site has a global `scroll-behavior: smooth` (for in-page anchor
    // links like "#locations"), which also applies to plain scrollTo(0, 0)
    // unless overridden — that's what was causing the scroll-up animation
    // here. Passing behavior: "instant" explicitly wins over the CSS.
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    // basename tells React Router about the GitHub Pages subpath
    // (BASE_URL is "/" in dev, "/svdc_website/" in the production build) —
    // without this, every <Link> navigates relative to the domain root and
    // drops the subpath once deployed.
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <ScrollToTop />
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
