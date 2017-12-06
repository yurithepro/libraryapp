import types from '../actions/actionTypes';

const initialState = [];

function checkedOut(state = initialState, action) {
	switch(action.type) {
		case types.updateCheckedOut:
			return Object.assign([], action.data);
			break;
		default: 
			return state;
			break;
	}
}

export default checkedOut;