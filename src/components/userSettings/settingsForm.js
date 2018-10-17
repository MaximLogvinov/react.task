import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';

// local dependencies
import validate from './settingsValidation';
import fieldComponent from './settingsField';
import '../../style/components/form.css';
import submit from './settingsSubmit';

let SettingsForm = props => {
    const {handleSubmit, submitting} = props;
    return (
        <form className="form-wrapper" onSubmit={handleSubmit(submit)}>
            <Field
                name="name"
                label="Name"
                type="text"
                userData={props.userData.name}
                component={fieldComponent}
                    />
            <Field
                name="age"
                label="age"
                type="number"
                userData={props.userData.age}
                component={fieldComponent}
                    />
            <Field
                name="email"
                type="email"
                label="Email"
                userData={props.userData.email}
                component={fieldComponent}
                    />
            <Field
                name="password"
                label="Password"
                type="password"
                userData={props.userData.password}
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
            </div>
        </form>
    )
};
// Export
SettingsForm = connect(state => ({ ...state.page }),)(SettingsForm);

export default reduxForm({form: 'settings', validate})(SettingsForm);