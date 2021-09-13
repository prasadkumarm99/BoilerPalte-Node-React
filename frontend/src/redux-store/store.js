import { createStore, combineReducers } from "redux"
import userReducer from "../redux-store/userReducer"

const getStore = () => {
  return createStore(
    combineReducers({
      user: userReducer
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
}

export default getStore
