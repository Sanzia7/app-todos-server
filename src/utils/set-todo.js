export const setTodo = (todos, newDataTodo) =>
	todos.map((todo) =>
		todo.id === newDataTodo.id
			? {
					...todo,
					...newDataTodo,
				}
			: todo,
	)

// todos.map((todo) => {
// 	if (todo.id === newDataTodo.id) {
// 		return {
// 			...todo,
// 			...newDataTodo,
// 		}
// 	}
// 	return todo
// })
