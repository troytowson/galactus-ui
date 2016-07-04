import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as App from './app/app'
import { Router, Route } from 'react-router'

ReactDOM.render(
    <Router>
        <Route path="/" component={App}>
        </Route>
    </Router>, 
    document.getElementById('galactus-app'));