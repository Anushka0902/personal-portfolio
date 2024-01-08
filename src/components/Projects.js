import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.jpeg";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/project-img4.png";
import projImg5 from "../assets/img/doc.png";

import proImg1 from "../assets/img/proimg1.jpg";
import proImg2 from "../assets/img/proimg2.png";
import proImg3 from "../assets/img/proimg3.png";
import proImg4 from "../assets/img/proimg4.jpg";
import proImg5 from "../assets/img/proimg5.jpg";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Reventa ",
      description: "Reventa is an ecommerce solution for the daily requirement of the items required for a short period of time which has a uniqueness of renting option as well provide the ease to the customers",
      imgUrl: projImg1,
    },
    {
      title: " Invicta ",
      description: "It is a portal that will find the right government scheme for you according to the categories mention by user and it will find all the suitable scheme that the user can apply.  ",
      imgUrl: projImg2,
    },
    {
      title: "Anukulakh",
      description: "Anukulakh is a platform where user can select t-shirts with their attributes e.g., colour according to the user needs and download a template and even user can upload the logo or their custom message on T-shirt",
      imgUrl: projImg3,
    },
    {
      title: "AI summarizer",
      description: " Provide summary of any URL youtube video",
      imgUrl: projImg4,
    },
    {
      title: " DocStep",
      description: " Docstep is a project which recommends natural remedies and helps in finding a consultant doctor for the same and calculating the BMI calculates daily calories consumed.",
      imgUrl: projImg5,
    },
    
  ];
  const Cpp = [
    {
      title: "Voting System ",
      description: "An electoral system or voting system is a set of rules that determine how elections and referendums are conducted and how their results are determined.",
      imgUrl: proImg1,
    },
    {
      title: " Attendence System ",
      description: " Attendance Management can be done by recording employee hours on paper, using spreadsheets, punching time cards, or using online attendance software for your company. ",
      imgUrl: proImg2,
    },
    {
      title: "Hotel Reservation",
      description: "A hotel reservation system is a software application that allows guests to book directly with the hotel online, with no intermediaries",
      imgUrl: proImg3,
    },
    {
      title: " User Authentication",
      description: "User authentication helps secure systems, applications, and networks by identifying user identities and ensuring that only authorized users can access sensitive data",
      imgUrl: proImg4,
    },
    {
      title: " Expense Tracker",
      description: "Expense trackers allow you to build a personal budget & see your cash balance. Getting on top of your finances comes with huge pay offs & peace of mind ",
      imgUrl: proImg5,
    },
    
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>These are all my works and internships.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Web Development projects</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">C/C++ Projects</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Interships</Nav.Link>
                    </Nav.Item>
                    
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <Row>
                        {
                          Cpp.map((Cpp, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...Cpp}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="section">
                     
                    </Tab.Pane>
                    <Tab.Pane eventKey="third" className="align=left">
                     

<p>
• <a href="https://drive.google.com/file/d/1mpeDGmAg77g_OGmNbX6_XssKRNIAm3Bu/view?usp=drive_link" target="_blank"   >
Excelvana private limited
      </a><br></br>  (Oct 2023- Dec 2023)<br></br>
      I have learnt management, technical skills, adaptability and team-work with aweb developer role. <br></br>

</p>

<p>
• <a href="https://drive.google.com/file/d/1mpWbMcRPrC9zsWDfMQtA6ApsCl_WXzcR/view?usp=drive_link" target="_blank"   >
M/s Dangi Digital Media LLP
      </a><br></br>  (May 2023- July 2023)<br></br>
                           Had a role of web developer in which I have learnt gaining knowledge, constructive criticism, problem solving<br></br>

</p>

                       <p>
• <a href="https://drive.google.com/file/d/1AUpJyXUX5zLUuP1x5Zt0Fi-brEllNTD5/view?usp=drive_link" target="_blank"   >
                       	 Aerial Telecom Services PVT ltd 
      </a><br></br>  (July 2022- Aug 2022)<br></br>
                           Had a role of junior web developer with team work and management skills   <br></br>

</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
