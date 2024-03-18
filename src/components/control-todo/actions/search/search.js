import {useRef, useState } from 'react'
//import { Button } from '../../../button/button'
import { debounce } from './utils-search'
import styles from './search.module.css'

export const Search = ({ onSearch }) => {
	const [value, setValue] = useState('')

	const debouncedOnSearch = useRef(debounce(onSearch, 2500)).current

	const onChange = ({target}) => {
		setValue(target.value)
		debouncedOnSearch(target.value)
	}

	const onSubmit = (event) => {
		event.preventDefault()
		onSearch(value)
	}

	return (
			<form className={styles.form} onSubmit={onSubmit}>
				<input
					className={styles.search}
					type="text"
					placeholder="Searching..."
					value={value}
					onChange={onChange}
				/>
			</form>

	)
}

// export const Search = ({ onSearch }) => {
// 	const [value, setValue] = useState('')
//
// 	const onChange = ({ target }) => setValue(target.value)
//
// 	const onSubmit = (event) => {
// 		event.preventDefault()
// 		onSearch(value)
// 	}
//
// 	return (
// 			<form className={styles.form} onSubmit={onSubmit}>
// 				<input
// 					className={styles.search}
// 					type="text"
// 					placeholder="Searching..."
// 					value={value}
// 					onChange={onChange}
// 				/>
// 				<Button type="submit">🧐</Button>
// 			</form>
//
// 	)
// }
