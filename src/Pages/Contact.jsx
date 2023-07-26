import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Button } from "react-bootstrap";
import Axios from "axios";
import { useNavigate } from "react-router-dom";
import {AiOutlineSend} from "react-icons/ai"

export default function Contact() {
  const navigate = useNavigate();

  const [fname, setfname] = useState("");
  const [lname, setlname] = useState("");
  const [email, setemail] = useState("");
  const [phone, setphone] = useState();
  const [company, setcompany] = useState("");
  const [seats, setseats] = useState("");
  const [message, setmessage] = useState("");

  const [fnameerr, setfnameerr] = useState("");
  const [lnameerr, setlnameerr] = useState("");
  const [emailerr, setemailerr] = useState("");
  const [phoneerr, setphoneerr] = useState("");
  const [companyerr, setcompanyerr] = useState("");
  const [seatserr, setseatserr] = useState("");
  const [messageerr, setmessageerr] = useState("");


const [sucess,setSucess] = useState("")

  const [res, setres] = useState("");

  const createContact = () => {
    if (!fname) {
      setfnameerr("fname is required");
    }
    if (!lname) {
      setlnameerr("lname is required");
    }
    if (!email) {
      setemailerr("email is required");
    }
    if (!phone) {
      setphoneerr("phone is required");
    }
    if (!company) {
      setcompanyerr("company is required");
    }
    if (!seats) {
      setseatserr("seat is required");
    }
    if (!message) {
      setmessageerr("message is required");
    } else {
      Axios.post("http://localhost:3001/insert", {
        firstName: fname,
        LastName: lname,
        Email: email,
        PhoneNumber: phone,
        Company: company,
        NumberofSeats: seats,
        Message: message,
      })
        .then((res) => console.log(res.status))
        .catch((err) => console.log(err));

      setSucess("Message sent Sucessfully")
           navigate("/");

    }
  };

  return (
    <div className="con">
      <br />
      <br />

      <br />

      <Container>
        <div >
          <Row>
            {/* <Col lg="5" className="Left">
              <h3>Contact Information</h3>
              <p>
                Fill up the form and our Team will get back to you within 24
                hours
              </p>
            </Col> */}

            <Col lg="5">

            <br /><br />
              <h1 style={{color:"white",fontWeight:"bold",textAlign:"center"}}>Endowing The Future Of Kolkata’s </h1>
               <h1 style={{color:"black",fontWeight:"bold",textAlign:"center"}}>Work Culture</h1>
            
            <br />
           
            </Col>




            <Col lg="7">
              {/* <center> */}
                <div className="Right">
                  <h1 style={{fontWeight:"bold",color:"#3f3836"}}>Contact Us</h1>  
                  <p>

                    Complete the form and a WeWork team member will be in touch
                    with you shortly
                  </p>
                  <br />
                  <span style={{color:"green"}}>{sucess}</span>

                  <br />
                  <br />
  

                  <input
                    type="text"
                    onChange={(e) => {
                      setfname(e.target.value);
                      setfnameerr("");
                    }}
                    className="inpu"
                    placeholder="First Name"
                  />{" "}
                  <br />
                  <span className="red">{fnameerr}</span>
                  <br />
                  <input
                    type="text"
                    onChange={(e) => {
                      setlname(e.target.value);
                      setlnameerr("");
                    }}
                    className="inpu"
                    placeholder="Last Name"
                  />{" "}
                  <br />
                  <span className="red">{lnameerr}</span>
                  <br />
                  <input
                    type="email"
                    className="inpu"
                    onChange={(e) => {
                      setemail(e.target.value);
                      setemailerr("");
                    }}
                    placeholder="Email"
                  />{" "}
                  <br />
                  <span className="red">{emailerr}</span>
                  <br />
                  <input
                    className="inpu"
                    type="number"
                    onChange={(e) => {
                      setphone(e.target.value);
                      setphoneerr("");
                    }}
                    name=""
                    id=""
                    placeholder="Phone Number"
                  />{" "}
                  <br />
                  <span className="red">{phoneerr}</span>
                  <br />
                  <input
                    className="inpu"
                    type="text"
                    name=""
                    id=""
                    on
                    onChange={(e) => {
                      setcompany(e.target.value);
                      setcompanyerr("");
                    }}
                    placeholder="Company Name"
                  />{" "}
                  <br />
                  <span className="red">{companyerr}</span>
                  <br />
                  <input
                    className="inpu"
                    type="number"
                    name=""
                    id=""
                    onChange={(e) => {
                      setseats(e.target.value);
                      setseatserr("");
                    }}
                    placeholder="Number of Seats"
                  />
                  <br />
                  <span className="red">{seatserr}</span>
                  <br />
                  <textarea
                    className="inpu"
                    placeholder="Message"
                    name=""
                    id=""
                    cols="30"
                    onChange={(e) => {
                      setmessage(e.target.value);
                      setmessageerr("");
                    }}
                    rows="3"
                  ></textarea>
                  <br />
                  <span className="red">{messageerr}</span>
                  <br />
                  


                  <button  className="con-but"  onClick={createContact}>
                    Enquire Now <AiOutlineSend></AiOutlineSend>
                  </button>
                  {/* <Button onClick={createContact} variant="dark">
                    Submit
                  </Button> */}
                </div>
              {/* </center> */}

              {/* <button onClick={createContact}></button> */}
            </Col>
          </Row>
        </div>
      </Container>

      <br />
      <br />
    </div>
  );
}
