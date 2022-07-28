import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom'
import EmptyList from "../../helpers/EmptyList";
import Grid from "@material-ui/core/Grid";

import RestaurantCard from "./RestaurantCard";


const AllRestaurants = (props) => {

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

    ...ownProps,
  };
};

// const mapDispatchToProps = {
//   getAllGroupsList,
// };

export default connect(mapStateToProps)(AllRestaurants);
