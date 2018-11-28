import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize';
import React from 'react';
import { Route } from 'react-router-dom';
import About from './about';
import Home from './home';
import Nav from './nav';
import PublicList from './public_list';
import Quotes from './quotes';
import SecretList from './secret_list';
import SignIn from './sign_in';
import SignUp from './sign_up';

const App = () => (
    <div>
        <Nav/>
        <div className="container">
            <Route exact path="/" component={Home}/>
            <Route path="/about" component={About}/>
            <Route path="/public-list" component={PublicList}/>
            <Route path="/secret-list" component={SecretList}/>
            <Route path="/quotes" component={Quotes}/>
            <Route path="/sign-up" component={SignUp}/>
            <Route path="/sign-in" component={SignIn}/>
        </div>
    </div>
);

export default App;
