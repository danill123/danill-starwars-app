import { FETCH_PLANET } from '../actionsTypes'

export const get_planets = () => {
    return async dispatch => {
        try {
            let uri = await fetch('https://swapi.dev/api/planets/');
            let data_parse = await uri.json()
            dispatch({ type: FETCH_PLANET, list_result : data_parse['results'], next_uri : data_parse['next'] })
        } catch (error) {
            // error handling
        }
    }
}

export const next_planets_data = (uri) => {
    return async dispatch => {
        try {
            let uri = await fetch(uri);
            let data_parse = await uri.json()
            dispatch({ type: FETCH_PLANET, list_result : data_parse['results'], next_uri : data_parse['next'] })
        } catch (error) {
            // error handling
        }
    }
}