import React from 'react';
import ReactDOM from 'react-dom';
import {createMemoryHistory, createBrowserHistory} from 'history';
import App from './App';
import faker from 'faker';
import { v4 as uuidv4 } from 'uuid';

// Mount function to start up the app
const mount = (el, {onNavigate, defaultHistory, initialPath, results}) => {
  const history = defaultHistory || createMemoryHistory({
    initialEntries: [initialPath]
  });

  if(onNavigate){
    history.listen(onNavigate);
  }
  

  ReactDOM.render(<App history={history} results={results}/>, el);

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
  const devRoot = document.querySelector('#_search-results-dev-root');

  let results = [];

    for (let i = 0; i < Math.floor(Math.random() * 15) + 1  ; i++) {
      const result = {
        id: uuidv4(),
        name: faker.commerce.productName(),
        price: faker.commerce.price(),
        department: faker.commerce.department(),
        color: faker.commerce.color(),
        material: faker.commerce.productMaterial(),
        description: faker.commerce.productDescription(),
        tags:[]
      }

      for (let i = 0; i < Math.floor(Math.random() * 5) + 1  ; i++) {
        result.tags[i] = faker.commerce.productAdjective();
      } 

      results[i] = result;
    }


  if (devRoot) {
    mount(devRoot, { defaultHistory: createBrowserHistory(), results: results });
  }
}

// We are running through container
// and we should export the mount function
export { mount };
