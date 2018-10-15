//local dependencies
import {SETTINGS_PAGE} from "../../actions/types";

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

function submit(values, dispatch) {
    return sleep(0).then(() => {
        let user = Object.assign({}, values);
        dispatch({type: SETTINGS_PAGE.SETTINGS.START, userData: {...user}});
    })
}

export default submit;