import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
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
		this.filterTasks = this.filterTasks.bind(this);
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
		const filterCategory = ['all', ...this.props.categoryList];
		return filterCategory.map((category, index) => {
			return (
				<Button
					small
					key={index}
					style={{ marginTop: 5 }}
					onPress={() => {
						this.props.dispatch(changeFilterAction({ filter: category }));
						this.setState({ activeFilter: !this.state.activeFilter });
					}}
				>
					<Text>{' ' + category[0].toUpperCase() + category.slice(1)}</Text>
				</Button>
			);
		});
	}

	filterTasks() {
		return this.props.tasks.filter(task => {
			if (!task.done) {
				if (this.props.filter === 'all') {
					return true;
				} else if (this.props.filter === task.category) {
					return true;
				}
			}
			return false;
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

				<TaskList tasks={this.filterTasks()} />

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
