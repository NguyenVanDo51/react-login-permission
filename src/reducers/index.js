import { combineReducers } from 'redux'
import user from '../reducers/user'
import cart from '../reducers/cart'

const reducer = combineReducers({
  user,
  cart
});

export default reducer