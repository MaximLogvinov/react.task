import { SubmissionError } from 'redux-form'
import {PAGE} from "../../actions/types";

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

function submit(values, dispatch) {
    return sleep(0).then(() => {
        dispatch({type: PAGE.LOG_IN.START});
        // simulate server latency
        if (values.email !== 'ekalosha@gmail.com') {
            throw new SubmissionError({
                email: 'User does not exist',
            })
        } else if (values.password !== '12345678') {
            throw new SubmissionError({
                password: 'Wrong password',
            })
        } else {
          //  window.alert(`You submitted:\n\n${JSON.stringify(values, null, 2)}`)
        }
    })
}

export default submit;
