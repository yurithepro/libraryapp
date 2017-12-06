import React, { Component } from 'react';
import { View, StyleSheet, AsyncStorage } from 'react-native';
import { Container, Content, Form, Item, Input, Label, Button, Text, Spinner } from 'native-base';
import { login, createAccount } from '../../Services';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { updateCredentials } from '../../actions';




class LoginForm extends Component {
	state = {
		usernameInput: '',
		passwordInput: '',
		emailInput: '',
		numberInput: '',
		loading: false,
		error: ''
	};

	componentWillMount() {
		//attempt to log in off of asyncstore
		//making screen loading circle until success of failure
		AsyncStorage.getItem('username')
			.then(function(result) {
				state.setState({usernameInput: result});
			})
			.catch(function(error) {

			});
	}

	renderButtons() {
		if(this.state.loading)
			return (
				<View>
					<Spinner />
				</View>
			);
		else
			return (
				<View style={styles.buttonStyle}> 
            		{this.loginButton()}
            	    {this.createButton()}
            	</View>
            );
	}

	loginButton() {
		return (
				<Button 
	            	transparent={!this.props.loginSelected}
	            	//disabled={this.state.loginSelected}
	            	onPress={
	            		function() {
	            			if(this.props.loginSelected)
	            				this.onLoginPress();
	            			else
	            				this.props.onLoginSelect();
	            		}.bind(this)
	            	}
	            >
	               	<Text>
	            		Login
	            	</Text>
	            </Button>
		);
	}

	createButton() {
		return (
			<Button 
  				transparent={this.props.loginSelected}
				//disabled={!this.state.loginSelected}            		
				onPress={
					function() {
						if(!this.props.loginSelected)
							this.onCreatePress();
						else
							this.props.onCreateSelect();
					}.bind(this)
				}
			>
				<Text>
					Create
				</Text>
			</Button>
		);
	}

	renderEmail() {
		if(!this.props.loginSelected) {
			return (
				<Item floatingLabel>
          			<Label>Email</Label>
          			<Input 
          				maxLength={32}
          				autoCapitalize={'none'}
          				autoCorrect={false}
          				editable={!this.state.loading}
          				onChangeText={this.onEmailChange.bind(this)} 
          				value={this.state.emailInput}
          			/>
        		</Item>
			);
		}

	}

	renderNumber() {
		if(!this.props.loginSelected) {
			return (
        		<Item style={{marginTop: 5}} floatingLabel>
          			<Label>Phone Number</Label>
          			<Input 
          				maxLength={10}
          				keyboardType={'numeric'}
          				autoCapitalize={'none'}
          				autoCorrect={false}
          				editable={!this.state.loading}
          				onChangeText={this.onNumberChange.bind(this)}
          				value={this.state.numberInput}
          			/>
        		</Item>
			);
		}
	}

	render() {
		return (
			<Container style={styles.containerStyle}>
				<Content contentContainerStyle={{width: null, height: null}}>
				 	<Item floatingLabel>
              			<Label>Username</Label>
              			<Input 
              				maxLength={16}
              				autoCapitalize={'none'}
              				autoCorrect={false}
              				editable={!this.state.loading}
              				onChangeText={this.onUsernameChange.bind(this)} 
              				value={this.state.usernameInput}
              			/>
            		</Item>
            		<Item style={{marginTop: 5}} floatingLabel>
              			<Label>Password</Label>
              			<Input 
              				maxLength={32}
              				autoCapitalize={'none'}
              				secureTextEntry
              				autoCorrect={false}
              				editable={!this.state.loading}
              				onChangeText={this.onPasswordChange.bind(this)}
              				value={this.state.passwordInput}
              			/>
            		</Item>

            		{this.renderEmail()}
            		{this.renderNumber()}

            		{this.renderButtons()}

            		
            	</Content>
			</Container>
		);
	}

	onUsernameChange(text) {
		this.setState({ usernameInput: text});
		//verify name
	}

	onPasswordChange(text) {
		this.setState({ passwordInput: text});
		//verify password
	}

	onEmailChange(text) {
		this.setState({ emailInput: text });
	}

	onNumberChange(text) {
		this.setState({ numberInput: text });
	}

	onLoginPress() {
		//setTimeout
		this.setState({loading: true});
		this.performLogin();
	}

	onCreatePress() {
		//createAccount
		//login
		this.setState({loading: true});
		this.create();
	}	

	performLogin() {
		
		var {usernameInput, passwordInput} = this.state;

		login(usernameInput, passwordInput).then(function(response) {
			this.props.updateCredentials({username: usernameInput, password: passwordInput, loggedIn: true}); 
			this.props.onSuccessfulLogin(response);
			return;
		}.bind(this)).catch(function(err) {
			switch(err) {
				case 'incorrect password':
					break;
			}
			this.setState({loading: false, error: err});
		}.bind(this));

		//update redux store
		
	}

	create() {
		var {
			usernameInput, 
			passwordInput,
			emailInput,
			numberInput
		} = this.state;

		createAccount(usernameInput, passwordInput, emailInput, numberInput).then(function(result) {
			debugger;
			this.performLogin();
		}.bind(this))
		.catch(function(err) {
			this.setState({loading: false});
			debugger;

		}.bind(this));
	}
	
}

const styles = StyleSheet.create({
	containerStyle: {
		flexDirection: 'row',
		flex: 1,
		padding: 10,
		flex: 1,
		width: null,
		height: null,
	},
	buttonStyle: {
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		marginTop: 20
	}
});

const mapStateToProps = state => {
	return { credentials: state.credentials };
}

const mapDispatchToProps = dispatch => {
	return {
		updateCredentials: bindActionCreators(updateCredentials, dispatch)
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);