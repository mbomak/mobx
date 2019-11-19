import ReactDOM from 'react-dom';
import React from 'react';
import {Provider} from 'mobx-react';
import {configure} from 'mobx';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from 'react-router-dom';
import * as serviceWorker from './serviceWorker';

import App from './App';
import 'commonStyles/index.scss';
import stores from 'modules';

configure({enforceActions: 'observed'});
const rootElement: HTMLElement | null = document.getElementById('root');

ReactDOM.render(
    <Provider {...stores}>
        <Router>
            <Switch>
                <Route path="/login">
                    <App/>
                </Route>
                <Route path="/reg">
                    <div>Registration</div>
                </Route>
                <Route path="/">
                    <div>Home</div>
                </Route>
            </Switch>
        </Router>
    </Provider>,
    rootElement
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
