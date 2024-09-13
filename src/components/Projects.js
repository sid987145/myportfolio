import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/upaj.png";
import projImg2 from "../assets/img/iTrade.png";
import projImg3 from "../assets/img/upajP.png";
import projImg4 from "../assets/img/tetrix.png";
import projImg5 from "../assets/img/gallery.png";
import projImg6 from "../assets/img/speech.png";
import projImg7 from "../assets/img/droide.jpeg";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {
  const projects = [
    {
      title: "UPAJ - Kisan ka Super App",
      description: "Application Development",
      imgUrl: projImg1,
    },
    {
      title: "iTrade - An online platform for agricultural commodity trading",
      description: "Application Development",
      imgUrl: projImg2,
    },
    {
      title: "Upaj Partner",
      description: "Application Development",
      imgUrl: projImg3,
    },
    {
      title: "Tetrix - Online Theatre Booking Website",
      description: "Design & Development [FULLSTACK-MERN]",
      imgUrl: projImg4,
    },
    {
      title: "Art Gallery",
      description: "Design & Development [HTML, CSS]",
      imgUrl: projImg5,
    },
    {
      title: "Speech Module - Using Python",
      description: "Research & Development",
      imgUrl: projImg6,
    },
    {
      title: "BB-8: The Fascinating Robot from Star Wars [NK-Learnicare Winner]",
      description: "Design & Development",
      imgUrl: projImg7,
    },
    {
      title: "UPAJ - Kisan ka Super App",
      description: "Application Development",
      imgUrl: projImg1,
    },
    {
      title: "iTrade - An online platform for agricultural commodity trading",
      description: "Application Development",
      imgUrl: projImg2,
    }
  ];

  // Split the projects into groups
  const projectGroups = [
    projects.slice(0, 3),
    projects.slice(3, 6),
    projects.slice(6, 9),
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col xs={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Projects</h2>
                  <p>Explore how I bring ideas to life with a focus on user-centric design and innovative technology.</p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center">
                      <Nav.Item>
                        <Nav.Link eventKey="first">Tab 1</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Tab 2</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Tab 3</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                      {projectGroups.map((group, index) => (
                        <Tab.Pane eventKey={['first', 'second', 'third'][index]} key={index}>
                          <Row>
                            {group.map((project, idx) => (
                              <ProjectCard key={idx} {...project} />
                            ))}
                          </Row>
                        </Tab.Pane>
                      ))}
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="Background decoration" />
    </section>
  );
};
