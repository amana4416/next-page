import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

//we want to use action.payload in our function, so we need to give 'action'as a parameter
function* searchBooks(action) {
    try {
        const search = action.payload;
        console.log('here is what we are searching:', search);
        //sending get request to server
        const response = yield axios({
            method: 'GET',
            url: `/api/search/${search}`
        })
        //now we send our response from server to redux for storage
        yield put({
            type: 'SET_SEARCH_RESULTS',
            payload: response.data
        })
    } catch (error) {
        console.log('could not find', error);
    }
}

function* searchBooksSaga() {
    yield takeLatest('SAGA/SEARCH_BOOKS', searchBooks);
}

export default searchBooksSaga;