// ExperienceSection.tsx

import React from "react";

const ExperienceSection: React.FC = () => {
  return (
    <section
      id="experience"
      className="text-center mt-4"
      style={{
        paddingTop: "80px",
        marginLeft: "50px",
        marginRight: "50px",
        minHeight: "100vh",
      }}
    >
      <h2
        style={{
          color: "white",
          backgroundColor: "#6448E3",
          padding: "10px",
          textAlign: "left",
          borderRadius: "5px",
        }}
      >
        Experience
      </h2>

      {/* Two cards layout */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          maxHeight: "75vh",
          overflow: "hidden",
        }}
      >
        {/* First Card */}
        <div
          className="experience-card"
          style={{
            width: "48%",
            backgroundColor: "#6448E3",
            padding: "20px",
            borderRadius: "10px",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <img
            src="/appimg.jpg"
            alt="Experience 1"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              borderRadius: "10px",
            }}
          />
          <div className="card-text">
            <h3
              style={{
                color: "white",
                padding: "10px",
                textAlign: "center",
              }}
            >
              Atlas Digital - Tech Consulting
            </h3>
            <h5
              style={{
                color: "white",
                textAlign: "center",
              }}
            >
              Software Analyst
            </h5>
            <div style={{ textAlign: "center" }}>
              <br />
              <p>
                Provided pro-bono services to a diverse array of tech startups,
                elevating their digital presence and technical capabilities to
                help them thrive in the competitive tech landscape.
              </p>
              <p>
                Spearheaded a comprehensive full-stack web development project,
                creating an innovative club application system.
              </p>
              <p>
                Led the application page sub-team, where I utilized React.js and
                Firebase storage for efficient storage of applicant responses.
                Additionally, implemented distinct permissions based on user
                roles for enhanced access control.
              </p>
            </div>
          </div>
        </div>

        {/* Second Card */}
        <div
          className="experience-card"
          style={{
            width: "48%",
            backgroundColor: "#6448E3",
            padding: "20px",
            borderRadius: "10px",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <img
            src="/soliditycode.jpg"
            alt="Experience 2"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              borderRadius: "10px",
            }}
          />
          <div className="card-text">
            <h3
              style={{
                color: "white",
                padding: "10px",
                textAlign: "center",
              }}
            >
              YodaPlus
            </h3>
            <h5
              style={{
                color: "white",
                textAlign: "center",
              }}
            >
              Software Intern
            </h5>
            <div style={{ textAlign: "center" }}>
              <br />
              <p>
                Utilized Solidity Smart Contracts using the Remix framework to
                create a unique NFT generator for college-id
              </p>
              <p>
                Used Ethereum White papers and standards (ERC 721) to generate a
                crypto node from my personal computer
              </p>
              <p>
                Created custom AI-generated art and worked with NFT Token
                generator; used OpenSea for art distribution
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
