import React, { useState } from 'react';
import { connect } from 'react-redux';
import switchSorting from '../../actions/sortingActions';
import './Navbar.css';

const NavBar = (props) => {
// Would be better if we trusted the store for the state, but I wanted to show that I can do a hook
  const [sort, setSort] = useState('A to Z');

  const sortBy = (props) => {
    props.switchSorting();
    if (sort === 'A to Z') {
      setSort('Z to A');
    } else {
      setSort('A to Z');
    }
  };

  return (
    <>
      <nav className="navbar">
        Sort from:
        {' '}
        <div className="navBarClickable" onClick={() => sortBy(props)}>{sort}</div>
      </nav>
    </>
  );
};

export default connect(
  null,
  { switchSorting },
)(NavBar);
