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
import NewHeader from '../NewHeader';

export default class NewListScreen extends Component {
	static navigationOptions = {
		header: null
	};
	render() {
		return (
			<Container style={{ marginTop: 30 }}>
				<NewHeader
					navigation={this.props.navigation}
					title={I18n.t('new_list.headerTitle')}
				/>
				<Content>
					<Text>NEW KABANOS</Text>
					{/* <NewTaskForm /> */}
				</Content>
			</Container>
		);
	}
}
