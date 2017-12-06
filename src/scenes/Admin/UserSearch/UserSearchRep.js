import React, { Component } from 'react';
import { View, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { Container, Header, Content, Body, Title, Card, CardItem, Text, Icon, Input, Item, Button } from 'native-base';


class UserSearchRep extends Component {
	
	renderItem({item}) {
		return (
			<CardItem>
				
				<View style={{flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start'}}>
					
					<TouchableOpacity onPress={() => this.props.onPressUser(item._id)}>	
						<Text>
							{item._id}
						</Text>

						<Text>
							{item.email}
						</Text>
					</TouchableOpacity>
				</View>
			</CardItem>
		);
	}

	renderBody() {
		if(this.props.loading === true)
			return <Spinner />;
		else if(this.props.data === [])
			return (
				<CardItem>
					<Text>
						No Results Found!
					</Text>
				</CardItem>
			);
		else
			return (
				<FlatList 
				keyExtractor={(item, index) => item._id}
				renderItem={this.renderItem.bind(this)}
				data={this.props.data}
				/>

			);
	}

	render() {
		return (
			<Container>
				<Header searchBar rounded>
					<Item>
			        	<Icon name="ios-search" />
			        	<Input value={this.props.query} placeholder="Search" onChangeText={this.props.onChangeText} />
			        	<Icon name="ios-people" />
			        </Item>

			        <Button transparent>
			        	<Text>Search</Text>
			        </Button>
				</Header>

				<Content style={styles.results}>
					<Card>
						{this.renderBody()}
					</Card>
				</Content>

			</Container>
		);
	}
}

const styles = StyleSheet.create({
	results: {
		marginLeft: 10,
		marginRight: 10
	}
});

export default UserSearchRep;