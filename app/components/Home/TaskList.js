import React, { Component } from 'react';
import { StyleSheet } from 'react-native';

import {
	Container,
	Header,
	Content,
	Card,
	CardItem,
	Text,
	Body
} from 'native-base';
export default class TaskList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			tasks: [
				{
					name: 'Clean Window',
					since: new Date().toDateString(),
					until: new Date().toDateString()
				},
				{
					name: 'Rect Project',
					since: new Date().toDateString(),
					until: new Date().toDateString()
				},
				{
					name: 'Easter',
					since: new Date().toDateString(),
					until: new Date().toDateString()
				},
				{
					name: 'Mechanic Visit',
					since: new Date().toDateString(),
					until: new Date().toDateString()
				},
				{
					name: 'Unity game',
					since: new Date().toDateString(),
					until: new Date().toDateString()
				},
				{
					name: 'Clean Window',
					since: new Date().toDateString(),
					until: new Date().toDateString()
				},
				{
					name: 'Rect Project',
					since: new Date().toDateString(),
					until: new Date().toDateString()
				},
				{
					name: 'Easter',
					since: new Date().toDateString(),
					until: new Date().toDateString()
				},
				{
					name: 'Mechanic Visit',
					since: new Date().toDateString(),
					until: new Date().toDateString()
				},
				{
					name: 'Unity game',
					since: new Date().toDateString(),
					until: new Date().toDateString()
				}
			]
		};
		this.renderTasks = this.renderTasks.bind(this);
	}

	renderTasks() {
		return this.state.tasks.map((task, index) => {
			return (
				<Card style={styles.taskMargin} key={index}>
					<CardItem>
						<Body>
							<Text style={styles.taskName}>{task.name}</Text>
							<Text style={styles.taskDate}>{task.until}</Text>
						</Body>
					</CardItem>
				</Card>
			);
		});
	}
	render() {
		return (
			<Container style={{ padding: 20, paddingBottom: 100, flex: 20 }}>
				<Content style={{ height: '100%' }}>{this.renderTasks()}</Content>
			</Container>
		);
	}
}

const styles = StyleSheet.create({
	taskMargin: {
		marginBottom: 10
	},
	taskName: {
		fontSize: 18
	},
	taskDate: {
		fontSize: 14,
		color: '#C82323'
	}
});
