import { Link } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";

const NavFull = ({ setToggleMenu }) => {
  
  const clicked = () => {
    setToggleMenu(false);
    window.scrollTo(0, 0);
  };

  return (
    <ul className="fullMenu">
      <li>
        <button onClick={() => setToggleMenu(false)}>
          <AiOutlineClose className="icon" />
        </button>
      </li>
      <li>
        <Link to="/" onClick={() => clicked()}>
          <p id="lg-txt">Home</p>
        </Link>
      </li>
      <li>
        <Link to="/contact" onClick={() => clicked()}>
          <p id="lg-txt">Contact</p>
        </Link>
      </li>
      <li>
        <Link to="/about" onClick={() => clicked()}>
          <p id="lg-txt">About</p>
        </Link>
      </li>
    </ul>
  );
};

export default NavFull;
