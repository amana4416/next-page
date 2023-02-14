import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

//we need access to action.payload in our 
function* addToBookshelf(action) {
    try {
        const newBook = action.payload
        console.log(newBook)
        //sending request to server
        const response = yield axios({
            method: 'POST',
            url: '/api/bookshelves',
            data: {
                book_title: newBook.book_title,
                book_author: newBook.book_author,
                book_cover: newBook.book_cover,
                book_description: newBook.book_description,
                bookshelf: newBook.bookshelf,
                user_id: newBook.user_id
            }
        })
    } catch (error) {
        console.log('error in addToBookshelf', error);
    }
}

function* addToBookshelfSaga() {
    yield takeLatest('SAGA/ADD_TO_BOOKSHELF', addToBookshelf);
}

export default addToBookshelfSaga;