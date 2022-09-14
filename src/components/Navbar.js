import React from "react";
import Logo from "../images/airbnb.png"
import "../../src/style.css"
export default function Navbar() {
  return(
    <nav>
        <img src={Logo} className="nav--logo"/>
    </nav>
  )
}