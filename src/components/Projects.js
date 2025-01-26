import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/aq.jfif";
import colorSharp2 from "../assets/img/color-sharp2.png";
import grill from "../assets/img/grill.jfif";
import zohan from "../assets/img/zohan.jfif";
import naveen from "../assets/img/e-comm.jfif";
import portal from "../assets/img/portal.jfif";
import logistics from "../assets/img/logistics.png";
import autoroad from "../assets/img/auto.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const projects1 = [
    {
      title: "ClockInSight",
      description: "Frontend Development",
      imgUrl: portal,
    },
    {
      title: "LogiTrack",
      description: "Frontend Development",
      imgUrl: logistics,
    },
  ];
  const projects2 = [
    {
      title: "GrilliHouse Provisions",
      description: "Frontend Development",
      imgUrl: grill,
    },
    {
      title: "SEO Impact Agency",
      description: "Frontend Development",
      imgUrl: zohan,
    },
    {
      title: "AutoRoad",
      description: "Frontend Development",
      imgUrl: autoroad,
    },
  ];
  const projects3 = [
    {
      title: "AQ Gimel",
      description: "Frontend Development",
      imgUrl: projImg1,
    },
    {
      title: "Naveen Trends",
      description: "Frontend Development",
      imgUrl: naveen,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Projects</h2>
                  <p>
                    Throughout my web development career, I have been fortunate
                    to work on a number of exciting and challenging projects,
                    including [E-Commerce Websites, Bussiness Websites and
                    System Management Softwares etc ]. These projects have
                    allowed me to demonstrate my expertise in development
                    technologies and have given me the opportunity to take on
                    various roles. I am proud of the results I have achieved on
                    these projects and am always looking for new opportunities
                    to apply my skills and experience to make a positive impact.
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Software Dev</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Bussiness Dev</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">E-Commerce Web</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects1.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <Row>
                          {projects2.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <Row>
                          {projects3.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="" />
    </section>
  );
};
