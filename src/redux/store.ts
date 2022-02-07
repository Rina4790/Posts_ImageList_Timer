import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga";

export interface IState {}

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
  combineReducers({}),
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);

// sagaMiddleware.run();
