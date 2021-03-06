import React from "react";
import { Accordion, Badge } from "react-bootstrap";
import "../style/footer.scss"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footerMobile">
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header>Need Help?</Accordion.Header>
            <Accordion.Body>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <a href="/">How to Order</a>
                <a href="/">Order status</a>
                <a href="/">Track your shipment</a>
                <a href="/">Return&exchange</a>
              </div>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>About Us</Accordion.Header>
            <Accordion.Body>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <a href="/">Careers <Badge bg="primary">apply now</Badge></a>
                <a href="/">Media</a>
                <a href="/">Request new Product</a>
              </div>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>Contact Us</Accordion.Header>
            <Accordion.Body>
            <div style={{ display: "flex", flexDirection: "column" }}>
                <a href="/">Phone Number : +628 77220000000</a>
                <a href="/">Email Address : info@polos.id</a>
              </div>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>Partner With Us</Accordion.Header>
            <Accordion.Body>
            <div style={{ display: "flex", flexDirection: "column" }}>
                <a href="/">Collaboration</a>
                <a href="/">Partnership</a>
              </div>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
        <p style={{textAlign:"center"}}>Copyright &copy; PT.POLOS SEPERTI BARU</p>
      </div>
      <div className="footerWeb" style={{backgroundColor:"tomato"}}>
          <h1 style={{textAlign:"center"}}>Polos.id</h1>
          <div className="section-footer">
          <div style={{ display: "flex", flexDirection: "column" }}>
                <a href="/">How to Order</a>
                <a href="/">Order status</a>
                <a href="/">Track your shipment</a>
                <a href="/">Return&exchange</a>
              </div>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <a href="/">Careers <Badge bg="primary">apply now</Badge></a>
                <a href="/">Media</a>
                <a href="/">Request new Product</a>
              </div>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <a href="/">Phone Number : +628 77220000000</a>
                <a href="/">Email Address : info@polos.id</a>
              </div>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <a href="/">Collaboration</a>
                <a href="/">Partnership</a>
              </div>


          </div>
          <p style={{textAlign:"center"}}>Copyright &copy; PT. POLOS SEPERTI BARU</p>

      </div>
    </footer>
  );
};

export default Footer;
