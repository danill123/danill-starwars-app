export const FETCH_PEOPLE = "FETCH_PEOPLE"
export const NEXT_FETCH_PEOPLE = "NEXT_FETCH_PEOPLE"
export const ERROR_FETCH_PEOPE = "ERROR_FETCH_PEOPE"
export const FETCH_PLANET = "FETCH_PLANET"
export const NEXT_FETCH_PLANET = "NEXT_FETCH_PLANET"
export const ERROR_FETCH_PLANET = "ERROR_FETCH_PLANET"
export const FETCH_SPECIES = "FETCH_SPECIES"
export const NEXT_FETCH_SPECIES = "NEXT_FETCH_SPECIES"
export const ERROR_FETCH_SPECIES = "ERROR_FETCH_SPECIES"
export const FETCH_STARSHIPS = "FETCH_STARSHIPS"
export const NEXT_FETCH_STARSHIPS = "NEXT_FETCH_STARSHIPS";
export const ERROR_FETCH_STARSHIPS = "ERROR_FETCH_STARSHIPS"
export const PARSING_HTTP_TO_HTTPS = () => {
    let url = "http://swapi.dev/api/starships";
    let secure_str = "s";
    let position = 4;
    return [url.slice(0, position), secure_str, url.slice(position)].join('');
}