// outsource dependencies
import React from 'react'
// local dependencies
import '../../style/components/form.css'
export default ({
                    input,
                    label,
                    type,
                    meta: { touched, error }
}) => (
    <div>
        <label className="mr-2">{label}:</label>
        <div className="row">
            <div className="col-9 mt-2">
                <input className="field-wrapper" {...input} placeholder={label} type={type} />
            </div>
            <div className="col mt-2">
                <div className="position-relative">
                    <p className="position-absolute">
                        {touched && error && <span>{error}</span>}
                    </p>
                </div>
            </div>
        </div>
    </div>
);
