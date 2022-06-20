import {
  NEW_PROPERTY_REQUEST,
  NEW_PROPERTY_SUCCESS,
  NEW_PROPERTY_FAIL,
//   NEW_PROPERTY_RESET,
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
