const switchSorting = () => (dispatch) => {
  dispatch({
    type: 'SWITCH_SORTING_METHOD',
  });
};

export default switchSorting;
