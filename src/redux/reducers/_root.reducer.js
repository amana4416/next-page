import { combineReducers } from 'redux';
import errors from './errors.reducer';
import user from './user.reducer';
import searchResults from './searchResults.reducer';
import bestSellers from './bestSellers.reducer';
import bookshelves from './bookshelves.reducer';
import openBookshelf from './openBookshelf.reducer';
import bookDetails from './details.reducer';
import bookNotes from './bookNotes.reducer';

// rootReducer is the primary reducer for our entire project
// It bundles up all of the other reducers so our project can use them.
// This is imported in index.js as rootSaga

// Lets make a bigger object for our store, with the objects from our reducers.
// This is what we get when we use 'state' inside of 'mapStateToProps'
const rootReducer = combineReducers({
  errors, // contains registrationMessage and loginMessage
  user, // will have an id and username if someone is logged in
  searchResults, //contains search results from API
  bestSellers, //contains this weeks best sellers from the hardcover fiction list - from API
  bookshelves, //constains three arrays - one for each bookshelf. 
  //only contains the last 6 books added to each list
  openBookshelf, //contains three arrays - the entirety of each bookshelf
  bookDetails, //contains the book details for the book we've clicked on by its specific id
  bookNotes, //contains the note that we left for the book we've clicked on (we'll only
  //see notes when we're in detail view)
});

export default rootReducer;
