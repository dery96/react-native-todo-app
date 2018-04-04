import {
	NEW_TASK,
	DELETE_TASK,
	NEW_LIST,
	CHANGE_TASK_STATUS,
	CHANGE_FILTER
} from '../actions/types';
import { Map } from 'immutable';

const initialState = Map({
	tasks: [
		{
			name: 'First task from redux state',
			until: 'Who knows',
			since: undefined,
			category: 'No category',
			done: false
		},
		{
			name: 'Clean the carpet',
			until: 'Thr Apr 12',
			since: undefined,
			category: 'Home',
			done: false
		},
		{
			name: 'React project',
			until: 'Who knows',
			since: undefined,
			category: 'Work',
			done: false
		},
		{
			name: 'Visit Sara',
			until: 'Sat Apr 14',
			since: undefined,
			category: 'Home',
			done: false
		}
	],
	categoryList: ['Work', 'Home', 'No category'],
	filter: 'all'
});

const actionsMap = {
	[NEW_TASK]: (state, action) => {
		const tasks = [...state.get('tasks'), action.data];
		return state.merge(
			Map({
				tasks
			})
		);
	},

	[DELETE_TASK]: (state, action) => {
		return state.merge(
			Map({
				asyncLoading: true,
				asyncError: null,
				asyncData: null
			})
		);
	},

	[NEW_LIST]: (state, action) => {
		const categoryList = [...state.get('categoryList'), action.data.name];
		return state.merge(
			Map({
				categoryList
			})
		);
	},

	[CHANGE_TASK_STATUS]: (state, action) => {
		const findSpecific = (name, tasks) => {
			tasks.map(task => {
				if (task.name === name) {
					task.done = !task.done;
				}
			});
			return tasks;
		};
		const tasks = findSpecific(action.data.name, state.get('tasks'));
		return state.merge(
			Map({
				tasks
			})
		);
	},

	[CHANGE_FILTER]: (state, action) => {
		const filter = action.data.filter;
		return state.merge(
			Map({
				filter
			})
		);
	}
};

export default function reducer(state = initialState, action = {}) {
	const fn = actionsMap[action.type];
	return fn ? fn(state, action) : state;
}
