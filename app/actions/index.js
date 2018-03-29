import { NEW_TASK, DELETE_TASK } from './types.js';

export function newTask(data) {
	return {
		type: NEW_TASK,
		payload: data
	};
}

export function deleteTask(error) {
	return {
		type: DELETE_TASK,
		payload: error
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
	newTask,
	deleteTask
};
