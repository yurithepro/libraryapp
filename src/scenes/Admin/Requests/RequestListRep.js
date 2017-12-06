import React, { Component } from 'react';
import { FlatList, View, StyleSheet, TouchableOpacity, Alert, RefreshControl } from 'react-native';
import { Header, Container, Content, Body, Title, Text, Card, CardItem, Spinner } from 'native-base';


class RequestListRep extends Component {

	onItemPress(item, name) {
		
		Alert.alert(
			'Review Request',
			'Verify or Destroy ' + name + "'s" + ' request for ' + item,
			[
			{text: 'Destroy', onPress: () => {this.props.onDestroy(item, name)}},
			{text: 'Verify', onPress: () => {this.props.onVerify(item, name)}}
			]
		);
		
	}


	renderBook({item}, name) {
	
		debugger;
		return (
			<CardItem>
				<TouchableOpacity onPress={() => this.onItemPress(item._id, name)}>
					<Text>
						{item._id}
					</Text>
				</TouchableOpacity>
			</CardItem>
		);
		
	}

	renderUser({item}) {
		return (
			<Card style={styles.cards}>
				<CardItem header>
					<Text>
						{item._id}
					</Text>
				</CardItem>

				<FlatList 
				data={item.books}
				keyExtractor={(item, index) => item._id}
				renderItem={(book) => {return this.renderBook(book, item._id);}}
				/>
			</Card>
		);
	}

	render() {
		return (
			<Container>
				<Header>

					<Body>
						<Title>
							Active Requests
						</Title>
					</Body>
				</Header>

				<Content 
				refreshControl={<RefreshControl refreshing={this.props.refreshing} onRefresh={this.props.onRefresh} />}
				contentContainerStyle={styles.content}
				>
					<FlatList 
					data={this.props.data}
					keyExtractor={(item, index) => item._id}
					renderItem={this.renderUser.bind(this)}
					/>
				</Content>
			</Container>
		);
	}
}

const styles = StyleSheet.create({
	content: {
		marginLeft: 10,
		marginRight: 10
	},
	cards: {

	}
});

export default RequestListRep;