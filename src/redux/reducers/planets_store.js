import { FETCH_PLANET, NEXT_FETCH_PLANET } from '../actionsTypes';

const initialState = {
    list: [],
    next_uri: '',
    page : 1
}

export default (state=initialState, action) => {
    switch (action.type) {
        case FETCH_PLANET:
            return { ...state, list : action.list_result, next_uri : action.next_uri }
        case NEXT_FETCH_PLANET:
            return { ...state, list : state.list.concat(action.list_result) , next_uri : action.next_uri }
        default:
            return state;
    }
}