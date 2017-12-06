import types from './actionTypes';

export function updateCredentials(payload) {
	return {type: types.updateCredentials, payload: payload};
}

export const updateRequests = data => {
	return {type: types.updateRequests, data: data};
}

export const updateCheckedOut = (data)  => {
	return {type: types.updateCheckedOut, data: data};
}

export const updateSearchResults = data => {
	return {type: types.updateSearchResults, data: data};
}

export const updateFetchedData = data => {
	return {type: types.updateFetchedData, data: data};
}

export const updateAdminUserSearchResults = data => {
	return {type: types.updateAdminUserSearchResults, data: data};
}

export const updateAdminFetchedUserDetails = data => {
	return {type: types.updateAdminFetchedUserDetails, data: data};
}

export const updateAdminRequestList = data => {
	return {type: types.updateAdminRequestList, data: data}
}