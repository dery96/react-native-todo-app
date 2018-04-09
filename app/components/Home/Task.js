import React, { Component } from 'react';
import { connect, bindActionCreators } from 'react-redux';
import { View, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import { Card, CardItem, CheckBox, Body, Text, Icon } from 'native-base';

import { changeTaskStatusAction } from '../../actions/';

class Task extends Component {
	constructor(props) {
		super(props);
		this.changeTaskStatus = this.changeTaskStatus.bind(this);
	}

	changeTaskStatus() {
		this.props.dispatch(
			changeTaskStatusAction({
				name: this.props.name
			})
		);
	}

	render() {
		return (
			<Card style={styles.taskMargin}>
				<CardItem>
					<CheckBox
						style={styles.checkBox}
						checked={this.props.done}
						color={'black'}
						onPress={() => this.changeTaskStatus()}
					>
						<Icon name="pause" style={styles.buttonsText} />
					</CheckBox>
					<Body style={{ paddingLeft: 30 }}>
						<Text style={styles.taskName}>{this.props.name}</Text>
						<Text style={styles.taskDate}>{this.props.until}</Text>
					</Body>
					<View
						style={[
							{ backgroundColor: this.props.category.color },
							styles.cornerRibbon
						]}
					>
						<Text style={styles.cornerRibbonText}>
							{this.props.category.name}
						</Text>
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

// Task.propTypes = {
// 	name: PropTypes.string.isRequired
// };
export default connect(null)(Task);
