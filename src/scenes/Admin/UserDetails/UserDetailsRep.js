import React, { Component } from 'react';
import { View, FlatList, RefreshControl } from 'react-native';
import { Container, Content, Body, Card, CardItem, Title, Header, Text, Left } from 'native-base';
import BookImage from '../../../common/BookImageLink';

class UserDetailsRep extends Component {

	renderItem({item}) {
		return (
			<BookImage 
				onPress={() => this.props.onPressCheckedOut(this.props.data._id, item._id)}
				book={item}
			/>
		);
	}

	renderBody() {
		return (
			<Content style={{marginLeft: 10, marginRight: 10}}
				refreshControl={<RefreshControl refreshing={this.props.refreshing} onRefresh={this.props.onRefresh} />}
			>
				<Card>
					<CardItem header>
						<Text>
							User Details
						</Text>
					</CardItem>

					<CardItem>
						<Body style={{flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'center'}}>
							<Text>
								{this.props.data.email}
							</Text>

							<Text>
								{this.props.data.number}
							</Text>
						</Body>
					</CardItem>
				</Card>

				<Card>
					<CardItem style={{flexDirection: 'row', justifyContent: 'space-around'}}>
						<FlatList
							horizontal={true}
							renderItem={this.renderItem.bind(this)}
							keyExtractor={(item, index) => item._id}
							data={this.props.data.checkedOut}

						/>
					</CardItem>
				</Card>
			</Content>
		);
	}

	renderRefreshing() {
		if(!this.props.refreshing)
			return this.renderBody();
	}

	render() {

		return (
			<Container>
				<Header>
					<Body>

						<Title>
							{this.props.data._id}
						</Title>
					</Body>
				</Header>

				{this.renderRefreshing()}

			</Container>
		);
	}
}

export default UserDetailsRep;