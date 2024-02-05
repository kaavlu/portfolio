// AboutSection.tsx

import React from "react";

const AboutSection: React.FC = () => {
  const imagesPath = "src/components/images/";
  return (
    <section
      id="about"
      className="d-flex mt-4"
      style={{
        paddingTop: "110px",
        marginLeft: "50px",
        marginRight: "50px",
        minHeight: "100vh",
      }}
    >
      {/* Left half for text */}
      <div style={{ width: "50%" }}>
        <h2
          style={{
            color: "white",
            backgroundColor: "#6448E3",
            padding: "10px",
            borderRadius: "5px",
          }}
        >
          About Me
        </h2>
        <p>
          My name is Manav Khanvilkar, and I'm currently a sophomore at the
          University of Michigan studying computer science and mathematics.
          Using computer science I've been able to approach problem-solving and
          creative thinking in a whole new way.
          <br />
          <br />
          I'm very interested in full-stack web development, complex-robotic
          systems, natural language processing, and machine learning.
          <br />
          <br />
          At school, I am a software analyst for Atlas Digital where I perform
          tech consulting services for a variety of startups and established
          companies across the US. I am also a (tentative) member of the
          Robotics and Optimization for Analysis of Human Motion Laboratory
          where I work on _.
          <br />
          <br />
          Outside of school, I love working out, cooking new dishes, traveling
          around the world, and hanging out with my friends and family.
          <br />
          <br />
          Thank you for visiting my website!
        </p>
      </div>

      {/* Right half for images */}
      {/* Right half for images */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "50%",
          marginLeft: "20px",
          maxHeight: "100vh",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: "10px",
            maxHeight: "100%",
            overflow: "hidden",
          }}
        >
          {/* Update image sources based on your folder structure */}
          <img
            src={`${imagesPath}/img3.jpg`}
            alt="Your Image 1"
            style={{ width: "100%", height: "250px", objectFit: "cover" }}
          />
          <img
            src={`${imagesPath}/img4.jpg`}
            alt="Your Image 2"
            style={{ width: "100%", height: "250px", objectFit: "cover" }}
          />
          <img
            src={`${imagesPath}/img1.jpg`}
            alt="Your Image 3"
            style={{ width: "100%", height: "250px", objectFit: "cover" }}
          />
          <img
            src={`${imagesPath}/img2.jpg`}
            alt="Your Image 4"
            style={{ width: "100%", height: "250px", objectFit: "cover" }}
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
