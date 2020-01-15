import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Home from './15_router/component/home/home';
import Contacts from './15_router/component/contacts/contacts';
import Posts from './15_router/component/posts/posts';
import Post from './15_router/component/post/post';
import Error from './15_router/component/error/error';

ReactDOM.render(
    <Router>
        <App>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/posts" component={Posts} />
                <Route path="/contacts" component={Contacts} />
                <Route path="/posts/:id" component={Post} />
                <Route path="*" component={Error} />
            </Switch>
        </App>
    </Router>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
