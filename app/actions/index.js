import {
	NEW_TASK,
	DELETE_TASK,
	NEW_LIST,
	CHANGE_TASK_STATUS
} from './types.js';

export function newTaskAction(data) {
	return {
		type: NEW_TASK,
		data: data
	};
}

export function deleteTaskAction(data) {
	return {
		type: DELETE_TASK,
		payload: data
	};
}

export function changeTaskStatusAction(data) {
	return {
		type: CHANGE_TASK_STATUS,
		data: data
	};
}

export function newListAction(data) {
	return {
		type: NEW_LIST,
		data: data
	};
}

// export function getData() {
// 	return dispatch => {
// 		// set state to "loading"
// 		dispatch(getDataRequested());

// 		fetch('https://api.github.com/users/burczu/repos')
// 			.then(response => response.json())
// 			.then(data => {
// 				// set state for success
// 				dispatch(getDataDone(data));
// 			})
// 			.catch(error => {
// 				// set state for error
// 				dispatch(getDataFailed(error));
// 			});
// 	};
// }

export default {
	newTaskAction,
	deleteTaskAction,
	changeTaskStatusAction
};
