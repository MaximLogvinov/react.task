const validate = values => {
    const errors = {};

    if (!values.name) {
        errors.name = 'Required'
    } else if ( values.name.length < 2 ) {
        errors.name = 'Name must consist at least of two symbols'
    }

    if (!values.email) {
        errors.email = 'Required'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address'
    }

    if (!values.age) {
        errors.age = 'Required'
    } else if ( values.age < 0) {
        errors.age = 'Invalid age value '
    }

    if (!values.password) {
        errors.password = 'Required'
    } else if (values.password.length < 8) {
        errors.password = 'Password must consist of at least 8 symbols'
    }
    return errors
};
export default validate;
