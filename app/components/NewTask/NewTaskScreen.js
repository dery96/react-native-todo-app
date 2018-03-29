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
import NewHeader from '../NewHeader';
export default class NewTaskScreen extends Component {
	static navigationOptions = {
		header: null
	};
	render() {
		return (
			<Container style={{ marginTop: 30 }}>
				<NewHeader navigation={this.props.navigation} title={'New Task'} />
				<Content>
					<NewTaskForm navigation={this.props.navigation} />
				</Content>
			</Container>
		);
	}
}
