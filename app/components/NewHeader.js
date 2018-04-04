import React, { Component } from 'react';
import { connect } from 'react-redux';
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

import { newTaskAction } from '../actions/';

class NewHeader extends Component {
	static navigationOptions = {
		header: null
	};

	constructor(props) {
		super(props);
		this.onSumbit = this.onSumbit.bind(this);
	}

	onSumbit(e) {
		const { dispatch, operation } = this.props;
		if (operation === 'newTask') {
			if (this.props.taskName && this.props.dateUntil) {
				this.props.dispatch(
					newTaskAction({
						name: this.props.taskName,
						since: this.props.dateSince,
						until: this.props.dateUntil,
						category: this.props.category
					})
				);
				this.props.navigation.goBack();
			}
		} else {
			this.props.navigation.goBack();
		}
	}
	render() {
		return (
			<Header>
				<Left style={{ flex: 4 }}>
					<Button transparent onPress={() => this.props.navigation.goBack()}>
						<Icon name="arrow-back" style={{ color: 'white' }} />
						<Title style={{ paddingLeft: 5 }}>{this.props.title}</Title>
					</Button>
				</Left>
				<Right>
					{!this.props.noTick ? (
						<Button transparent>
							<Icon name="checkmark" onPress={() => this.onSumbit()} />
						</Button>
					) : (
						<View style={{ position: 'absolute', width: 1, height: 1 }} />
					)}
				</Right>
			</Header>
		);
	}
}
function mapStateToProps(state) {
	return {
		tasks: state.tasks
	};
}
export default connect(mapStateToProps)(NewHeader);
