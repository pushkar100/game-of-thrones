import iceAndFire from '../apis/iceAndFire';

export const fetchBooks = (page = 1) => {
	return async (dispatch, getState) => {
		let response;
		if(_memoizeFetchBooks[page]) {
			response = _memoizeFetchBooks[page];
		} else {
			response = await iceAndFire.get('/books', {
				params: { page }
			});
			_memoizeFetchBooks[page] = response;
		}

		dispatch({
			type: 'FETCH_BOOKS',
			payload: {
				data: response.data,
				pageData: [ 
					page, // Page #
					/rel="prev"/.test(response.headers.link), // Prev page ? 
					/rel="next"/.test(response.headers.link) // Next page ?
				]
			}
		});
	};
}
const _memoizeFetchBooks = {};

export const fetchCharacters = (page = 1) => {
	return async (dispatch, getState) => {
		let response;
		if(_memoizeFetchCharacters[page]) {
			response = _memoizeFetchCharacters[page];
		} else {
			response = await iceAndFire.get('/characters', {
				params: { page }
			});
			_memoizeFetchCharacters[page] = response;
		}

		dispatch({
			type: 'FETCH_CHARACTERS',
			payload: {
				data: response.data,
				pageData: [ 
					page, // Page #
					/rel="prev"/.test(response.headers.link), // Prev page ? 
					/rel="next"/.test(response.headers.link) // Next page ?
				]
			}
		});
	};
}
const _memoizeFetchCharacters = {};

export const fetchHouses = (page = 1) => {
	return async (dispatch, getState) => {
		let response;
		if(_memoizeFetchHouses[page]) {
			response = _memoizeFetchHouses[page];
		} else {
			response = await iceAndFire.get('/houses', {
				params: { page }
			});
			_memoizeFetchHouses[page] = response;
		}

		dispatch({
			type: 'FETCH_HOUSES',
			payload: {
				data: response.data,
				pageData: [ 
					page, // Page #
					/rel="prev"/.test(response.headers.link), // Prev page ?
					/rel="next"/.test(response.headers.link) // Next page ?
				]
			}
		});
	};
}
const _memoizeFetchHouses = {};