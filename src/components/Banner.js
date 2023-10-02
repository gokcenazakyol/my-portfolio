import {useState, useEffect} from 'react';
import { Container, Row, Col } from "react-bootstrap"
import { ArrowRightCircle } from "react-bootstrap-icons"
import headerImg from '../assets/images/header-img.svg'
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = ["ML Engineer", "Data Scientist", "Software Engineer"];
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(250 - Math.random() * 100);
    const period = 1500;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta)

        return () => { clearInterval(ticker) };
    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];

        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);
        setText(updatedText);

        if (isDeleting) {
            setDelta(prevDelta => prevDelta / 2);
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setDelta(period);
        } else if (isDeleting && text === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(500);
        }
    }
    
    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <TrackVisibility>
                            {({ isVisible }) => 
                            <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                                <span className="tagline">Welcome to my Portfolio!</span>
                                <h1>{"Hi! I'm Gokcenaz Akyol. "}<span className="wrap">{text}</span></h1>
                                <p>Undergraduate student who is enrolled in Artificial Intelligence Engineering program at Hacettepe University. Dedicated to artificial intelligence, having a half year of expertise, and specialising in machine learning, deep learning, and computer vision.</p>
                            </div>}
                        </TrackVisibility>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={headerImg} alt="Header Img"/>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}