import React, { useEffect } from "react";
import { connect } from "react-redux";
import LoaderFullPage from "../../helpers/LoaderFullPage";
import './SingleRestaurant.css'

import { getSingleRestaurant } from "../../actions/restaurants";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const LINES_TO_SHOW = 1;
const useStyles = makeStyles({
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



const RestaurantCard = (props) => {

  const classes = useStyles();

  return (
    <div>
        <Card
            className={classes.fullHeightCard}
            // onClick={()=>handleEvent(event)}
        >
            <CardActionArea>
                <CardMedia
                component="img"
                alt="Event Cover Image"
                height="150"
                image={props.restaurant.imageUrl}
                title="Click to open restaurant"
                />
                <CardContent style={{background: "linear-gradient(#ffffff, #9198e5)"}}>
                    <Typography variant="h6" component="h2" className={classes.multiLineEllipsis}>
                        {props.restaurant.name}
                    </Typography>
                    <Typography component="h4" className={classes.multiLineEllipsis}>
                        {props.restaurant.address}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    </div>
  );
};


// const mapDispatchToProps = {
//   getAllGroupsList,
// };

export default RestaurantCard;
