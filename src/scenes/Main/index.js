import React, { Component } from 'react';
import { View } from 'react-native';
import MainRepresentational from './MainRepresentational';
import { connect } from 'react-redux';
import { fetchBook, getRandomBook, requestCheckOut, getRequested, cancelRequest } from '../../Services';
import { updateFetchedData, updateRequests } from '../../actions';
import { bindActionCreators } from 'redux';
import { Spinner } from 'native-base';
import { NavigationActions } from 'react-navigation';


class Main extends Component {
	state = {
		loading: false
	}

	componentWillMount() {
		

	}

	onSuggestionPress(id) {
		debugger;
		this.setState({loading: true});

		fetchBook(id).then(function(response) {
			debugger;
			this.props.updateFetchedData(response);
			debugger;
			/*
			const resetAction = NavigationActions.reset({
    			index: 0,
    			actions: [NavigationActions.navigate({ routeName: 'Main' })]
    		});
			this.props.navigation.dispatch(resetAction);
			*/
			this.setState({loading: false});
			debugger;
		}.bind(this))
		.catch(function(err) {
			debugger;
			this.setState({loading: false});
		}.bind(this));
		
	}

	onPressCheckOut() {
		//create Request
		//refetch requested
		debugger;
		this.setState({loading: true});
		var { username } = this.props.credentials;
		var { _id } = this.props.fetchedData;

		requestCheckOut(username, _id).then(function() {
			return getRequested(username).then(function(result) {
				this.props.updateRequests(result);
				this.setState({loading: false});
			}.bind(this));
		}.bind(this))
		.catch(function(err) {
			this.setState({loading: false});
		}.bind(this));

	}

	onPressRequested() {
		//Cancel Request
		//refetch requested
		debugger;
		this.setState({loading: true});
		var { username } = this.props.credentials;
		var { _id } = this.props.fetchedData;

		cancelRequest(username, _id).then(function() {
			return getRequested(username).then(function(result) {
				this.props.updateRequests(result);
				this.setState({loading: false});
			}.bind(this));
		}.bind(this))
		.catch(function(err) {
			this.setState({loading: false});
		}.bind(this));


	}

	renderBook(book) {

		debugger;
		return <MainRepresentational

			//mainBook={this.props.fetchedData}
			//firstSugg={this.props.fetchedData.suggestions[0]}
			
			mainBook={book}
			onSuggestionPress={this.onSuggestionPress.bind(this)}
			onPressRequested={this.onPressRequested.bind(this)}
			onPressCheckOut={this.onPressCheckOut.bind(this)}
			loading={this.state.loading}
			/*
			mainBook=
			{
				{
					title: 'CAT IN THE HAT',
					author: 'Dr. Suess', 
					description: "Conrad and Sally Walden (Spencer Breslin and Dakota Fanning) are home alone with their pet fish. It is raining outside, and there is nothing to do. Until The Cat in the Hat ('Mike Myers') walks in the front door.",
					miniIcon: 'bulb',
					color: '#e6e600',
					source: {
						uri: 'http://www.nashvilleparent.com/wp-content/uploads/2013/02/cat-in-the-hat-book-cover.jpg'
					},
					suggestions: [
						{uri: 'https://media1.britannica.com/eb-media/16/187816-004-9330460F.jpg'},
						{uri: 'https://images-na.ssl-images-amazon.com/images/I/51YYB0519AL.jpg'},
						{uri: 'https://www.pearsonhighered.com/assets/bigcovers/0/1/3/0/013034074X.jpg'}
					]
				}
			}
			*/
		
		/>;
	}

	decideRender() {
		if(this.state.loading)
			return <Spinner />;
		else 
		 	return this.renderBook(this.props.fetchedData);
	}

	render() {
		return this.decideRender();
	}

	/*
	shouldComponentUpdate(nextProps, nextState) {
		return true;
	}
	*/

	

}

function mapStateToProps(state, ownProps) {
	return {
		fetchedData: state.fetchedData,
		credentials: state.credentials,
		requests: state.requests
	};
}

function mapDispatchToProps(dispatch) {
	return {
		updateFetchedData: bindActionCreators(updateFetchedData, dispatch),
		updateRequests: bindActionCreators(updateRequests, dispatch)
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);