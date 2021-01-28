import { FETCH_PEOPLE } from '../actionsTypes'

export const get_people = () => {
    return async dispatch => {
        try {
            let uri = await fetch('https://swapi.dev/api/people/');
            let data_parse = await uri.json()
            dispatch({ type: FETCH_PEOPLE, list_result : data_parse['results'], next_uri : data_parse['next'] })
        } catch (error) {
            // error handling
        }
    }
}

export const next_people_data = (uri) => {
    return async dispatch => {
        try {
            let uri = await fetch(uri);
            let data_parse = await uri.json()
            dispatch({ type: FETCH_PEOPLE, list_result : data_parse['results'], next_uri : data_parse['next'] })
        } catch (error) {
            // error handling
        }
    }
}