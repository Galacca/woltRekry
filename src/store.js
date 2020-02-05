import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import restaurantReducer from './reducers/restaurantReducer';

const reducer = combineReducers({ restaurants: restaurantReducer });
const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;
