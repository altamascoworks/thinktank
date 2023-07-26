import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import { AiOutlineWifi } from "react-icons/ai";
import { MdSecurity } from "react-icons/md";
import { BiDrink } from "react-icons/bi";
import { RiProjector2Fill } from "react-icons/ri";
import { AiFillCar } from "react-icons/ai";
import { GrGroup } from "react-icons/gr";
import { GrCafeteria } from "react-icons/gr";
import { FaTableTennis } from "react-icons/fa";
import { ImPowerCord } from "react-icons/im";
import about from "../assets/about.jpg";
import { MdFastfood } from "react-icons/md";
import { FaParking } from "react-icons/fa";
import { FcConferenceCall } from "react-icons/fc";
import { GiCctvCamera } from "react-icons/gi";
import { MdCleaningServices } from "react-icons/md";
import { SlCalender } from "react-icons/sl";
import { AiFillPrinter } from "react-icons/ai";
import {BsFillPenFill} from "react-icons/bs"
import { GiOfficeChair } from "react-icons/gi";



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
 




export default function Home() {
  return (
    <div style={{ textAlign: "center" }}>
      <div className="home">
        <Container fluid>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />

          <Row>
            {/* <Col> */}

            <Col lg="12" sm="12">
              <h4 style={{ color: "white" }}>
                Co-work | Meetings | Events | Workshops | Interviews
              </h4>
              <h1 className="home-head">
                WHERE <h1 className="home-head1">PRODUCTIVITY</h1>
              </h1>
              <h1 className="home-head">
                MEETS <h1 className="home-head1">PERFORMANCE</h1>
              </h1>
              <h4 style={{ color: "white" }}>
                Tap Your Ability With Greater Flexibility
              </h4>
              <br />
              <br />
              <br />
              <br />
              <br />
            </Col>

            {/* </Col> */}
          </Row>
          <br />
          <br />
          <br />
        </Container>
      </div>

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
      <br /><br />
    </div>
  );
}
