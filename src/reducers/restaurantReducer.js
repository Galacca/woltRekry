const restaurantReducer = (state = [], action) => {
    switch (action.type) {
      case 'INIT_RESTAURANT_DATA':
        return action.data.restaurants.sort()
      default:
        return state;
    }
}

export default restaurantReducer;