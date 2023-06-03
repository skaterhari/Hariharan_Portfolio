import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import 'animate.css';
import emailjs from '@emailjs/browser';

import TrackVisibility from 'react-on-screen';
import React,{ useRef } from "react";

export const Contact = () => {
  const formInitialDetails = {
    Name: '',
    email: '',
    phone: '',
    message: ''
  }
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState('Send');
  const [status, setStatus] = useState({});
  const form = useRef();
  const onFormUpdate = (category, value) => {
      setFormDetails({
        ...formDetails,
        [category]: value
      })
  }
  
  const HandleSubmit = async (e) => {
    e.preventDefault();
    setButtonText('Sending...');
  
      emailjs.sendForm('service_g7j6xni', 'template_mw0jefv', form.current, 'JhNy4JhUODFDG-cFu')
        .then((result) => {
          setStatus({ success: true, message: 'Message sent successfully' });
        }, (error) => {
          setStatus({ success: false, message: 'Failed to send email' });
        });

    // try {
    //   const response = await fetch('http://localhost:5000/send-email', {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json;charset=utf-8',
    //     },
    //     body: JSON.stringify(formDetails),
    //   });
  
    //   if (response.ok) {
    //     setStatus({ success: true, message: 'Message sent successfully' });
    //     setFormDetails(formInitialDetails);
    //   } else {
    //     setStatus({ success: false, message: 'Something went wrong, please try again later.' });
    //   }
    // } catch (error) {
    //   console.error(error);
    //   setStatus({ success: false, message: 'Failed to send email' });
    // }
  
    setButtonText('Send');
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImg} alt="Contact Us"/>
              }
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <h2>Get In Touch</h2>
                <form  ref={form} onSubmit={HandleSubmit}>
                  <Row>
                    <Col size={12} sm={10} className="px-1">
                      <input type="text" value={formDetails.firstName} placeholder="Full Name" name='to_name' onChange={(e) => onFormUpdate('Name', e.target.value)} />
                    {/* </Col>
                    {/* <Col size={12} sm={6} className="px-1">
                      <input type="text" value={formDetails.lasttName} placeholder="Last Name" onChange={(e) => onFormUpdate('lastName', e.target.value)}/> */}
                    </Col>
                    <Col size={12} sm={10} className="px-1">
                      <input type="email" value={formDetails.email} placeholder="Email Address" name="from_name" onChange={(e) => onFormUpdate('email', e.target.value)} />
                    </Col>
                    <Col size={12} sm={10} className="px-1">
                      <input type="tel" value={formDetails.phone} placeholder="Phone No." name="phone" onChange={(e) => onFormUpdate('phone', e.target.value)}/>
                    </Col>
                    <Col size={12}  sm={10} className="px-1">
                      <textarea rows="5" value={formDetails.message} placeholder="Message" name="message"
                       onChange={(e) => onFormUpdate('message', e.target.value)}></textarea>
                        {
                      status.message &&
                      <Col>
                        <p id='msg' className={status.success === false ? "danger" : "success"}>{status.message}</p>
                      </Col>
                    }
                      <button type="submit"><span>{buttonText}</span></button>
                    </Col>
                   
                  </Row>
                </form>
               
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
