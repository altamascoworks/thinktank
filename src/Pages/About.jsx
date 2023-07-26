import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { AiOutlineWifi } from "react-icons/ai";
import { MdSecurity } from "react-icons/md";
import { BiDrink } from "react-icons/bi";
import { RiProjector2Fill } from "react-icons/ri";
import { AiFillCar } from "react-icons/ai";
import { GrGroup } from "react-icons/gr";
import { GrCafeteria } from "react-icons/gr";
import { FaTableTennis } from "react-icons/fa";
import { ImPowerCord } from "react-icons/im";
import { FaRupeeSign } from "react-icons/fa";
import { GiOfficeChair } from "react-icons/gi";
import { GiHealthPotion } from "react-icons/gi";
import { GiSofa } from "react-icons/gi";
import { BsFillPeopleFill } from "react-icons/bs";
import { GiForkKnifeSpoon } from "react-icons/gi";
import sofa from "../assets/sofa.jpg";
import desk from "../assets/Premium Amenities2.png";
import key from "../assets/key.jpg";
import rupees from "../assets/rupees.jpg";
import about from "../assets/about.jpg";
import { MdFastfood } from "react-icons/md";
import { FaParking } from "react-icons/fa";
import { FcConferenceCall } from "react-icons/fc";
import { GiCctvCamera } from "react-icons/gi";
import { MdCleaningServices } from "react-icons/md";
import { SlCalender } from "react-icons/sl";
import { AiFillPrinter } from "react-icons/ai";
import { BsFillPenFill } from "react-icons/bs";
import transparent from "../assets/Transparent Costing.png"
import Hospitality from "../assets/Premium Hospitality.png"
import Locker from "../assets/Office Locker.png"
import simple from "../assets/Simple and efficent culture.png"
import Modern from "../assets/modern office space.png"
import about1 from "../assets/price1.jpg"

import wifi from "../assets/wifi.png"
import cafe  from "../assets/cafe.png"
import calender from "../assets/calender.png"
import meeting from "../assets/meeting.png"
import tutorial from "../assets/tutorial.png"
import chair from "../assets/chair.png"
import printer from "../assets/printer.png"
import cctv from "../assets/cctv.png"
import concierge from "../assets/concierge.png"
import parking from "../assets/parking.png"
 



