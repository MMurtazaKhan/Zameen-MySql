import axios from "axios";
import {
  NEW_PROPERTY_REQUEST,
  NEW_PROPERTY_SUCCESS,
  NEW_PROPERTY_FAIL,
  ALL_PROPERTY_FAIL,
  ALL_PROPERTY_REQUEST,
  ALL_PROPERTY_SUCCESS,
  PROPERTY_DETAILS_REQUEST,
  PROPERTY_DETAILS_FAIL,
  PROPERTY_DETAILS_SUCCESS,
  CLEAR_ERRORS,
} from "../constants/sellContants";

// Create Property
export const createProperty = (propertyData) => async (dispatch) => {
  try {
    dispatch({ type: NEW_PROPERTY_REQUEST });

    const config = {
      headers: { "Content-Type": "application/json" },
    };

    const { data } = await axios.post(
      `/api/v1/property/new`,
      propertyData,
      config
    );

    dispatch({
      type: NEW_PROPERTY_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: NEW_PROPERTY_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Get All

export const getProperty = () => async (dispatch) => {
  try {
    dispatch({ type: ALL_PROPERTY_REQUEST });
    const { data } = await axios.get(`/api/v1/properties`);

    dispatch({ type: ALL_PROPERTY_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: ALL_PROPERTY_FAIL, payload: error.response.data.message });
  }
};

// Get All Property --with filters
// export const getProperty =
//   (keyword = "", currentPage = 1, price = [0, 25000], category, ratings = 0) =>
//   async (dispatch) => {
//     try {
//       dispatch({ type: ALL_PRODUCT_REQUEST });

//       let link = `/api/v1/products?keyword=${keyword}&page=${currentPage}&price[gte]=${price[0]}&price[lte]=${price[1]}&ratings[gte]=${ratings}`;

//       if (category) {
//         link = `/api/v1/products?keyword=${keyword}&page=${currentPage}&price[gte]=${price[0]}&price[lte]=${price[1]}&category=${category}&ratings[gte]=${ratings}`;
//       }

//       const { data } = await axios.get(link);

//       dispatch({
//         type: ALL_PRODUCT_SUCCESS,
//         payload: data,
//       });
//     } catch (error) {
//       dispatch({
//         type: ALL_PRODUCT_FAIL,
//         payload: error.response.data.message,
//       });
//     }
//   };

// Get Property Details
export const getPropertyDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: PROPERTY_DETAILS_REQUEST });

    const { data } = await axios.get(`/api/v1/property/${id}`);
    dispatch({
      type: PROPERTY_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: PROPERTY_DETAILS_FAIL,
      payload: error.response.data.message,
    });
  }
};

//   Clear Errors:
export const clearErrors = () => async (dispatch) => {
  dispatch({ type: CLEAR_ERRORS });
};
