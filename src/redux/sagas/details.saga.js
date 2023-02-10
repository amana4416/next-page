import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* fetchBookDetails() {
    try {
        //sending request to server
        const response = yield axios({
            method: 'GET'
        })

    } catch (error) {
        console.log('error fetching book details', error)
    }
}




function* detailsSaga() {
    yield takeLatest('SAGA/FETCH_BOOK_DETAILS', fetchBookDetails);
}

export default detailsSaga;