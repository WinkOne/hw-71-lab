import React, {Component} from 'react';
import {connect} from "react-redux";
import {getOrders, ordersBuild} from "../../store/action";

class Orders extends Component {

    componentDidMount() {
        this.props.getOrders();
        this.props.ordersBuild(this.props.ordersThis, this.props.dishesThis);
    };

    render() {
        return (
            <div>

            </div>
        );
    }
}
const mapStateToProps = state => {
    return {
        ordersThis: state.mainReducer.orders,
        dishesThis: state.orderReducer.getOrder
    }
};

const mapDispatchToProps = dispatch => {
    return {
        getOrders: () => dispatch(getOrders()),
        ordersBuild: (order, dishes) => dispatch(ordersBuild(order, dishes))
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(Orders);