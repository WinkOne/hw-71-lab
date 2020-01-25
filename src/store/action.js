import axiosApi from "../axios-api";

export const GET_ORDER_REQUEST = "GET_ORDER_REQUEST";
export const GET_ORDER_SUCCESS = "GET_ORDER_SUCCESS";
export const GET_ORDER_ERROR = "GET_ORDER_ERROR";

export const getOrderRequest = () => {
  return{type: GET_ORDER_REQUEST}
};
export const getOrderSuccess = (response) => {
  return{type: GET_ORDER_SUCCESS, response}
};
export const getOrderError = () => {
    return{type: GET_ORDER_ERROR}
};

export const getOrders = () => {
    return dispatch => {
        dispatch(getOrderRequest());
        axiosApi.get('/orders.json').then(response => {
            dispatch(getOrderSuccess(response.data));
        }, error => {
            dispatch(getOrderError(error));
        });
    }
};

export const ordersBuild = (order, dishes) => {
    return dispatch => {
        
    }
};