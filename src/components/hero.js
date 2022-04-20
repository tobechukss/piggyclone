import "./hero.scss"
import { Container, Row,Col } from "react-bootstrap"
import androidLogo from "../assets/android.svg"
import appleLogo from "../assets/apple_icon.svg"
import girl from "../assets/girl.jpeg"
import rent from "../assets/rent.png"
import investify from "../assets/invetify.png"
import rect from "../assets/rect.png"
import aCircle from "../assets/circle.svg"
import crosses from "../assets/crosses.svg"
import dots from "../assets/dots.svg"




const Hero =()=> {
    return (
        <div className="hero">
           <Container>
               <Row>
                   <Col lg={6} md={12} sm={12}>
                   <div className="left-hero-side">
                        <h1 className="heading">
                            The Better Way to Save & Invest.
                        </h1>
                        <p className="description">
                            PiggyVest helps over 3 million customers achieve their financial goals by helping them save and invest with ease.
                        </p>
                        <div className="buttons">
                        <a className="butn butn-primary  btn-block">Create Free Account</a>
                        
                       </div>
                   
                       
 
                        
                         
                    </div>

                   </Col>
                   <Col lg={6} md={12} sm={12}>
                   <div className="right-hero-side">
                    <img src={aCircle} className="circle"/>
                    <img src={crosses} className="crosses"/>
                    <img src={dots} className="dots"/>
                        <img src={girl} className="right-pic" alt="girl"/>
                        <img src={rect} className="rect" alt="border"/>
                        <img src={rent} className="rent" alt="rent" width="200px"/>
                        <img src={investify} className="investify" alt="investify" width="200px"/>
                    </div>

                   </Col>
               </Row>
           </Container>
        </div>
    )
}

export default Hero