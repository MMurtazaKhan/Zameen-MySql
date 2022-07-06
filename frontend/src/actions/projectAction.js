import axios from "axios";
import { ALL_PROJECT_FAIL, ALL_PROJECT_REQUEST, ALL_PROJECT_SUCCESS, NEW_PROJECT_FAIL, NEW_PROJECT_REQUEST, NEW_PROJECT_RESET, NEW_PROJECT_SUCCESS, PROJECT_DETAILS_FAIL, PROJECT_DETAILS_REQUEST, PROJECT_DETAILS_SUCCESS, CLEAR_ERRORS } from "../constants/projectConstants";

// Create Project
export const createProject = (projectData) => async (dispatch) => {
  try {
    dispatch({ type: NEW_PROJECT_REQUEST });

    const config = {
      headers: { "Content-Type": "application/json" },
    };

    const { data } = await axios.post(
      `/api/v1/project/new`,
      projectData,
      config
    );

    dispatch({
      type: NEW_PROJECT_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: NEW_PROJECT_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Get All

export const getProject = () => async (dispatch) => {
  try {
    dispatch({ type: ALL_PROJECT_REQUEST });
    const { data } = await axios.get(`/api/v1/projects`);

    dispatch({ type: ALL_PROJECT_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: ALL_PROJECT_FAIL, payload: error.response.data.message });
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
export const getProjectDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: PROJECT_DETAILS_REQUEST });

    const { data } = await axios.get(`/api/v1/project/${id}`);
    dispatch({
      type: PROJECT_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: PROJECT_DETAILS_FAIL,
      payload: error.response.data.message,
    });
  }
};

//   Clear Errors:
export const clearErrors = () => async (dispatch) => {
  dispatch({ type: CLEAR_ERRORS });
};
