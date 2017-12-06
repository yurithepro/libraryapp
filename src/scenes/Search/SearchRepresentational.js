import React, { Component } from 'react';
import { StyleSheet, FlatList, View, TouchableOpacity } from 'react-native';
import { Container, Header, Card, CardItem, Content, Body, Text, Input, Icon, Item, Button, List, ListItem, Left, Thumbnail } from 'native-base';

class SearchRepresentational extends Component {
	
	renderItem({item}) {
		return (
			
			<ListItem style={{marginLeft: 0, paddingLeft: 10, paddingRight: 10}}>
				<TouchableOpacity style={{flex: 1, flexDirection: 'row', alignItems: 'center'}} onPress={function() {this.props.onPressItem(item._id)}.bind(this)}>
					<Thumbnail large source={item.source} /> 
					<Body style={{flexDirection: 'column', justifyContent: 'flex-start', marginLeft: 10}}>

						<View>
							<Text style={{fontSize: 17}}>
								{item.title}
							</Text>
						</View>
						<View>
							<Text>
								{item.author}
							</Text>
						</View>
					</Body>
				</TouchableOpacity>

			</ListItem>
		);		
	}

	renderBody() {
		if(this.props.query === '') {
			return (
				<Card>
					<CardItem>
						<Body>
							<Text>
								Search by isbn, title, or author
							</Text>
						</Body>
					</CardItem>
				</Card>
			);
		} else if(this.props.query !== '' && this.props.data === null) {
			//no search results
			return (
				<Text>
					No results
				</Text>

			);
		} else {
			return (
				<List>
					<FlatList
						keyExtractor={(item, index) => item._id}
						data={this.props.data}
						renderItem={this.renderItem.bind(this)}
					/>
				</List>
			);


		}

	}

	render() {
		return (
			<Container>
				<Header backgroundColor={'transparent'} noShadow={true} searchBar rounded>
					<Item>
			        	<Icon name="ios-search" />
			        	<Input autoCorrect={false} value={this.props.query} onChangeText={this.props.onChangeText} placeholder="Search" />
			        	<Icon name="ios-people" />
			        </Item>

			        <Button transparent>
            			<Text>Search</Text>
          			</Button>
				</Header>

				<Content>
					{this.renderBody()}
				</Content>


			</Container>
		);

	}
}

export default SearchRepresentational;