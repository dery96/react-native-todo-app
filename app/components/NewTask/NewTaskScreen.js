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

import I18n from '../../i18n/i18n';

import NewTaskForm from './NewTaskForm';
import NewHeader from '../NewHeader';
export default class NewTaskScreen extends Component {
	static navigationOptions = {
		header: null
	};

	render() {
		return (
			<Container style={{ marginTop: 30 }}>
				<NewHeader
					navigation={this.props.navigation}
					title={I18n.t('new_task.headerTitle')}
				/>
				<Content>
					<NewTaskForm navigation={this.props.navigation} />
				</Content>
			</Container>
		);
	}
}
