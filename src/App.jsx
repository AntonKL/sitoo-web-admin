import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { Provider as ReduxProvider } from 'react-redux';
import Routes from './config/Routes';
import store from './store/configurateStore';

const App = () => (
  <div className="App">
    <ReduxProvider store={store}>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </ReduxProvider>
  </div>
);

export default App;
