import React, { Component } from 'react';
import { View } from 'react-native';
import UserRepresentational from './UserRepresentational';
import { getCheckedOut, getRequested, fetchBook } from '../../Services';
import { connect } from 'react-redux';
import { updateCheckedOut, updateRequests, updateFetchedData } from '../../actions';
import { bindActionCreators } from 'redux';


class User extends Component {

	componentWillMount(){
		this.refresh();
	}

	refresh() {
		var { username } = this.props.credentials;

		getCheckedOut(username).then(function(result) {
			this.props.updateCheckedOut(result);
		}.bind(this))
		.catch(function(err) {debugger;});

		getRequested(username).then(function(result) {
			this.props.updateRequests(result);
		}.bind(this))
		.catch(function(err) {debugger;});
	}

	onPressBookLink(id) {
		debugger;
		fetchBook(id).then(function(response) {
			debugger;
			this.props.updateFetchedData(response);
			debugger;
		}.bind(this)).catch(function(err) {
			debugger;
		});
		debugger;
		this.props.navigation.navigate('Main');
	}

	onReturnPress() {
		this.props.navigation.navigate('Main');
	}

	render() {
		return (
			<UserRepresentational 
				onReturnPress={this.onReturnPress.bind(this)}
				onPress={this.onPressBookLink.bind(this)}
				banner={require('../../../res/highschool-banner.png')}
				checkedOut={
					this.props.checkedOut
				}
				requests={
					this.props.requests
				}
			/>
		);
	}
}

function mapStateToProps(state, ownProps) {
	return {
		requests: state.requests, 
		checkedOut: state.checkedOut,
		credentials: state.credentials
	};
}

function mapDispatchToProps(dispatch) {
	return {
		updateCheckedOut: bindActionCreators(updateCheckedOut, dispatch), 
		updateRequests: bindActionCreators(updateRequests, dispatch),
		updateFetchedData: bindActionCreators(updateFetchedData, dispatch)
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(User);