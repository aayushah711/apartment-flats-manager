import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../components/Home.jsx';
import Login from '../components/Login';
import Register from '../components/Register';

const Routing = (props) => {
    return (
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/login" exact component={Login} />
            <Route path="/register" exact component={Register} />
            <Route render={() => <h3>Page not found</h3>} />
        </Switch>
    );
};

export default Routing;
