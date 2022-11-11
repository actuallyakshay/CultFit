import axios from "axios";
import { PIN_ERROR, PIN_LOADING, PIN_SUCCESS } from "./pincode.types";

export const getPin = (q) => (dispatch) => {
  console.log({ q });
  dispatch({ type: PIN_LOADING });
  axios
    .get(`https://api.postalpincode.in/pincode/${q}`)
    .then((res) => dispatch({ type: PIN_SUCCESS, payload: res.data }))
    .catch((err) => dispatch({ type: PIN_ERROR }));
};
