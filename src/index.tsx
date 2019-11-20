import ReactDOM from 'react-dom';
import React from 'react';
import {Provider} from 'mobx-react';
import {configure} from 'mobx';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import * as serviceWorker from './serviceWorker';

import UserScene from 'scene/user';
import HomeScene from 'scene/home';
import RegistrationScene from 'scene/registration';
import {User, Access} from 'modules';
import 'commonStyles/index.scss';
import 'commonStyles/app.scss';

const user = new User();
const access = new Access();
const stores = {
    user,
    access,
};

configure({enforceActions: 'observed'});

ReactDOM.render(
    <div className="app">
        <Provider {...stores}>
            <Router>
                <Switch>
                    <Route path="/user">
                        <UserScene />
                    </Route>
                    <Route path="/reg">
                        <RegistrationScene />
                    </Route>
                    <Route path="/">
                        <HomeScene />
                    </Route>
                </Switch>
            </Router>
        </Provider>
    </div>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
