import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import {
  addPizzaReducer,
  editPizzaReducer,
  getAllPizzasReducer,
  getPizzaByIdReducer,
} from './reducers/pizzaReducers';
import { cartReducer } from './reducers/cartReducer';
import {
  getAllUsersReducer,
  loginUserReducer,
  registerUserReducer,
} from './reducers/userReducer';
import {
  getAllOrdersReducer,
  getUserOrdersReducer,
  placeOrderReducer,
} from './reducers/orderReducer';

const finalReducer = combineReducers({
  getAllPizzasReducer: getAllPizzasReducer,
  cartReducer: cartReducer,
  registerUserReducer: registerUserReducer,
  loginUserReducer: loginUserReducer,
  placeOrderReducer: placeOrderReducer,
  getUserOrdersReducer: getUserOrdersReducer,
  addPizzaReducer: addPizzaReducer,
  getPizzaByIdReducer: getPizzaByIdReducer,
  editPizzaReducer: editPizzaReducer,
  getAllOrdersReducer: getAllOrdersReducer,
  getAllUsersReducer: getAllUsersReducer,
});
const cartItems = localStorage.getItem('cartItems')
  ? JSON.parse(localStorage.getItem('cartItems'))
  : [];
const currentUser = localStorage.getItem('currentUser')
  ? JSON.parse(localStorage.getItem('currentUser'))
  : null;
const initialState = {
  cartReducer: { cartItems: cartItems },
  loginUserReducer: { currentUser: currentUser },
};

const composeEnhancers = composeWithDevTools({});
const store = createStore(
  finalReducer,
  initialState,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
