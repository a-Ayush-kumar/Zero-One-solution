// import react from "react";
import "./Navbar.css";
import "../components/ZeroOne.png";
// import PropTypes from 'prop-types'
import { FaSearch} from 'react-icons/fa';

export default function Navbar({width}) {
  return (
    <div>
      <div className="navbar" style={{ width: width }}>
      
        <img
          src="ZeroOne.png"
          alt="ZeroOne Pvt. Ltd."
          srcSet=""
          className="icon"
        />
        {/* <ul>
          <li className="Info-navbar" id="home-navbar">Home</li>
          <li className="Info-navbar" id="about-navbar">About</li>
          <li className="Info-navbar" id="contact-navbar">Contact</li>
        </ul> */}
        <div className="search">
          <input
            type="search"
            id="myInput"
            placeholder="  Search what you want......"
            className="finder"
          />
          <button className="input-find"><FaSearch/></button>
        </div>
      </div>
    </div>
  );
}
