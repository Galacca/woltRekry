import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import initializeRestaurants from './actions/restaurantActions';
import switchSorting from './actions/sortingActions';
import Restaurants from './view/Restaurants';
import Navbar from './components/Navbar/Navbar';

const App = (props) => {
  useEffect(() => {
    props.initializeRestaurants();
  }, []);

  return (
    <div>
      <Navbar switchSorting={switchSorting} />
      <Restaurants />
    </div>
  );
};

export default connect(null, { initializeRestaurants })(App);
