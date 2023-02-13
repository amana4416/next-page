import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import SearchForm from '../SearchForm/SearchForm';
import SearchItem from '../SearchItem/SearchItem';
import './SearchPage.css';
//mui imports
import Paper from '@mui/material/Paper';

function SearchPage() {

  //call search results from redux store
  const searchResults = useSelector(store => store.searchResults);

  return (
    <>
    <SearchForm />
    <section className="searchResultsBackground">
      <Paper 
        sx={{backgroundColor: '#808274', width: '1250px', height: 'auto', margin: 'auto', marginTop: '20px', padding: '15px', paddingLeft: '58px'}}
      >
        <h2 className="searchResultsHeading">Search Results:</h2>
          {searchResults.map(results => {
            return (
              <SearchItem 
                key={results.id}
                //sending results to SearchItem as a prop
                results={results}
              />
            )
          })}
      </Paper>
    </section>
      
    </>
  );
}

export default SearchPage;
