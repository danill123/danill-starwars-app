import people_store from './reducers/people_store';
import planets_store from './reducers/planets_store';
import species_store from './reducers/species_store';
import { combineReducers } from 'redux'

export default combineReducers({
    people : people_store,
    planets : planets_store,
    species : species_store
})