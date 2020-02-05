import React from 'react';
import { connect } from 'react-redux';

const Restaurants = (props) => {
  return (
    <ul>
      {props.restaurants.map(r => r.name)}
    </ul>
  );
};

const mapStateToProps = (state) => ({
  restaurants: state.restaurants,
});

const connectedRestaurants = connect(mapStateToProps)(Restaurants);

export default connectedRestaurants;
