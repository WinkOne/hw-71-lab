import axiosApi from "../../axios-api";

export const FETCH_DISH_REQUEST = 'FETCH_COUNTER_REQUEST';
export const FETCH_DISH_SUCCESS = 'FETCH_COUNTER_SUCCESS';
export const FETCH_DISH_ERROR = 'FETCH_COUNTER_ERROR';

export const TO_BUILD_ORDERS = "TO_BUILD_ORDERS";

export const TO_BUILD_ORDERS_PUT = "TO_BUILD_ORDERS_PUT";

export const DELETE_ORDERS = 'DELETE_ORDERS';

export const fetchDishRequest = () => {
    return {type: FETCH_DISH_REQUEST}
};
export const fetchDishSuccess = (response) => {
    return {type: FETCH_DISH_SUCCESS, response}
};
export const fetchDishError = () => {
    return {type: FETCH_DISH_ERROR}
};

export const toBuildOrders = (stateBuildOrders) => {
    return{type: TO_BUILD_ORDERS, stateBuildOrders}
};

export const editOrder = (id, data) => {
    console.log(id);
    return async dispatch => {
        await axiosApi.put(`/dishes/${id}.json`, data);
        dispatch(getOrders())
    }
};

export const postBuildOrders = (data) => {
    return async dispatch => {
        await axiosApi.post('/dishes.json', data);
        dispatch(getOrders())
    }
};

export const getOrders = () => {
    return dispatch => {
        dispatch(fetchDishRequest());
        axiosApi.get('/dishes.json').then(response => {
            dispatch(fetchDishSuccess(response.data));
        }, error => {
            dispatch(fetchDishError(error));
        });
    }
};
export const deleteOrders = (deleteOrder) => {
    return  dispatch => {
        axiosApi.delete(`/dishes/${deleteOrder}.json`).then(res =>{
            dispatch(getOrders())
        }, error => {
            dispatch(fetchDishError(error));
        })
    }
};

