import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import { Root } from 'native-base';
import { Font, AppLoading } from 'expo';

import HomeScreen from './app/components/Home/HomeScreen';
import TaskScreen from './app/components/Task/TaskScreen';
import NewTaskScreen from './app/components/NewTask/NewTaskScreen';

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
				<Root>
					<AppLoading />
				</Root>
			);
		}
		return (
			<Root>
				<AppNavigator />
			</Root>
		);
	}
}
