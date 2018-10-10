
// outsource dependencies

// local dependencies
import { PAGE } from '../actions/types';

// configuration
let initial = {
    expectAnswer: false,
    data: {
        error: null,
        content: [],
    },
};

// export
export default function ( state = initial, action ) {
    let { type, ...options } = action;
    switch ( type ) {
        default:
            state = {...state};
            break;
        case PAGE.PRELOADER:
            console.log('works!');
            state = { ...state, expectAnswer: options.expectAnswer };
            break;
        case PAGE.LOG_IN:
            state = { ...state, data: {...state.data, ...options} };
            break;
    }

    // (new RegExp(PAGE.PREFIX)).test(type)&&
    // console.log(`%c PAGE ${type}`, 'background: #FAC; color: #fff; font-size: 12px'
    //     ,'\n action:', action
    //     ,'\n state:', state
    // );
    return state;
}
