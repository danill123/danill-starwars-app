import { FETCH_PEOPLE, NEXT_FETCH_PEOPLE } from '../actionsTypes'

export const get_people = (page) => {
    return async dispatch => {
        try {
            let uri = await fetch(`https://swapi.dev/api/people/?page=${page}`);
            let data_parse = await uri.json()
            dispatch({ type: FETCH_PEOPLE, list_result : data_parse['results'], next_uri : data_parse['next'] ? data_parse['next'] : null })
        } catch (error) {
            // error handling
        }
    }
}

export const next_people_data = (url) => {
    return async dispatch => {
        try {
            let uri = await fetch(url);
            let data_parse = await uri.json()
            dispatch({ type: NEXT_FETCH_PEOPLE, list_result : data_parse['results'], next_uri : data_parse['next'] })
        } catch (error) {
            // error handling
        }
    }
}