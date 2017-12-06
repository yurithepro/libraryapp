import React, { Component } from 'react';
import { View, Alert } from 'react-native';
import UserDetailsRep from './UserDetailsRep';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getUserDetails, returnBook } from '../../../Services';
import { updateAdminFetchedUserDetails } from '../../../actions';

class UserDetails extends Component {

	state={
		refreshing: false
	}


	returnBook(username, isbn) {
		this.setState({refreshing: true});
		returnBook(username, isbn).then(function(result) {
			this.onRefresh();
		}.bind(this))
		.catch(function(err) {
			this.setState({refreshing: false});
			debugger;
		}.bind(this));
	}

	onPressCheckedOut(username, isbn) {
		Alert.alert(
			'Check In',
			'Verify return with book id ' + isbn + '?',
			[
				{
					text: 'Yes', onPress: () => this.returnBook(username, isbn)
				},
				{
					text: 'No'
				}
			]
		);
	}

	onRefresh() {
		debugger;
		this.setState({refreshing: true});
		//if(this.props.adminFetchedUserDetails._id === null) return;
		getUserDetails(this.props.adminFetchedUserDetails._id).then(function(result) {
			this.props.updateAdminFetchedUserDetails(result);
			this.setState({refreshing: false});
		}.bind(this))
		.catch(function(err) {
			this.setState({refreshing: false});
		}.bind(this))
	}

	render() {
		return (
			<UserDetailsRep 
				data={this.props.adminFetchedUserDetails}
				onPressCheckedOut={this.onPressCheckedOut.bind(this)}
				onRefresh={this.onRefresh.bind(this)}
				refreshing={this.state.refreshing}
			/>
		);
	}
}

function mapStateToProps(state) {
	return {
		adminFetchedUserDetails: state.adminFetchedUserDetails
	};
}

function mapDispatchToProps(dispatch) {
	return {
		updateAdminFetchedUserDetails: bindActionCreators(updateAdminFetchedUserDetails, dispatch)
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(UserDetails);