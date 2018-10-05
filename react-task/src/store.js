
// outsource dependencies
import thunk from "redux-thunk";
import { applyMiddleware, createStore } from "redux";
import reducers from './reducers/index'
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from 'redux-saga'
// local dependencies
import { helloSaga } from './saga/index'

// configure
const sagaMiddleware = createSagaMiddleware();

export default createStore(
    reducers,
    composeWithDevTools(applyMiddleware(thunk, sagaMiddleware))
);

sagaMiddleware.run(helloSaga);
