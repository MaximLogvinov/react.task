
export const SUFFIX = {
    START: 'START',
    SUCCESS: 'SUCCESS',
    ERROR: 'ERROR',
    FINISH: 'FINISH',
};


export function createType ( type ) {
    let action = {};
    for ( let name of Object.keys(SUFFIX) ) {
        action[name] = `${type}.${name}`;
    }
    console.log(action);
    return action;
}

let prefix = '@login/';
export const PAGE = {
    PRELOADER: prefix+'PRELOADER',
    LOG_IN: createType(prefix+'LOG_IN')
};
