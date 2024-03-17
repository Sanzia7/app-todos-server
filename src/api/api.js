import { HTTP_METHOD } from '../constants/http-method'

//универсальная функция обертка для запросов на сервер :

const fetchServer = (method, { id, ...payload } = {}) => {
	let url = `http://localhost:3007/todos`
	let options = {
		method,
		headers: { 'Content-Type': 'application/json' },
	}

	if (method === HTTP_METHOD.GET) {
		const { searchText, isSortingAZ } = payload
		const sortingParams = isSortingAZ
			? `_sort=title&_order=asc`
			: `_sort=id&_order=desc`
		url += `?${sortingParams}&title_like=${searchText}`
	} else {
		if (method !== HTTP_METHOD.POST) {
			url += `/${id}`
		}

		if (method !== HTTP_METHOD.DELETE) {
			options.body = JSON.stringify(payload)
		}
	}

	return fetch(url, options).then((jsonData) => jsonData.json())
}

//CRUD:

export const requestCreateTodo = (newTodo) => fetchServer('POST', newTodo)

export const requestReadTodos = (searchText = '', isSortingAZ = false) =>
	fetchServer('GET', { searchText, isSortingAZ })

export const requestUpdateTodo = (todoData) => fetchServer('PATCH', todoData)

export const requestDeleteTodo = (todoId) => fetchServer('DELETE', { id: todoId })

//Документация для json-server:

//https://github.com/typicode/json-server
//https://github.com/typicode/json-server/tree/v0

//SORT

// Add _sort and _order (ascending order by default)

// GET /posts?_sort=views&_order=asc
// GET /posts/1/comments?_sort=votes&_order=asc

// For multiple fields, use the following format:

// GET /posts?_sort=user,views&_order=desc,asc

//Operators:

// Add _like to filter (RegExp supported)

// GET /posts?title_like=server
