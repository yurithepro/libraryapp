import { domain, init } from './Services';

function bookAvailable(isbn) {
	var url = domain + '/bookAvailable' + '?isbn=' + encodeURI(isbn); 
	return fetch(url, init).then(function(result) {
		return JSON.parse(result._bodyText);
	});
}

export default bookAvailable;