// import React, { Component } from 'react';
// import { View, StyleSheet } from 'react-native';
// import { connect } from 'react-redux';
// import {
// 	Container,
// 	Content,
// 	Button,
// 	Icon,
// 	Text,
// 	Item,
// 	Input,
// 	Form,
// 	Picker
// } from 'native-base';

// import I18n from '../../i18n/i18n';
// import CalendarPicker from 'react-native-calendar-picker';
// import { newTaskAction } from '../../actions/';

// class NewTaskForm extends Component {
// 	constructor(props) {
// 		super(props);
// 		this.state = {
// 			taskName: undefined,
// 			dateSince: '',
// 			dateUntil: '',
// 			calendar: false,
// 			selectedDate: '',
// 			selectedValue: undefined
// 		};
// 		this.onDateChange = this.onDateChange.bind(this);
// 		this.categoryListPickerItems = this.categoryListPickerItems.bind(this);
// 		this.onSumbit = this.onSumbit.bind(this);
// 	}

// 	onDateChange(date) {
// 		if (this.state.selectedDate === 'since') {
// 			this.setState({
// 				calendar: !this.state.calendar,
// 				dateSince: date.toString().slice(0, 10)
// 			});
// 		} else {
// 			this.setState({
// 				calendar: !this.state.calendar,
// 				dateUntil: date.toString().slice(0, 10)
// 			});
// 		}
// 	}

// 	categoryListPickerItems(categoryList) {
// 		return categoryList.map((category, index) => {
// 			return <Picker.Item label={category} value={category} key={index} />;
// 		});
// 	}

// 	onSumbit(e) {
// 		const { dispatch } = this.props;
// 		e.preventDefault();
// 		dispatch(
// 			newTaskAction({
// 				task: this.state.taskName,
// 				since: this.state.dateSince,
// 				until: this.state.dateUntil
// 			})
// 		);
// 	}

// 	render() {
// 		return (
// 			<Container style={{ padding: 25 }}>
// 				{this.state.calendar ? (
// 					<View style={styles.calendar}>
// 						<Button
// 							transparent
// 							onPress={() => this.setState({ calendar: !this.state.calendar })}
// 						>
// 							<Icon active name="close-circle" style={styles.btnIconColor} />
// 						</Button>
// 						<CalendarPicker
// 							selectedDayColor="#37479F"
// 							selectedDayTextColor="#FFFFFF"
// 							onDateChange={this.onDateChange}
// 						/>
// 					</View>
// 				) : (
// 					<View style={{ position: 'absolute', width: 1, height: 1 }} />
// 				)}
// 				<Content>
// 					<Text style={styles.labels}>{I18n.t('new_task.what_to_do')}</Text>
// 					<Item style={styles.spaceBetweenInputs}>
// 						<Input
// 							placeholder={I18n.t('new_task.enter_task')}
// 							onChangeText={taskName => this.setState({ taskName })}
// 						/>
// 						<Icon active name="home" />
// 					</Item>
// 					<Text style={styles.labels}>{I18n.t('new_task.due_date')}</Text>
// 					<Item>
// 						<Input
// 							placeholder={`${I18n.t('new_task.date_not_selected')} ${I18n.t(
// 								'new_task.since'
// 							)}`}
// 							value={this.state.dateSince}
// 						/>
// 						<Button
// 							transparent
// 							onPress={() =>
// 								this.setState({
// 									calendar: !this.state.calendar,
// 									selectedDate: 'since'
// 								})
// 							}
// 						>
// 							<Icon active name="calendar" style={styles.btnIconColor} />
// 						</Button>
// 						<Button
// 							transparent
// 							onPress={() => this.setState({ dateSince: '' })}
// 						>
// 							<Icon active name="close-circle" style={styles.btnIconColor} />
// 						</Button>
// 					</Item>
// 					<Item style={styles.spaceBetweenInputs}>
// 						<Input
// 							placeholder={`${I18n.t('new_task.date_not_selected')} ${I18n.t(
// 								'new_task.until'
// 							)}`}
// 							value={this.state.dateUntil}
// 						/>
// 						<Button
// 							transparent
// 							onPress={() =>
// 								this.setState({
// 									calendar: !this.state.calendar,
// 									selectedDate: 'until'
// 								})
// 							}
// 						>
// 							<Icon active name="calendar" style={styles.btnIconColor} />
// 						</Button>
// 						<Button
// 							transparent
// 							style={{ marginLeft: 0 }}
// 							onPress={() => this.setState({ dateUntil: '' })}
// 						>
// 							<Icon active name="close-circle" style={styles.btnIconColor} />
// 						</Button>
// 					</Item>
// 					<Text style={styles.labels}>{I18n.t('new_task.add_to_list')}</Text>
// 					<Form>
// 						<Picker
// 							mode="dropdown"
// 							placeholder="Select One"
// 							selectedValue={this.state.selectedValue}
// 							onValueChange={selectedValue => this.setState({ selectedValue })}
// 						>
// 							{this.categoryListPickerItems(this.props.categoryList)}
// 						</Picker>
// 						<View
// 							style={{
// 								alignSelf: 'center',
// 								marginTop: 10
// 							}}
// 						>
// 							<Button
// 								rounded
// 								small
// 								onPress={() => this.props.navigation.navigate('NewList')}
// 							>
// 								<Text>{I18n.t('new_task.new_list_btn')}</Text>
// 							</Button>
// 						</View>
// 					</Form>
// 				</Content>
// 			</Container>
// 		);
// 	}
// }

// const styles = StyleSheet.create({
// 	labels: {
// 		fontSize: 16,
// 		fontWeight: '500'
// 	},
// 	spaceBetweenInputs: {
// 		marginBottom: 35
// 	},
// 	btnIconColor: {
// 		color: 'black',
// 		marginLeft: 0
// 	},
// 	calendar: {
// 		position: 'absolute',
// 		display: 'flex',
// 		alignSelf: 'center',
// 		flexDirection: 'column',
// 		zIndex: 999,
// 		padding: 4,
// 		paddingBottom: 50,
// 		marginTop: 5,
// 		backgroundColor: '#E9E9EF'
// 	},
// 	confirmButton: {
// 		position: 'absolute',
// 		zIndex: 999,
// 		top: 5,
// 		backgroundColor: 'yellow',
// 		right: 10
// 	}
// });

// function mapStateToProps(state) {
// 	return {
// 		categoryList: state.categoryList
// 	};
// }

// export default connect(mapStateToProps)(NewTaskForm);
