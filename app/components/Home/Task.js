import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { Card, CardItem, CheckBox, Body, Text } from 'native-base';

import { changeTaskStatusAction } from '../../actions/';

class Task extends Component {
	constructor(props) {
		super(props);
		this.changeTaskStatus = this.changeTaskStatus.bind(this);
		this.state = {
			done: this.props.done
		};
	}

	changeTaskStatus() {
		this.props.dispatch(
			changeTaskStatusAction({
				name: this.props.name
			})
		);
		this.props.done = !this.props.done;
	}

	render() {
		return (
			<Card style={styles.taskMargin}>
				<CardItem>
					<CheckBox
						style={styles.checkBox}
						checked={this.state.done}
						color={'black'}
						onPress={() => this.setState({ done: !this.state.done })}
					/>
					<Body style={{ paddingLeft: 30 }}>
						<Text style={styles.taskName}>{this.props.name}</Text>
						<Text style={styles.taskDate}>{this.props.until}</Text>
					</Body>
					<View style={styles.cornerRibbon}>
						<Text style={styles.cornerRibbonText}>{this.props.category}</Text>
					</View>
				</CardItem>
			</Card>
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
	},
	cornerRibbon: {
		backgroundColor: '#e43',
		width: 250,
		top: 18,
		right: -100,
		position: 'absolute',
		transform: [{ rotate: '45deg' }]
	},
	cornerRibbonText: {
		textAlign: 'center',
		lineHeight: 20,
		fontSize: 10,
		color: 'white'
	},
	cornerRibbonShadow: {
		borderWidth: 1,
		borderRadius: 2,
		borderColor: '#ddd',
		borderBottomWidth: 0,
		shadowColor: '#000',
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.8,
		shadowRadius: 2,
		elevation: 1,
		marginLeft: 5,
		marginRight: 5,
		marginTop: 10
	},
	checkBox: {
		position: 'absolute',
		left: 18,
		padding: 10
	}
});

export default Task;
