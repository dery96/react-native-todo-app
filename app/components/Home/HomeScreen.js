import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import {
	Container,
	Header,
	Title,
	Content,
	Footer,
	FooterTab,
	Button,
	Left,
	Right,
	Body,
	Icon,
	Text,
	Fab,
	Picker
} from 'native-base';

import TaskList from './TaskList';
export default class ToDoScreen extends Component {
	static navigationOptions = {
		header: null
	};

	constructor(props) {
		super(props);
		this.state = {
			active: false
		};
		this.filterOptions = this.filterOptions.bind(this);
	}

	// filterOptions() {
	// 	return this.props.categoryList.map(() => {
	// 					return (
	// 		<Button
	// 			transparent
	// 			onPress={() => {
	// 				this.setState({ active: !this.state.active });
	// 			}}
	// 		>
	// 			<Icon name="checkbox" style={{ color: 'white' }} />
	// 			<Title> List Name</Title>
	// 		</Button>
	// 		);

	// 	})
	// }

	render() {
		return (
			<Container style={{ paddingTop: 30 }}>
				<Header>
					<Left>
						<Button
							transparent
							onPress={() => {
								this.setState({ active: !this.state.active });
							}}
						>
							<Icon name="checkbox" style={{ color: 'white' }} />
							<Title> List Name</Title>
						</Button>
					</Left>
					<Right>
						<Button transparent>
							<Icon name="search" />
						</Button>
						<Button transparent>
							<Icon name="apps" />
						</Button>
					</Right>
				</Header>
				{this.state.active ? (
					<View style={styles.filter}>
						<Text>I'm there bro</Text>
						<Text>also there</Text>
						<Text>and therer</Text>
					</View>
				) : (
					<View style={{ position: 'absolute', width: 1, height: 1 }} />
				)}
				<TaskList />
				<View style={{ flex: 1 }}>
					<Fab
						active={this.state.active}
						direction="up"
						containerStyle={{}}
						style={{ backgroundColor: '#5067FF' }}
						position="bottomRight"
						onPress={() => this.props.navigation.navigate('NewTask')}
					>
						<Icon name="add" />
						{/* <Button style={{ backgroundColor: '#34A34F' }}>
							<Icon name="logo-whatsapp" />
						</Button>
						<Button style={{ backgroundColor: '#3B5998' }}>
							<Icon name="logo-facebook" />
						</Button>
						<Button disabled style={{ backgroundColor: '#DD5144' }}>
							<Icon name="mail" />
						</Button> */}
					</Fab>
				</View>
			</Container>
		);
	}
}

const styles = StyleSheet.create({
	picker: {
		width: 120,
		position: 'absolute',
		top: 0,
		left: 30
	},
	pickerItem: {
		color: 'white'
	},
	filter: {
		position: 'relative',
		// top: 30,
		display: 'flex',
		alignSelf: 'flex-start',
		flexDirection: 'column',
		zIndex: 999,
		backgroundColor: 'white'
	}
});


function mapStateToProps(state) {
	return {
		categoryList: state.get('categoryList'),
	};
}

export default connect(mapStateToProps)(ToDoScreen);
