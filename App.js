import React from 'react';
import Routes from './src/routes/index';
import { StatusBar } from 'react-native';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import reduxThunk from 'redux-thunk'
import contatosReducer from './src/store/contatos-redurcer';
import { Provider } from 'react-redux';

const rootReducer = combineReducers({
  listaDeContatos: contatosReducer
})

const store = createStore(rootReducer, applyMiddleware(reduxThunk))
export default function App() {
  return (
    <Provider store={store}>
      <StatusBar backgroundColor="#FFF" barStyle='dark-content'/>
      <Routes />
    </Provider>
  );
}
