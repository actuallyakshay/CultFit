import axios from "axios";
import {
  GET_CART_ERROR,
  GET_CART_LOADING,
  GET_CART_SUCCESS,
} from "./cart.types";

export const postCart = (_id, quantity, token) => (dispatch) => {
  axios
    .post(
      `http://localhost:8080/cart`,
      {
        product: _id,
        quantity: quantity,
      },
      {
        headers: {
          token: token,
        },
      }
    )
    .then((res) => console.log(res.data))
    .catch((err) => console.log(err));
};

export const getCart = (token) => {
  axios
    .get(`http://localhost:8080/cart`, {
      headers: {
        token: token,
      },
    })
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      return err;
    });
};


