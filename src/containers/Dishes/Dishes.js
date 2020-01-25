import React, {Component} from 'react';
import "./Dishes.css";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import {connect} from "react-redux";
import ModalExample from "../../components/Modal/Modal";
import {
    deleteOrders, editOrder,
    getOrders,
    postBuildOrders,
    toBuildOrders,
} from "../../store/dishes/actionOrders";
import {Card, CardBody, CardImg, CardSubtitle, CardTitle} from "reactstrap";
import Button from "@material-ui/core/Button";


class Dishes extends Component {

    state = {
        dishNameText: '',
        dishPriceText: '',
        dishImageUrl: '',
    };

    componentDidMount(): void {
        this.props.getOrders();
    };

    onChangeHandler = (event) => {
        this.setState({[event.target.name]: event.target.value});
    };
    setStateHandlerPut = (url, price, name) => {
        this.setState({dishNameText: name, dishPriceText: price, dishImageUrl: url});

    };
    onClickHandler = () => {
        this.props.toBuildOrders();
        this.props.postBuildOrders(
            {
                name: this.state.dishNameText,
                price: this.state.dishPriceText,
                url: this.state.dishImageUrl,
            });
    };
    onClickHandlerPut = (id) => {
        this.props.editOrder(id,
            {
                name: this.state.dishNameText,
                price: this.state.dishPriceText,
                url: this.state.dishImageUrl,
            });
    };

    render() {
        return (
            <Container fixed>
                <Box m={3}>
                    <div className="dishesHeader">
                        <div><h2>Dishes</h2></div>
                        <div><ModalExample
                            text={'Add new Dish'}
                            onchange={this.onChangeHandler}
                            buildOrders={this.onClickHandler}
                        />
                        </div>
                    </div>
                    <hr align="right" size="3" color="#0000dd"/>
                    <div style={{display: "flex", flexWrap: "wrap"}}>
                        {this.props.getOrdersThis && Object.keys(this.props.getOrdersThis).map((item, index) => {
                            return (
                                <Card outline color="primary" key={index}
                                    onClick={() => this.setStateHandlerPut(this.props.getOrdersThis[item].url, this.props.getOrdersThis[item].price, this.props.getOrdersThis[item].name,)}
                                    style={{
                                        width: '30%',
                                        padding: '15px',
                                        margin: "15px",
                                    }}
                                >
                                    <CardImg top width="100%" src={this.props.getOrdersThis[item].url} alt="Card image cap"
                                             style={{
                                                 width: '100%',
                                                 height: '220px'
                                             }}
                                    />
                                    <hr align="right" size="3" color="#0000dd"/>
                                    <CardBody
                                        style={{
                                            margin: '0 auto'
                                        }}
                                    >
                                        <CardTitle>
                                            <h4>{this.props.getOrdersThis[item].name}</h4>
                                        </CardTitle>
                                        <CardSubtitle>
                                            <h5>{this.props.getOrdersThis[item].price} KGS</h5>
                                        </CardSubtitle>
                                    </CardBody>
                                    <div
                                        style={{
                                            display: "flex",
                                            padding: '10px'
                                        }}
                                    >
                                        <div>
                                            <ModalExample
                                                classMargin={'5px'}
                                                classBtn={'137px'}
                                                onchange={this.onChangeHandler}
                                                newPutButton={
                                                    <Button variant="contained" color="primary"
                                                            onClick={() => this.onClickHandlerPut(item)}>Edit</Button>}
                                                disNone={"none"}
                                                defUrl={this.props.getOrdersThis[item].url}
                                                defPrice={this.props.getOrdersThis[item].price}
                                                defName={this.props.getOrdersThis[item].name} text={'Edit'}/>
                                        </div>
                                        <Button variant="contained" style={{
                                            textTransform: "capitalize",
                                            fontWeight: "bold",
                                            width: "46%",
                                            margin: '5px'
                                        }} color="secondary"
                                                onClick={() => this.props.deleteOrders([item])}>Delete</Button>
                                    </div>
                                </Card>
                            );
                        })}
                    </div>
                </Box>
            </Container>
        );
    }
}

const mapStateToProps = state => {
    return {
        postOrdersThis: state.orderReducer.order,
        getOrdersThis: state.orderReducer.getOrder,
    }
};

const mapDispatchToProps = dispatch => {
    return {
        toBuildOrders: (orders) => dispatch(toBuildOrders(orders)),
        postBuildOrders: (data) => dispatch(postBuildOrders(data)),
        getOrders: () => dispatch(getOrders()),
        deleteOrders: (id) => dispatch(deleteOrders(id)),
        editOrder: (id, data) => dispatch(editOrder(id, data)),
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(Dishes);
