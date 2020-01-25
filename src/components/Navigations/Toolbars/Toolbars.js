import React, {Fragment} from 'react';
import NavigationItem from "../NavigationItem/NavigationItem";
import Button from "@material-ui/core/Button";


const Toolbars = () => {
    return (
        <Fragment>
            <Button variant="contained"><NavigationItem to={"/"} exact>Dish</NavigationItem></Button>
            <Button style={{marginLeft: '10px'}} variant="contained"><NavigationItem to={"/dish"}>Orders</NavigationItem></Button>
        </Fragment>
    );
};

export default Toolbars;