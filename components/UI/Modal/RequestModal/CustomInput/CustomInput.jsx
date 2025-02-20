import React from 'react'
import styles from './CustomInput.module.scss'

export default function CustomInput({
	type = 'text',
	placeholder,
	value,
	onChange,
	required,
	pattern,
	errorMessage,
	validate,
	checkForm,
	...props
}) {
	const [error, setError] = React.useState('')

	React.useEffect(() => {
		if (checkForm) {
			if (!validate(value)) {
				setError(errorMessage || e.target.validationMessage)
			} else {
				setError('')
			}
		}
	}, [checkForm])

	const handleBlur = e => {
		if (!validate(e.target.value)) {
			setError(errorMessage || e.target.validationMessage)
		} else {
			setError('')
		}
	}

	const handleChange = e => {
		if (error) setError('')
		onChange(e)
	}

	return (
		<>
			<div className={styles.container}>
				<input
					type={type}
					placeholder={placeholder}
					value={value}
					onChange={handleChange}
					onBlur={handleBlur}
					required={required}
					pattern={pattern}
					className={`${styles.input} ${error && styles.errorInput}`}
					{...props}
				/>
				{error && <span className={styles.errorMessage}>{error}</span>}
			</div>
		</>
	)
}
