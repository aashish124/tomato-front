import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import LoaderFullPage from "../../helpers/LoaderFullPage";
import "./Home.css";
import VisibilityIcon from "@material-ui/icons/Visibility";
import ScrollAnimation from "react-animate-on-scroll";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";


import { getAllRestaurantsList } from "../../actions/restaurants";
import EmptyList from "../../helpers/EmptyList";
import AllRestaurants from "../Restaurants/AllRestaurants";



const LINES_TO_SHOW = 2;
const useStyles = makeStyles({
  root: {
    // minWidth: '33%',
    // width: 300,
  },
  multiLineEllipsis: {
    width: '100%',
    minHeight: "2rem",
    overflow: "hidden",
    textOverflow: "ellipsis",
    display: "-webkit-box",
    "-webkit-line-clamp": 2,
    "-webkit-box-orient": "vertical",
  },
});


const Home = (props) => {
  const classes = useStyles();
  // useEffect(() => {
  //   props.dispatch(getAllRestaurantsList());
  // }, []);

  return (
    <div>

        <AllRestaurants />
        {/* <div className="container">
          {props.restaurantList.length> 0 ? (
            <div>
              <div className="row col-lg-12" style={{ marginTop: "10px" }}>
                <span style={{ float: "left" }} className="text-sub-heading">
                  <AllRestaurants />
                </span>
              </div>
            </div>
          ) : (
            <EmptyList text="There are no restaurants to display" />
          )}
        </div> */}

      
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    restaurantList: state.restaurants.restaurantsList,
    ...ownProps,
  };
};

export default connect(mapStateToProps)(Home);
