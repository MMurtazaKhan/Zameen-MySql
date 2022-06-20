import {
  
    NEW_PROPERTY_REQUEST,
    NEW_PROPERTY_SUCCESS,
    NEW_PROPERTY_FAIL,
    NEW_PROPERTY_RESET,

    CLEAR_ERRORS,
  } from "../constants/sellContants";
  
  
  export const newPropertyReducer = (state = { property: {} }, action) => {
    switch (action.type) {
      case NEW_PROPERTY_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case NEW_PROPERTY_SUCCESS:
        return {
          loading: false,
          success: action.payload.success,
          product: action.payload.product,
        };
      case NEW_PROPERTY_FAIL:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      case NEW_PROPERTY_RESET:
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
  