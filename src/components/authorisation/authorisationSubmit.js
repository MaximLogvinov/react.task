//local dependencies
import {LOGIN_PAGE} from "../../actions/types";
import usersList from '../../usersList'

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

function submit(values, dispatch) {
    return sleep(0).then(() => {
        // simulate server latency
        let registeredUser = false;
        let registeredUserData = {};
        for ( let i = 0; i < usersList.length; i++ ) {
            if (values.email === usersList[i].email && values.password === usersList[i].password) {
                registeredUser = true;
                Object.assign(registeredUserData, usersList[i])
            }
        }
        if( registeredUser ){
            dispatch({type: LOGIN_PAGE.LOG_IN.START, isAuth: true, userData: {...registeredUserData}});
        }
    })
}

export default submit;
