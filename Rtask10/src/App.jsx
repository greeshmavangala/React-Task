import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Profile from "./pages/Profile";

import WebDevelopment from "./services/WebDevelopment";
import MobileApp from "./services/MobileApp";
import UIUXDesign from "./services/UIUXDesign";


function App() {
  return (
    <>
      <Navbar/ >

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/about" element={<About />} />

        <Route path="/services" element={<Services />}>
          <Route path="web-development" element={<WebDevelopment />} />
          <Route path="mobile-app" element={<MobileApp />} />
          <Route path="uiux-design" element={<UIUXDesign />} />
        </Route>

        <Route path="/contact" element={<Contact />} />

        <Route path="/profile" element={<Profile />} />

      </Routes>
    </>
  );
}

export default App;