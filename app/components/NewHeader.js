import React, { Component } from 'react';
import { View } from 'react-native';
import {
	Container,
	Header,
	Button,
	Icon,
	Title,
	Text,
	Left,
	Right,
	Body,
	Content
} from 'native-base';

export default class NewHeader extends Component {
	constructor(props) {
		super(props);
	}
	static navigationOptions = {
		header: null
	};
	render() {
		return (
			<Header>
				<Left>
					<Button transparent onPress={() => this.props.navigation.goBack()}>
						<Icon name="arrow-back" style={{ color: 'white' }} />
						<Title style={{ paddingLeft: 5 }}>{this.props.title}</Title>
					</Button>
				</Left>
				<Right>
					<Button transparent>
						<Icon
							name="checkmark"
							onPress={() => this.props.navigation.goBack()}
						/>
					</Button>
				</Right>
			</Header>
		);
	}
}
