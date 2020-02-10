const restaurantReducer = (state = true, action) => {
  switch (action.type) {
    case 'SWITCH_SORTING_METHOD':
      if (state === true) return false;
      return true;
    default:
      return state;
  }
};

export default restaurantReducer;
