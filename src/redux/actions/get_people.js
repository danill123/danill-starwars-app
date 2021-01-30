import { FETCH_PEOPLE, NEXT_FETCH_PEOPLE, PARSING_HTTP_TO_HTTPS } from '../actionsTypes'

export const get_people = () => {
    return async dispatch => {
        try {
            let uri = await fetch('https://swapi.dev/api/people/');
            let data_parse = await uri.json()
            dispatch({ type: FETCH_PEOPLE, list_result : data_parse['results'], next_uri : PARSING_HTTP_TO_HTTPS(data_parse['next']) })
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
            dispatch({ type: NEXT_FETCH_PEOPLE, list_result : data_parse['results'], next_uri : PARSING_HTTP_TO_HTTPS(data_parse['next']) })
        } catch (error) {
            // error handling
        }
    }
}