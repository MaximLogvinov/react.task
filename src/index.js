
// outsource dependencies
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Route,Router ,Switch } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import ReduxToastr from 'react-redux-toastr'
// local dependencies
import Pages from './pages/index'
import 'bootstrap/dist/css/bootstrap.css';
import store from './store';
import PrivateRoute from './components/route/privateRoute'
import history from './history'

ReactDOM.render(
    (
        <Provider store={store}>
            <Router history={history}>
                <div>
                    <Switch>
                        <Route exact path='/' component={Pages.PublicPages.Home}/>
                        <Route exact path='/login' component={Pages.PublicPages.Login}/>
                        <PrivateRoute path='/welcome' component={Pages.PrivatePages.Welcome}/>
                        <PrivateRoute path='/settings' component={Pages.PrivatePages.Settings}/>
                    </Switch>
                    <ReduxToastr
                        timeOut={2000}
                        newestOnTop={false}
                        preventDuplicates
                        position="top-left"
                        transitionIn="fadeIn"
                        transitionOut="fadeOut"
                        progressBar
                        closeOnToastrClick/>
                </div>
            </Router>
        </Provider>
    ),
    document.getElementById('root'),
    console.log(store.getState(), store.getState().page.isAuth));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
