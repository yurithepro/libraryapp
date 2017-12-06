import React, { Component } from 'react';
import { View } from 'react-native';
import UserSearchRep from './UserSearchRep';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updateAdminFetchedUserDetails, updateAdminUserSearchResults } from '../../../actions';
import { searchUsers, getUserDetails } from '../../../Services';

class UserSearch extends Component {

	state = {
		query: '',
		loading: false
	}

	onPressUser(username) {
		debugger;
		getUserDetails(username).then(function(result) {
			this.props.updateAdminFetchedUserDetails(result);
		}.bind(this))
		.catch(function(err) {debugger;}.bind(this));

		this.props.navigation.navigate('UserDetails');

	}

	onChangeText(text) {
		debugger;
		this.setState({query: text});
		searchUsers(text).then(function(result) {
			this.props.updateAdminUserSearchResults(result);
		}.bind(this))
		.catch(function(err) {
			debugger;
		}.bind(this))
	}

	render() {
		return <UserSearchRep 
		query={this.state.query}
		loading={this.state.loading}
		onPressUser={this.onPressUser.bind(this)}
		onChangeText={this.onChangeText.bind(this)}
		data={this.props.adminUserSearchResults}
		/>;
	}
}

function mapStateToProps(state) {
	return {
		adminUserSearchResults: state.adminUserSearchResults
	};
}

function mapDispatchToProps(dispatch) {
	return {
		updateAdminUserSearchResults: bindActionCreators(updateAdminUserSearchResults, dispatch),
		updateAdminFetchedUserDetails: bindActionCreators(updateAdminFetchedUserDetails, dispatch)
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(UserSearch);