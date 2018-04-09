import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import { Root } from 'native-base';
import { Font, AppLoading } from 'expo';

import { Provider } from 'react-redux';
import configureStore from './app/config/configureStore';

import HomeScreen from './app/components/Home/HomeScreen';
import TaskScreen from './app/components/Task/TaskScreen';
import NewTaskScreen from './app/components/NewTask/NewTaskScreen';
import NewCategoryScreen from './app/components/NewCategory/NewCategoryScreen';
import PomodoroScreen from './app/components/Pomodoro/PomodoroScreen';

const { NativeModules } = require('react-native');
const { RNI18n } = NativeModules;

const AppNavigator = StackNavigator(
	{
		Home: {
			screen: HomeScreen
		},
		Task: {
			screen: TaskScreen
		},
		NewTask: {
			screen: NewTaskScreen
		},
		NewCategory: {
			screen: NewCategoryScreen
		},
		Pomodoro: {
			screen: PomodoroScreen
		}
	},
	{
		initialRouteName: 'Home'
		// navigationOptions: {
		// 	headerStyle: {
		// 		paddingTop: 30,
		// 		paddingBottom: 5
		// 	}
		// }
	}
);

export default class App extends Component {
	constructor(props) {
		super(props);
		this.state = { loading: true };
	}

	async componentWillMount() {
		await Font.loadAsync({
			Roboto: require('native-base/Fonts/Roboto.ttf'),
			Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf')
		});
		this.setState({ loading: false });
	}

	render() {
		if (this.state.loading) {
			return (
				<Provider store={configureStore}>
					<Root>
						<AppLoading />
					</Root>
				</Provider>
			);
		}
		return (
			<Provider store={configureStore}>
				<Root>
					<AppNavigator />
				</Root>
			</Provider>
		);
	}
}
