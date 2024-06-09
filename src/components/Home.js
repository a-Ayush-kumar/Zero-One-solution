import React from "react";
import "./Home.css";
import { FaBackward, FaForward } from "react-icons/fa";

function importAll(r) {
  let images = {};
  r.keys().forEach((item, index) => {
    images[item.replace("./", "")] = r(item);
  });
  return images;
}

const images = importAll(require.context("./images", false, /-1\.png$/));
export default function Home(width) {
  return (
    <div className="home-container" style={{ width: width }}>
      <div id="main">
        <div id="page1">
          <div id="image-content">
            <div className="box-car-1">
              <img
                id="main-car"
                src={images["bolero-1.png"]}
                alt="Bolero- with best adaptablity on indian roads and suitable to all the environment condition."
                srcSet=""
              />
            </div>
            <div className="box-2-car-1-queue">
              <img
                id="main-car-2"
                src={images["thar-1.png"]}
                alt="Thar- with best adaptablity on indian roads and suitable to all the environment condition."
                srcSet=""
              />
            </div>
            <div className="box-3-car-1-next-to-queue">
              <img
                id="main-car-3"
                src={images["brezza-1.png"]}
                alt="Brezza- a family car by maruti-suzuki"
                srcSet=""
              />
            </div>
            <div className="box-4-car-1-next-to-next-queue">
              <img
                id="main-car-5"
                src={images["jimmy-1.png"]}
                alt="Jimmy- a family car by maruti-suzuki suitable for off tracking"
                srcSet=""
              />
            </div>
            <div className="box-4-gone-car-1">
              <img
                id="main-car-4"
                src={images["nexon-1.png"]}
                alt="Tata Nexon - a car with its feature suiable for family and long drives along with its comfort."
                srcSet=""
              />
            </div>
            <div className="previous-btn">
            <FaBackward className="icons-control"/>
            </div>
            <div className="next-btn">
            <FaForward className="icons-control"/>
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
              transmission type : dont know<br />
              colours available : white, black,etc.<br />
              EV variant : not available<br />
              </p>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
