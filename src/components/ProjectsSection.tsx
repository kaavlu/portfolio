// ProjectsSection.tsx

import React from "react";

const ProjectsSection: React.FC = () => {
  return (
    <section
      id="projects"
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
          textAlign: "right",
          borderRadius: "5px",
        }}
      >
        Projects
      </h2>

      {/* Four cards layout */}
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
            src="/cvpic.jpg"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              borderRadius: "10px",
            }}
            alt="Example"
          />
          <div className="card-text">
            <h3
              style={{
                color: "white",
                padding: "10px",
                textAlign: "center",
              }}
            >
              Deep Learning Aided Facial Recognition System
            </h3>
            <div style={{ textAlign: "center" }}>
              <br />
              <p>Employed DNN module using the Caffe framework and OpenCV</p>
              <p>
                Constructed a prototype to be used in a variety of situations;
                tested an automated classroom attendance system
              </p>
              <p>
                Eliminated inherent racial biases present the model to improve
                recognition accuracy (90%)
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
            src="/spark2code.jpg"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              borderRadius: "10px",
            }}
            alt="Example"
          />
          <div className="card-text">
            <h3
              style={{
                color: "white",
                padding: "10px",
                textAlign: "center",
              }}
            >
              Spark2Code/Coastal Hacks
            </h3>
            <div style={{ textAlign: "center" }}>
              <br />
              <p>
                Organized three Hackathons dedicated to addressing disparities
                in STEM, fostering collaboration with renowned companies such as
                Repl.it and Taskade, resulting in the acquisition of $140,000
                worth of STEM prizes.
              </p>
              <p>
                Connected engineers from around the world through a centralized
                communication platform used by 500+ people.
              </p>
              <p>
                Collaborated with tech companies, professors, and graduate
                students to create intuitive workshops for beginner coders, a
                comprehensive judging system, and a professional custom website.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          maxHeight: "75vh",
          paddingTop: "20px",
          overflow: "hidden",
        }}
      >
        {/* Third Card */}
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
            src="/colab.jpg"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              borderRadius: "10px",
            }}
            alt="Example"
          />
          <div className="card-text">
            <h3
              style={{
                color: "white",
                padding: "10px",
                textAlign: "center",
              }}
            >
              Medical Machine Learning Project
            </h3>
            <div style={{ textAlign: "center" }}>
              <br />
              <p>
                Gained competency and fluency with the vocabulary of algorithms,
                informatics, big data, and artificial intelligence
              </p>
              <p>
                Developed projects involving public data sources such as
                identifying tumor/cyst locations in patients.
              </p>
              <p>
                Researched and presented a thorough understanding of the legal
                and ethical factors involving the use of AI
              </p>
            </div>
          </div>
        </div>

        {/* Fourth Card */}
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
            src="/mllc.jpg"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              borderRadius: "10px",
            }}
            alt="Example"
          />
          <div className="card-text">
            <h3
              style={{
                color: "white",
                padding: "10px",
                textAlign: "center",
              }}
            >
              ManSon Mining LLC
            </h3>
            <div style={{ textAlign: "center" }}>
              <br />
              <p>
                Assembled a state-of-the-art crypto mining rig with 6 graphics
                cards to mine Ethereum at a rate of 300 MH/sec.
              </p>
              <p>
                Actively day-traded generated Ethereum on Coinbase Pro to
                increase profits; Overall I have made over $6000.
              </p>
              <p>
                Implemented software bot to automatically purchase Nvidia
                graphics cards whenever they came in stock.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
