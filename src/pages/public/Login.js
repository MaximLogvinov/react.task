// outsource dependencies
import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { connect } from 'react-redux';

// local dependencies
import '../../style/pages/login.css';
import logo from '../../assets/images/logo.svg';
import AuthorizationForm from '../../components/authorization/Form';

class Login extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div id="login">
                <Container>
                    <Row className="greeting pt-5 pb-5">
                        <Col>
                            <p>
                                Dear guest, please log in! ;)
                            </p>
                            <AuthorizationForm />
                            {this.props.expectAnswer && <Prelodaer />}
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

function Prelodaer () {
    return (
        <Row>
            <Col className="text-center">
                <div style={{position:'relative'}}>
                    <div style={{position: 'absolute'}}>
                        <img src={logo} className="onsubmit-preloader" alt="logo" />
                    </div>
                </div>
            </Col>
        </Row>
    );
}
export default connect(state => ({ ...state.page }))(Login);
