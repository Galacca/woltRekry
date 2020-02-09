import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import initializeRestaurants from './actions/restaurantActions';
import Restaurants from './view/Restaurants';
import './App.css';


const App = (props) => {
  useEffect(() => {
    props.initializeRestaurants();
}, []);

  return (
    <Restaurants></Restaurants>
  );
}

export default connect(null, { initializeRestaurants })(App);
