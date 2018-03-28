import React, { Component } from 'react';
import { View } from 'react-native';
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
	Fab
} from 'native-base';

export default class ToDoScreen extends Component {
	constructor(props) {
		super(props);
		this.state = {
			active: 'true'
		};
	}
	static navigationOptions = {
		header: null
	};

	render() {
		return (
			<Container style={{ paddingTop: 30 }}>
				<Header>
					<Left>
						<Button transparent>
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
