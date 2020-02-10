import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import restaurantReducer from './reducers/restaurantReducer';
import sortReducer from './reducers/sortReducer';

const reducer = combineReducers({
  restaurants: restaurantReducer,
  sortingMethod: sortReducer,
});

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;
