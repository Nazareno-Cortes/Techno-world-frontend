import React from 'react';
import { Route, Switch, Redirect } from 'react-router';
import App from './components/app';
import Products from './components/app/Products';
import Homepage from './components/app/Homepage';

const Routes = () => 
  
  <App>
    <Switch>
        <Route exact path= "/products" component= {Products} />
        <Route exact path= "/homepage" component= {Homepage} />

    </Switch>
  </App>

export default Routes;