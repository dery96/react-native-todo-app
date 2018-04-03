// import React from 'react-native';
import { applyMiddleware, createStore } from 'redux';

import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import app from '../reducers/app';

const logger = createLogger();
const createStoreWithMiddleware = applyMiddleware(thunk, logger)(createStore);
const configureStore = createStoreWithMiddleware(app);
export default configureStore;
