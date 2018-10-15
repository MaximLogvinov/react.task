
// local dependencies
import { LOGIN_PAGE, SETTINGS_PAGE } from '../actions/types';

// configuration
let initial = {
    expectAnswer: false,
    isAuth: false,
    userData: {
        name: 'User',
        age: 'not specified'
    },
};

export default function ( state = initial, action ) {
    let { type, ...options } = action;
    switch ( type ) {
        default:
            state = {...state};
            break;
        case LOGIN_PAGE.PRELOADER:
            state = { ...state, expectAnswer: options.expectAnswer };
            break;
        case LOGIN_PAGE.LOG_IN.SUCCESS:
            state = { ...state, isAuth: options.isAuth, ...options };
            break;
        case SETTINGS_PAGE.PRELOADER:
            state = { ...state, expectAnswer: options.expectAnswer };
            break;
        case SETTINGS_PAGE.SETTINGS.SUCCESS:
            state = { ...state, ...options };
            break;
    }
    return state;
}
