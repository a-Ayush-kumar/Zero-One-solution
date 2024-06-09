import React, { useState } from "react";
import "./Sidebar.css";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft,FaHome, FaHashtag ,FaHeart, FaExclamationCircle, FaBookmark, FaViber, FaUserSecret} from "react-icons/fa";

export default function Sidebar({ width, onToggleWidth }) {
  const [isArrowRight, setIsArrowRight] = useState(true);
  const [buttonHeight, setButtonHeight] = useState("8vh");
  // const [showValues, setShowValues]= useState(false);
  const handleClick = () => {
    onToggleWidth();
    setIsArrowRight(!isArrowRight);
    setButtonHeight(buttonHeight === "normal" ? "large" : "normal");

  };
  // const showClick= ()=>{
  //   if (width<='150px'){

  //     setShowValues = showValues;
  //     }
   
  // }

  return (
    <div className="sidebar" style={{ width: width }}>
      <div className="in-out">
        {isArrowRight ? (
          <FaArrowAltCircleRight
            onClick={handleClick}
            height={buttonHeight}
            className="slider-in-out icons-sidebar"/>
        ) : (
          <FaArrowAltCircleLeft
            onClick={handleClick}
            height={buttonHeight}
            className="slider-in-out icons-sidebar"/>
        )}
      </div>
      <div className="hr" ></div>
      <div className="home-sidebar "  >
        <FaHome className="icons-sidebar"/> 
      </div>
      <div className="hr" ></div>
      <div className="explore-sidebar">
        <FaHashtag className="icons-sidebar"/>
      </div>
      <div className="hr"></div>
      <div className="notification-sidebar">
        <FaHeart className="icons-sidebar"/>
      </div>
      <div className="hr"></div>
      <div className="info-sidebar">
        <FaExclamationCircle className="icons-sidebar"/>

      </div>
      <div className="hr" ></div>
      <div className="contact-sidebar">
        <FaViber className="icons-sidebar"/> 

      </div>
      <div className="hr" ></div>
      <div className="save-sidebar">
        <FaBookmark className="icons-sidebar"/>

      </div>
      <div className="hr" ></div>
      <div className="user-sidebar">
        <FaUserSecret className="icons-sidebar"/>

      </div>
      <div className="hr" ></div>
    </div>
  );
}
