import React, { Component } from 'react';
import { Image, ImageBackground, View, StyleSheet, TouchableOpacity } from 'react-native';
import { Container, Content, Spinner, Button, Text, Icon } from 'native-base';
import { connect } from 'react-redux';

class BookImage extends Component {
	state = {
		loading: false,
		toggled: false,
	};

	renderSuper() {
		var expire = null, requested = false;

		this.props.checkedOut.forEach(function(value) {
			if(value._id === this.props.book._id) {
				debugger;
				expire = value.date;
			}
		}.bind(this));

		this.props.requests.forEach(function(value) {
			if(value._id === this.props.book._id) {
				debugger;
				requested = true;
			}
		}.bind(this));

		debugger;
		if(expire) {
			if(expire > Date.now().valueOf()) {
				var date = new Date(expire);
				var month = date.getMonth() + 1;
				var day = date.getDate();
				var hour = date.getHours();
				var minutes = date.getMinutes();
				var minutes = (minutes < 10) ? "0" + String(minutes) : minutes;
				return (
					<View style={{flexDirection: 'column', alignItems: 'center'}}>
						<Icon name={'clock'} style={styles.icon} />
						<Text style={{textAlign: 'center', fontSize: 21}}>
							{month}/{day}
						</Text>
						<Text style={{textAlign: 'center', fontSize: 18}}>
							{hour}:{minutes}
						</Text>
					</View>
				);
			} else {
				//overdue!!
				return (
					<View style={{flexDirection: 'column', alignItems: 'center'}}>
						<Icon name={'warning'} style={[styles.icon, {color: 'red'}]} />
						<Text style={{fontSize: 21}}>
							Overdue
						</Text>
					</View>
				);
			}
		}
		else if(requested) {
			return (
				<TouchableOpacity onPress={this.props.onPressRequested}>
					<View style={{flexDirection: 'column', alignItems: 'center'}}>
						<Icon name={'hand'} style={styles.icon} />
						<Text style={{fontSize: 21}}>
							Requested
						</Text>
					</View>
				</TouchableOpacity>
			);
		}
		else {
			return (
				<TouchableOpacity onPress={this.props.onPressCheckOut} style={styles.overlayButton}>
					<Icon name={'cart'} style={styles.icon}/>
				</TouchableOpacity>
			);
		}
	}

	renderToggle() {
		if(this.state.toggled) {
			return this.renderSuper();
		}

	}

	
	renderImage() {
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
					opacity={ this.state.toggled ? 0.2 : 1 }				
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
					{this.renderToggle()}
				</ImageBackground>
			);
		}
	}

	render() {
		return (
			<TouchableOpacity
				onPress={
					() => {
						this.setState({toggled: !this.state.toggled});
					}
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
	return {
		requests: state.requests,
		checkedOut: state.checkedOut
	};
}

export default connect(mapStatetoProps)(BookImage);