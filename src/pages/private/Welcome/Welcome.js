// outsource dependencies
import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

// local dependencies
import '../../../style/pages/welcome.css';

class Welcome extends Component {
    // constructor(props) {
    //     super(props);
    // }
    render() {
        console.log(this.props);
        return (
            <div id="welcomePage">
                <Container>
                    <Row className="greeting pt-5 pb-5">
                        <Col>
                            <p>
                                Hello {this.props.userData.name}, we glad to see you on our "Welcome" page!
                                You can change your settings if you visit <NavLink className="welcome-link"  to="/settings">Settings</NavLink>
                            </p>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default connect(state => ({ ...state.page }))(Welcome);
