import {
	NEW_TASK,
	DELETE_TASK,
	NEW_CATEGORY,
	CHANGE_TASK_STATUS,
	CHANGE_FILTER
} from '../actions/types';
import { Map } from 'immutable';

const initialState = Map({
	tasks: [
		{
			name: 'First task from redux state',
			until: 'Tue Apr 6',
			since: undefined,
			category: { name: 'No category', color: '#F0AD4E' },
			pomodoroTimes: 0,
			done: false
		},
		{
			name: 'React project',
			until: 'Tue Apr 10',
			since: undefined,
			category: { name: 'Work', color: '#e43' },
			pomodoroTimes: 0,
			done: false
		},
		{
			name: 'Clean the carpet',
			until: 'Thr Apr 12',
			since: undefined,
			category: { name: 'Home', color: '#0275D8' },
			pomodoroTimes: 0,
			done: false
		},
		{
			name: 'Visit Sara',
			until: 'Sat Apr 14',
			since: undefined,
			category: { name: 'Home', color: '#0275D8' },
			pomodoroTimes: 0,
			done: false
		},
		{
			name: 'Unity Project',
			until: 'Fri Apr 21',
			since: undefined,
			category: { name: 'University', color: '#5BC0DE' },
			pomodoroTimes: 0,
			done: false
		}
	],
	categoryList: [
		{ name: 'Work', color: '#e43' },
		{ name: 'Home', color: '#0275D8' },
		{ name: 'No category', color: '#F0AD4E' },
		{ name: 'University', color: '#5BC0DE' }
	],
	colors: ['#e43', '#292B2C', '#F0AD4E', '#5BC0DE', '#5CB85C', '#0275D8'],
	filter: 'all'
});

const actionsMap = {
	[NEW_TASK]: (state, action) => {
		const category = {
			name: action.data.category.name,
			color: action.data.category.color
		};
		action.data.category = category;
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

	[NEW_CATEGORY]: (state, action) => {
		const categoryList = [
			...state.get('categoryList'),
			{ name: action.data.name, color: action.data.color }
		];
		return state.merge(
			Map({
				categoryList
			})
		);
	},

	[CHANGE_TASK_STATUS]: (state, action) => {
		const copyTasks = [...state.get('tasks')];
		const findSpecific = (name, tasks) => {
			tasks.map(task => {
				if (task.name === name) {
					task.done = !task.done;
				}
			});
			return tasks;
		};
		const newtasks = findSpecific(action.data.name, copyTasks);
		const tasks = [...newtasks];
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
