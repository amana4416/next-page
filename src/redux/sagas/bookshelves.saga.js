import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* fetchCurrentlyReading() {
    try {
        //sending request to server
        const response = yield axios({
            method: 'GET',
            //currently reading get route in the bookshelves router
            url: `/api/bookshelves/currently`
        })
        //store books in a reducer
        yield put({
            type: 'SET_CURRENTLY_READING',
            payload: response.data
        })
    } catch {
        console.log('error fetching books you are currently reading');
    }
}

function* fetchWantToRead() {
    try {
        //sending request to server
        const response = yield axios({
            method: 'GET',
            url: `/api/bookshelves/want`
        })
        //store books in a reducer
        yield put({
            type: 'SET_WANT_TO_READ',
            payload: response.data
        })
    } catch {
        console.log('error fetching books you want to read');
    }
}

function* fetchFinishedReading() {
    try {
        //sending request to server
        const response = yield axios({
            method: 'GET',
            url: `/api/bookshelves/finished`
        })
        //store books in a reducer
        yield put({
            
        })
    } catch {
        console.log('error fetching books you finished reading');
    }
}

function* bookshelvesSaga() {
    yield takeLatest('SAGA/FETCH_CURRENTLY_READING', fetchCurrentlyReading);
    yield takeLatest('SAGA/FETCH_WANT_TO_READ', fetchWantToRead);
    yield takeLatest('SAGA/FETCH_FINISHED_READING', fetchFinishedReading);
}

export default bookshelvesSaga;