import { domain, init } from './Services';


/*
function updateRequestList(username, isbn) {
	return connect()
		.then(function(db) {
			return db.collection('requestList').update({ username }, {"$push": {books: isbn}}, {w: 1, upsert: true});
		});
}

function checkIfOwned(username, isbn) {
	return connect()
		.then(function(db) {
			return db.collection('checkedOutList').findOne({ username }, {_id: 0, books: 1})
				.then(function(response) {
					db.close();
					if(response.books)
						;
					else return;

					if(response.books.length === 3)
						throw 'check out slots filled';
					for(var id in response.books) {
						if(isbn === id)
							throw 'already owned';
					}
					return;
				});
		})
}

function checkIfRequesting(username, isbn) {
	return connect()
		.then(function(db) {
			return db.collection('requestList').findOne({ username }, { _id: 0, books: 1})
				.then(function(response) {
					db.close();
					if(response.books)
						;
					else return;

					if(response.books.length === 3)
						throw 'request slots filled';
					for(var id in response.books) {
						if(isbn === id)
							throw 'already requesting';
					}
					return;
				});
		});
}

function checkIfAvailable(isbn) {
	return connect()
		.then(function(db) {
			return db.collection('bookList').findOne({_id: isbn}, { available: 1 })
				.then(function(response) {
					if(response.available > 0)
						return;
					else
						throw 'book unavailable';
				});
		})

}

*/
//avoiding promise hell

function requestCheckOut(id, isbn) {
	
	var url = domain + '/requestCheckOut' + '?username=' + id + '&isbn=' + isbn;
	return fetch(url, init);

	/*
	return (
		checkIfAvailable(isbn).then(function() {
			return checkIfRequesting(id, isbn).then(function() {
				return checkIfOwned(id, isbn).then(function() {
					return updateRequestList(id, isbn);
				})
			})
		})
	);
	*/
}

export default requestCheckOut;