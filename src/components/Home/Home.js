import React, { useEffect } from "react";
import { connect } from "react-redux";
import "./Home.css";
import AllRestaurants from "../Restaurants/AllRestaurants";
import { getHomeDetails } from "../../actions/home";
import LoaderFullPage from "../../helpers/LoaderFullPage";



const data = [{
  "restaurantId": 101,
  "name": "Dominos",
  "status": 2,
  "address": "Kormangala 5th block",
  "description": "We serve delicious pizzas",
  "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Dominos_pizza_logo.svg/512px-Dominos_pizza_logo.svg.png?20111115123340"
},
{
  "restaurantId": 102,
  "name": "Punjabi Dhaba",
  "status": 1,
  "address": "SG Palya",
  "description": "Coffee and more coffee",
  "imageUrl": "https://media-cdn.tripadvisor.com/media/photo-i/0d/6c/4f/b8/photo1jpg.jpg"
},
{
  "restaurantId": 103,
  "name": "CCD",
  "status": 1,
  "address": "Kormangala 7th block",
  "description": "We serve wonderful coffe and snacks",
  "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Dominos_pizza_logo.svg/512px-Dominos_pizza_logo.svg.png?20111115123340"
},
{
  "restaurantId": 104,
  "name": "KFC",
  "status": 2,
  "address": "Electronic city",
  "description": "Crispiest chicken",
  "imageUrl": "https://upload.wikimedia.org/wikipedia/en/thumb/b/bf/KFC_logo.svg/1200px-KFC_logo.svg.png"
},
{
  "restaurantId": 105,
  "name": "Udupi",
  "status": 2,
  "address": "BTM Layout",
  "description": "South indian to the core",
  "imageUrl": "https://img.youtube.com/vi/1weigfQ-R9Q/0.jpg"
}
]


const Home = (props) => {

  useEffect(() => {
    if(props.auth.userId != undefined){
      props.dispatch(getHomeDetails(props.auth.userId));
    }
  }, []);

  return (
    <div>

    {props.restaurantLoading ? <LoaderFullPage/> : <AllRestaurants restaurantList={props.restaurantList} />}

      

    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    restaurantList: state.restaurants.restaurantsList,
    restaurantLoading: state.restaurants.restaurantsLoading,
    // restaurantList: data,
    auth: state.auth,
    ...ownProps,
  };
};

export default connect(mapStateToProps)(Home);
