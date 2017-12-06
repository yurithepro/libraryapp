import React, { Component } from 'react';
import { View, Image, Dimensions } from 'react-native';

class MapRepresentational extends Component {
	

	render() {
		const {height, width} = Dimensions.get('window');
		return (
			<View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
				<Image
				style={{
					flex: 1,
					alignSelf: 'stretch',
					height: null,
					width: width
				}}

	   			resizeMode={'cover'}

				source={require('../../../res/map.png')} />
			</View>
		);
	}
}

export default MapRepresentational;