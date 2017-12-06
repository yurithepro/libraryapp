import React, { Component } from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import LoginForm from './LoginForm';
import { Container, Header, Content, Card, CardItem, Body } from 'native-base';
import { NavigationActions } from 'react-navigation';

class Login extends Component {
	state = {
		expanded: false,
		loginSelected: true
	}

	onLoginSelect() {
		this.setState({loginSelected: true});
	}

	onCreateSelect() {
		this.setState({loginSelected: false});
	}

	renderMainLogo() {
		if(this.state.loginSelected)
			return (
				<Content contentContainerStyle={styles.top}>
					<Image style={styles.icon} source={require('../../../res/icon.png')} />
				</Content>
			);
	}

	renderTitleImage() {
		if(this.state.loginSelected)
			return (
				<Card style={styles.titleFont}>
					<CardItem cardBody>
						<Image style={styles.titleFontImage} source={require('../../../res/LoginPageTitle.png')} />
					</CardItem>
				</Card>
			);
	}

	render() {
		return (
			<Container style={styles.screenContaner}>

				{this.renderMainLogo()}

				<Content contentContainerStyle={styles.bottom}>
					
					{this.renderTitleImage()}


					<Card style={styles.login}>

						<CardItem cardBody>
							<LoginForm 
								onSuccessfulLogin={this.onSuccessfulLogin.bind(this)}
								onLoginSelect={this.onLoginSelect.bind(this)}
								onCreateSelect={this.onCreateSelect.bind(this)}
								loginSelected={this.state.loginSelected}
							/>
						</CardItem>
					</Card>
				</Content>
			</Container>
		);
	}

	onSuccessfulLogin(admin) {
		if(admin) {
			debugger;
			const resetActionAdmin = NavigationActions.reset({
	    		index: 0,
	    		actions: [NavigationActions.navigate({ routeName: 'Admin' })]
	    	});
			this.props.navigation.dispatch(resetActionAdmin);

		} else {
			const resetAction = NavigationActions.reset({
	    		index: 0,
	    		actions: [NavigationActions.navigate({ routeName: 'Main' })]
	    	});
			this.props.navigation.dispatch(resetAction);
		}
	}
}

const styles = StyleSheet.create({
	screenContainer: {
		marginRight: 30,
		marginLeft: 30,
		flex: 1
	},
	icon: {
		height: 300,
		width: 300,

	},
	titleFont: {
		flexDirection: 'row',
		flex: 1,
		justifyContent: 'center',
		height: null,
		width: null,
		marginLeft: 100,
		marginRight: 100,
	},
	titleFontImage: {
		height: 40,
		width: 150
	},
	top: {
		flexDirection: 'column',
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},
	bottom: {
		flexDirection: 'column',
		flex: 1,
		justifyContent: 'flex-end',
		marginRight: 10,
		marginLeft: 10
	},
	login: {
		flex: 4,
		marginBottom: 30
	}
});

export default Login;