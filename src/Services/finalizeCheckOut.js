import { domain, init } from './Services';
import bookAvailable from './bookAvailable';

function finalizeCheckOut(username, isbn) {
	var url = domain + '/finalizeCheckOut' + '?username=' + encodeURI(username) + '&isbn=' + encodeURI(isbn); 
	return bookAvailable(isbn).then(function(result) {
		if(result)
			return fetch(url, init);
		else
			throw 'book unavailable';
	});
}

export default finalizeCheckOut;