import React, { Component } from 'react';
import { View, StyleSheet, Image, TouchableOpacity, Share } from 'react-native';
import { Card, CardItem, Body, Text, Button, Thumbnail, Icon, Spinner } from 'native-base';
import TitleButton from './TitleButton';
import BookImage from '../../common/BookImage';
import BookImageWithoutButton from '../../common/BookImageWithoutButton';
import BookList from '../../common/BookList';



class Main extends Component {
	state = {
		showDescription: false,
		animating: false
	};

	titleOnPress() {
		this.setState({showDescription: !this.state.showDescription});
	}




	renderBook() {
		if(!this.state.showDescription) {
			return (
				<View style={styles.mainBookContainer}>
					<BookImage larger book={this.props.mainBook} 
					onPressRequested={this.props.onPressRequested.bind(this)} 
					onPressCheckOut={this.props.onPressCheckOut.bind(this)}
					/>
				</View>
			);
		}
	}

	renderTitle() {
		debugger;
		if(this.state.animating) {

		} else if(this.state.showDescription) {
			return (
				<View 
					style={
						[
						styles.titleButton,
						{

							marginTop: 10
						}
						]
					}
				>
					<TitleButton bigTitle={this.props.mainBook.title} smallTitle={this.props.mainBook.author} onPress={this.titleOnPress.bind(this)} />
				</View>
			);


		} else {
			return (
				<View style={styles.titleButton}>
					<TitleButton bigTitle={this.props.mainBook.title} smallTitle={this.props.mainBook.author} onPress={this.titleOnPress.bind(this)} />
				</View>
			);
		}
	}

	renderIcon() {
		if(!this.state.showDescription || this.state.animating) {
			return (
				<View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'flex-start', marginTop: 15}}>
					<Icon name={this.props.mainBook.miniIcon} style={{color: this.props.mainBook.color, fontSize: 34}}/>
				</View>
			);
		}
	}

	renderDescription() {
		if(this.state.showDescription && !this.state.animating) {
			return (
			<View style={{flexDirection: 'row', marginLeft: 40, marginRight: 40, marginTop: 10}}>
				<Card style={styles.descriptionCard}>
					<CardItem>
						<Text>
							Description
						</Text>
					</CardItem>
				
					<CardItem style={{marginBottom: 8}}>
						<Body>
							<Text>
								{this.props.mainBook.description}
							</Text>
						</Body>
					</CardItem>
				</Card>
			</View>
			);
		}
	}

	share() {
		Share.share({message: 'I really enjoyed ' + this.props.mainBook.author + "'s " + this.props.mainBook.title + '\n(found in LibRary)', title: 'Interesting Book Found:'}, {dialogBox: 'Interesting Book Found?'});
	}

	renderSocial() {
		if(this.state.showDescription && !this.state.animating) {
			return (
				<View style={{flexDirection: 'row', marginLeft: 40, marginRight: 40, marginTop: 10}}>
					<Card>
						<CardItem style={{justifyContent: 'space-around'}} header>
							<TouchableOpacity onPress={this.share.bind(this)}>
								<Thumbnail small source={require('../../../res/facebook.jpeg')} />
							</TouchableOpacity>
							
							<TouchableOpacity onPress={this.share.bind(this)}>
								<Thumbnail small source={require('../../../res/reddit.png')} />
							</TouchableOpacity>

							<TouchableOpacity onPress={this.share.bind(this)}>
								<Thumbnail small source={require('../../../res/twitter.png')} />
							</TouchableOpacity>
						</CardItem>
					</Card>
				</View>
			);
		}
	}
	/*
	<BookList
		bookOne={{uri: 'https://img.cinemablend.com/cb/0/9/4/6/d/6/0946d6e3a7f24c710cd1ad79a0b3145c9026823ec1b79293abafe55a2a6f0ce7.jpg'}}
		bookTwo={{uri: 'https://images-na.ssl-images-amazon.com/images/I/51McQ%2Bsk2cL._SX424_BO1,204,203,200_.jpg'}}
		bookThree={{uri: 'https://images-na.ssl-images-amazon.com/images/I/81VAlQ7N1oL.jpg'}}
	/>	
	*/	


	renderSuggestions() {
		debugger;
		if(this.state.showDescription && !this.state.animating) {
			return (
				<View style={{flex: 1, flexDirection: 'row', justifyContent: 'center', marginTop: 15, marginBottom: 40}}>
					<BookImageWithoutButton source={this.props.mainBook.suggestions[0].source} 
											onPress={function() {this.props.onSuggestionPress(this.props.mainBook.suggestions[0]._id)}.bind(this)}/>
					<BookImageWithoutButton source={this.props.mainBook.suggestions[1].source} 
											onPress={function() {this.props.onSuggestionPress(this.props.mainBook.suggestions[1]._id)}.bind(this)}/>
					<BookImageWithoutButton source={this.props.mainBook.suggestions[2].source} 
											onPress={function() {this.props.onSuggestionPress(this.props.mainBook.suggestions[2]._id)}.bind(this)}/>
				</View>
			);
		}
	}

	renderReady() {
		return (
			<View style={styles.component}>
				{this.renderBook()}
				{this.renderTitle()}
				{this.renderIcon()}
				{this.renderDescription()}
				{this.renderSocial()}
				{this.renderSuggestions()}
			</View>
		);	
	}

	shouldRenderLoading() {
		if(this.props.loading)
			return <Spinner />;
		else 
			return this.renderReady();
	}

	render() {
		return this.shouldRenderLoading();
	}
}

const styles = StyleSheet.create({
	component: {
		flexDirection: 'column',
		justifyContent: 'flex-start',
		alignItems: 'center',
		flex: 1,
	},
	mainBookContainer: {
		flexDirection: 'column',
		justifyContent: 'flex-end',
		alignItems: 'center',
		marginTop: 20,
		marginLeft: 30,
		marginRight: 30,
	},
	mainBook: {
		width: null,
		height: 200,
	},
	titleButton: {
		flexDirection: 'column',
		justifyContent: 'flex-start',
		alignItems: 'center',
		marginLeft: 10,
		marginRight: 10
	},
	descriptionCard: {

	}
});

export default Main;