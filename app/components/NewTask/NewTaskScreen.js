import React, { Component } from 'react';
import { View } from 'react-native';
import {
	Container,
	Header,
	Button,
	Icon,
	Title,
	Text,
	Left,
	Right,
	Body
} from 'native-base';

export default class NewTaskScreen extends Component {
	render() {
		return (
			<Container>
				<Header>
					<Left>
						<Button transparent>
							<Icon name="checkbox" style={{ color: 'white' }} />
							<Title> List Name</Title>
						</Button>
					</Left>
					<Right>
						<Button transparent>
							<Icon name="search" />
						</Button>
						<Button transparent>
							<Icon name="apps" />
						</Button>
					</Right>
				</Header>
				{/* <View>
					<Text> NewTaskScreen </Text>
				</View> */}
			</Container>
		);
	}
}
