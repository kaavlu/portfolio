// ContactSection.tsx

import React from "react";

const ContactSection: React.FC = () => {
  return (
    <section
      id="contact"
      className="d-flex mt-4"
      style={{
        paddingTop: "110px",
        marginLeft: "10px",
        marginRight: "10px",
        minHeight: "20vh",
      }}
    >
      <div style={{ width: "100%" }}>
        <h4
          style={{
            color: "white",
            backgroundColor: "#6448E3",
            padding: "10px",
            textAlign: "left",
            borderRadius: "5px",
          }}
        >
          Contact
        </h4>
        <h5>Contact me at manavk@umich.edu, 858-847-8020, or Linkedin!</h5>
      </div>
    </section>
  );
};

export default ContactSection;
