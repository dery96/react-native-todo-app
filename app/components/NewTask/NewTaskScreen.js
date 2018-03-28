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

import NewTaskForm from './NewTaskForm';
export default class NewTaskScreen extends Component {
	static navigationOptions = {
		header: null
	};
	render() {
		return (
			<Container style={{ marginTop: 30 }}>
				<Header>
					<Left>
						<Button transparent onPress={() => this.props.navigation.goBack()}>
							<Icon name="arrow-back" style={{ color: 'white' }} />
							<Title style={{ paddingLeft: 5 }}>New Task</Title>
						</Button>
					</Left>
					<Right>
						<Button transparent>
							<Icon
								name="checkmark"
								onPress={() => this.props.navigation.goBack()}
							/>
						</Button>
					</Right>
				</Header>
				<Content>
					<NewTaskForm />
				</Content>
			</Container>
		);
	}
}
