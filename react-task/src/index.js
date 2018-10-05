
// outsource dependencies
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch, NavLink } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
// components
import Pages from './pages/index'
// styles
import 'bootstrap/dist/css/bootstrap.css';
// local dependencies
import store from './store';

ReactDOM.render(
    (
        <Provider store={store}>
            <BrowserRouter>
                <div>
                    <Switch>
                        <Route exact path="/" component={Pages.PublicPages.Home}/>
                        <Route exact path="/login" component={Pages.PublicPages.Login}/>
                    </Switch>
                </div>
            </BrowserRouter>
        </Provider>
    ),
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
