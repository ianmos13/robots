import React from 'react'
import styles from './CheckBox.module.scss'

export default function CheckBox({ value, onChange, checkForm }) {
	const [error, setError] = React.useState(false)

	React.useEffect(() => {
		if (checkForm) {
			if (!value) {
				setError(true)
			} else {
				setError(false)
			}
		}
	}, [checkForm, value])

	return (
		<div className={`${styles.container} ${error && styles.errorContainer}`}>
			<input
				type='checkbox'
				checked={value}
				onChange={e => onChange(e.target.checked)}
				required
			/>
			<div className={styles.info}>
				Заполняя форму, вы соглашаетесь на{' '}
				<a href='#' target='_blank' rel='noreferrer'>
					обработку персональных данных
				</a>
			</div>
		</div>
	)
}
