import React, { useState } from 'react';
import { Switch, Route, Router } from 'react-router-dom';
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles';

import Results from './components/SearchResults';

const generateClassName = createGenerateClassName({
  productionPrefix: 'sr'
}); 

export default ({history, results}) => {

  return (
    <div>
      <StylesProvider generateClassName={generateClassName}>
        <Router history={history}>
          <Switch>
            <Route exact path="/search-results">
              <Results results={results}/>
            </Route>
          </Switch>
        </Router>
      </StylesProvider>
    </div>
  );
};
