import React from 'react';
import { Route } from 'react-router-dom';
import AvailableCarsContainer from './components/AvailableCars/AvailableCarsContainer';
import Dashboard from './components/Dashboard/Dashboard';



const AppRouter = () => (
  <div>
    <Route path="/home" component={AvailableCarsContainer} />
    <Route path="/dashboard" component={Dashboard} />
  </div>
);

export default AppRouter;
