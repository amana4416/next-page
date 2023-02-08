import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* fetchCurrentlyReading() {
    try {
        //sending request to server
        const response = yield axios({
            method: 'GET',
            //this route will get all the books marked as currently reading
            url: `/api/bookshelves/currently`
        })
    } catch {
        console.log('error fetching all books you are currently reading');
    }
}





function* openBookshelvesSaga() {
    yield takeLatest('SAGA/FETCH_ALL_CURRENTLY_READING', fetchCurrentlyReading);
}

export default openBookshelvesSaga;