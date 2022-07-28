import React from 'react'
// import './App.css'
import { ReactSearchAutocomplete } from 'react-search-autocomplete'
import { useState , useEffect } from 'react'
import { connect } from "react-redux";
import { getAllRestaurantsList } from '../../actions/restaurants';
import { Link } from 'react-router-dom'
import { Autocomplete } from '@mui/material';


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


const Searchbar = (props) => {
  // note: the id field is mandatory
  const [items, setItems] = useState([])
  
  useEffect(() => {
    props.dispatch(getAllRestaurantsList())
  }, [])

  useEffect(() => {
    var temp = [];
    props.restaurantList.map((item,index) => {
        var tempItem = {
            id: index,
            r_id: item.r_id,
            name: item.r_name,
            image_url: item.image_url,
        }
        temp.push(tempItem);
    })
    console.log(temp);
    setItems(temp);
  }, [props.restaurantList])

  const handleOnSearch = (string, results) => {
    // onSearch will have as the first callback parameter
    // the string searched and for the second the results.
    console.log(string, results)
  }

  const handleOnHover = (result) => {
    // the item hovered
    console.log(result)
  }

  const handleOnSelect = (item) => {
    // the item selected
    console.log(item)
  }

  const handleOnFocus = () => {
    console.log('Focused')
  }

  const formatResult = (item) => {
    return (
    <Link to={`/restaurant/${item.r_id}`}>
        <span style={{ textAlign: 'left' }}><img src={item.image_url} style={{height: '30px'}}/></span>
        <span style={{ textAlign: 'left' , marginLeft: '10px' }}>{item.name}</span>
      </Link>
    )
  }

  return (
    <div className="App">
      <header className="App-header">
        <div style={{ width: 400 }}>
          <ReactSearchAutocomplete
            items={items}
            onSearch={handleOnSearch}
            onHover={handleOnHover}
            onSelect={handleOnSelect}
            onFocus={handleOnFocus}
            autoFocus
            formatResult={formatResult}
          />
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
