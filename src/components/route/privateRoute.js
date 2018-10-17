import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const PrivateRoute = ({ isAuthorized, component, ...rest }) => {
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
