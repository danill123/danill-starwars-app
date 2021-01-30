import { FETCH_SPECIES, NEXT_FETCH_SPECIES } from '../actionsTypes'

export const get_species = () => {
    return async dispatch => {
        try {
            let uri = await fetch('https://swapi.dev/api/species/');
            let data_parse = await uri.json()
            dispatch({ type: FETCH_SPECIES, list_result : data_parse['results'], next_uri : data_parse['next'] ? data_parse['next'] : null})
        } catch (error) {
            // error handling
        }
    }
}

export const next_species_data = (uri) => {
    return async dispatch => {
        try {
            let url = await fetch(uri);
            let data_parse = await url.json()
            dispatch({ type: NEXT_FETCH_SPECIES, list_result : data_parse['results'], next_uri : data_parse['next'] ? data_parse['next'] : null })
        } catch (error) {
            // error handling
        }
    }
}