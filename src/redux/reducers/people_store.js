import { FETCH_PEOPLE } from '../actionsTypes';

const initialState = {
    list: [],
    next_uri: ''
}

export default (state=initialState, action) => {
    switch (action.type) {
        case FETCH_PEOPLE:
            return { ...state, list : action.list_result, next_uri : action.next_uri }
        default:
            return state;
    }
}