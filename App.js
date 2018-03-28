import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';

import HomeScreen from './app/screens/HomeScreen';

const RootStack = StackNavigator(
	{
		Home: {
			screen: HomeScreen
		}
	},
	{
		initialRouteName: 'Home'
	}
);

export default class App extends React.Component {
	render() {
		return <RootStack />;
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center'
	},
	strong: {
		fontWeight: '600',
		fontSize: 25
	}
});
