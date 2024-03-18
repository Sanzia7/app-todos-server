export const debounce = (fn, delay) => {
	let timerId; //хранение в замыкании

	return (...arg) => {
		clearTimeout(timerId);//отмена предыдущего
		timerId = setTimeout(fn, delay, ...arg);//вызов текущего
	}
}


