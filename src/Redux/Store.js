import {applyMiddleware, createStore} from 'redux';

import reducers from './Reducers';

const logger = store => next => action => {
  if (typeof action === 'function'){}
  else console.log('dispatching', action);
  let result = next(action);
  console.log('next state', store.getState());
  return result;
}

let middlewares = [
  logger
];

let createAppStore = applyMiddleware(...middlewares)(createStore);


export default function configureStore(onComplete: ()=>void) {
  return createAppStore(reducers);

}
