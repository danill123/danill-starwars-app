import people_store from './reducers/people_store';
import { combineReducers } from 'redux'

export default combineReducers({
    people : people_store
})