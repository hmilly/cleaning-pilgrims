import React from "react";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="footer">
      <p>Copyright © 2023 Kent Cleaning Pilgrims - All Rights Reserved.</p>
      <Link to="/privacy-policy">Privacy Policy</Link>
    </footer>
  );
};

export default Footer;
