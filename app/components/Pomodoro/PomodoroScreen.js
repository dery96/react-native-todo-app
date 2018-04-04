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
			timer: undefined
		};

		this.startTime = this.startTime.bind(this);
		this.stopTime = this.stopTime.bind(this);
		this.reduceTime = this.reduceTime.bind(this);
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
			<Container style={{ marginTop: 30 }}>
				<NewHeader
					navigation={this.props.navigation}
					title={I18n.t('pomodoro.title')}
					noTick
				/>

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
	}
});

function mapStateToProps(state) {
	return {
		tasks: state.get('tasks')
	};
}

export default connect(mapStateToProps)(PomodoroScreen);
