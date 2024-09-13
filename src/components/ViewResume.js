import { useState, useEffect } from "react";
import { Col, Row, Button } from "react-bootstrap";
import { WOW } from 'wowjs'; // Import WOW.js for animations

export const ViewResume = () => {
  const resumeLink = "https://drive.google.com/file/d/129sPx21SjwZBei6ZR_8Wu9drbalyCN2G/view?usp=drive_link";
  const resumeDownloadLink = "https://drive.google.com/uc?export=download&id=129sPx21SjwZBei6ZR_8Wu9drbalyCN2G";

  // Initialize WOW.js for animations
  useEffect(() => {
    new WOW().init();
  }, []);

  return (
    <section id="viewResume"> {/* Added section with id */}
      <Col lg={12}>
        <div className="resume-bx wow slideInUp">
          <Row>
            <Col lg={12} md={6} xl={5}>
              <h3>View and Download My Resume for later reference</h3>
            </Col>
            <Col md={6} xl={7}>
              <div className="resume-actions">
                <Button 
                  variant="primary" 
                  href={resumeLink} 
                  target="_blank" // Open in a new tab
                  rel="noopener noreferrer" 
                  aria-label="View Resume"
                >
                  View Resume
                </Button>
                <a 
                  href={resumeDownloadLink} 
                  download="Siddharth_Chaudhary_Resume.pdf"
                  className="btn btn-secondary"
                  rel="noopener noreferrer"
                  aria-label="Download Resume"
                >
                  Download Resume
                </a>
              </div>
            </Col>
          </Row>
        </div>
      </Col>
    </section>
  );
};
