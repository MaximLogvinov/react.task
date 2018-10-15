import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';

// local dependencies
import validate from './authorisationValidaiton';
import fieldComponent from './authorisationField';
import '../../style/components/form.css';
import submit from './authorisationSubmit';

let AuthorisationForm = props => {
    const {handleSubmit, submitting} = props;

    return (
        <form className="form-wrapper" onSubmit={handleSubmit(submit)}>
            <Field
                name="email"
                type="email"
                label="Email"
                component={fieldComponent}
                    />
            <Field
                name="password"
                label="Password"
                type="password"
                component={fieldComponent}
                    />
            <div className="text-center">
                <button
                    type="submit"
                    disabled={submitting}
                    className="form-btn btn-success mt-4 mr-3"
                        >
                    Submit
                </button>
            </div>
        </form>
    )
};

AuthorisationForm = connect(
    state => ({ ...state.page }),
)(AuthorisationForm);

export default reduxForm({form: 'authorisation', validate})(AuthorisationForm);