import { FETCH_PLANET, NEXT_FETCH_PLANET, PARSING_HTTP_TO_HTTPS } from '../actionsTypes';

const initialState = {
    list: [],
    next_uri: '',
    page : 1
}

export default (state=initialState, action) => {
    switch (action.type) {
        case FETCH_PLANET:
            return { ...state, list : action.list_result, next_uri : PARSING_HTTP_TO_HTTPS(action.next_uri) }
        case NEXT_FETCH_PLANET:
            return { ...state, list : state.list.concat(action.list_result) , next_uri : PARSING_HTTP_TO_HTTPS(action.next_uri) }
        default:
            return state;
    }
}