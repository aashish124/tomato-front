import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import EmptyList from "../../helpers/EmptyList";
import Grid from "@material-ui/core/Grid";

// import RestaurantCard from "./RestaurantCard";
import { getAllOrders } from "../../actions/orders";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { makeStyles, withStyles } from "@material-ui/core/styles";

const LINES_TO_SHOW = 1;

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: "#cbecff",
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
    "&:nth-of-type(odd)": {
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

const data = [
  {
    orderId: 1,
    totalPrice: 200,
    items: [
      {
        id: "10035",
        name: "Paneer Tikka",
        description:
          "this dish is made with wheet and cabbage and contains a lot of oil",
        quantity: 5,
        restaurantId: "432132",
      },
      {
        id: "10032",
        name: "Gobi Paratha",
        description:
          "this dish is made with wheet and cabbage and contains a lot of oil",
        quantity: 10,
        restaurantId: "432132",
      },
    ],
  },
  {
    orderId: 2,
    totalPrice: 3000,
    items: [
      {
        id: "10035",
        name: "Gobi Paratha",
        description:
          "this dish is made with wheet and cabbage and contains a lot of oil",
        quantity: 5,
        restaurantId: "432132",
      },
      {
        id: "10032",
        name: "Gobi Paratha",
        description:
          "this dish is made with wheet and cabbage and contains a lot of oil",
        quantity: 10,
        restaurantId: "432132",
      },
    ],
  },
];

const Orders = (props) => {
  const classes = useStyles();

  useEffect(() => {
    props.dispatch(getAllOrders(props.userId));
  }, []);

  return (
    <div>
      <div className="container">
        {props.ordersList.length > 0 ? (
          <div>
            <div
              className="d-flex justify-content-center"
              style={{
                fontSize: "30px",
                marginBottom: "20px",
                marginTop: "20px",
                paddingTop: "20px",
              }}
            >
              MY ORDERS
            </div>

            <TableContainer component={Paper}>
              <Table className={classes.table} aria-label="notice table">
                <TableBody>
                  {props.ordersList.map((order, index) => (
                    <StyledTableRow key={index}>
                      <StyledTableCell align="left">
                        {order.orderId}
                      </StyledTableCell>
                      <StyledTableCell>
                        {order.items.map((item) => {
                          return (
                            <span>
                              {item.quantity} x {item.name}<br/>
                            </span>
                          );
                        })}
                      </StyledTableCell>
                      <StyledTableCell align="left">
                        Rs. {order.totalPrice}
                      </StyledTableCell>
                    </StyledTableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </div>
        ) : (
          <EmptyList text="There are no orders to display" />
        )}
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    userId: state.auth.userId,
    // ordersList: state.orders.ordersList,
    ordersList: data,
    ...ownProps,
  };
};

// const mapDispatchToProps = {
//   getAllGroupsList,
// };

export default connect(mapStateToProps)(Orders);
