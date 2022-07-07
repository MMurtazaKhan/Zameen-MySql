import {
   
    NEW_REGISTERATION_REQUEST,
    NEW_REGISTERATION_SUCCESS,
    NEW_REGISTERATION_FAIL,
    NEW_REGISTERATION_RESET,
    ALL_REGISTERATION_REQUEST,
    ALL_REGISTERATION_SUCCESS,
    ALL_REGISTERATION_FAIL,
    CLEAR_ERRORS,
  } from "../constants/registerationConstants";
  

  export const registerationReducer = (state = { registerations: [] }, action) => {
    switch (action.type) {
      case ALL_REGISTERATION_REQUEST:
      // case ADMIN_PRODUCT_REQUEST:
        return {
          loading: true,
          registerations: [],
        };
  
      case ALL_REGISTERATION_SUCCESS:
        return {
          loading: false,
          registerations: action.payload.property,
        };
  

  
      case ALL_REGISTERATION_FAIL:
        return {
          loading: false,
          error: action.payload,
        };
  
      case CLEAR_ERRORS:
        return {
          ...state,
          error: null,
        };
  
      default:
        return state;
    }
  };

export const newRegisterationReducer = (state = { registeration: {} }, action) => {
    switch (action.type) {
      case NEW_REGISTERATION_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case NEW_REGISTERATION_SUCCESS:
        return {
          loading: false,
          success: action.payload.success,
          register: action.payload.register,
        };
      case NEW_REGISTERATION_FAIL:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      case NEW_REGISTERATION_RESET:
        return {
          ...state,
          success: false,
        };
      case CLEAR_ERRORS:
        return {
          ...state,
          error: null,
        };
      default:
        return state;
    }
  };