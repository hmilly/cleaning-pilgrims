import "./styles/PgStyles.scss";
import "./styles/Components.scss";
import "./styles/NavStyles.scss";

import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import NavHeader from "./components/NavHeader";
import NavFull from "./components/NavFull";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Footer from "./components/Footer";

const App = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="App">
      <Router>
        <NavHeader setToggleMenu={setToggleMenu} />
        {toggleMenu && <NavFull setToggleMenu={setToggleMenu} />}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
