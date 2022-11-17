import axios from "axios";
import { PIN_ERROR, PIN_LOACTION, PIN_LOADING, PIN_SUCCESS } from "./pincode.types";

export const getPin = (email) => (dispatch) => {
  console.log({ email });
  axios
    .put(`https://localhost:8080/user`, email)
    .then((res) => console.log(res.data))
    .catch((err) => dispatch({ type: PIN_ERROR }));
};

export const getLOACTION = (email) => (dispatch) => {
  axios
    .put(`http://localhost:8080/user`, { email })
    .then((res) => dispatch({ type: PIN_LOACTION, payload: res.data.pinCode }));
};
