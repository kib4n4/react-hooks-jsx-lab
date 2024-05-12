import React from "react";
import { image } from "../data/data.js";

function About() {
  return (
  <div>
    <h2> About me</h2>
    <p>being a programmer is awesome</p>
    <img src={image} alt="I made this"/>
  </div>
  );
 
}

export default About;
