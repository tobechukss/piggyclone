import React from "react"
import { Row, Col, Container } from "react-bootstrap"
import investify from "../assets/invest.png"
import investcirc from "../assets/investcirc.svg"
import purp from "../assets/purp.svg"

import victory from "../assets/victory.png"
import "./investment.scss"





export default function Investment() {
    return (
        <div className="investment">
            <Container>
                <Row>
                    <Col lg={6} sm={12}>
                        <div className="invest-img">
                        <img src={investify} className="pic"/>
                        <img src={investcirc} className="circles" width="240px"/>
                        <img src={purp} className="purp" width="40px"/>
                        </div>
                        
                    </Col>
                    <Col lg={6} sm={12}>
                        <div className="text-block">
                        <h3>Up to 25% Returns</h3>
                        <h1>Access investment opportunities</h1>
                        <p>Invest securely and confidently on the go. Grow
                            your money confidently by investing in pre-vetted
                            investment opportunities.
                        </p>

                        <a href="#">Learn more about Investments{'>'}</a>
                        </div>
                    </Col>
                </Row>
                
            </Container>
         
        </div>
    )
}