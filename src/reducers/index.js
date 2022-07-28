import { combineReducers } from "redux";
import snackbar from './snackbar';
import restaurants from './restaurants';
import cart from './cart';
import auth from './auth';

export default combineReducers({
  snackbar,
  restaurants,
  cart,
  auth,
});
