import React, { Component } from 'react';
import { View, Image, FlatList, Dimensions } from 'react-native';
import { Container, Header, Content, Body, Card, CardItem, Text, Title, Icon, Button, Left } from 'native-base';
import BookImage from '../../common/BookImageLink';

class UserRepresentational extends Component {

	componentWillMount() {

	}

	renderBook({item}) {
		debugger;
		return (
			<View>
				<BookImage onPress={this.props.onPress} smaller book={item} />
			</View>
		);
	}

	render() {
		const { width } = Dimensions.get('window');

		return (
			<Container>
				<Header>
					<Left>
          				<Button transparent onPress={this.props.onReturnPress}>
            				<Icon name='arrow-back' />
            			</Button>
          			</Left>

					<Body>
						<Title>
							Account Info
						</Title>
					</Body>
				</Header>

				<Content>
					<Card>
						<CardItem>
							<Body style={{justifyContent: 'center', alignItems: 'center'}}>
								<Image style={{position: 'relative', left: 0, top: 0, alignSelf: 'center', width: (width - 20), height: 100, flex: 1}} source={this.props.banner} resizeMode={'cover'}/>
							</Body>
						</CardItem>
					</Card>

					<Card>
						<CardItem header>
							<Icon name={'book'} style={{fontSize: 18}} />
							<Text>
								Checked Out
							</Text>
						</CardItem>
						<CardItem>
							
							<Body>
								<FlatList
								    horizontal={true}
								    style={{flex:1}}
								    contentContainerStyle={{flex: 1, justifyContent: 'space-around', alignItems: 'center'}}
								    data={this.props.checkedOut}
								    renderItem={this.renderBook.bind(this)}
								    keyExtractor={(item, index) => item._id}
								/>
							</Body>
						</CardItem>
					</Card>

					<Card>
						<CardItem header>
							<Icon name={'globe'} style={{fontSize: 18}} />
							<Text>
								Requested
							</Text>
						</CardItem>

						<CardItem>
							<Body>
								<FlatList
								    horizontal={true}
								    style={{flex:1}}
								    contentContainerStyle={{flex: 1, justifyContent: 'space-around', alignItems: 'center'}}
								    data={this.props.requests}
								    renderItem={this.renderBook.bind(this)}
								    keyExtractor={(item, index) => item._id}
								/>
							</Body>
						</CardItem>
					</Card>
				</Content>
			</Container>
		);
	}
}



export default UserRepresentational;