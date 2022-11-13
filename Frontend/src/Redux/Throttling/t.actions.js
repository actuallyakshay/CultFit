import axios from "axios";
import {
  GET_INOUT_SUCCESS,
  GET_INPUT_LOADING,
  GTE_INPUT_ERROR,
} from "./t.type";

export const getInputData = (category, input) => (dispatch) => {
  dispatch({ type: GET_INPUT_LOADING });
  axios
    .get(
      `http://localhost:8080/products?category=${category}&input=${input}&page=1&limit=32`
    )
    .then((res) => dispatch({ type: GET_INOUT_SUCCESS, payload: res.data }))
    .catch((err) => dispatch({ type: GTE_INPUT_ERROR }));
};
