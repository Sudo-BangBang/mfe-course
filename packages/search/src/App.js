import React from 'react';
import { Switch, Route, Router } from 'react-router-dom';
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles';
import faker from 'faker';

import Search from './components/Search';

const generateClassName = createGenerateClassName({
  productionPrefix: 'search'
})

export default ({history, setSearchState}) => {

  function onSearch(query){

    let results = [];

    for (let i = 0; i < Math.floor(Math.random() * 15) + 1  ; i++) {
      const result = {
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

    setSearchState({
      query: query,
      results: results
    });
  }

  return (
    <div>
      <StylesProvider generateClassName={generateClassName}>
        <Router history={history}>
          <Switch>
            <Route exact path="/*">
              <Search onSearch={onSearch} />
            </Route>
          </Switch>
        </Router>
      </StylesProvider>
    </div>
  );
};
