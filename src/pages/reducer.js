
// local dependencies
import { LOGIN_PAGE, SETTINGS_PAGE, PRELOADER } from '../actions/types';

// configuration
let initial = {
    expectAnswer: false,
    isAuth: false,
    userData: {
        name: 'User',
        email: 'not specified',
        password: 'not specified',
        age: 'not specified'
    },
};

export default function ( state = initial, action ) {
    let { type, ...options } = action;
    switch ( type ) {
        default:
            state = {...state};
            break;
        case PRELOADER:
            state = { ...state, expectAnswer: options.expectAnswer };
            break;
        case LOGIN_PAGE.LOG_IN.SUCCESS:
            state = { ...state, isAuth: options.isAuth, ...options };
            break;
        case SETTINGS_PAGE.SETTINGS.SUCCESS:
            state = { ...state, ...options };
            break;
    }
    return state;
}
