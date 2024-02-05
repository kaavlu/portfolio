// ContactSection.tsx

import React from "react";
import { Row, Col, Button } from "react-bootstrap";

const ContactSection: React.FC = () => {
  return (
    <section
      id="contact"
      className="d-flex mt-4"
      style={{
        paddingTop: "110px",
        marginLeft: "50px",
        marginRight: "50px",
        minHeight: "100vh",
      }}
    >
      <div>
        <h2
          style={{
            color: "white",
            backgroundColor: "#6448E3",
            padding: "10px",
            textAlign: "left",
            borderRadius: "5px",
          }}
        >
          Contact
        </h2>
        <h3>
          Contact me at manavk@umich.edu, 858-847-8020, or through any other
          platform listed on the home page!
        </h3>
      </div>
    </section>
  );
};

export default ContactSection;
