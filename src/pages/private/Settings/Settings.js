// outsource dependencies
import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { connect } from 'react-redux';

// local dependencies
import '../../../style/pages/settings.css';
import logo from '../../../assets/images/logo.svg';
import SettingsForm from '../../../components/userSettings/settingsForm';

class Settings extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        console.log('this.props.userData', this.props.userData)
    }
    render() {
        return (
            <div id="settingsPage">
                <Container>
                    <Row className="greeting pt-5 pb-5">
                        <Col>
                            <p>
                                {this.props.userData.name}, here you can change previous data.
                            </p>
                            <SettingsForm/>
                            {this.props.expectAnswer && <Preloader />}
                        </Col>
                    </Row>
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
export default connect(state => ({ ...state.page }))(Settings);