import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import navIcon4 from "../assets/img/nav-icon4.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <img src={logo} alt="Siddharth Chaudhary" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
            <a href="https://www.linkedin.com/in/siddharth-chaudhary-7735aa157/" target="_blank" rel="noopener noreferrer">
                <img src={navIcon1} alt="LinkedIn" />
              </a>
              <a href="https://github.com/sid987145" target="_blank" rel="noopener noreferrer">
                <img src={navIcon2} alt="GitHub" />
              </a>
              <a href="https://www.instagram.com/0riginal_sid/?next=%2F" target="_blank" rel="noopener noreferrer">
                <img src={navIcon3} alt="Instagram" />
              </a>
              <a href="https://www.facebook.com/siddharth.chaudhary.37266" target="_blank" rel="noopener noreferrer">
                <img src={navIcon4} alt="Facebook" />
              </a>
            </div>
            <p style={{ color: 'white' }}>Phone: <a href="tel:+9015864727" style={{ color: 'white' }}>9015864727</a></p>
            <p style={{ color: 'white' }}>Email: <a href="mailto:sid987145@gmail.com" style={{ color: 'white' }}>sid987145@gmail.com</a></p>
            <p style={{ color: 'white' }}>Copyright 2024. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
