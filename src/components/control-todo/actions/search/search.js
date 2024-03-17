import { useState } from 'react'
import { Button } from '../../../button/button'
import styles from './search.module.css'

export const Search = ({ onSearch }) => {
	const [value, setValue] = useState('')

	const onChange = ({ target }) => setValue(target.value)

	const onSubmit = (event) => {
		event.preventDefault()
		onSearch(value)
	}

	return (
		<>
			<form className={styles.form} onSubmit={onSubmit}>
				<input
					className={styles.search}
					type="text"
					placeholder="Searching..."
					value={value}
					onChange={onChange}
				/>
				<Button type="submit">🧐</Button>
			</form>
		</>
	)
}
