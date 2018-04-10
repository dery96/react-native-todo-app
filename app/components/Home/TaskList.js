import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Container, Content } from 'native-base';

import Task from './Task';

class TaskList extends Component {
	constructor(props) {
		super(props);
		this.renderTasks = this.renderTasks.bind(this);
	}

	renderTasks() {
		return this.props.tasks.map((task, index) => {
			return (
				<Task
					name={task.name}
					category={task.category}
					done={task.done}
					until={task.until}
					since={task.since}
					key={index}
				/>
			);
		});
	}

	render() {
		return (
			<View style={{}}>
				{this.props.tasks.length === 0 ? (
					<View style={{ display: 'flex', flex: 1, justifyContent: 'center' }}>
						<Text style={{ color: 'grey', textAlign: 'center' }}>
							There's nothing to do...
						</Text>
					</View>
				) : (
					<View>{this.renderTasks()}</View>
				)}
			</View>
		);
	}
}

export default TaskList;
