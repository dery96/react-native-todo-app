import React, { Component } from 'react';
import { connect } from 'react-redux';
import { StyleSheet, View } from 'react-native';

import {
	Container,
	Header,
	Content,
	Card,
	CardItem,
	Text,
	Body,
	CheckBox
} from 'native-base';

import Task from './Task';
class TaskList extends Component {
	constructor(props) {
		super(props);
		this.renderTasks = this.renderTasks.bind(this);
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

	render() {
		return (
			<Container style={{ padding: 21, paddingBottom: 100, flex: 20 }}>
				<Content style={{ height: '100%' }}>{this.renderTasks()}</Content>
			</Container>
		);
	}
}

function mapStateToProps(state) {
	return {
		tasks: state.get('tasks')
	};
}

export default connect(mapStateToProps)(TaskList);
