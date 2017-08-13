import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import promise from 'redux-promise'

import { Grid } from 'semantic-ui-react'

import SearchHeader from './components/search_header.js'
import QuotesList from './components/quotes_list'
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Grid centered columns={2}>
      <Grid.Column>
        <SearchHeader />
        <QuotesList />
      </Grid.Column>
    </Grid>
  </Provider>
  , document.querySelector('.container'));
