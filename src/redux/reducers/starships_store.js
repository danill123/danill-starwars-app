import { FETCH_STARSHIPS, NEXT_FETCH_STARSHIPS } from '../actionsTypes';

const initialState = {
    list: [],
    next_uri: ''
}

export default (state=initialState, action) => {
    switch (action.type) {
        case FETCH_STARSHIPS:
            return { ...state, list : action.list_result, next_uri : action.next_uri }
        case NEXT_FETCH_STARSHIPS:
            return { ...state, list : state.list.concat(action.list_result) , next_uri : action.next_uri }
        default:
            return state;
    }
}