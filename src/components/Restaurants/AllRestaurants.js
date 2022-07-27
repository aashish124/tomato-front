import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import Navbar from "../Navbar/Navbar";
import LoaderFullPage from "../../helpers/LoaderFullPage";
import { Link } from 'react-router-dom'
import queryString from 'query-string';
import EmptyList from "../../helpers/EmptyList";
import Grid from "@material-ui/core/Grid";


import { getAllRestaurantsList } from "../../actions/restaurants";
import RestaurantCard from "./RestaurantCard";

const data =  [{
    "r_id" : 101,
    "r_name" : "Dominos",
    "r_status" : 2,
    "r_address": "Kormangala 5th block",
    "r_description": "We serve delicious pizzas",
    "image_url" : "https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Dominos_pizza_logo.svg/512px-Dominos_pizza_logo.svg.png?20111115123340"
},
{
    "r_id" : 102,
    "r_name" : "Punjabi Dhaba",
    "r_status" : 1,
    "r_address": "SG Palya",
    "r_description": "Coffee and more coffee",
    "image_url" : "https://media-cdn.tripadvisor.com/media/photo-i/0d/6c/4f/b8/photo1jpg.jpg"
},
{
    "r_id" : 103,
    "r_name" : "CCD",
    "r_status" : 1,
    "r_address": "Kormangala 7th block",
    "r_description": "We serve wonderful coffe and snacks",
    "image_url" : "https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Dominos_pizza_logo.svg/512px-Dominos_pizza_logo.svg.png?20111115123340"
},
{
    "r_id" : 104,
    "r_name" : "KFC",
    "r_status" : 2,
    "r_address": "Electronic city",
    "r_description": "Crispiest chicken",
    "image_url" : "https://upload.wikimedia.org/wikipedia/en/thumb/b/bf/KFC_logo.svg/1200px-KFC_logo.svg.png"
},
{
    "r_id" : 105,
    "r_name" : "Udupi",
    "r_status" : 2,
    "r_address": "BTM Layout",
    "r_description": "South indian to the core",
    "image_url" : "https://img.youtube.com/vi/1weigfQ-R9Q/0.jpg"
}
]


const AllRestaurants = (props) => {

  useEffect(() => {
    props.dispatch(getAllRestaurantsList())
  }, [])



  return (
    <div>
        <div className="container">
          {props.restaurantList.length> 0 ? (
            <div>
                  RESTAURANTS LISTS
                  <Grid container spacing={3} alignItems="stretch">
                    {props.restaurantList.map((restaurant , index) =>{
                        return <Grid item lg={4} md={6} sm={6} xs={12} key={index}>
                                <Link to={`/restaurant/${restaurant.r_id}`}>
                                    <RestaurantCard restaurant={restaurant} key={index} />
                                </Link>
                            </Grid>;
                    })}
                  </Grid>
            </div>
          ) : (
            <EmptyList text="There are no restaurants to display" />
          )}
        </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {

    // restaurantsList: state.restaurants.restaurantsList,
    restaurantList: data,
    ...ownProps,
  };
};

// const mapDispatchToProps = {
//   getAllGroupsList,
// };

export default connect(mapStateToProps)(AllRestaurants);
