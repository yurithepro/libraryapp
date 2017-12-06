import React, { Component } from 'react';
import { Image, View, StyleSheet, TouchableOpacity } from 'react-native';
import { Button } from 'native-base';
import resolveAssetSource from 'resolveAssetSource';
import { connect } from 'react-redux';

class BookImage extends Component {
	
	renderImage() {
		return (
			<Image
				style={ 
					[
					{flex: 1, width: undefined, height: 100},
					//styles.mainImage
					]
				}
					
				source={this.props.source} 
				resizeMode={'cover'}
			>
				
			</Image>
		);
	}

	render() {
		return (
			<TouchableOpacity transparent style={{flex: 1}} onPress={this.props.onPress}>
				{this.renderImage()}
			</TouchableOpacity>	
			
		);
	}
}

const styles = StyleSheet.create({	
	mainImage: {
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center'
	},
});

export default BookImage;