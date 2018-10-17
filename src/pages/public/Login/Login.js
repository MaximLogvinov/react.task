// outsource dependencies
import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { connect } from 'react-redux';

// local dependencies
import '../../../style/pages/login.css';
import logo from '../../../assets/images/logo.svg';
import AuthorisationForm from '../../../components/authorisation/authorisationForm';

class Login extends Component {
    // constructor(props) {
    //     super(props);
    // }
    render() {
        return (
            <div id="login">
                <Container>
                    <Row className="greeting pt-5 pb-5">
                        <Col>
                            <p>
                                Dear {this.props.userData.name}, please log in! ;)
                            </p>
                            <AuthorisationForm/>
                        </Col>
                    </Row>
                    {this.props.expectAnswer && <Preloader />}
                </Container>
            </div>
        );
    }
}

function Preloader () {
    return (
        <Row>
            <Col>
                <div className="position-relative">
                    <div className="position-absolute w-100">
                        <img src={logo} className="onsubmit-preloader" alt="logo" />
                    </div>
                </div>
            </Col>
        </Row>
    );
}
export default connect(state => ({ ...state.page }))(Login);
