import React, { Component } from 'react';
import { View, Alert } from 'react-native';
import RequestListRep from './RequestListRep';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updateAdminRequestList } from '../../../actions';
import { getRequestList, cancelRequest, finalizeCheckOut } from '../../../Services';

class Requests extends Component {

	state = {
		refreshing: false
	}

	componentWillMount() {
		this.onRefresh();
	}

	onRefresh() {
		this.setState({refreshing: true});
		getRequestList().then(function(result) {
			debugger;
			this.props.updateAdminRequestList(result);
			this.setState({refreshing: false});
			debugger;
		}.bind(this))
		.catch(function(err) {debugger; this.setState({refreshing: false});}.bind(this));
	}

	onVerify(item, name) {
		this.setState({refreshing: true});
		finalizeCheckOut(name, item)
		.then(function(result) {
			this.onRefresh();
			debugger;
		}.bind(this))
		.catch(function(err) {
			this.setState({refreshing: false});
			switch(err) {
				case 'book unavailable':

				break;
			}
		}.bind(this));
		
	}

	onDestroy(item, name) {
		this.setState({refreshing: true});
		cancelRequest(name, item)
		.then(function(result) {
			debugger;
			this.onRefresh();	
		}.bind(this))
		.catch(function(err) {
			debugger;
			this.setState({refreshing: false});
		}.bind(this));
		
	}

	render() {
		debugger;
		return <RequestListRep 
		data={this.props.adminRequestList}
		onRefresh={this.onRefresh.bind(this)}
		refreshing={this.state.refreshing}
		onVerify={this.onVerify.bind(this)}
		onDestroy={this.onDestroy.bind(this)}
		/>;
	}
}


function mapStateToProps(state) {
	return {
		adminRequestList: state.adminRequestList
	};
}

function mapDispatchToState(dispatch) {
	return {
		updateAdminRequestList: bindActionCreators(updateAdminRequestList, dispatch)
	}
}

export default connect(mapStateToProps, mapDispatchToState)(Requests);