export default function About() {
  return (
    <div style={{ textAlign: "center", marginBottom: "10" }}>
      <br />
      <Container>
        <br />
        <Row>
          <Col>
            <img
              className="about-img"
              // className="img-fluid"
              src={about1}
              alt=""
            />
          </Col>
          <Col lg="6">
            <h1 style={{ fontWeight: "bold", color: "#3f3836" }}>
              Understanding{" "}
              <h1
                style={{
                  fontWeight: "bold",
                  color: "#90B00F",
                  display: "inline",
                }}
              >
                Idea
              </h1>
              Pod
            </h1>
            <p>
              Ideapod is a tech-savvy and flexible coworking space that promotes
              productivity, creativity, and networking through a set of unique
              amenities in Kolkata.
            </p>
            <Row>
              <Col lg="4">
                <div className="why">
                  <img src={desk}  height="70" alt="" />
                  {/* <GiSofa size={60}></GiSofa> */}
                  <h5 style={{ fontSize: 16, fontWeight: "bold" }}>
                    {" "}
                    Access to Premium Amenities
                  </h5>
                </div>
              </Col>
              <Col lg="4">
                <div className="why">
                  {" "}
                  <img src={Modern} height="70" alt="" />
                  {/* <FaRupeeSign size={50}></FaRupeeSign> */}
                  <h5 style={{ fontSize: 16, fontWeight: "bold" }}>
                    Modern Space Designs{" "}
                  </h5>
                  <br />
                </div>
              </Col>
              <Col lg="4">
                <div className="why">
                  {" "}
                  <img src={Locker} height="70" alt="" />
                  {/* <GiOfficeChair size={60}></GiOfficeChair> */}
                  <h5 style={{ fontSize: 16, fontWeight: "bold" }}>
                    Desk Space in Lockable Office{" "}
                  </h5>
                </div>
              </Col>
            </Row>

            <Row>
              <Col lg="4">
                <div className="why">
                  {" "}
                  <img src={simple} height="70" alt="" />
                  {/* <GiHealthPotion size={60}></GiHealthPotion> */}
                  <h5 style={{ fontSize: 16, fontWeight: "bold" }}>
                    Simple & Efficient Culture{" "}
                  </h5>
                </div>
              </Col>
              <Col lg="4">
                <div className="why">
                  {" "}
                  <img src={Hospitality} height="70" alt="" />
                  {/* <GiHealthPotion size={60}></GiHealthPotion> */}
                  <h5 style={{ fontSize: 16, fontWeight: "bold" }}>
                    Premium Hospitality
                  </h5>
                </div>
              </Col>
              <Col lg="4">
                <div className="why">
                  {" "}
                  <img src={transparent} height="70" alt="" />
                  {/* <GiHealthPotion size={60}></GiHealthPotion> */}
                  <h5 style={{ fontSize: 16, fontWeight: "bold" }}>
                    Transparent Costing{" "}
                  </h5>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
        <br />
        <br />
        <br />

        {/* <Row>
          <Col>
            <h3>Our Story</h3>
            <p>
              Maker Space Pvt. Ltd. was founded in March, 2022 by Khalid Rashid
              and Rashad Hasan. Over the last few years, Maker Space has evolved
              from being a coworking network to a fully tech-enabled workspace
              solutions platform that provides products across the spectrum of
              work requirements to cater to a wide segment of the modern
              workforce - from freelancers to startups, SMEs to large corporates
              and MNCs. The Awfis Design Philosophy ensures that our spaces
              provide a perfect blend of collaborative and private areas with a
              vibrant colour palette and trendy furniture lending it a
              contemporary aesthetic. As India’s largest shared space network,
              with our presence established across all metros and a host of Tier
              ll cities; Awfis has successfully redefined what a modern
              workspace should look like and set a standard for providing an
              exemplary work experience.
            </p>
          </Col>
          <Col>
            <img
              className="img-fluid"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Channel_1_Israel_DSC0021.jpg/1200px-Channel_1_Israel_DSC0021.jpg"
              alt=""
            />
          </Col>
        </Row> */}
        <br />
      </Container>

      <div className="prod">
        <br />
        <br />
        <br />
        <br />
        <Container>
          <Row>
            <Col lg="3">
              <br />
              <br />
              <h3
                style={{ color: "black", fontSize: 45, fontWeight: "bold" }}
              >
                Productivity
              </h3>
              <h3
                style={{
                  paddingBottom: "6px",
                  color: "white",
                  fontSize: 30,
                  fontWeight: "bold",
                  borderBottom: "10px double white",
                }}
              >
                at its Best
              </h3>
            </Col>
            <Col lg="2" sm="6">
              <div className="h-ame">
                <AiOutlineWifi size={60}></AiOutlineWifi>
                <h5>High Speed Wifi & LAN</h5>
              </div>
            </Col>
            <Col lg="2" sm="6">
              <div className="h-ame">
                <MdSecurity size={60}></MdSecurity>
                <h5>Network Security</h5>
              </div>
            </Col>
            <Col lg="2" sm="6">
              <div className="h-ame">
                <BiDrink size={60}></BiDrink>
                <h5>Free Beverages</h5>
              </div>
            </Col>
            <Col lg="2" sm="6">
              <div className="h-ame">
                <RiProjector2Fill size={60}></RiProjector2Fill>
                <h5>Meeting Rooms</h5>
              </div>
            </Col>
            <Col lg="1">
              <div className="h-ame1">
                <FaTableTennis size={60}></FaTableTennis>
                <h5>Break Out Area</h5>
              </div>
            </Col>
          </Row>

          <br />
          {/* <Row>
            
            
            <Col lg="4">
              <div className="h-ame">
                <ImPowerCord size={60}></ImPowerCord>
                <h5>Power Backup</h5>
              </div>
            </Col>
          </Row> */}
          <br />
          {/* <Row>
            <Col lg="4">
              <div className="h-ame">
                <GiForkKnifeSpoon color="white" size={60}></GiForkKnifeSpoon>
                <h5>Cafeteria</h5>
              </div>
            </Col>
            <Col lg="4">
              <div className="h-ame">
                <AiFillCar size={60}></AiFillCar>
                <h5>Parking Available</h5>
              </div>
            </Col>
            <Col lg="4">
              <div className="h-ame">
                <BsFillPeopleFill color="white" size={60}></BsFillPeopleFill>
                <h5>Concierge Services</h5>
              </div>
            </Col>
          </Row> */}
        </Container>
        <br />
      </div>

      <br />
      <br />
      {/* <Container>
        <Row>
          <Col>
            <h3>Why Work At Millimetre co-workspace</h3>
          </Col>
        </Row>

        <br />
        <br />
        <Row>
          <Col lg="3">
            <div className="why">
              <GiSofa size={60}></GiSofa>
              <h5 style={{ fontWeight: "bolder", fontSize: 25 }}>
                {" "}
                Access to Premium Amenities
              </h5>
            </div>
          </Col>
          <Col lg="3">
            <div className="why">
              {" "}
              <FaRupeeSign size={50}></FaRupeeSign>
              <h5 style={{ fontWeight: "bolder", fontSize: 25 }}>
                Less Price{" "}
              </h5>
            </div>
          </Col>
          <Col lg="3">
            <div className="why">
              {" "}
              <GiOfficeChair size={60}></GiOfficeChair>
              <h5 style={{ fontWeight: "bolder", fontSize: 25 }}>
                Creative Space Design
              </h5>
            </div>
          </Col>
          <Col lg="3">
            <div className="why">
              {" "}
              <GiHealthPotion size={60}></GiHealthPotion>
              <h5 style={{ fontWeight: "bolder", fontSize: 25 }}>
                Premium Hospitality
              </h5>
            </div>
          </Col>
        </Row>
      </Container> */}

      <br />

      {/* <Container fluid>
        <Row>
          <Col>
            <img
              src="https://ideapod.in/wp-content/uploads/2022/11/ideapod-cafeteria.jpg"
              className="img-fluid"

              alt=""
            />
          </Col>
          <Col>
          <div className="cafe">

          <h1>
              Reactivate Your Energy At Our Cafeteria Of Flavorful Chitchats
            </h1>

          </div>
           
          </Col>
        </Row>

        <Row>
          <Col>
            <h1>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus,
              enim.
            </h1>
          </Col>
          <Col>
            <img
              src="https://ideapod.in/wp-content/uploads/2022/11/ideapod-cafeteria.jpg"
              alt=""
              className="img-fluid"
            />
          </Col>
        </Row>
      </Container> */}

<Container>
        <Row>
          <Col lg="6">
            <img src={about} alt="" className="new" />
          </Col>

          <Col lg="6">
            <h1 style={{ fontWeight: "bolder", color: "#3f3836" }}>
              Mark your own Glorious Spot at our <h1 style={{ fontWeight: "bolder", color: "#90B00F",display:"inline" }}>
              office space
            </h1>
             
            </h1>
           
            <h4 style={{ color: "#3f3836" }}>Our Amenities Includes:</h4>

            <br />
            <Container style={{ textAlign: "center", }}>
              <Row>
                <Col>
                <img src={printer} height="50" alt="" />
                  <br />
                  <h6>Printer & Scanner</h6>
                </Col>
                <Col>
                  {/* <AiOutlineWifi color="yellow" size={40}></AiOutlineWifi> */}
                  <img src={wifi} height="50" alt="" />
                <br />
                  <h6>Superfast WiFi</h6>
                </Col>
              </Row>
              <br />
              <Row>
                <Col>
                  <img src={cafe} height="50" alt="" />
                  <br />
                  <h6>Cafe</h6>
                </Col>
                <Col>
                <img src={parking} height="50" alt="" />
                  <br />
                  
                  <h6>Parking Space</h6>
                </Col>
              </Row>
              <br />
              <Row>
                <Col>
                <img src={meeting} height="50" alt="" />
                <br />
                  <h6>Meeting Rooms</h6>
                </Col>
                <Col>
                <img src={cctv} height="50" alt="" />
                <br />
                  <h6>CCTV Surveillance</h6>
                </Col>
              </Row>
              <br />
              <Row>
                <Col>
                <img src={tutorial} height="50" alt="" />
                  <br />
                  <h6>Tutorials</h6>
                </Col>
                <Col>
                  <img src={calender} height="50" alt="" />
                  <br />
                  <h6>Events Calendar</h6>
                </Col>
              </Row>
              <br />
              <Row>
                <Col>
                <img src={chair} height="50" alt="" />
                <br />
                  <h6>Comfy Workstations</h6>
                </Col>
                <Col>
                  
                  <img src={concierge} height="50" alt="" />
                  <br />

                  <h6>Concierge</h6>
                </Col>
                <br />
                <br />
              </Row>
            </Container>
          </Col>
        </Row>
      </Container>
      <br />
      <br />
      <br />
      <br />
    </div>
  );
}
