// outsource dependencies
import { combineReducers } from 'redux';
import { reducer as toastrReducer } from 'react-redux-toastr';
import { reducer as formReducer } from 'redux-form';

// local dependencies
import page from '../pages/reducer';


export default combineReducers({
    form: formReducer,
    toastr: toastrReducer,
    page
});
