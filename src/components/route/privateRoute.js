import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import Pages from "../../pages";
import { connect } from 'react-redux';


const PrivateRoute = ({ isAuthorized, component, ...rest }) => {
    console.log('private route', isAuthorized);
    return (
        isAuthorized
            ? <Route
                component={component}
                {...rest}
                    />
            : <Redirect to="/" />
    );
};

export default connect(state => ({isAuthorized: state.page.isAuth}) )(PrivateRoute);
