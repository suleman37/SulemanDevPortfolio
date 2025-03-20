import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import colorSharp from "../assets/img/color-sharp.png";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <p>
                I have extensive experience with these technologies, having
                worked on numerous projects utilizing these tools.
                <br /> I am confident in my ability to apply these skills to a
                variety of projects and environments.
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="skill-slider"
              >
                <div className="item">
                  <img src={meter1} alt="HTML/CSS" />
                  <h5>HTML/CSS</h5>
                </div>
                <div className="item">
                  <img src={meter3} alt="JS/ES6" />
                  <h5>JS/ES6</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="React-Bootstrap" />
                  <h5>React-Bootstrap</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="Tailwind CSS" />
                  <h5>Tailwind CSS</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="Material UI" />
                  <h5>Material UI</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="React Js" />
                  <h5>React Js</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="Next Js" />
                  <h5>Next Js</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="WordPress" />
                  <h5>WordPress</h5>
                </div>
                <div className="item">
                  <img src={meter3} alt="Node.js" />
                  <h5>Node.js</h5>
                </div>
                <div className="item">
                  <img src={meter3} alt="Express.js" />
                  <h5>Express.js</h5>
                </div>
                <div className="item">
                  <img src={meter3} alt="MongoDB" />
                  <h5>MongoDB</h5>
                </div>
                <div className="item">
                  <img src={meter3} alt="SQL" />
                  <h5>SQL</h5>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Background" />
    </section>
  );
};