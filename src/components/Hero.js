import React from "react";
import "../../src/style.css";
import Grid from "../images/grid.png"
export default function Hero() {
  return(
    <div>
      <section className="hero">
        <img src={Grid} className="hero--photo"/>
        <h1 className="hero--header">Online Experiences</h1>
        <p className="hero--text">Join unique interactive activities led by one-of-kind hosts-all without leaving home.</p>
      </section>
    </div>
    
  )
}