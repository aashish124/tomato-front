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
                  <div className="d-flex justify-content-center" style={{fontSize: "30px" , marginBottom: "20px" , marginTop: "20px", paddingTop: "20px"}}>RESTAURANTS LIST</div>
                  <Grid container spacing={2} alignItems="stretch">
                    {props.restaurantList.map((restaurant , index) =>{
                        return <Grid item lg={4} md={6} sm={6} xs={12} key={index}>
                                <Link to={`/restaurant/${restaurant.name}`}>
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
