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
  ADMIN_PROPERTY_REQUEST,
  ADMIN_PROPERTY_SUCCESS,
  ADMIN_PROPERTY_FAIL,
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

// Get All Property For Admin
export const getAdminProperty = () => async (dispatch) => {
  try {
    dispatch({ type: ADMIN_PROPERTY_REQUEST });

    const { data } = await axios.get("/api/v1/admin/properties");

    dispatch({
      type: ADMIN_PROPERTY_SUCCESS,
      payload: data.property,
    });
  } catch (error) {
    dispatch({
      type: ADMIN_PROPERTY_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Get All

export const getProperty = (keyword = "", purpose="",  price = "", landArea = "") => async (dispatch) => {
  try {
    dispatch({ type: ALL_PROPERTY_REQUEST });

      let link = `/api/v1/properties?city=${keyword}&purpose=${purpose}&price[lte]=${price}&landArea[lte]=${landArea}`;



    const { data } = await axios.get(link);

    dispatch({ type: ALL_PROPERTY_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: ALL_PROPERTY_FAIL, payload: error.response.data.message });
  }
};


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
