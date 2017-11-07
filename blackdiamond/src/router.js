import React from "react";
import { Switch, Route } from "react-router-dom";
import App from './App.js'
import StoreView from './storeview/StoreView'

export default (
  <Switch>
    <Route component={ App } path="/" exact />
    <Route component={ StoreView } path="/StoreView" /> 
    
  </Switch>
)