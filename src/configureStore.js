
import { createStore, applyMiddleware, compose } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import logger from 'redux-logger';

import rootEpic from './rootEpics'
import rootReducer from './rootReducers'

const middleWares = []
if (process.env.NODE_ENV === 'development') {
  middleWares.push(logger)
}
const epicMiddleware = createEpicMiddleware(rootEpic)
middleWares.push(epicMiddleware)

const composeEnhancers = compose
const enhancer = composeEnhancers(applyMiddleware(...middleWares))

export default function configureStore(initialState) {
  const store = createStore(rootReducer, initialState, enhancer)
  return store
}
