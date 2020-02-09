import React from 'react';
import { connect } from 'react-redux';
import {Grid} from 'react-flexbox-grid'
import Card from '../components/Card';

const Restaurants = (props) => {
   return (
    <Grid fluid>
     {props.restaurants.map((r) => {
    return (
    
      <Card image = {r.image} name = {r.name} description = {r.description} />
    
    )})}</Grid>)
};

const mapStateToProps = (state) => ({
  restaurants: state.restaurants,
});

const connectedRestaurants = connect(mapStateToProps)(Restaurants);

export default connectedRestaurants;
