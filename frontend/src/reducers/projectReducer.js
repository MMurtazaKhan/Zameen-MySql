import { ALL_PROJECT_REQUEST, ALL_PROJECT_SUCCESS,ALL_PROJECT_FAIL, NEW_PROJECT_FAIL, NEW_PROJECT_REQUEST, NEW_PROJECT_RESET, NEW_PROJECT_SUCCESS, PROJECT_DETAILS_FAIL, PROJECT_DETAILS_REQUEST, PROJECT_DETAILS_SUCCESS, CLEAR_ERRORS } from "../constants/projectConstants";

  

  export const projectReducer = (state = { project: [] }, action) => {
    switch (action.type) {
      case ALL_PROJECT_REQUEST:
        return {
          loading: true,
          project: [],
        };
  
      case ALL_PROJECT_SUCCESS:
        return {

          loading: false,
          project: action.payload.project,
          projectCount: action.payload.projectCount,
          resultPerPage: action.payload.resultPerPage,
          filteredProjectCount: action.payload.filteredProjectCount,
        };
  
      // case ADMIN_PRODUCT_SUCCESS:
      //   return {
      //     loading: false,
      //     products: action.payload,
      //   };
  
      case ALL_PROJECT_FAIL:
      // case ADMIN_PRODUCT_FAIL:
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
  
  export const newProjectReducer = (state = { project: {} }, action) => {
    switch (action.type) {
      case NEW_PROJECT_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case NEW_PROJECT_SUCCESS:
        return {
          loading: false,
          success: action.payload.success,
          project: action.payload.project,
        };
      case NEW_PROJECT_FAIL:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      case NEW_PROJECT_RESET:
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


  export const projectDetailsReducer = (state = { project: {} }, action) => {
    switch (action.type) {
      case PROJECT_DETAILS_REQUEST:
        return {
          loading: true,
          ...state,
        };
  
      case PROJECT_DETAILS_SUCCESS:
        return {
          loading: false,
          project: action.payload.project,
        };
  
      case PROJECT_DETAILS_FAIL:
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
  