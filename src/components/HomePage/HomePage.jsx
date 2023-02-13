import React, {useState} from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import HomeSearchForm from '../HomeSearchForm/HomeSearchForm';
import BestSellers from '../BestSellers/BestSellers';

function HomePage() {

  return (
   <>
    <HomeSearchForm />
    <BestSellers />
   </>
  );
}

export default HomePage;