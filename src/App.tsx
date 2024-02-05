// App.tsx

import React from "react";
import { Container } from "react-bootstrap";
import "./App.css";
import NavBar from "./components/NavBar";
import AboutSection from "./components/AboutSection";
import ExperienceSection from "./components/ExperienceSection";
import ProjectsSection from "./components/ProjectsSection";
import ContactSection from "./components/ContactSection";
import Home from "./components/Home";

const App: React.FC = () => {
  return (
    <Container>
      <NavBar />
      <Home />
      <AboutSection />
      <ExperienceSection />
      <ProjectsSection />
      <ContactSection />
    </Container>
  );
};

export default App;
