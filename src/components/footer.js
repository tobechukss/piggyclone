import React from "react"
import logo from "../assets/logo.svg"
import techpoint from "../assets/techpoint.png"
import techcrunch from "../assets/techcrunch.png"
import guardian from "../assets/guardian.png"
import "./footer.scss"

export default function Footer() {
    return (
        <div className="footer">
            <div className="container-fluid first">
                <div className="row justify-content-center">
                    <div className="col-md-4">
                        <h2 className="featured">As featured in</h2>
                    </div>
                    <div className="col-md-8">
                        <div className="row">
                            <div className="sponsor col-sm-4 px-3">
                                <img src={techpoint} width="180px"/>
                            </div>
                            <div className="sponsor col-sm-4 px-3">
                                <img src={guardian} width="180px"/>
                            </div>
                            <div className="sponsor col-sm-4 px-3">
                                <img src={techcrunch} width="180px"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <footer className="container footr">
                <div className="row justify-content-center">
                    <div className="col-sm-3">
                        <img src={logo}/>
                        </div>

                        <ul className="col-3">
                            <li className="heading">Products</li>
                            <li className="items">Piggybank</li>
                            <li className="items">Invest</li>
                            <li className="items">Safelock</li>
                            <li className="items">Target Savings</li>
                            <li className="items">Flex Naira</li>
                        </ul>
                        <ul className="col-3">
                            <li className="heading">Company</li>
                            <li className="items">About</li>
                            <li className="items">FAQs</li>
                            <li className="items">Blog</li>
                          
                        </ul>
                        <ul className="col-3">
                            <li className="heading">Legal</li>
                            <li className="items">Terms</li>
                            <li className="items">Privacy</li>
                            <li className="items">Security</li>
                        </ul>
                </div>
            </footer>
        </div>
    )
}