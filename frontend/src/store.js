import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {  allUsersReducer, userReducer } from "./reducers/userReducer";
import { newPropertyReducer, propertyDetailsReducer, propertyReducer } from "./reducers/sellReducer";



const reducer = combineReducers({
  user:userReducer,
  newProperty: newPropertyReducer,
  property:propertyReducer,
  propertyDetails:propertyDetailsReducer,
  allUsers: allUsersReducer,
});

let initialState = {
  
};


const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
