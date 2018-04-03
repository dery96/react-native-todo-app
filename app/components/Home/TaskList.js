import React, { Component } from 'react';
import { connect } from 'react-redux';
import { StyleSheet, View } from 'react-native';

import { Container, Content } from 'native-base';

import Task from './Task';
class TaskList extends Component {
	constructor(props) {
		super(props);
		this.renderTasks = this.renderTasks.bind(this);
		this.filterTasks = this.filterTasks.bind(this);
	}

	renderTasks() {
		return this.props.tasks.map((task, index) => {
			return (
				<View key={index}>
					<Task
						name={task.name}
						category={task.category}
						done={task.done}
						until={task.until}
						since={task.since}
					/>
				</View>
			);
		});
	}

	filterTasks() {
		return this.props.tasks.map(task => {
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
			<Container style={{ padding: 21, paddingBottom: 100, flex: 20 }}>
				<Content style={{ height: '100%' }}>
					{this.renderTasks(this.filterTasks())}
				</Content>
			</Container>
		);
	}
}

function mapStateToProps(state) {
	return {
		tasks: state.get('tasks'),
		filter: state.get('filter')
	};
}

export default connect(mapStateToProps)(TaskList);
