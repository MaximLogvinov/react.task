
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

let prefixLogIn = '@login/';
export const LOGIN_PAGE = {
    PRELOADER: `${prefixLogIn}PRELOADER`,
    LOG_IN: createType(`${prefixLogIn}LOG_IN`)
};

let prefixSettings = '@settings/';
export const SETTINGS_PAGE = {
    PRELOADER: `${prefixSettings}PRELOADER`,
    SETTINGS: createType(`${prefixSettings}SETTINGS`)
};
