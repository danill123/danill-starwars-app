import { FETCH_STARSHIPS, NEXT_FETCH_STARSHIPS, PARSING_HTTP_TO_HTTPS } from '../actionsTypes'

export const get_starships = () => {
    return async dispatch => {
        try {
            let uri = await fetch('https://swapi.dev/api/starships/');
            let data_parse = await uri.json()
            dispatch({ type: FETCH_STARSHIPS, list_result : data_parse['results'], next_uri : PARSING_HTTP_TO_HTTPS(data_parse['next']) })
        } catch (error) {
            // error handling
        }
    }
}

export const next_starships_data = (uri) => {
    return async dispatch => {
        try {
            let url = await fetch(uri);
            let data_parse = await url.json()
            dispatch({ type: NEXT_FETCH_STARSHIPS, list_result : data_parse['results'], next_uri : PARSING_HTTP_TO_HTTPS(data_parse['next']) })
        } catch (error) {
            // error handling
        }
    }
}