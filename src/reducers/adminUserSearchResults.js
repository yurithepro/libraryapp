import types from '../actions/actionTypes';

const initialState = [];

function adminUserSearchResults(state = initialState, action) {
	switch(action.type) {
		case types.updateAdminUserSearchResults:
			return Object.assign([], action.data);
			break;
		default: 
			return state;
			break;
	}
}

export default adminUserSearchResults;