import React from "react";
import deejay from "../assets/deej.png"
import "./sotm.scss"

export default function Saver() {
    return (
        <div className="container-fluid saver ">
        <div className="row">
            <div className="saver-text col-md-6">
              <h1 className="meet-saver">Meet the saver of the month!</h1>
              <p>Every month, we shine a spotlight on one saver, asking them questions about their savings culture and
                  how the product is specifically helping them shape how they
                  spend and save for future responsibilities
              </p>
            </div>
            <div className="saver-img col-md-6">
                <img src={deejay}/>
            </div>
        </div>
    </div>
    )
}