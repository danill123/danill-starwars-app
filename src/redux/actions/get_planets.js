import { FETCH_PLANET, NEXT_FETCH_PLANET  } from '../actionsTypes'

export const get_planets = () => {
    return async dispatch => {
        try {
            let uri = await fetch('https://swapi.dev/api/planets/');
            let data_parse = await uri.json()
            dispatch({ type: FETCH_PLANET, list_result : data_parse['results'], next_uri : data_parse['next'] ? data_parse['next'] : null })
        } catch (error) {
            // error handling
        }
    }
}

export const next_planets_data = (url) => {
    return async dispatch => {
        try {
            let uri = await fetch(`${url}`, {mode: 'cors'});
            let data_parse = await uri.json()
            dispatch({ type: NEXT_FETCH_PLANET, list_result : data_parse['results'], next_uri : data_parse['next'] ? data_parse['next'] : null })
        } catch (error) {
            // error handling
        }
    }
}