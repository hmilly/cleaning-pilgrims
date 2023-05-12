import { Link } from "react-router-dom";
import { SlMenu } from "react-icons/sl";
import { useEffect, useState } from "react";

const Header = ({ setToggleMenu }) => {
  const [windowSize, setWindowSize] = useState(window.innerWidth);

  useEffect(() => {
    const handleWindowResize = () => setWindowSize(window.innerWidth);
    window.addEventListener("resize", handleWindowResize);
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  });

  return (
    <header>
      <nav>
        {windowSize >= 992 ? (
          <ul>
            <li>
              <Link to="/" onClick={() => window.scrollTo(0, 0)}>
                HOME
              </Link>
            </li>
            <li>
              <Link to="/contact" onClick={() => window.scrollTo(0, 0)}>
                CONTACT
              </Link>
            </li>
            <li id="lg-li">
              <Link id="lg-txt" to="/" onClick={() => window.scrollTo(0, 0)}>
                KENT CLEANING PILGRIMS LTD.
              </Link>
            </li>
            <li>
              <Link to="/about" onClick={() => window.scrollTo(0, 0)}>
                ABOUT
              </Link>
            </li>
          </ul>
        ) : (
          <ul>
            <li>
              <button onClick={() => setToggleMenu(true)} aria-label="menu">
                <SlMenu className="icon" />
              </button>
            </li>
            <li id="lg-li">
              <Link id="lg-txt" to="/">
                KENT CLEANING PILGRIMS LTD.
              </Link>
            </li>
          </ul>
        )}
      </nav>
    </header>
  );
};

export default Header;
