import {FETCH_DISH_SUCCESS, TO_BUILD_ORDERS} from "./actionOrders";


const initialState = {
    order: [],
    getOrder: [],
};

const reducer = (state = initialState, action) => {
    if (action.type === TO_BUILD_ORDERS) {
        return {...state, order: action.stateBuildOrders};
    }
    if (action.type === FETCH_DISH_SUCCESS) {
        return {...state, getOrder: action.response}
    }

    return state;


};

export default reducer;