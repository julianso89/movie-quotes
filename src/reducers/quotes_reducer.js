import types from "../actions/types";

const DEFAULT_STATE = {
    movie: ''
};

export default (state = DEFAULT_STATE, action) => {
    switch (action.type) {
        case types.GET_QUOTE:
            return {
                movie : action.quote
            };
        default:
            return state;
    }
};
