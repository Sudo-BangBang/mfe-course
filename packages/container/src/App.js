import React, { lazy, Suspense, useState, useEffect } from 'react';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import {
  StylesProvider,
  createGenerateClassName,
} from '@material-ui/core/styles';
import { createBrowserHistory } from 'history';

import Progress from './components/Progress';
import Header from './components/Header';
import MySidebar from './components/MySidebarApp';
import Search from './components/SearchApp';

const MarketingLazy = lazy(() => import('./components/MarketingApp'));
const AuthLazy = lazy(() => import('./components/AuthApp'));
const DashboardLazy = lazy(() => import('./components/DashboardApp'));
const SearchResultsLazy = lazy(() => import('./components/SearchResults'));

const generateClassName = createGenerateClassName({
  productionPrefix: 'co',
});

const history = createBrowserHistory();

export default () => {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [searchState, setSearchState] = useState({
    query: "",
    results: []
  });

  const [showMfes, setShowMfes] = useState(false);

  useEffect(() => {
    if (isSignedIn) {
      history.push('/dashboard');
    }
  }, [isSignedIn]);



  useEffect(() => {
    if(searchState.query && searchState.query.length){
      history.push('/search-results');
      console.log(searchState);
    }
    
  }, [searchState]);

  return (
    <Router history={history}>
      <StylesProvider generateClassName={generateClassName}>
        <div>
          <Header
            onSignOut={() => setIsSignedIn(false)}
            isSignedIn={isSignedIn}
            showMfes={showMfes}
            toggleMfes={() => setShowMfes(!showMfes)}
          />
          <div>
            <div style={{width: "20%", float: "left"}}>
              <div style={showMfes ? {border: "20px solid red"} : {}}>
                <Search setSearchState={(state)=>setSearchState(state)} />
              </div>
              <hr/>
              <div style={showMfes ? {border: "20px solid blue"} : {}}>
                <MySidebar isSignedIn={isSignedIn} />
              </div>
            </div>
            <div style={{width: "80%", float: "right"}}>
              <Suspense fallback={<Progress />}>
                <Switch>
                  <Route path="/auth">
                    <div style={showMfes ? {border: "20px solid green"} : {}}>
                      <AuthLazy onSignIn={() => setIsSignedIn(true)} />
                    </div>
                  </Route>
                  <Route path="/dashboard">
                    {!isSignedIn && <Redirect to="/" />}
                    <div style={showMfes ? {border: "20px solid orange"} : {}}>
                      <DashboardLazy />
                    </div>
                  </Route>
                  <Route path="/search-results">
                    <div style={showMfes ? {border: "20px solid yellow"} : {}}>
                      <SearchResultsLazy results={searchState.results}/>
                    </div>
                  </Route>
                  <Route path="/" component={MarketingLazy}>
                    <div style={showMfes ? {border: "20px solid purple"} : {}}>
                      <MarketingLazy/>
                    </div>
                  </Route>
                  
                </Switch>
              </Suspense>
            </div>
          </div>
        </div>
      </StylesProvider>
    </Router>
  );
};