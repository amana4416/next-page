import { combineReducers } from "redux";

const currentlyReading = (state = [], action) => {
    switch (action.type) {
        case 'SET_CURRENTLY_READING':
            return action.payload;
        default: 
            return state;
    }
}

const wantToRead = (state = [], action) => {
    switch (action.type) {
        case 'SET_WANT_TO_READ':
            return action.payload;
        default: 
            return state;
    }
}


export default combineReducers({
    currentlyReading,
    wantToRead,
})