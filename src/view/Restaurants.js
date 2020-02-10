import React from 'react';
import { connect } from 'react-redux';
import { Grid } from 'react-flexbox-grid';
import Card from '../components/Card/Card';
import { sortAscending, sortDescending } from '../utils/Sorters';

const Restaurants = (props) => {
  if (props.sortAscending) {
    props.restaurants.sort(sortAscending);
  } else {
    props.restaurants.sort(sortDescending);
  }

  return (
    <Grid fluid>
      {props.restaurants.map((r) => (
        // eslint-disable-next-line max-len
        <Card key={r.name} image={r.image} name={r.name} description={r.description} tags={r.tags} />
      ))}
    </Grid>
  );
};

const mapStateToProps = (state) => ({
  sortAscending: state.sortingMethod,
  restaurants: state.restaurants,
});

const connectedRestaurants = connect(mapStateToProps)(Restaurants);

export default connectedRestaurants;
