import { COUNTRIES_DATA_CHANGED, COUNTRIES_FETCHING_CHANGED } from '../types';

const initialState = {
    countries: [],
    isFetching: false,
};

const sports = (state = initialState, action) => {
    const { payload } = action;

    switch (action.type) {
        case COUNTRIES_DATA_CHANGED: {
            return {
                ...state,
                countries: payload,
            };
        }
        case COUNTRIES_FETCHING_CHANGED: {
            return {
                ...state,
                isFetching: payload,
            };
        }
        default:
            return state;
    }
};

export default sports;
