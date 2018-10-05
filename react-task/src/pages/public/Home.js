// outsource dependencies
import React, { Component } from 'react';
import image from '../../assets/images/image.jpg';
import { Container, Row, Col } from 'reactstrap';
import { NavLink } from 'react-router-dom';
// local dependencies
import '../../style/pages/home.css';

class Home extends Component {
  render() {
    return (
        <div id="home">
            <Container>
                <Row className="greeting pt-5 pb-5">
                    <Col>
                        <img
                            src={image}
                            alt="home picture"
                            className="greeting-img-wrapper"
                            />
                    </Col>
                    <Col>
                        <p>
                            Hello, dear user! It's our greeting page with no functional. You can visit
                            our <NavLink className="greeting-link" to="/login">Login</NavLink> page.
                        </p>
                    </Col>
                </Row>
            </Container>
        </div>
    );
  }
}

export default Home;
