import React from "react";
import userAdmin from "../img/userblogadmn.jpg";
import "./aboutCoder.css";

function AboutCoder() {
  return (
    <div className="coder-main-box">
      <div className="coder-box">
        <div className="img-coder">
          <img src={userAdmin} alt="" />
        </div>
        <h1>ABOUT CODERTEST</h1>
        <p>
          It Was Popularised In The 1960s With The Release Of Letraset Sheets
          Containing Lorem Ipsum Passages, And More Recently With Desktop
          Publishing Software Like Aldus PageMaker Including Versions Of Lorem
          Ipsum.
        </p>
        <p>ALL AUTHOR POSTS CODERTEST</p>
      </div>
    </div>
  );
}

export default AboutCoder;
