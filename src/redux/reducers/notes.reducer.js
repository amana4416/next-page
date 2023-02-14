//setting state as an object for now since i haven't worked on the GET route yet 
const notes = (state = {}, action) => {
    switch (action.type) {
        case 'SET_NOTES':
            return action.payload;
        default:
            return state;
    }
}

export default notes;