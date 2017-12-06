import React, { Component } from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';
import TextSpacing from '../../common/TextWithLetterSpacing';

class TitleButton extends Component {
	render() {
		debugger;
		return (
			<TouchableOpacity onPress={this.props.onPress} style={styles.component}>
				<View style={styles.largerView}>
					<Text adjustFontSizeToFit//Spacing 
						//spacing={2} 
						style={{fontSize: 34, color: 'black', textAlign: 'center'}}
						textStyle={styles.largerText}
						
						viewStyle={{
							borderBottomWidth: 1
						}}
						
					>
						{this.props.bigTitle}
					</Text> 
				</View>
				<View style={styles.smallerView}>
					<Text style={styles.smallerText}>
						{this.props.smallTitle}
					</Text>
				</View>
			</TouchableOpacity>
		);
	}
}

const styles = StyleSheet.create({
	component: {
		flexDirection: 'column',
		justifyContent: 'flex-start',
		alignItems: 'center',
	},
	largerView: {
		flexDirection: 'column',
		justifyContent: 'center',
	},
	largerText: {
		textAlign: 'center',
		fontFamily: 'Cochin',
		fontSize: 34,
		color: 'black',
		//alignText: 'center'
	},
	smallerView: {
		marginTop: 0,
	},
	smallerText: {
		fontSize: 16

	}
});


export default TitleButton;