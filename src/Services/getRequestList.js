import { domain, init } from './Services';

function getRequestList() {
	var url = domain + '/getRequestList'; 
	return fetch(url, init).then(function(response) {return JSON.parse(response._bodyText);});
}

export default getRequestList;