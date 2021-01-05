import React from 'react';
import { Switch, Route, Router } from 'react-router-dom';
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles';

import SideBar from './components/Sidebar';

const generateClassName = createGenerateClassName({
  productionPrefix: 'sb'
})

export default ({history, isSignedIn}) => {

  return (
    <div>
      <StylesProvider generateClassName={generateClassName}>
        <Router history={history}>
          <Switch>
            <Route path="/">
              <SideBar isSignedIn={!isSignedIn}/>
            </Route>
          </Switch>
        </Router>
      </StylesProvider>
    </div>
  );
};
