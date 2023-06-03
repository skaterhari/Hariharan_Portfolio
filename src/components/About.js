import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/amrita-vidyalayam-logo-vertical-blue.svg";
import projImg2 from "../assets/img/3.jpg";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import './SlidingComponent.css'
import { Education } from "./Education";
import { Achievement } from "./Achievement";
import { Achievement1 } from "./Achievement1";
import { useEffect,useState } from "react";
import TrackVisibility from 'react-on-screen';

export const About = () => {
    const [activeIndex, setActiveIndex] = useState(0);
  
    useEffect(() => {
      const timer = setInterval(() => {
        console.log(activeIndex)
        setActiveIndex((prevComponent) => (prevComponent === 2 ? 0 : prevComponent + 1));
      }, 3000); // Change slide every 5 seconds
  
      return () => {
        clearInterval(timer); // Cleanup the timer on component unmount
      };
    }, []);

  return (
    <section className="project" id="abt">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>About me</h2>
                <div className="sliding-container">
      <div className={`component-slide slide-${activeIndex}`}>
      {activeIndex === 0 && (
          <div>
            <Education />
          </div>
        )}
      </div>
      <div className={`component-slide slide-${activeIndex === 0 ? 2 : activeIndex - 1}`}>
      {activeIndex !== 0 && (
          <div>
            <Achievement />
          </div>
        )}
      </div>
      <div className={`component-slide slide-${activeIndex === 1 ? 2 : activeIndex + 1}`}>
      {activeIndex !== 0 && (
          <div>
            <Achievement1 />
          </div>
        )}
      </div>
    </div>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
