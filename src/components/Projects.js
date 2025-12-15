import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import Forever from "../assets/img/17afb341-d628-4f75-8d17-dc749c75c93a.jpeg";
import colorSharp2 from "../assets/img/color-sharp2.png";
import grill from "../assets/img/grill.jfif";
import zohan from "../assets/img/zohan.jfif";
import naveen from "../assets/img/e-comm.jfif";
import easyshifa from "../assets/img/80486efa-cf44-41e2-88ae-114376a54e9c.jpeg";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const projects1 = [
    {
      title: "Easyshifa",
      description: "Frontend Development",
      imgUrl: easyshifa,
    },
    {
      title: "Digital Marketing",
      description: "Frontend Development",
      imgUrl: zohan,
    },
    {
      title: "Naveen Trends",
      description: "Frontend Development",
      imgUrl: naveen,
    },
  ];
  const projects2 = [
    {
      title: "GrilliHouse Provisions",
      description: "Backend Development",
      imgUrl: grill,
    },
  ];
  const projects3 = [
    {
      title: "Forever E-Commerce",
      description: "FullStack Development",
      imgUrl: Forever,
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
                  <h2>My Projects</h2>
                  <p>
                    I've worked on many projects like E-Commerce, Business, and
                    Management Systems. These projects show my skills in web
                    development. I'm always eager to use my skills in new
                    projects.
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">
                          <span className="d-none d-sm-inline">Frontend Development</span>
                          <span className="d-inline d-sm-none">Frontend</span>
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">
                          <span className="d-none d-sm-inline">Backend Development</span>
                          <span className="d-inline d-sm-none">Backend</span>
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">
                          <span className="d-none d-sm-inline">FullStack Development</span>
                          <span className="d-inline d-sm-none">FullStack</span>
                        </Nav.Link>
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
