import React from "react";
import covidPic from "./covid-19-header.png";
import "./LoadingPage.css";

function LoadingPage() {
  return (
    <div className="loader">
      <h1 className="loader__title">Covid-19 Tracker</h1>
      <img className="loader__img" src={covidPic} alt="loading"></img>
    </div>
  );
}

export default LoadingPage;
