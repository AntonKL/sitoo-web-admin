import {
  applyMiddleware, combineReducers, compose, createStore,
} from 'redux';
import promise from 'redux-promise-middleware';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import * as UsersData from './Users';
import * as UiData from './Ui';
import * as ModalData from './Modal';

const configureStore = (history, initialState) => {
  const reducers = {
    usersData: UsersData.reducer,
    uiData: UiData.reducer,
    modalData: ModalData.reducer,
  };

  const middleware = [
    thunk,
    promise,
  ];

  const enhancers = [];

  const isDevelopment = process.env.NODE_ENV === 'development';
  if (isDevelopment && typeof window !== 'undefined' && window.devToolsExtension) {
    enhancers.push(window.devToolsExtension());
  }

  if (isDevelopment) {
    middleware.push(createLogger());
  }

  const rootReducer = combineReducers({
    ...reducers,
  });


  return createStore(
    rootReducer,
    initialState,
    compose(applyMiddleware(...middleware), ...enhancers),
  );
};

const store = configureStore();

export default store;
