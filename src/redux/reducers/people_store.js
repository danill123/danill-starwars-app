import { FETCH_PEOPLE, NEXT_FETCH_PEOPLE } from '../actionsTypes';

const initialState = {
    list: [],
    next_uri: '',
    page : 1
}

export default (state=initialState, action) => {
    switch (action.type) {
        case FETCH_PEOPLE:
            return { ...state, list : action.list_result, next_uri : action.next_uri }
        case NEXT_FETCH_PEOPLE:
            return { ...state, list : state.list.concat(action.list_result), next_uri : action.next_uri }
        default:
            return state;
    }
}