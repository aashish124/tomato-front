import React, { useEffect } from "react";
import { connect } from "react-redux";
import "./Home.css";
import AllRestaurants from "../Restaurants/AllRestaurants";
import { getHomeDetails } from "../../actions/home";



const data = [{
  "r_id": 101,
  "r_name": "Dominos",
  "r_status": 2,
  "r_address": "Kormangala 5th block",
  "r_description": "We serve delicious pizzas",
  "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Dominos_pizza_logo.svg/512px-Dominos_pizza_logo.svg.png?20111115123340"
},
{
  "r_id": 102,
  "r_name": "Punjabi Dhaba",
  "r_status": 1,
  "r_address": "SG Palya",
  "r_description": "Coffee and more coffee",
  "image_url": "https://media-cdn.tripadvisor.com/media/photo-i/0d/6c/4f/b8/photo1jpg.jpg"
},
{
  "r_id": 103,
  "r_name": "CCD",
  "r_status": 1,
  "r_address": "Kormangala 7th block",
  "r_description": "We serve wonderful coffe and snacks",
  "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Dominos_pizza_logo.svg/512px-Dominos_pizza_logo.svg.png?20111115123340"
},
{
  "r_id": 104,
  "r_name": "KFC",
  "r_status": 2,
  "r_address": "Electronic city",
  "r_description": "Crispiest chicken",
  "image_url": "https://upload.wikimedia.org/wikipedia/en/thumb/b/bf/KFC_logo.svg/1200px-KFC_logo.svg.png"
},
{
  "r_id": 105,
  "r_name": "Udupi",
  "r_status": 2,
  "r_address": "BTM Layout",
  "r_description": "South indian to the core",
  "image_url": "https://img.youtube.com/vi/1weigfQ-R9Q/0.jpg"
}
]


const Home = (props) => {

  useEffect(() => {

    props.dispatch(getHomeDetails());
  }, []);

  return (
    <div>

      <AllRestaurants restaurantList={props.restaurantList} />

    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    // restaurantList: state.restaurants.restaurantsList,
    restaurantList: data,
    ...ownProps,
  };
};

export default connect(mapStateToProps)(Home);
