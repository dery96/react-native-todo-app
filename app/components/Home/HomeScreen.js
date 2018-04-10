import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import moment from 'moment';

import {
	Container,
	Header,
	Title,
	Content,
	Footer,
	FooterTab,
	Button,
	Left,
	Right,
	Body,
	Icon,
	Text,
	Fab,
	Picker
} from 'native-base';

import { changeFilterAction } from '../../actions';
import TaskList from './TaskList';

class ToDoScreen extends Component {
	static navigationOptions = {
		header: null
	};

	constructor(props) {
		super(props);
		this.state = {
			activeFilter: false,
			activeMenu: false
		};

		this.filterOptions = this.filterOptions.bind(this);
		this.filterTasksByCategory = this.filterTasksByCategory.bind(this);
		this.filterTasksByDays = this.filterTasksByDays.bind(this);
		this.renderTasks = this.renderTasks.bind(this);
		this.renderMenu = this.renderMenu.bind(this);
		this.renderFab = this.renderFab.bind(this);
	}

	renderMenu() {
		return (
			<View style={styles.menu}>
				<Button
					small
					style={{ marginTop: 5 }}
					onPress={() => {
						this.setState({
							activeMenu: !this.state.activeMenu
						});
						this.props.navigation.navigate('Pomodoro');
					}}
				>
					<Text>Pomodoro</Text>
				</Button>
				<Button
					small
					style={{ position: 'relative', right: -20, marginTop: 5 }}
					onPress={() => {
						this.setState({
							activeMenu: !this.state.activeMenu
						});
					}}
				>
					<Text>Credits</Text>
				</Button>
			</View>
		);
	}

	renderFab() {
		return (
			<View style={{ flex: 1 }}>
				<Fab
					active={this.state.active}
					direction="up"
					containerStyle={{}}
					style={{ backgroundColor: '#5067FF' }}
					position="bottomRight"
					onPress={() => this.props.navigation.navigate('NewTask')}
				>
					<Icon name="add" />
				</Fab>
			</View>
		);
	}

	filterOptions() {
		const filterCategory = [
			{ name: 'all', color: undefined },
			...this.props.categoryList
		];
		return filterCategory.map((category, index) => {
			return (
				<Button
					small
					key={index}
					style={{ marginTop: 5 }}
					onPress={() => {
						this.props.dispatch(changeFilterAction({ filter: category.name }));
						this.setState({ activeFilter: !this.state.activeFilter });
					}}
				>
					<Text>{category.name}</Text>
				</Button>
			);
		});
	}

	filterTasksByCategory() {
		return this.props.tasks.filter(task => {
			if (this.props.filter === 'all') {
				return true;
			} else if (this.props.filter === task.category.name) {
				return true;
			}
			return false;
		});
	}

	filterTasksByDays(tasks) {
		const diffrentDays = [
			{ name: 'Overdue', from: -999, to: -1, onlyFinished: false },
			{ name: 'Today', from: 0, to: 0, onlyFinished: false },
			{ name: 'Tomorrow', from: 1, to: 1, onlyFinished: false },
			{ name: 'This week', from: 2, to: 7, onlyFinished: false },
			{ name: 'Next week', from: 8, to: 14, onlyFinished: false },
			{ name: 'Rest upcoming events', from: 15, to: 999, onlyFinished: false },
			{ name: 'Completed tasks', from: -999, to: 999, onlyFinished: true }
		];
		const actualYear = new Date().toString().slice(11, 16);
		const todayStr = new Date().toString().slice(0, 16);
		const today = moment(todayStr);

		return diffrentDays.map((timeDay, key) => {
			const newTaskSet = [...tasks];
			const filteredTasks = newTaskSet.filter(task => {
				const taskDate = task.until + ' ' + actualYear;
				daysDiff = moment.duration(moment(taskDate).diff(today)).asDays();
				if (timeDay.onlyFinished) {
					return task.done ? true : false;
				} else {
					return daysDiff >= timeDay.from &&
						daysDiff <= timeDay.to &&
						!task.done
						? true
						: false;
				}
			});
			if (filteredTasks.length > 0) {
				return (
					<View
						style={{ marginTop: 5, marginLeft: 20, marginRight: 20 }}
						key={key}
					>
						<Text
							style={{
								marginBottom: 5,
								color: timeDay.name === 'Overdue' ? '#e43' : '#0275D8'
							}}
						>
							{timeDay.name}
						</Text>
						{timeDay.name === 'Overdue' ? (
							<TaskList tasks={filteredTasks} overdue={true} />
						) : (
							<TaskList tasks={filteredTasks} overdue={false} />
						)}
					</View>
				);
			}
		});
	}

	renderTasks() {
		const filteredTasksByCategory = this.filterTasksByCategory();
		return this.filterTasksByDays(filteredTasksByCategory);
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
				<Header>
					<Left>
						<Button
							transparent
							onPress={() => {
								this.setState({
									activeFilter: !this.state.activeFilter,
									activeMenu: false
								});
							}}
						>
							<Icon name="checkbox" style={{ color: 'white' }} />
							<Title>
								{' ' +
									this.props.filter[0].toUpperCase() +
									this.props.filter.slice(1)}
							</Title>
						</Button>
					</Left>
					<Right>
						<Button transparent>
							<Icon name="search" />
						</Button>
						<Button
							transparent
							onPress={() =>
								this.setState({
									activeFilter: false,
									activeMenu: !this.state.activeMenu
								})
							}
						>
							<Icon name="apps" />
						</Button>
					</Right>
				</Header>

				{this.state.activeFilter ? (
					<View style={styles.filter}>
						<Content
							style={styles.filterContent}
							showsHorizontalScrollIndicator={false}
							showsVerticalScrollIndicator={false}
						>
							{this.filterOptions()}
						</Content>
					</View>
				) : (
					<View style={{ position: 'absolute', width: 1, height: 1 }} />
				)}

				{this.state.activeMenu ? (
					this.renderMenu()
				) : (
					<View style={{ position: 'absolute', width: 1, height: 1 }} />
				)}
				<Content style={{ paddingBottom: 500 }}>{this.renderTasks()}</Content>
				{this.renderFab()}
			</Container>
		);
	}
}

const styles = StyleSheet.create({
	picker: {
		width: 120,
		position: 'absolute',
		top: 0,
		left: 30
	},
	pickerItem: {
		color: 'white'
	},
	filter: {
		position: 'relative',
		left: 0,
		display: 'flex',
		alignSelf: 'flex-start',
		flexDirection: 'column',
		zIndex: 999,
		paddingLeft: 20,
		paddingRight: 20,
		height: 110
	},
	filterContent: {
		paddingRight: 20
	},
	menu: {
		position: 'relative',
		right: 0,
		display: 'flex',
		alignSelf: 'flex-end',
		flexDirection: 'column',
		zIndex: 999,
		paddingLeft: 20,
		paddingRight: 10,
		height: 70
	}
});

function mapStateToProps(state) {
	return {
		categoryList: state.get('categoryList'),
		tasks: state.get('tasks'),
		filter: state.get('filter')
	};
}

export default connect(mapStateToProps)(ToDoScreen);
