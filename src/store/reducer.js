import {GET_ORDER_SUCCESS} from "./action";


const initialState ={
    orders: []
};

const reducer = (state = initialState, action) => {
    if (action.type === GET_ORDER_SUCCESS) {
        return {...state, orders: action.response}
    }
    return state;
};

export default reducer;