import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

//we want access to action.payload to send to the server so we'll give the 
//function action as a parameter
function* fetchBookDetails(action) {
    try {
        const bookId = action.payload;
        // console.log(bookId)
        //sending request to server
        const response = yield axios({
            method: 'GET',
            url: `/api/bookshelves/${bookId}`
        })
        yield put({
            type: 'SET_BOOK_DETAILS',
            payload: response.data
        })
    } catch (error) {
        console.log('error fetching book details', error)
    }
}

function* detailsSaga() {
    yield takeLatest('SAGA/FETCH_BOOK_DETAILS', fetchBookDetails);
}

export default detailsSaga;