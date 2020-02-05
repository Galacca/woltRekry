const restaurantReducer = (state = {}, action) => {
    switch (action.type) {
      case 'INIT_RESTAURANT_DATA':
        //TÄMÄ CONSOLE.LOG TOIMII NIIN KU PITÄÄ
        console.log(action.data.restaurants.map(r => r.name))
        return action.data
      default:
        return state;
    }
}

export default restaurantReducer;