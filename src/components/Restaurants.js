import React from 'react';
import { connect } from 'react-redux';

const Restaurants = (props) => {
  // TÄMÄ KAATUU TypeError: Cannot read property 'map' of undefined
  console.log(props.restaurants.restaurants.map(r => r.name))
  return (
    <ul>
      
    </ul>
  );
};

const mapStateToProps = (state) => ({
  restaurants: state.restaurants,
});

const connectedRestaurants = connect(mapStateToProps)(Restaurants);

export default connectedRestaurants;
