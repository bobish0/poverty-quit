import React from 'react';
import { Switch, Route } from 'react-router-dom';
import LandingPage from './landingpage';
import AboutMe from './aboutme';
import Home from './home';
import Earn from './earn';
import Portfolio from './portfolio';
import News from './news';

const Main = () => (


    <Switch>
        <Route exact path= "/" component= {Home} />
        <Route path= "/home" component= {Home} />
        <Route path= "/aboutme" component= {AboutMe} />
        <Route path= "/portfolio" component= {Portfolio} />
        <Route path= "/news" component= {News} />    
        <Route path= "/earn" component= {Earn} />
    </Switch>
)

export default Main;