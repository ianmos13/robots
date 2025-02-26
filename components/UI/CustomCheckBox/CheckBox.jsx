import React from 'react'
import styles from './CheckBox.module.scss'

export default function CheckBox({ value, onChange, checkForm }) {
	const [error, setError] = React.useState(false)

	React.useEffect(() => {
		if (checkForm) {
			setError(!value)
		}
	}, [checkForm, value])

	return (
		<div className={`${styles.container} ${error && styles.errorContainer}`}>
			<input
				type='checkbox'
				id='consent'
				checked={value}
				onChange={e => onChange(e.target.checked)}
				required
				className={styles.checkBox}
			/>
			<label htmlFor='consent'>
				<span className={styles.customMarker}>
					<svg
						width='12'
						height='9'
						viewBox='0 0 12 9'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'
					>
						<path
							d='M1 5.01786L3.45455 7.42857L10 1'
							stroke='#0149BF'
							strokeWidth='2'
						/>
					</svg>
				</span>
				Заполняя форму, вы соглашаетесь на{' '}
				<a href='/privacy-policy' target='_blank' rel='noreferrer'>
					обработку персональных данных
				</a>
			</label>
		</div>
	)
}
