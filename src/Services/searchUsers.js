import { domain, init } from './Services';

function searchUsers(query) {
	var url = domain + '/searchUsers' + '?q=' + encodeURI(query); 
	return fetch(url, init).then(function(response) {return JSON.parse(response._bodyText);});
}

export default searchUsers;