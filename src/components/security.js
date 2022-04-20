import React from "react";
import "./security.scss"
import secured from "../assets/security.png"
import { Container, Row, Col } from "react-bootstrap";

const Security =()=> {
    return (
        <div className="security">
            <Container>
                <Row>
                    <Col lg={4} md={12} sm={12}>
                        <div className="white-space">

                        </div>
                    </Col>
                    <Col lg={8} md={12} sm={12}>
                        <div className="securities">
                            <div>
                            <img src={secured}/>
                            </div>
                            <div className="descr">
                            <h1>Your security is our priority</h1>
                            <p>PiggyVest uses the highest level of Internet Security and it is secured by 256 bits SSL security encryption to ensure that 
                                your information is comepletely protected from fraud.</p>
                                <a href="#">Learn more {'>'}</a>
                                </div>
                        </div>
                    </Col>
                </Row>
            </Container>

        </div>
    )
}

export default Security;