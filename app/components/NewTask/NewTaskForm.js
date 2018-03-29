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
			selectedValue: undefined
		};
	}
	render() {
		return (
			<Container style={{ padding: 25 }}>
				<Content>
					<Text style={styles.labels}>{I18n.t('new_task.what_to_do')}</Text>
					<Item style={styles.spaceBetweenInputs}>
						<Input
							placeholder={I18n.t('new_task.enter_task')}
							onChangeText={taskName => this.setState({ taskName })}
						/>
						<Icon active name="home" />
					</Item>
					<Text style={styles.labels}>{I18n.t('new_task.due_date')}</Text>
					<Item>
						<Input
							placeholder={`${I18n.t('new_task.date_not_selected')} ${I18n.t(
								'new_task.since'
							)}`}
							value={this.state.dateSince}
						/>
						<Button transparent>
							<Icon active name="calendar" style={styles.btnIconColor} />
						</Button>
						<Button
							transparent
							onPress={() => this.setState({ dateSince: '' })}
						>
							<Icon active name="close-circle" style={styles.btnIconColor} />
						</Button>
					</Item>
					<Item style={styles.spaceBetweenInputs}>
						<Input
							placeholder={`${I18n.t('new_task.date_not_selected')} ${I18n.t(
								'new_task.until'
							)}`}
							value={this.state.dateUntil}
						/>
						<Button transparent>
							<Icon active name="calendar" style={styles.btnIconColor} />
						</Button>
						<Button
							transparent
							style={{ marginLeft: 0 }}
							onPress={() => this.setState({ dateUntil: '' })}
						>
							<Icon active name="close-circle" style={styles.btnIconColor} />
						</Button>
					</Item>
					<Text style={styles.labels}>{I18n.t('new_task.add_to_list')}</Text>
					<Form>
						<Picker
							mode="dropdown"
							placeholder="Select One"
							selectedValue={this.state.selectedValue}
							onValueChange={selectedValue => this.setState({ selectedValue })}
						>
							<Picker.Item label="Work" value="key0" />
							<Picker.Item label="Home" value="key1" />
							<Picker.Item label="Hobby" value="key2" />
						</Picker>
						<View
							style={{
								alignSelf: 'center',
								marginTop: 10
							}}
						>
							<Button
								rounded
								small
								onPress={() => this.props.navigation.navigate('NewList')}
							>
								<Text>Create New List</Text>
							</Button>
						</View>
					</Form>
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
