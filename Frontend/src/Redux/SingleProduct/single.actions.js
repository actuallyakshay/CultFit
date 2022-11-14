import axios from "axios";
import { SINGLE_ERROR, SINGLE_LOADING, SINGLE_SUCCESS } from "./single.types";

export const getSingleData = ( _id) => (dispatch) => {
  dispatch({ type: SINGLE_LOADING });
  axios
    .get(`http://localhost:8080/products/${_id}`)
    .then((res) => dispatch({ type: SINGLE_SUCCESS, payload: res.data }))
    .catch((err) => dispatch({ type: SINGLE_ERROR }));
};
