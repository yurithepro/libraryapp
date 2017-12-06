import React, { Component } from 'react';
import { View } from 'react-native';
import BookImage from './BookImage';

class BookList extends Component {
	

	renderBook(book) {
		if(book) {
			return (
				<View style={{flexDirection: 'row'}}>
					<BookImage source={book} />
				</View>	
			);
		}
	}

	renderBookList() {
		return (
			<View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-around', alignItems: 'flex-end'}}>
				{
					this.renderBook(this.props.bookOne)
				}
				{
					this.renderBook(this.props.bookTwo)
				}
				{
					this.renderBook(this.props.bookThree)
				}
				
			</View>
		);
	}

	render() {
		return this.renderBookList();
	}	
}

export default BookList;
