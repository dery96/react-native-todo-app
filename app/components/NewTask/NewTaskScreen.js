import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import {
	Container,
	Header,
	Button,
	Icon,
	Title,
	Text,
	Content,
	Item,
	Picker,
	Input,
	Form
} from 'native-base';

import I18n from '../../i18n/i18n';
import CalendarPicker from 'react-native-calendar-picker';

// import NewTaskForm from './NewTaskForm';
import NewHeader from '../NewHeader';

class NewTaskScreen extends Component {
	static navigationOptions = {
		header: null
	};

	constructor(props) {
		super(props);
		this.state = {
			taskName: undefined,
			dateSince: undefined,
			dateUntil: undefined,
			calendar: false,
			category: { name: 'Work', color: '#e43' },
			selectedDate: '',
			selectedValue: 'Work'
		};
		this.onDateChange = this.onDateChange.bind(this);
		this.categoryListPickerItems = this.categoryListPickerItems.bind(this);
	}

	onDateChange(date) {
		if (this.state.selectedDate === 'since') {
			this.setState({
				calendar: !this.state.calendar,
				dateSince: date.toString().slice(0, 10)
			});
		} else {
			this.setState({
				calendar: !this.state.calendar,
				dateUntil: date.toString().slice(0, 10)
			});
		}
	}

	categoryListPickerItems(categoryList) {
		return categoryList.map((category, index) => {
			return (
				<Picker.Item label={category.name} value={category.name} key={index} />
			);
		});
	}

	render() {
		return (
			<Container>
				<View
					style={{
						height: 24,
						backgroundColor: '#1a224f',
						margin: 0,
						padding: 0
					}}
				/>
				<NewHeader
					navigation={this.props.navigation}
					title={I18n.t('new_task.headerTitle')}
					taskName={this.state.taskName}
					dateSince={this.state.dateSince}
					dateUntil={this.state.dateUntil}
					category={this.state.category}
					operation={'newTask'}
				/>

				<Content>
					<Container style={{ padding: 25 }}>
						{this.state.calendar ? (
							<View style={styles.calendar}>
								<Button
									transparent
									onPress={() =>
										this.setState({ calendar: !this.state.calendar })
									}
								>
									<Icon
										active
										name="close-circle"
										style={styles.btnIconColor}
									/>
								</Button>
								<CalendarPicker
									selectedDayColor="#37479F"
									selectedDayTextColor="#FFFFFF"
									onDateChange={this.onDateChange}
								/>
							</View>
						) : (
							<View style={{ position: 'absolute', width: 1, height: 1 }} />
						)}
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
									placeholder={`${I18n.t(
										'new_task.date_not_selected'
									)} ${I18n.t('new_task.since')}`}
									value={this.state.dateSince}
								/>
								<Button
									transparent
									onPress={() =>
										this.setState({
											calendar: !this.state.calendar,
											selectedDate: 'since'
										})
									}
								>
									<Icon active name="calendar" style={styles.btnIconColor} />
								</Button>
								<Button
									transparent
									onPress={() => this.setState({ dateSince: '' })}
								>
									<Icon
										active
										name="close-circle"
										style={styles.btnIconColor}
									/>
								</Button>
							</Item>
							<Item style={styles.spaceBetweenInputs}>
								<Input
									placeholder={`${I18n.t(
										'new_task.date_not_selected'
									)} ${I18n.t('new_task.until')}`}
									value={this.state.dateUntil}
								/>
								<Button
									transparent
									onPress={() =>
										this.setState({
											calendar: !this.state.calendar,
											selectedDate: 'until'
										})
									}
								>
									<Icon active name="calendar" style={styles.btnIconColor} />
								</Button>
								<Button
									transparent
									onPress={() => this.setState({ dateUntil: '' })}
								>
									<Icon
										active
										name="close-circle"
										style={styles.btnIconColor}
									/>
								</Button>
							</Item>
							<Text style={styles.labels}>
								{I18n.t('new_task.add_to_list')}
							</Text>
							<Form
								style={{
									display: 'flex',
									flexDirection: 'row',
									alignContent: 'center',
									alignItems: 'center',
									justifyContent: 'space-between'
								}}
							>
								<Picker
									style={{ width: 270, marginRight: 0 }}
									mode="dropdown"
									placeholder="Select One"
									selectedValue={this.state.selectedValue}
									onValueChange={selectedValue => {
										const newCategory = this.props.categoryList.filter(
											category => {
												return selectedValue === category.name ? true : false;
											}
										);
										console.log(newCategory);
										this.setState({
											selectedValue: selectedValue,
											category: newCategory[0]
										});
									}}
								>
									{this.categoryListPickerItems(this.props.categoryList)}
								</Picker>
								<Icon
									name="md-options"
									style={{
										marginRight: 15,
										width: 27,
										fontSize: 27
									}}
									onPress={() => this.props.navigation.navigate('NewCategory')}
								/>
								{/* <Button rounded small>
										<Text>{I18n.t('new_task.new_list_btn')}</Text>
									</Button> */}
							</Form>
						</Content>
					</Container>
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
	},
	calendar: {
		position: 'absolute',
		display: 'flex',
		alignSelf: 'center',
		flexDirection: 'column',
		zIndex: 999,
		padding: 4,
		paddingBottom: 50,
		marginTop: 5,
		backgroundColor: '#E9E9EF'
	},
	confirmButton: {
		position: 'absolute',
		zIndex: 999,
		top: 5,
		backgroundColor: 'yellow',
		right: 10
	}
});

function mapStateToProps(state) {
	return {
		categoryList: state.get('categoryList')
	};
}

export default connect(mapStateToProps)(NewTaskScreen);
