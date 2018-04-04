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
			active: false
		};
		this.filterOptions = this.filterOptions.bind(this);
		this.filterTasks = this.filterTasks.bind(this);
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
						this.setState({ active: !this.state.active });
					}}
				>
					<Text>{' ' + category[0].toUpperCase() + category.slice(1)}</Text>
				</Button>
			);
		});
	}

	filterTasks() {
		return this.props.tasks.filter(task => {
			if (this.props.filter === 'all') {
				return true;
			} else if (this.props.filter === task.category) {
				return true;
			} else {
				return false;
			}
		});
	}

	render() {
		return (
			<Container style={{ paddingTop: 30 }}>
				<Header>
					<Left>
						<Button
							transparent
							onPress={() => {
								this.setState({ active: !this.state.active });
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
						<Button transparent>
							<Icon name="apps" />
						</Button>
					</Right>
				</Header>
				{this.state.active ? (
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
				<TaskList tasks={this.filterTasks()} />
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
