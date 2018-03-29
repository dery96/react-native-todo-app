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
	Body,
	Content
} from 'native-base';

import NewHeader from '../NewHeader';

export default class NewListScreen extends Component {
	static navigationOptions = {
		header: null
	};
	render() {
		return (
			<Container style={{ marginTop: 30 }}>
				<NewHeader navigation={this.props.navigation} title={'New List'} />
				<Content>
					<Text>NEW KABANOS</Text>
					{/* <NewTaskForm /> */}
				</Content>
			</Container>
		);
	}
}
