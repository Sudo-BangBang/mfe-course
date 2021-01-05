import React from 'react';
import ReactDOM from 'react-dom';
import {createMemoryHistory, createBrowserHistory} from 'history';
import App from './App';

// Mount function to start up the app
const mount = (el, {isSignedIn, onNavigate, defaultHistory, initialPath}) => {
  const history = defaultHistory || createMemoryHistory({
    initialEntries: [initialPath]
  });

  if(onNavigate){
    history.listen(onNavigate);
  }  

  ReactDOM.render(<App isSignedIn={isSignedIn} history={history}/>, el);

  return{
    onParentNavigate({pathname: nextPathname}){

      const { pathname} = history.location;

      if(pathname !== nextPathname){
        history.push(nextPathname)
      }
    },
  };
};

// If we are in development and in isolation,
// call mount immediately
if (process.env.NODE_ENV === 'development') {
  const devRoot = document.querySelector('#_mysidebar-dev-root');

  if (devRoot) {
    mount(devRoot, { defaultHistory: createBrowserHistory(), isSignedIn: false });
  }
}

// We are running through container
// and we should export the mount function
export { mount };
