import {
  NEW_PROPERTY_REQUEST,
  NEW_PROPERTY_SUCCESS,
  NEW_PROPERTY_FAIL,
  NEW_PROPERTY_RESET,
  ALL_PROPERTY_REQUEST,
  ALL_PROPERTY_FAIL,
  ALL_PROPERTY_SUCCESS,
  PROPERTY_DETAILS_REQUEST,
  PROPERTY_DETAILS_FAIL,
  PROPERTY_DETAILS_SUCCESS,
  ADMIN_PROPERTY_REQUEST,
  ADMIN_PROPERTY_SUCCESS,
  ADMIN_PROPERTY_FAIL,
  // DELETE_PROPERTY_REQUEST,
  // DELETE_PROPERTY_SUCCESS,
  // DELETE_PROPERTY_FAIL,
  CLEAR_ERRORS,
} from "../constants/sellContants";

export const propertyReducer = (state = { property: [] }, action) => {
  switch (action.type) {
    case ALL_PROPERTY_REQUEST:
    case ADMIN_PROPERTY_REQUEST:
      return {
        loading: true,
        property: [],
      };

    case ALL_PROPERTY_SUCCESS:
      return {
        loading: false,
        property: action.payload.property,
        propertyCount: action.payload.propertyCount,
        resultPerPage: action.payload.resultPerPage,
        filteredPropertyCount: action.payload.filteredPropertyCount,
      };
    case ADMIN_PROPERTY_SUCCESS:
      return {
        loading: false,
        property: action.payload.property,
      };

    case ADMIN_PROPERTY_FAIL:
    case ALL_PROPERTY_FAIL:
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
        property: action.payload.property,
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

export const propertyDetailsReducer = (state = { property: {} }, action) => {
  switch (action.type) {
    case PROPERTY_DETAILS_REQUEST:
      return {
        loading: true,
        ...state,
      };

    case PROPERTY_DETAILS_SUCCESS:
      return {
        loading: false,
        property: action.payload.property,
      };

    case PROPERTY_DETAILS_FAIL:
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
