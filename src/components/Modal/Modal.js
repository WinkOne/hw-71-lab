import React, {useState} from 'react';
import {Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';
import makeStyles from "@material-ui/core/styles/makeStyles";
import {createStyles} from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            '& > *': {
                margin: theme.spacing(1),
                width: 200,
            },
        },
    }),
);

const ModalExample = (props) => {

    const classes = useStyles();
    const {
        className
    } = props;

    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);
    const closeAddHandler = () => {
        props.buildOrders();
        toggle()
    };

    return (
        <div>
            <Button style={{textTransform: "capitalize", fontWeight: "bold", width: props.classBtn, margin: props.classMargin}} variant="contained" color="primary"
                    onClick={toggle}>{props.text}</Button>
            <Modal isOpen={modal} toggle={toggle} className={className}>
                <ModalHeader toggle={toggle}>Add Dish</ModalHeader>
                <ModalBody>
                    <form className={classes.root} noValidate autoComplete="off">
                        <TextField defaultValue={props.defName} name="dishNameText" onChange={props.onchange} style={{width: '45.5%'}}
                                   id="outlined-basic" label="Add Name Dish" variant="outlined"/>
                        <TextField defaultValue={props.defPrice} name="dishPriceText" onChange={props.onchange} style={{width: '45.5%'}}
                                   id="outlined-number" label="Enter Price Dish" type="number"
                                   InputLabelProps={{shrink: true,}} variant="outlined"/>
                        <TextField defaultValue={props.defUrl} name="dishImageUrl" onChange={props.onchange} style={{width: '95%'}}
                                   id="outlined-basic" label="Add Image Dish: URL" variant="outlined"/>
                    </form>
                </ModalBody>
                <ModalFooter>
                    {props.newPutButton}
                    <Button style={{textTransform: "capitalize", fontWeight: "bold", display: props.disNone}} variant="contained"
                            color="primary" onClick={closeAddHandler}>Add</Button>
                    <Button style={{textTransform: "capitalize", fontWeight: "bold", marginLeft: "5px"}}
                            variant="contained" color="secondary" onClick={toggle}>Cancel</Button>
                </ModalFooter>
            </Modal>
        </div>
    );
};

export default ModalExample;