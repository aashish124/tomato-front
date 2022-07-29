import React from 'react'
// import './App.css'
import { ReactSearchAutocomplete } from 'react-search-autocomplete'
import { useState, useEffect } from 'react'
import { connect } from "react-redux";
import { getAllRestaurantsList } from '../../actions/restaurants';
import { getHomeDetails } from '../../actions/home';
import { Link, Redirect } from 'react-router-dom'
import { Autocomplete } from '@mui/material';


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
  


const Searchbar = (props) => {
    // note: the id field is mandatory
    const [items, setItems] = useState([])

    const [query, setQuery] = useState(null)
    const [redirect , setRedirect] = useState(false);


    useEffect(() => {
        props.dispatch(getHomeDetails())
    }, [])

    const handleChange = (e) => {
        e.preventDefault();
        setQuery(e.target.value)
        setRedirect(false);
    }

    const handleSubmit = () => {
        console.log(query)
        setRedirect(true);
    }

    return (
        <div className="App">
            <header className="App-header">
                {redirect ? <Redirect
                    to={{
                        pathname: `/restaurant/${query}`,
                    }}
                /> : null }
                <div>
                <input
                    style={{ marginRight: "5px" }}
                    type="text"
                    placeholder="Name"
                    name="name"
                    value={query}
                    onChange={handleChange}
                />
                <i
                    className="fa fa-search"
                    style={{ marginRight: "5px" }}
                    onClick={() => handleSubmit()}
                ></i>
                {/* <ReactSearchAutocomplete
                    items={items}
                    onSearch={handleOnSearch}
                    onHover={handleOnHover}
                    onSelect={handleOnSelect}
                    onFocus={handleOnFocus}
                    autoFocus
                    formatResult={formatResult}
                /> */}
            </div>
            </header>
        </div>
    )
}

const mapStateToProps = (state, ownProps) => {
    return {

        // restaurantsList: state.restaurants.restaurantsList,
        restaurantList: data,
        ...ownProps,
    };
};

export default connect(mapStateToProps)(Searchbar);
