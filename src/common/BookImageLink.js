import React, { Component } from 'react';
import { Image, ImageBackground, View, StyleSheet, TouchableOpacity } from 'react-native';
import { Container, Content, Spinner, Button, Text, Icon } from 'native-base';
import { fetchBook } from '../Services';
import { connect } from 'react-redux';

class BookImage extends Component {
	state = {
		loading: false,
	}

	componentWillMount() {
		debugger;
		if(this.props.book.source === undefined){
			debugger;
			fetchBook(this.props.book._id).then(function(response) {
				this.props.book.source = response.source;
				this.setState({});
				debugger;
			}.bind(this))
			.catch(function(err) {debugger;});
		}
		this.setState({});
	}

	
	renderImage() {
		debugger;
		if(this.state.loading) {
			return <Spinner />;
		} else {
			return (
				<ImageBackground 
					style={ 
						[
						styles.mainImage,
						this.props.larger ? styles.largerImage : styles.smallerImage,
						]
					}	
					/*
					onLoadStart={
						function(e) {
							this.setState({loading: true})
						}.bind(this)
					}
				
					onLoad={
						function(e) {
							this.setState({loading: false})
						}.bind(this)
					}
					onLoadEnd={
						function(e) {
							this.setState({loading: false})
						}.bind(this)
					}
					*/
					source={this.props.book.source} 
					resizeMode={'contain'}
				>
				</ImageBackground>
			);
		}
	}

	render() {
		return (
			<TouchableOpacity
				onPress={
					function() {this.props.onPress(this.props.book._id)}.bind(this)
				}
				style={ 
					[
						{flexDirection: 'row'},
						this.props.larger ? styles.larger : styles.smaller
					] 
				}
			>
				{this.renderImage()}
			</TouchableOpacity>
		);
	}
}

const styles = StyleSheet.create({	
	mainImage: {
		flex: 0,
		paddingLeft: 40,
		paddingRight: 40,
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center'
	},
	larger: {

	},
	smaller: {
	},
	largerImage: {
		height: 400,
		width: 300
	},
	smallerImage: {
		height: 130,
		width: 100
	},
	overlayButton: {
	},
	buttonText: {
		//fontSize: 34
	},
	icon: {
		fontSize: 120,
		color: '#222'
	}

});


function mapStatetoProps(state, ownProps) {
	for(var book in state.checkedOut) {
		if(book.isbn === ownProps.book.isbn)
			return ({expiry: book.expiry});
	}
	for(var book in state.requests) {
		if(book.isbn === ownProps.book.isbn)
			return ({requested: true});
	}
	return {expiry: undefined, requested: false};
}

export default connect(mapStatetoProps)(BookImage);