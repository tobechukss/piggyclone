import React from "react"
import "./buildSavings.scss"
import pig from "../assets/pig.svg"
import piggy from "../assets/piggy.png"
import safe from "../assets/safe.svg"
import safelock from "../assets/safelock.png"
import trgt from "../assets/tgt.svg"
import target from "../assets/target.png"
import flx from "../assets/flx.svg"
import flexed from "../assets/flex.png"

export default function Builders() {
    return (
        <div className="builders">
            <div className="container">
                <div className="row">
                    <div className="descr col-lg-5">
                   
                            <h3>4 ways to build your savings</h3>
                            <p className="title-descr">Earn 5%-15% when you save with any of these PiggyVest plans.</p>
                            
                            <a className="btn butn-primary">Start Saving</a>
                    </div>
                    <div className="col-lg-7">
                        <div className="row justify-content-between">
                            <div className="col-sm-6">
                            <div className="custom-card card">
                        <img src={piggy} width="50px" className="log"/>
                         
                         <h2 >Automated Savings</h2>
                         <p className="card-descr">Build a dedicated savings on your term 
                             automatically or manually.
                         </p>
                        
                        <div className="cta">
                        <img src={pig} className="logs"/>
                        <p className="cta-name">Piggybank</p>
                        </div>
                        </div>
                            </div>
                            <div className="col-sm-6">
                            <div className="custom-card card">
                        <img src={safelock} width="50px" className="log"/>
                         
                         <h2 >Fixed Savings</h2>
                         <p className="card-descr">Lock money away for a fixed duration with no access to it until maturity. It's
                                like having a custom fixed deposit.
                         </p>
                        
                        <div className="cta">
                        <img src={safe} className="logs"/>
                        <p className="cta-name">Safelock</p>
                        </div>
                        </div>
                            </div>


                            <div className="col-sm-6">
                            <div className="custom-card card">
                        <img src={target} width="50px" className="log"/>
                         
                         <h2 >Goal-oriented Savings</h2>
                         <p className="card-descr">Reach all your savings goals faster. Save towards multiple
                                goals on your own or with a group.
                         </p>
                        
                        <div className="cta">
                        <img src={trgt} className="logs"/>
                        <p className="cta-name">Targets</p>
                        </div>
                        </div>
                            </div>

                            <div className="col-sm-6">
                            <div className="custom-card card">
                        <img src={flexed} width="50px" className="log"/>
                         
                         <h2 >Flexible Savings</h2>
                         <p className="card-descr">Save, transfer, withdraw, manage and organise your
                                money for free at any time.
                         </p>
                        
                        <div className="cta">
                        <img src={flx} className="logs"/>
                        <p className="cta-name">Flex Naira</p>
                        </div>
                        </div>
                            </div>
                        </div>
                       
                    </div>
                </div>
            </div>
        </div>
    )
}