import React, { Component } from 'react';
import { View } from 'react-native';
import SearchRepresentational from './SearchRepresentational';
import { updateSearchResults, updateFetchedData } from '../../actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { search, fetchBook } from '../../Services';

class Search extends Component {
	state = {
		query: '',
	}

	

	onChangeText(text) {
		debugger;
		this.setState({query: text});
		search(text).then(function(response) {
			debugger;
			this.props.updateSearchResults(response);
			debugger;
		}.bind(this)).catch(function(err) {debugger;});
	}

	onPressItem(id) {
		fetchBook(id).then(function(response) {
			this.props.updateFetchedData(response);
		
		}.bind(this)).catch(function(err) {
			debugger;
		});
		debugger;
		this.props.navigation.navigate('Main');	
	}

	render() {
		debugger;
		return <SearchRepresentational query={this.state.query} 
		data={this.props.searchResults}
		onChangeText={this.onChangeText.bind(this)} 
		onPressItem={this.onPressItem.bind(this)}
		/>;
	}
}

function mapStateToProps(state, ownProps) {
	return {
		searchResults: state.searchResults
	};
}

function mapDispatchToProps(dispatch) {
	return {
		updateSearchResults: bindActionCreators(updateSearchResults, dispatch),
		updateFetchedData: bindActionCreators(updateFetchedData, dispatch)
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);