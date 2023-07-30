import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "./Navbar";
import "./Hompage.css";
function HomePage() {
  const [data, setData] = useState({});

  useEffect(() => {
    fetchData();
  });

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:3000/variables");
      console.log("Data:", response.data);

      // Assuming the data is an array with a single object
      console.log(response.data.data[0]);
      setData(response.data.data[0]);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <>
      <Navbar />
      <div className="homepage-body" style={{ color: "red" }}>
        <div className="homepage-body-content">
          <div className="home-top-text">
            <h1 className="home-top-text-title">
              Improve your <br />
              <span className="button-design">{data.focus}</span> Faster
            </h1>
            <div className="home-top-left-text">
              <p className="home-top-text-content">{data.text}</p>
              <div className="home-top-text-button">
                <button className="home-top-text-button-1">Enroll now</button>
              </div>
            </div>
          </div>
          <div className="home-image">
            <div className="home-image-div">
              <img src="/heroImage1.jpeg" alt="*"></img>
            </div>
          </div>
        </div>
      </div>

      <div className="centered-cells-container">
        <div className="centered-cell">
          <span className="cellTitle">{data.reveiws}</span>
          <p>80K Reveiws</p>
        </div>
        <div className="centered-cell">
          <span className="cellTitle">{data.enrollments}</span>
          <p>Enrollments</p>
        </div>
        <div className="centered-cell">
          <span className="cellTitle">{data.learners}</span>
          <p>learners</p>
        </div>
        <div className="centered-cell">
          <span className="cellTitle">{data.courses}</span>
          <p>Popular Courses</p>
        </div>
      </div>
    </>
  );
}

export default HomePage;
