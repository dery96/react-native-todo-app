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
import { newCategoryAction } from '../../actions/';

class NewCategoryForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			categoryName: undefined,
			color: undefined
		};
		this.categoryList = this.categoryList.bind(this);
		this.renderColorButtons = this.renderColorButtons.bind(this);
		this.onSumbit = this.onSumbit.bind(this);
	}

	onSumbit() {
		this.props.dispatch(
			newCategoryAction({
				name: this.state.categoryName,
				color: this.state.color
			})
		);
		this.props.navigation.goBack();
	}

	categoryList() {
		return this.props.categoryList.map((category, index) => {
			return (
				<View
					style={{
						display: 'flex',
						flexDirection: 'row',
						alignItems: 'center',
						marginTop: 6,
						justifyContent: 'space-between',
						width: 180
					}}
					key={index}
				>
					<View style={{ marginRight: 5 }}>
						<Text>{category.name}:</Text>
					</View>
					<View
						style={{
							width: 25,
							height: 25,
							backgroundColor: category.color
						}}
					/>
				</View>
			);
		});
	}

	renderColorButtons() {
		return this.props.colors.map((color, index) => {
			return (
				<Button
					transparent
					style={[
						{ width: 40, height: 40, backgroundColor: color },
						this.state.color === color
							? { borderWidth: 2, borderColor: 'black' }
							: {}
					]}
					onPress={() => this.setState({ color })}
					key={index}
				/>
			);
		});
	}
	render() {
		return (
			<Container style={{ padding: 25 }}>
				<Content>
					<Text style={styles.labels}>{I18n.t('new_list.your_task_list')}</Text>
					<View style={styles.categoryList}>{this.categoryList()}</View>

					<Text style={[styles.labels, { marginTop: 40, marginBottom: 20 }]}>
						Select category color:
					</Text>
					<View
						style={{
							display: 'flex',
							flexDirection: 'row',
							justifyContent: 'space-around'
						}}
					>
						{this.renderColorButtons()}
					</View>

					<Item style={styles.spaceBetweenInputs}>
						<Input
							placeholder={I18n.t('new_list.enter_category')}
							onChangeText={categoryName => this.setState({ categoryName })}
						/>
					</Item>

					<View
						style={{
							alignSelf: 'center'
						}}
					>
						<Button rounded onPress={() => this.onSumbit()}>
							<Text style={{ color: 'white' }}>{I18n.t('new_list.btn')}</Text>
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
		categoryList: state.get('categoryList'),
		colors: state.get('colors')
	};
}

export default connect(mapStateToProps)(NewCategoryForm);
