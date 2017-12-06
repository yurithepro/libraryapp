import { domain, init } from './Services';

function getUserDetails(username) {
	var url = domain + '/getUserDetails' + '?username=' + encodeURI(username); 
	return fetch(url, init).then(function(response) {return JSON.parse(response._bodyText);});
}

export default getUserDetails;