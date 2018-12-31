import { combineReducers } from 'redux';
import booksReducer from './booksReducer';
import charactersReducer from './charactersReducer';
import housesReducer from './housesReducer';

export default combineReducers({
	books: booksReducer,
	characters: charactersReducer,
	houses: housesReducer
});