import {compose, createStore, applyMiddleware} from 'redux';
import {createLogger} from 'redux-logger';
import rootReducer from './Reducer';
import {persistCombineReducers, persistStore} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const config = {
  key: 'root',
  storage
};

let reducer = persistCombineReducers(config, rootReducer);

export const store = createStore(
  reducer,
  undefined,
  compose(
    applyMiddleware(createLogger()),
  )
);

export const persistor = persistStore(store);