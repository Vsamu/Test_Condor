import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Layout from './Layout';
import Photos from '../pages/Photos';
import Album from '../pages/Album'
import NotFound from '../pages/NotFound';


function App() {
  return (
    <BrowserRouter>      
        <Switch>
          <Route exact path="/" component={Photos} />                              
          <Route exact path="/Album" component={Album} />          
          <Route component={NotFound} />
        </Switch>      
    </BrowserRouter>
  );
}

export default App;
