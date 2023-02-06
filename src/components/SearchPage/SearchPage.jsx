import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SearchItem from '../SearchItem/SearchItem';


function SearchPage() {

  //call search results from redux store
  const searchResults = useSelector(store => store.searchResults);

  return (
    <>
      <h2>Search Results:</h2>
      <div>
        {searchResults.map(results => {
          return (
            <SearchItem 
              key={results.id}
              //sending results to SearchItem as a prop
              results={results}
            />
          )
        })}
      </div>
    </>
  );
}

export default SearchPage;
