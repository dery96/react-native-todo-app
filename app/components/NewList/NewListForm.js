import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import {
	Container,
	Header,
	Title,
	Content,
	Button,
	Icon,
	Text,
	Right,
	Body,
	Left,
	Item,
	Input,
	Form,
	Picker
} from 'native-base';

import I18n from '../../i18n/i18n';

export default class NewTaskForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			taskName: undefined,
			dateSince: new Date().toDateString(),
			dateUntil: '',
			selectedValue: undefined,
			categoryList: ['No category']
		};
		this.categoryListPickerItems = this.categoryListPickerItems.bind(this);
	}

	categoryListPickerItems(categoryList) {
		return categoryList.map((category, index) => {
			return <Picker.Item label={category} value={category} key={index} />;
		});
	}
	render() {
		return (
			<Container style={{ padding: 25 }}>
				<Content>
					<Text style={styles.labels}>{I18n.t('new_task.what_to_do')}</Text>
					<Item style={styles.spaceBetweenInputs}>
						<Input
							placeholder={I18n.t('new_task.enter_list')}
							onChangeText={taskName => this.setState({ taskName })}
						/>
						<Icon active name="home" />
					</Item>
				</Content>
			</Container>
		);
	}
}

const styles = StyleSheet.create({
	labels: {
		fontSize: 16,
		fontWeight: '500'
	},
	spaceBetweenInputs: {
		marginBottom: 35
	},
	btnIconColor: {
		color: 'black',
		marginLeft: 0
	}
});
