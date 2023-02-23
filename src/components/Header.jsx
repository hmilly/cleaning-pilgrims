import { Link } from "react-router-dom";
import { SlMenu } from "react-icons/sl";
import { useEffect, useState } from "react";

const Header = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
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
        {windowSize >= 768 ? (
          <ul>
            <li>
              <Link to="/">HOME</Link>
            </li>
            <li>
              <Link to="/contact">CONTACT</Link>
            </li>
            <li id="lg-li">
              <Link id="lg-txt" to="/">
                KENT CLEANING PILGRIMS LTD.
              </Link>
            </li>
            <li>
              <Link to="/about">ABOUT</Link>
            </li>
          </ul>
        ) : (
          <ul>
            <li>
              <button onClick={() => setToggleMenu(true)}>
                <SlMenu className="icon" />
                {toggleMenu && (
              
                    <ul className="fullMenu">
                      <li><Link to="/">Home</Link></li>
                      <li><Link to="/contact">Contact</Link></li>
                      <li><Link to="/about">About</Link></li>

                    <span>X</span>
                    </ul>
                    
                    
                    
                  
                )}
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
