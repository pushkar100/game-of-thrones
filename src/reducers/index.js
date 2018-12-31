import { combineReducers } from 'redux';
import booksReducer from './booksReducer';
import charactersReducer from './charactersReducer';
import housesReducer from './housesReducer';
import bookDetailsReducer from './bookDetailsReducer';
import characterDetailsReducer from './characterDetailsReducer';
import houseDetailsReducer from './houseDetailsReducer';

export default combineReducers({
	books: booksReducer,
	characters: charactersReducer,
	houses: housesReducer,
	bookDetails: bookDetailsReducer,
	characterDetails: characterDetailsReducer,
	houseDetails: houseDetailsReducer
});