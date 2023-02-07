import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* fetchLastCurrentlyReading() {
    try {
        //sending request to server
        const response = yield axios({
            method: 'GET',
            //currently reading get route in the bookshelves router
            url: `/api/bookshelves/currently/last`
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

function* fetchLastWantToRead() {
    try {
        //sending request to server
        const response = yield axios({
            method: 'GET',
            url: `/api/bookshelves/want/last`
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

function* fetchLastFinishedReading() {
    try {
        //sending request to server
        const response = yield axios({
            method: 'GET',
            url: `/api/bookshelves/finished/last`
        })
        //store books in a reducer
        yield put({
            type: 'SET_FINISHED_READING',
            payload: response.data
        })
    } catch {
        console.log('error fetching books you finished reading');
    }
}

function* bookshelvesSaga() {
    yield takeLatest('SAGA/FETCH_CURRENTLY_READING', fetchLastCurrentlyReading);
    yield takeLatest('SAGA/FETCH_WANT_TO_READ', fetchLastWantToRead);
    yield takeLatest('SAGA/FETCH_FINISHED_READING', fetchLastFinishedReading);
}

export default bookshelvesSaga;