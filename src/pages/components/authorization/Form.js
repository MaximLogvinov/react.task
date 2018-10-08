import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';

// local dependencies
import validate from './Validaiton';
import fieldComponent from './Field';
import '../../../style/components/form.css';
import submit from './Submit';
import { PAGE } from '../../../actions/types';

let AuthorizationForm = props => {
    const { handleSubmit, submitting } = props;
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
            <div>
                <button
                    type="submit"
                    disabled={submitting}
                    className="form-btn btn-success mt-4 mr-3"
                        >
                    Submit
                </button>
                <button
                    type="button"
                    className="form-btn"
                    onClick={()=>props.loading(false)}
                        >
                    off
                </button>
                <button
                    type="button"
                    className="form-btn"
                    onClick={()=>props.loading(true)}
                        >
                    on
                </button>
            </div>
        </form>
    )
};

// Export
AuthorizationForm = connect(
    state => ({ ...state.page }),
    dispatch => ({
        loading: ( on ) => dispatch({type: PAGE.PRELOADER, expectAnswer: Boolean(on)})
    })
)(AuthorizationForm);

export default reduxForm({form: 'authorization', validate})(AuthorizationForm);