import { Col, Container, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import python from '/Users/gokcenazakyol/Desktop/portfolio/src/assets/images/python-original.svg';
import cplus from '/Users/gokcenazakyol/Desktop/portfolio/src/assets/images/cplusplus-original.svg';
import csharp from '/Users/gokcenazakyol/Desktop/portfolio/src/assets/images/csharp-original.svg';
import dart from '/Users/gokcenazakyol/Desktop/portfolio/src/assets/images/dart-original-wordmark.svg';
import flutter from '/Users/gokcenazakyol/Desktop/portfolio/src/assets/images/flutter-original.svg';
import java from '/Users/gokcenazakyol/Desktop/portfolio/src/assets/images/java-original-wordmark.svg';
import javacript from '/Users/gokcenazakyol/Desktop/portfolio/src/assets/images/javascript-original.svg';
import numpy from '/Users/gokcenazakyol/Desktop/portfolio/src/assets/images/numpy-original.svg';
import pandas from '/Users/gokcenazakyol/Desktop/portfolio/src/assets/images/pandas-original-wordmark.svg';
import pytorch from '/Users/gokcenazakyol/Desktop/portfolio/src/assets/images/pytorch-original.svg';
import tensorflow from '/Users/gokcenazakyol/Desktop/portfolio/src/assets/images/tensorflow-original.svg';
import colorSharp from '/Users/gokcenazakyol/Desktop/portfolio/src/assets/images/color-sharp.png';



export const Skills = () => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

    return (
        <section className="skill" id="skills">
            <Container>
                <Row>
                    <Col>
                        <div className="skill-bx">
                            <h2>Experience and Skills</h2>
                             <p>I have a strong background in deep learning, machine learning, large language models,natural language processing, mobile app development, and metaverse projects. My skills encompass a range of programming languages, including Python, C#, JavaScript, Flutter, and Dart. I'm adept at using tools like Heroku and Git for efficient project management. My expertise extends to creating immersive applications and chatbots for real-world use cases.</p>
                            <Carousel responsive={responsive} infinite={true} className="skill-slider">
                                <div className="item">
                                    <img src={python} alt="Image" />
                                    <h5>Python</h5>
                                </div>      
                                <div className="item">
                                    <img src={java} alt="Image" />
                                    <h5>Java</h5>
                                </div> 
                                <div className="item">
                                    <img src={pytorch} alt="Image" />
                                    <h5>Pytorch</h5>
                                </div>   
                                <div className="item">
                                    <img src={tensorflow} alt="Image" />
                                    <h5>Tensorflow</h5>
                                </div>      
                                <div className="item">
                                    <img src={numpy} alt="Image" />
                                    <h5>Numpy</h5>
                                </div> 
                                <div className="item">
                                    <img src={pandas} alt="Image" />
                                    <h5>Pandas</h5>
                                </div>   
                                <div className="item">
                                    <img src={cplus} alt="Image" />
                                    <h5>C++</h5>
                                </div>      
                                <div className="item">
                                    <img src={csharp} alt="Image" />
                                    <h5>C#</h5>
                                </div> 
                                <div className="item">
                                    <img src={javacript} alt="Image" />
                                    <h5>Javascript</h5>
                                </div>   
                                <div className="item">
                                    <img src={dart} alt="Image" />
                                    <h5>Dart</h5>
                                </div>  
                                <div className="item">
                                    <img src={flutter} alt="Image" />
                                    <h5>Flutter</h5>
                                </div>  
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-left" src={colorSharp}/>
        </section>
    )
}