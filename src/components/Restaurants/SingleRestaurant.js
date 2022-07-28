import React, { useEffect } from "react";
import { connect } from "react-redux";
import LoaderFullPage from "../../helpers/LoaderFullPage";


import { useHistory } from "react-router-dom";
import { getSingleRestaurant } from "../../actions/restaurants";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { makeStyles , withStyles } from "@material-ui/core/styles";
import { AddCart , IncreaseQuantity , DecreaseQuantity} from "../../actions/cart";
import Button from "@material-ui/core/Button";

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { getISODay } from "date-fns";

import Rating from '@mui/material/Rating';

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

const data1 = {

    "restaurantId": "432132",
    "name": "Punjabi Dhaba",
    "offer": 20,
    "description": "Hygeinic Veg Menu Only ",
    "address": "Madiwala, Bangalore",
    "imageUrl": "https://media-cdn.tripadvisor.com/media/photo-i/0d/6c/4f/b8/photo1jpg.jpg",

}

const data2 = [{
    "itemId": "10001",
    "name": "Paneer Tikka",
    "description": "This dish is made with Indian spice and paneer ",
    "offer": 20,
    "restaurantId": "432132",
    "imageUrl": "https://media-cdn.tripadvisor.com/media/photo-i/0d/6c/4f/b8/photo1jpg.jpg",
    "price": "200",
    "rating": 4.5
}, {
    "itemId": "10032",
    "name": "Gobi Paratha",
    "description": "this dish is made with wheet and cabbage and contains a lot of oil",
    "offer": 10,
    "restaurantId": "432132",
    "imageUrl": "https://media-cdn.tripadvisor.com/media/photo-i/0d/6c/4f/b8/photo1jpg.jpg",
    "price": "50",
    "rating": 4.7
}, {
    "itemId": "10035",
    "name": "Gobi Paratha",
    "description": "this dish is made with wheet and cabbage and contains a lot of oil",
    "offer": 10,
    "restaurantId": "432132",
    "imageUrl": "https://media-cdn.tripadvisor.com/media/photo-i/0d/6c/4f/b8/photo1jpg.jpg",
    "price": "50",
    "rating": 4.7
}]

const Restaurant = (props) => {

    const classes = useStyles();

    const history = useHistory();

      useEffect(() => {
        props.dispatch(getSingleRestaurant(props.match.params.restaurant_name));
      }, []);

    // props = {
    //     restaurant: data
    // };

    const handleBack = () => {
        history.goBack();
    };

    const getCartItemQuantity = (item) => {
        // console.log(props.cart.Carts)
        const q = props.cart.Carts.filter(c => c.itemId === item.itemId);
        if(q.length > 0){
            return q[0].quantity;
        }
        return 0;
    }



    return (
        <div>
            {props.restaurantLoading ?
                <div> <LoaderFullPage /> </div> :
                <div className="container my-5">

                    <div className="d-flex flex-row justify-content-around" style={{marginBottom: "20px" , marginTop: "40px", background: "linear-gradient(#ffffff, #9198e5)"}}>

                        <div className="d-flex flex-column justify-content-center align-items-center" style={{width: "60%"}} >
                            <Typography gutterBottom variant="h4" component="h2" align="center">
                                {props.restaurant.name}
                            </Typography>
                            <div className="d-flex justify-content-between">
                                <span style={{fontSize: "16px"}}>{props.restaurant.description}</span>
                            </div><br/>
                            <div className="d-flex flex-column">
                                <div style={{fontSize: "16px"}}>Address: {props.restaurant.address}</div>
                                <div>Offer: {props.restaurant.offer}%</div>
                            </div>
                        </div>

                        <div className="d-flex justify-content-center">
                            <img src={props.restaurant.imageUrl} className="single-event-image" />
                        </div>
                    </div>

                    <TableContainer component={Paper}>
                        <Table className={classes.table} aria-label="notice table">
                            <TableBody>
                                {props.restaurantItems.map((item, index) => (
                                    <StyledTableRow  key={index}>
                                        <StyledTableCell align="left"> {<img src={item.imageUrl} style={{height: "60px" , marginRight: "5px" , verticalAlign: "center"}} />}<Rating name="read-only" value={item.rating} precision={0.1} readOnly /> </StyledTableCell>
                                        <StyledTableCell component="th" scope="row" style={{width: "50%"}}>
                                            <span style={{fontSize: "20px"}}>{item.name}</span><br/>
                                            <span>{item.description}</span>
                                        </StyledTableCell>
                                        <StyledTableCell align="left">Rs. {item.price}</StyledTableCell>
                                        {getCartItemQuantity(item) > 0 ? 
                                        <StyledTableCell>
                                                <span className="btn btn-primary" style={{margin:'2px'}} onClick={()=>props.dispatch(DecreaseQuantity(item))}>-</span>
                                                <span className="btn btn-info">{getCartItemQuantity(item)}</span>
                                                <span className="btn btn-primary" style={{margin:'2px'}} onClick={()=>props.dispatch(IncreaseQuantity(item))}>+</span>
                                                
                                        </StyledTableCell> : 
                                        <StyledTableCell>
                                                <span className="btn btn-primary" style={{margin:'2px'}} onClick={()=>props.dispatch(IncreaseQuantity(item))}>Add Item</span>
                                                
                                        </StyledTableCell>}
                                        
                                    </StyledTableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>

                </div>
            }
        </div>);
};

const mapStateToProps = (state, ownProps) => {
    return {
        restaurant: data1,
        restaurantItems: data2,
        // restaurant: state.restaurant.singleRestaurant,
        // restaurantItems: state.restaurant.singleRestaurantItems,
        cart: state.cart,
        restaurantLoading: state.restaurants.restaurantLoading,
        ...ownProps,
    };
};

// const mapDispatchToProps = {
//   getAllGroupsList,
// };

export default connect(mapStateToProps)(Restaurant);
