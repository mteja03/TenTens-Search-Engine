export const initialState = {
    term: null,
};

export const actionTypes = {
    SET_SEARCH_TEAM: "SET_SEARCH_TEAM",
};


const reducer = (state, action) => {
    console.log(action);
    switch (action.type) {
        case actionTypes.SET_SEARCH_TEAM:
            return {
                ...state,
                term: action.term,
            };
        default:
            return state;
    }
};

export default reducer;