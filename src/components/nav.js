import "./nav.scss";
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useState } from "react";
import { useEffect } from "react";
import logo from "../assets/logo.svg";

const Navigation = () => {
    const [getStyle, setStyle] = React.useState({backgroundColor: "transparent", boxShadow: "none"})
    useEffect(()=> {
        function getStyled() {
            if (window.scrollY <=5) {
                setStyle((style)=> {
                    return {...style, backgroundColor: "transparent", boxShadow: "none"};
                })
            }
            else {
                setStyle((style)=> {
                    return {...style, backgroundColor: "white", boxShadow: "0px 6px 5px -3px rgba(12, 24, 37, 0.22)" };
                })
            }
            
        }
        window.addEventListener("scroll", getStyled)
        
           
    },[window.scrollY])
    const [activity, setActivity] = React.useState({
        isActive: "not-active",
        isShown: "not-shown"
    })
    const toggle =() => {
        setActivity((active)=> {
            if (active.isActive === "not-active") {
                return {...active, isActive: "active", isShown: ""}
            } else {
                return {...active, isActive: "not-active", isShown: "not-shown"}
            }
        })
        
    }
  return (
    <nav className="navigation" style={getStyle}>
      <Container >
        <ul className="main-list">
          <li>
            <img src={logo} alt="Piggyvest Logo" className="left" />
          </li>
          <li className="left links">
            <a href="#">Save</a>
          </li>
          <li className="left links">
            <a href="#">Invest</a>
          </li>
          <li className="left links">
            <a href="#">Stories</a>
          </li>
          <li className="left links">
            <a href="#">FAQ</a>
          </li>
          <li className="left links">
            <a href="#">Blog</a>
          </li>
          <li className="right hamburger">
            <div className="box">
              <div className={`bitn ${activity.isActive}`} onClick={toggle}>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          </li>
          <li className="right butn butn-primary links">Create Free Account</li>
          <li className="right butn butn-outline links">Sign In</li>
        </ul>

        <ul className={`hamburger-list ${activity.isShown}`}>
          <li className="hamburger-link">
            <a href="#">Save</a>
          </li>
          <li className="hamburger-link">
            <a href="#">Invest</a>
          </li>
          <li className="hamburger-link">
            <a href="#">Stories</a>
          </li>
          <li className="hamburger-link">
            <a href="#">FAQ</a>
          </li>
          <li className="hamburger-link">
            <a href="#">Blog</a>
          </li>
          <li className="hamburger-link butn butn-outline">Sign In</li>
          <li className="hamburger-link butn butn-primary">
            Create Free Account
          </li>
        </ul>
      </Container>
    </nav>
  );
};

export default Navigation;
