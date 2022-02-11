import {createStore, applyMiddleware, compose} from 'redux';
import thunkMiddleware from 'redux-thunk';
import {createLogger} from 'redux-logger';
import rootReducer from '../reducer/index';


const loggerMiddleware = createLogger({
  predicate: (getState, action) => __DEV__,
});
function configureStore(initialState) {
  const enhancer = compose(applyMiddleware(thunkMiddleware, loggerMiddleware));
  return createStore(rootReducer, initialState, enhancer);
}
export const store = configureStore({});
