import { combineReducers } from "redux";

const lastCurrentlyReading = (state = [], action) => {
    switch (action.type) {
        case 'SET_LAST_CURRENTLY_READING':
            return action.payload;
        default: 
            return state;
    }
}

const lastWantToRead = (state = [], action) => {
    switch (action.type) {
        case 'SET_LAST_WANT_TO_READ':
            return action.payload;
        default: 
            return state;
    }
}

const lastFinishedReading = (state = [], action) => {
    switch (action.type) {
        case 'SET_LAST_FINISHED_READING':
            return action.payload
        default:
            return state
    }
}


export default combineReducers({
    lastCurrentlyReading,
    lastWantToRead,
    lastFinishedReading
})