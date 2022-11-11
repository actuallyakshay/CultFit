import {
  GETDATA_ERROR,
  GETDATA_LOADING,
  GETDATA_SUCCESS,
} from "./getData.types";
import axios from "axios";

export const getData =
  (route, q = "", off = "", sort = "") =>
  (dispatch) => {
    dispatch({ type: GETDATA_LOADING });
    axios
      .get(
        `http://localhost:8080/${route}?q=${q}&off=${off}&disSort=${sort}&page=1&limit=32`
      )
      .then((res) => dispatch({ type: GETDATA_SUCCESS, payload: res.data }))
      .catch((error) => dispatch({ type: GETDATA_ERROR }));
  };
