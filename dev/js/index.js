import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import {BrowserRouter , Route ,Switch} from 'react-router-dom';
import App from './components/app';
import Account from './components/Account';
import Social from './components/Social';
import Personal from './components/Personal';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
  <BrowserRouter>
    <div>    
      <Switch>   
        <Route path="/social" component={Social} />
        <Route path="/personal" component={Personal} />
        <Route path="/"  component={Account} /> 
      </Switch>
    </div> 

 </BrowserRouter>
 </Provider>
  , document.querySelector('.container'));
