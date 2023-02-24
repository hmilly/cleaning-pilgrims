import { Link } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";

const NavFull = ({ setToggleMenu }) => {
  return (
    <ul className="fullMenu">
      <li>
        <button onClick={() => setToggleMenu(false)}>
          <AiOutlineClose className="icon" />
        </button>
      </li>
      <li>
        <Link to="/" onClick={() => setToggleMenu(false)}>
          <p id="lg-txt">Home</p>
        </Link>
      </li>
      <li>
        <Link to="/contact" onClick={() => setToggleMenu(false)}>
          <p id="lg-txt">Contact</p>
        </Link>
      </li>
      <li>
        <Link to="/about" onClick={() => setToggleMenu(false)}>
          <p id="lg-txt">About</p>
        </Link>
      </li>
    </ul>
  );
};

export default NavFull;
