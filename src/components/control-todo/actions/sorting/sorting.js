import { useState } from 'react'
import styles from './sorting.module.css'
import { Button } from '../../../button/button'

export const Sorting = ({ onSorting }) => {
	const [isEnabled, setIsEnabled] = useState(false)

	const onChange = ({ target }) => {
		setIsEnabled(target.checked)
		onSorting(target.checked)
	}

	return (
		<Button>
			<input
				className={styles.checkbox}
				type="checkbox"
				id="sorting-btn"
				checked={isEnabled}
				onChange={onChange}
			/>
			<label className={styles.label} htmlFor="sorting-btn">
				A&darr;
			</label>
		</Button>
	)
}

// 	return (
// 		<button className={styles.btn}>
// 			<input
// 				className={styles.checkbox}
// 				type="checkbox"
// 				checked={isEnabled}
// 				onChange={onChange}
// 			/>
// 		</button>
// 	)
// }
