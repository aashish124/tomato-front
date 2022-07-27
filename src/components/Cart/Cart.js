import React, { useEffect , useState } from "react";
import { connect } from "react-redux";
import LoaderFullPage from "../../helpers/LoaderFullPage";


import { useHistory , Link } from "react-router-dom";
import { getSingleRestaurant } from "../../actions/restaurants";
import Typography from "@material-ui/core/Typography";
import { makeStyles, withStyles } from "@material-ui/core/styles";

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {IncreaseQuantity , DecreaseQuantity , DeleteCart } from "../../actions/cart"
import { openSnackbar } from "../../actions/snackbar";
import EmptyList from "../../helpers/EmptyList";

const LINES_TO_SHOW = 1;

const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: '#cbecff',
        color: theme.palette.common.white,
        fontSize: 15,
        fontWeight: 700,
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
    root: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
        },
    },
}))(TableRow);


const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
    root: {
        // minWidth: '33%',
        // width: 300,
    },
    multiLineEllipsis: {
        overflow: "hidden",
        textOverflow: "ellipsis",
        display: "-webkit-box",
        "-webkit-line-clamp": LINES_TO_SHOW,
        "-webkit-box-orient": "vertical",
    },
    fullHeightCard: {
        height: "100%",
    },
});


const Cart = (props) => {

    const classes = useStyles();

    const history = useHistory();

    useEffect(() => {
        props.dispatch(getSingleRestaurant(props.match.params.restaurant_id));
    }, []);

    // props = {
    //     restaurant: data
    // };

    const handleBack = () => {
        history.goBack();
    };

    const handleSubmit = () => {
        props.dispatch(openSnackbar("Order Placed Successfully!" , "success"));
        props.dispatch(DeleteCart())

    }

    const [totalPrice , setTotalPrice] = useState(0);

    useEffect(() => {
        var temp = 0;
        props.cart.Carts.map(item => {
            temp += item.price*item.quantity
        })
        setTotalPrice(temp);
    } , [props.cart])

    return (
        <div>
            {props.restaurantLoading ?
                <div> <LoaderFullPage /> </div> :
                <div className="container my-5">
                    <Typography gutterBottom variant="h4" component="h2" align="center">
                        Your Cart
                    </Typography>

                    {props.cart.Carts.length > 0 ?
                    <div>
                        <TableContainer component={Paper}>
                            <Table className={classes.table} aria-label="notice table">
                                <TableBody>
                                    {props.cart.Carts.map((item, index) => (
                                        <StyledTableRow key={index}>
                                            <StyledTableCell align="left"> {<img src={item.image_url} />} </StyledTableCell>
                                            <StyledTableCell component="th" scope="row">
                                                {item.name}
                                            </StyledTableCell>
                                            <StyledTableCell align="right">Rs. {item.price}</StyledTableCell>
                                            
                                            <StyledTableCell>
                                                <span className="btn btn-primary" style={{margin:'2px'}} onClick={()=>props.dispatch(DecreaseQuantity(item))}>-</span>
                                                <span className="btn btn-info">{item.quantity}</span>
                                                <span className="btn btn-primary" style={{margin:'2px'}} onClick={()=>props.dispatch(IncreaseQuantity(item))}>+</span>
                                                
                                            </StyledTableCell>
                                            <StyledTableCell><span>Rs. {item.quantity * item.price}</span></StyledTableCell>
                                        </StyledTableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer> 

                        <div className="d-flex justify-content-between container my-5">
                            <div className="d-flex flex-column">
                                <span>Net Price: Rs. {totalPrice}</span>
                                <span>Taxes: Rs. {(totalPrice*0.132).toFixed(2)}</span>
                                <span>Total Price: Rs. {(totalPrice*1.132).toFixed(2)}</span>
                            </div>
                            <div>
                                <Link to={`/`}>
                                    <span className="btn btn-success" onClick={()=> handleSubmit()}>Checkout</span>
                                </Link>
                            </div>
                        </div> 
                    </div>
                        
                        : <EmptyList text="There are no items in your cart"/>}




                </div>
            }
        </div>);
};

const mapStateToProps = (state, ownProps) => {
    return {
        cart: state.cart,
        restaurantLoading: state.restaurants.restaurantLoading,
        ...ownProps,
    };
};

// const mapDispatchToProps = {
//   getAllGroupsList,
// };

export default connect(mapStateToProps)(Cart);
