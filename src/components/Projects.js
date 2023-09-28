import { Container, Row, Col, Tab} from "react-bootstrap";
import Nav from 'react-bootstrap/Nav';
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from '/Users/gokcenazakyol/Desktop/portfolio/src/assets/images/color-sharp2.png';
import projImg1 from '/Users/gokcenazakyol/Desktop/portfolio/src/assets/images/project-img1.png';
import projImg2 from '/Users/gokcenazakyol/Desktop/portfolio/src/assets/images/project-img2.png';
import projImg3 from '/Users/gokcenazakyol/Desktop/portfolio/src/assets/images/project-img3.png';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {
    const projects = [
        {
            title: "Project 1",
            description: "This is project 1",
            imgURL: projImg1,
        },
        {
            title: "Project 2",
            description: "This is project 2",
            imgURL: projImg2,
        },
        {
            title: "Project 3",
            description: "This is project 3",
            imgURL: projImg3,
        },
        {
            title: "Project 1",
            description: "This is project 1",
            imgURL: projImg1,
        },
        {
            title: "Project 2",
            description: "This is project 2",
            imgURL: projImg2,
        },
        {
            title: "Project 3",
            description: "This is project 3",
            imgURL: projImg3,
        },
        
    ];

    return (
        <section className="project" id="project">
            <Container>
                <Row>
                    <Col>
                    <TrackVisibility>
                            {({ isVisible }) => 
                            <div className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                        <h2>Projects</h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        </div>}
                        </TrackVisibility>
                        <Tab.Container id="projects-tabs" defaultActiveKey="first">
                            <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                                <Nav.Item>
                                    <Nav.Link eventKey="first">Tab 1</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">Tab 2</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third">Tab 3</Nav.Link>
                                </Nav.Item>
                            </Nav>
                            <Tab.Content>
                                <Tab.Pane eventKey="first">
                                    <Row>
                                        {
                                            projects.map((projects, index) => {
                                                return(
                                                    <ProjectCard 
                                                        key={index}
                                                        {...projects}
                                                    />
                                                )
                                            })
                                        }
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">Lorem Ipsum</Tab.Pane>
                                <Tab.Pane eventKey="third">Lorem Ipsum</Tab.Pane>
                            </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={colorSharp2}></img>
        </section>
    )
}