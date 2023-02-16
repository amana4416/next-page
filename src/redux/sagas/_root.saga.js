import { all } from 'redux-saga/effects';
import loginSaga from './login.saga';
import registrationSaga from './registration.saga';
import userSaga from './user.saga';
import searchBooksSaga from './search.saga';
import bestSellersSaga from './bestSellers.saga';
import bookshelvesSaga from './bookshelves.saga';
import openBookshelvesSaga from './openBookshelves.saga';
import detailsSaga from './details.saga';
import addToBookshelfSaga from './addToBookshelf.saga';
import updateBookshelvesSaga from './updateBookshelves.saga';
import BookNotesSaga from './bookNotes.saga';

// rootSaga is the primary saga.
// It bundles up all of the other sagas so our project can use them.
// This is imported in index.js as rootSaga

// some sagas trigger other sagas, as an example
// the registration triggers a login
// and login triggers setting the user
export default function* rootSaga() {
  yield all([
    loginSaga(), // login saga is now registered
    registrationSaga(),
    userSaga(),
    searchBooksSaga(),
    bestSellersSaga(),
    bookshelvesSaga(),
    openBookshelvesSaga(),
    addToBookshelfSaga(),
    detailsSaga(),
    updateBookshelvesSaga(),
    BookNotesSaga()
  ]);
}
