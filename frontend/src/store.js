import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {  allUsersReducer, profileReducer, userReducer } from "./reducers/userReducer";
import { newPropertyReducer, propertyDetailsReducer, propertyReducer } from "./reducers/sellReducer";
import { newProjectReducer, projectDetailsReducer, projectReducer } from "./reducers/projectReducer";
import { newRegisterationReducer, registerationReducer } from "./reducers/registerationReducer";




const reducer = combineReducers({
  user:userReducer,
  newProperty: newPropertyReducer,
  property:propertyReducer,
  propertyDetails:propertyDetailsReducer,
  allUsers: allUsersReducer,
  project: projectReducer,
  projectDetails: projectDetailsReducer,
  newProject: newProjectReducer,
  newRegisteration: newRegisterationReducer,
  allRegisterations: registerationReducer,
  profile:profileReducer,
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
