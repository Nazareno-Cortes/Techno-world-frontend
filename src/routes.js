import React from 'react';
import { Route, Switch } from 'react-router-dom';

import App from './components/app';
import ProductList from './components/app/products';
import Homepage from './cmponents/app/homepage';

const AppRoutes = () =>
  
  <App>
    <Switch>
        <Route path="/Products" component={ProductLis} />
        <Route path="/Homepage" component={Homepage} />

        <Route path="/" component={Home} />
    </Switch>
  </App>

export default AppRoutes;