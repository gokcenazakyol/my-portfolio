import { Container, Row, Col, Tab} from "react-bootstrap";
import Nav from 'react-bootstrap/Nav';
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from '/Users/gokcenazakyol/Desktop/portfolio/src/assets/images/color-sharp2.png';
import assistant from '/Users/gokcenazakyol/Desktop/portfolio/src/assets/images/theassistant.png';
import redball from '/Users/gokcenazakyol/Desktop/portfolio/src/assets/images/redball.png';
import image_processing from '/Users/gokcenazakyol/Desktop/portfolio/src/assets/images/image_processing.png';
import machine_learning from '/Users/gokcenazakyol/Desktop/portfolio/src/assets/images/machine_learning.png';
import incognito from '/Users/gokcenazakyol/Desktop/portfolio/src/assets/images/incognito.JPG';
import paper from '/Users/gokcenazakyol/Desktop/portfolio/src/assets/images/paper.JPEG';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {
    const projects = [
        {
            title: "The Assistant",
            description: "A project to address lack of customization problem by developing a virtual assistant that is more interactive and personalized, with a focus on creating a more natural and engaging user experience.",
            imgURL: assistant,
        },
        {
            title: "Red Ball Detection",
            description: "A project that makes color-based object detection using the OpenCV library.",
            imgURL: redball,
        },
        
    ];

    const mediums = [
        {
            title: "Image Processing Notes",
            description: "",
            imgURL: image_processing,
        },
        {
            title: "Machine Learning Notes",
            description: "",
            imgURL: machine_learning,
        },
        
    ];

    const videos = [
        {
            title: "Incognito Review",
            description: "",
            imgURL: incognito,
        },
        {
            title: "Paper Review",
            description: "",
            imgURL: paper,
        },
        
    ];



    return (
        <section className="project" id="project">
            <Container>
                <Row>
                    <Col>
                        <h2>Works</h2>
                        <p>In my spare time, I like to do some small projects and share blog posts about the subjects I work on, or even produce video content on YouTube. The work I have done is as follows:</p>
                        <Tab.Container id="projects-tabs" defaultActiveKey="first">
                            <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                                <Nav.Item>
                                    <Nav.Link eventKey="first">Github Projects</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">Medium</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third">YouTube</Nav.Link>
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
                                <Tab.Pane eventKey="second">
                                <Row>
                                        {
                                            mediums.map((mediums, index) => {
                                                return(
                                                    <ProjectCard 
                                                        key={index}
                                                        {...mediums}
                                                    />
                                                )
                                            })
                                        }
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="third">
                                <Row>
                                        {
                                            videos.map((videos, index) => {
                                                return(
                                                    <ProjectCard 
                                                        key={index}
                                                        {...videos}
                                                    />
                                                )
                                            })
                                        }
                                    </Row>
                                </Tab.Pane>
                            </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={colorSharp2}></img>
        </section>
    )
}