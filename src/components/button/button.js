import styles from './button.module.css'

export const Button = ({ children, onClick }) => {
	return (
		<button className={styles.btn} onClick={onClick}>
			{children}
		</button>
	)
}

