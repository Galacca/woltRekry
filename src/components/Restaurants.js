import React from 'react';
import { connect } from 'react-redux';
import {Grid} from 'react-flexbox-grid'
import Card from '../widgets/Card';

const Restaurants = (props) => {
  return (
    <Grid fluid>
      <Card />
    </Grid>
  );
};

const mapStateToProps = (state) => ({
  restaurants: state.restaurants,
});

const connectedRestaurants = connect(mapStateToProps)(Restaurants);

export default connectedRestaurants;
