import fetchJsonData from '../services/restaurantService';

const initializeRestaurants = () => async (dispatch) => {
  const restaurantData = await fetchJsonData();
  dispatch({
    type: 'INIT_RESTAURANT_DATA',
    data: restaurantData,
  });
};

export default initializeRestaurants;
