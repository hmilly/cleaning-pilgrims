import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./styles/PgStyles.scss";
import "./styles/Components.scss";
import "./styles/NavStyles.scss";
import Header from "./components/Header";
import NavFull from "./components/NavFull";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Footer from "./components/Footer";
import PrivacyPolicy from "./pages/PrivacyPolicy";

const App = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="App">
      <Router>
        <Header setToggleMenu={setToggleMenu} />
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
