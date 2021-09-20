import React from 'react'
import {
  BrowserRouter as Router,
  Switch, 
  Route,
} from "react-router-dom";
import NavApp from '../components/NavApp'
import routes from './routes';
import { PrivateRoute } from "./type.js";

const Routes = () => {
  return (
    <Router basename ="/daily-bits-react">
        <Switch>
         
          {routes.public.map(({path, component, name}) => (
            <Route exact path={path} component={component} key={name} />
          ))}
        </Switch>
    </Router>
  )
}

export default Routes
