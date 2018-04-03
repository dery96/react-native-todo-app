import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import {
	Container,
	Content,
	Icon,
	Text,
	Body,
	Item,
	Input,
	Button
} from 'native-base';

import I18n from '../../i18n/i18n';
import { newListAction } from '../../actions/';

class NewTaskForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			listName: undefined
		};
		this.categoryList = this.categoryList.bind(this);
		this.onSumbit = this.onSumbit.bind(this);
	}

	onSumbit(e) {
		const { dispatch } = this.props;
		this.props.dispatch(
			newListAction({
				name: this.state.listName
			})
		);
		this.props.navigation.goBack();
	}

	categoryList() {
		return this.props.categoryList.map((category, index) => {
			return (
				<Text style={{ marginTop: 5 }} key={index}>
					{category}
				</Text>
			);
		});
	}
	render() {
		return (
			<Container style={{ padding: 25 }}>
				<Content>
					<Text style={styles.labels}>{I18n.t('new_list.your_task_list')}</Text>
					<View style={styles.categoryList}>{this.categoryList()}</View>

					<Item style={styles.spaceBetweenInputs}>
						<Input
							placeholder={I18n.t('new_list.enter_list')}
							onChangeText={listName => this.setState({ listName })}
						/>
					</Item>

					<View
						style={{
							alignSelf: 'center'
						}}
					>
						<Button rounded full onPress={() => this.onSumbit()}>
							<Text>{I18n.t('new_task.new_list_btn')}</Text>
						</Button>
					</View>
				</Content>
			</Container>
		);
	}
}

const styles = StyleSheet.create({
	labels: {
		fontSize: 16,
		fontWeight: '500'
	},
	spaceBetweenInputs: {
		marginBottom: 35,
		marginTop: 40
	},
	btnIconColor: {
		color: 'black',
		marginLeft: 0
	},
	categoryList: {
		marginTop: 20
	}
});

function mapStateToProps(state) {
	return {
		categoryList: state.get('categoryList')
	};
}

export default connect(mapStateToProps)(NewTaskForm);
