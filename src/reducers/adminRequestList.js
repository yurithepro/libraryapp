import types from '../actions/actionTypes';

const initialState = [];

function adminRequestList(state = initialState, action) {
	switch(action.type) {
		case types.updateAdminRequestList:
			return Object.assign([], action.data);
			break;
		default: 
			return state;
			break;
	}
}

export default adminRequestList;