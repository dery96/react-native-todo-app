import { NEW_TASK, DELETE_TASK } from '../actions/types';

const initialState = {
	tasks: [],
	lists: ['Work', 'Home', 'Project']
};

const app = (state = initialState, action) => {
	switch (action.type) {
	case NEW_TASK:
		return Object.assign({}, state, { tasks: action.task });
	case DELETE_TASK:
		return Object.assign({}, state, { tasks: [] });
	default:
		return state;
	}
};

export default app;
