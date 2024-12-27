import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="EEG Data Analysis"
              description="Developed a machine learning model using CWT and CNN,achieving 76% accuracy in classifying EEG data for m-TBI patient identification.
                          Composed neural network parameters, determining the optimal batch size as 32 and the learning rate to be 0.001 for peak performance."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Quantum Approach to Credit"
              description=" Revamped a quantum circuitry approach to solve risk-reward problems using the Qiskit library to estimate Var CVaR. Performed quantum amplitude estimation to obtain 80% accuracy in the expected loss for the Gaussian uncertainty model."
              // ghLink="https://github.com/soumyajit4419/Bits-0f-C0de"
              // demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="B&WImageColorization"
              description="Restructured a CNN model for converting black-and-white images into color, leveraging L, A, and B color space.
Programmed a model to manage a variety of real-world scenes using the Scene Understanding dataset, attaining a precision score of 56%."
              // ghLink="https://github.com/soumyajit4419/Editor.io"
              // demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Benchmarking of ML Algorithms"
              description="Engineered a project to fine-tune the OpenAI Whisper model, improving accuracy by 26% from 49 to 36 Word Error Rate (WER)."
            //   ghLink="https://github.com/soumyajit4419/Plant_AI"
            //   demoLink="https://plant49-ai.herokuapp.com/"
             />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Virtual Wardrobe AI"
              description=" Implementedarobust image processing pipeline for precise clothing detection achieving realistic clothing visualization.
 Optimized system's performance by leveraging CUDA acceleration resulting in 40% improvement in processing speed."
              // // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              // ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
