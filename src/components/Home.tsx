// Home.tsx

import React, { useEffect, useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
// import linkedInIcon from "./images/linkedin-icon.png";
// import githubIcon from "./images/github-icon.png";
// import emailIcon from "./images/email-icon.png";
// import resumeIcon from "./images/resume-icon.png";
// import instagramIcon from "./images/instagram-icon.png";

const Home: React.FC = () => {
  const [currentInterestIndex, setCurrentInterestIndex] = useState(0);
  const [currentInterest, setCurrentInterest] = useState("");
  const interests = [
    "I'm an Aspiring Software Engineer.",
    "I'm a Gym Enthusiast.",
    "I'm a Full Stack Web Developer.",
    "I'm an Avid Chef.",
    "I'm a skilled C++ user.",
  ];

  useEffect(() => {
    const typingSpeed = 150;
    const delayAfterTyping = 3000;

    const typeInterest = async () => {
      const interest = interests[currentInterestIndex];
      let typedInterest = "";

      for (let i = 0; i < interest.length; i++) {
        typedInterest += interest.charAt(i);
        setCurrentInterest(typedInterest);
        await new Promise((resolve) => setTimeout(resolve, typingSpeed));
      }

      setTimeout(() => {
        setCurrentInterest("");
        setCurrentInterestIndex(
          (prevIndex) => (prevIndex + 1) % interests.length
        );
      }, delayAfterTyping);
    };

    typeInterest();
  }, [currentInterestIndex]);

  return (
    <Container fluid className="p-0">
      {/* Home Section */}
      <section
        id="home"
        className="text-center d-flex flex-column justify-content-center align-items-center"
        style={{
          minHeight: "100vh",
        }}
      >
        <h1 className="text-dark" style={{ fontSize: "5rem" }}>
          Hey, I'm <span className="light-purple">Manav</span>!
        </h1>
        <h1 className="text-dark" style={{ fontSize: "4rem" }}>
          {currentInterest}
        </h1>

        <Row className="justify-content-center mt-4">
          <Col md={3} className="mb-5">
            <Button
              className="light-purple-button custom-button"
              href="https://www.linkedin.com/in/manav-khanvilkar/"
            >
              LinkedIn
            </Button>
          </Col>
          <Col md={3} className="mb-5">
            <Button
              className="light-purple-button custom-button"
              href="https://github.com/kaavlu"
            >
              GitHub
            </Button>
          </Col>
          <Col md={3} className="mb-5">
            <Button
              className="light-purple-button custom-button"
              href="mailto:manavk@umich.edu"
            >
              Email
            </Button>
          </Col>
          <Col md={3} className="mb-5">
            <Button
              className="light-purple-button custom-button"
              href="https://drive.google.com/file/d/1K4NAN0Gxx0IVx_bKdYeU4dh9994_jzgz/view?usp=sharing"
            >
              GitHub
            </Button>
          </Col>
          <Col md={3} className="mb-5">
            <Button href="#about" className="light-purple-button custom-button">
              Learn About Me!
            </Button>
          </Col>
        </Row>
      </section>
    </Container>
  );
};

export default Home;
