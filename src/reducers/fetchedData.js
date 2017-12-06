import types from '../actions/actionTypes';

const initialState = {
	_id: '',
	title: '',
	author: '',
	description: '',
	source: {uri: ''},
	miniIcon: '',
	color: '',
	available: 0,
};
		
	

function fetchedData(state = initialState, action) {
	switch(action.type) {
		case types.updateFetchedData:
			debugger;
			return Object.assign({}, action.data);
			break;
		default: 
			return state;
			break;
	}
	debugger;
}

export default fetchedData;