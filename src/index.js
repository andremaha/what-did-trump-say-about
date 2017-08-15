import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import promise from 'redux-promise'

import SearchHeader from './components/search_header.js'
import QuotesList from './components/quotes_list'
import Footer from './components/footer'
import reducers from './reducers';
import QuoteCard from './components/quote_card'

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <div>
      <SearchHeader />
      <QuotesList />
      <Footer />
    </div>
  </Provider>
  , document.querySelector('.container'));
