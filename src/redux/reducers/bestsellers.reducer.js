//setting state as an array since server is sending us an array
const bestSellers = (state = [], action) => {
    switch (action.type) {
        case 'SET_BEST_SELLERS':
            return action.payload;
        default: 
            return state;
    }
}

export default bestSellers;