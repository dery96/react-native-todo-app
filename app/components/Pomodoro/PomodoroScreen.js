import React, { Component } from 'react';
import { View, Text, StyleSheet, Vibration } from 'react-native';
import { connect } from 'react-redux';
import {
	Container,
	Content,
	Title,
	Button,
	Icon,
	Form,
	Picker
} from 'native-base';

import I18n from '../../i18n/i18n';
import NewHeader from '../NewHeader';

const DURATION = 3000;
const PATTERN = [1000, 2000, 3000];

class PomodoroScreen extends Component {
	static navigationOptions = {
		header: null
	};

	constructor(props) {
		super(props);
		this.state = {
			timeDuration: 3120,
			selectedTask: '',
			timer: undefined,
			selectedTask: undefined
		};

		this.startTime = this.startTime.bind(this);
		this.stopTime = this.stopTime.bind(this);
		this.reduceTime = this.reduceTime.bind(this);
		this.tasksListPickerItems = this.tasksListPickerItems.bind(this);
	}

	tasksListPickerItems() {
		return this.props.tasks.map((task, index) => {
			return <Picker.Item label={task.name} value={task} key={index} />;
		});
	}

	startTime() {
		if (!this.state.timer) {
			const timeDuration =
				Number.parseInt(this.state.minutes) * 60 +
				Number.parseInt(this.state.seconds);
			this.setState({
				timer: setInterval(this.reduceTime, 1000)
			});
		}
	}

	stopTime() {
		if (this.state.timer) {
			clearInterval(this.state.timer);
			this.setState({ timer: undefined });
		}
	}

	clearTime() {
		this.setState({ timeDuration: 3120 });
	}

	reduceTime() {
		if (this.state.timeDuration === 0) {
			this.stopTime();
			Vibration.vibrate(DURATION);
		} else {
			this.setState({
				timeDuration: this.state.timeDuration - 1
			});
		}
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
				<NewHeader
					navigation={this.props.navigation}
					title={I18n.t('pomodoro.title')}
					noTick
				/>
				<View style={styles.taskInformationPicker}>
					<Text
						style={[
							styles.taskInformationText,
							{ fontWeight: '600', marginTop: 20 }
						]}
					>
						Pick task to work on!
					</Text>
					<Picker
						style={{}}
						mode="dropdown"
						placeholder="Select One"
						selectedValue={this.state.selectedTask}
						onValueChange={selectedTask => {
							this.setState({
								selectedTask: selectedTask
							});
						}}
					>
						{this.tasksListPickerItems()}
					</Picker>
					{this.state.selectedTask ? (
						<View style={styles.taskInformation}>
							<View style={styles.taskInformationItem}>
								<Text style={styles.taskInformationText}>Name:</Text>
								<Text style={styles.taskInformationText}>
									{this.state.selectedTask.name}
								</Text>
							</View>
							<View style={styles.taskInformationItem}>
								<Text style={styles.taskInformationText}>Category:</Text>
								<Text
									style={[
										{ color: this.state.selectedTask.category.color },
										styles.taskInformationText
									]}
								>
									{this.state.selectedTask.category.name}
								</Text>
							</View>
							<View style={styles.taskInformationItem}>
								<Text style={styles.taskInformationText}>
									Pomodoro Sessions:
								</Text>
								<Text style={styles.taskInformationText}>
									{this.state.selectedTask.pomodoroTimes}
								</Text>
							</View>
						</View>
					) : (
						<View style={{ position: 'absolute', width: 1, height: 1 }} />
					)}
				</View>
				<Container style={styles.timerContainer}>
					<Text
						style={{
							marginTop: 30,
							fontSize: 140,
							fontWeight: '100',
							textAlign: 'center'
						}}
					>
						{Math.floor(this.state.timeDuration / 60) +
							':' +
							(this.state.timeDuration -
								Math.floor(this.state.timeDuration / 60) * 60)}
					</Text>
				</Container>
				<Container style={styles.buttonsContainer}>
					<Button
						rounded
						onPress={() => this.startTime()}
						style={styles.button}
					>
						<Icon name="stopwatch" style={styles.buttonsText} />
						<Title style={styles.buttonsText}>{I18n.t('pomodoro.start')}</Title>
					</Button>
					<Button rounded onPress={() => this.stopTime()} style={styles.button}>
						<Icon name="pause" style={styles.buttonsText} />
						<Title style={styles.buttonsText}>{I18n.t('pomodoro.stop')}</Title>
					</Button>
					<Button
						rounded
						onPress={() => this.clearTime()}
						style={[styles.button, { paddingRight: 5 }]}
					>
						<Icon name="trash" style={styles.buttonsText} />
						{/* <Title style={styles.buttonsText}>
								{I18n.t('pomodoro.clear')}
							</Title> */}
					</Button>
				</Container>
			</Container>
		);
	}
}

const styles = StyleSheet.create({
	timerContainer: {
		display: 'flex',
		justifyContent: 'flex-start',
		alignItems: 'center',
		margin: 'auto',
		height: 100
	},
	buttonsContainer: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center'
	},
	buttonsText: {
		marginRight: 10
	},
	button: {
		marginRight: 5
	},
	taskInformationPicker: { marginLeft: 15, marginRight: 15 },
	taskInformation: {},
	taskInformationText: {
		fontSize: 19
	},
	taskInformationItem: {
		marginTop: 5,
		display: 'flex',
		justifyContent: 'space-between',
		flexDirection: 'row'
	}
});

function mapStateToProps(state) {
	return {
		tasks: state.get('tasks')
	};
}

export default connect(mapStateToProps)(PomodoroScreen);
