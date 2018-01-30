import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from "react-redux";
import thunk from "redux-thunk";
import reducers from './reducers/index'
import BoxCon from './container/box-container';
import Header from './component/header';
import './index.css';

let store = createStore(reducers, applyMiddleware(thunk))
/*---------
Add providers, stores, and middleware here
----------*/

class App extends React.Component{
  render() {
    return (
      <Provider store={store}>
        <div>
          <Header></Header>
          <BoxCon></BoxCon>
        </div>
      </Provider>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));