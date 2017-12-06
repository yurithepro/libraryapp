import { domain, init } from './Services';

function cancelRequest(id, isbn) {
	var url = domain + '/cancelRequest' + '?username=' + id + '&isbn=' + isbn;
	return fetch(url, init);
}

export default cancelRequest;