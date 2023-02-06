import React, {useState} from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import {useSelector, useDispatch} from 'react-redux';
import { useHistory } from 'react-router-dom';
import SearchForm from '../SearchForm/SearchForm';

function HomePage() {

  const dispatch = useDispatch();
  const history = useHistory();

  // this component doesn't do much to start, just renders some user reducer info to the DOM
  const user = useSelector((store) => store.user);

  return (
   <>
    <SearchForm />
   </>
  );
}

// this allows us to use <App /> in index.js
export default HomePage;
