import React, { useState } from "react";
import "./Home.css";
import { FaBackward, FaForward } from "react-icons/fa";

// const images = importAll(require.context("./images", false, /-1\.png$/));
export default function Home(width) {
  const imageSources = [
    "bolero-1.png",
    "thar-1.png",
    "brezza-1.png",
    "jimmy-1.png",
    "nexon-1.png",
  ];

  const [currentIndexes, setCurrentIndexes] = useState({
    box1: 0,
    box2: 1,
    box3: 2,
    box4: 3,
    box5: 4
  });

   const forwardClick = () => {
    setCurrentIndexes((prevIndexes) => {
      let nextIndexes = { ...prevIndexes };
      Object.keys(nextIndexes).forEach((key) => {
        nextIndexes[key] = (nextIndexes[key] + 1) % imageSources.length;
      });
      return nextIndexes;
    });
  };

  const backwardClick = () => {
    setCurrentIndexes((prevIndexes) => {
      let nextIndexes = { ...prevIndexes };
      Object.keys(nextIndexes).forEach((key) => {
        nextIndexes[key] =
          (nextIndexes[key] - 1 + imageSources.length) % imageSources.length;
      });
      return nextIndexes;
    });
  };

  return (
    <div className="home-container" style={{ width: width }}>
      <div id="main">
        <div id="page1">
          <div id="image-content">
            {/* {imagePositions.map((src, index) => (
              <div key={index} className={`box-${index + 1}-car-1`}>
                <img
                  className="main-car"
                  src={require(`./images/${src}`)}
                  alt={`${src.split("-")[0]} - description`}
                />
              </div>
            ))} */}
            <div className="box-car-1">
           <img
                className="main-car"
                src={require(`./images/${imageSources[currentIndexes.box1]}`)}
                alt="Bolero- with best adaptablity on indian roads and suitable to all the environment condition."
              //  <img
              //   className="main-car"
              //   src={images["bolero-1.png"]}
              //   alt={`${imageSources[currentImageIndex].split('-')[0]} - description`} />
              //   srcSet=""
                />
            </div>
            <div className="box-2-car-1-queue">
            <img
                className="main-car"
                src={require(`./images/${imageSources[currentIndexes.box2]}`)}
                alt=" "
              />
            </div>
            <div className="box-3-car-1-next-to-queue">
            <img
                className="main-car"
                src={require(`./images/${imageSources[currentIndexes.box3]}`)}
                alt=" car3"  />
            </div>
            <div className="box-4-car-1-next-to-next-queue">
            <img
                className="main-car"
                src={require(`./images/${imageSources[currentIndexes.box4]}`)}
                alt=" "  />
            </div>
            <div className="box-4-gone-car-1">
            <img
                className="main-car"
                src={require(`./images/${imageSources[currentIndexes.box5]}`)}
                alt=" "
              />
            </div>
            <div className="previous-btn">
              <FaBackward className="icons-control" onClick={backwardClick} />
            </div>
            <div className="next-btn">
              <FaForward className="icons-control" onClick={forwardClick} />
            </div>
          </div>
          <div className="details">
            <div className="car-name-1">
              <h1 className="car-name">BOLERO</h1>
            </div>
            <div id="car-detail">
              <div id="car-name">
                Mahindra Bolero
                <p>
                  Fuel type : Petrol engine <br />
                  seating capacity : 7<br />
                  transmission type : dont know
                  <br />
                  colours available : white, black,etc.
                  <br />
                  EV variant : not available
                  <br />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
