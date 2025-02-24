import { useState } from 'react'
import CheckBox from '@/components/UI/CustomCheckBox/CheckBox'
import CustomInput from '@/components/UI/CustomInput/CustomInput'
import styles from './RequestModal.module.scss'

const RequestModal = ({ isOpen, onClose, text }) => {
	const [name, setName] = useState('')
	const [phone, setPhone] = useState('')
	const [email, setEmail] = useState('')
	const [agreement, setAgreement] = useState(false)
	const [formReady, setFormReady] = useState(false)

	const [formSubmitted, setFormSubmitted] = useState(false)

	if (!isOpen) return null

	const stopPropagation = e => e.stopPropagation()

	const handleSubmit = e => {
		e.preventDefault()
		setFormReady(status => !status)
		if (!validateName(name)) return
		if (!validateEmail(email)) return
		if (!validatePhone(phone)) return
		if (!agreement) return

		console.log('Форма отправлена:', {
			name,
			phone,
			email,
			agreement,
		})

		setFormSubmitted(true)
	}

	const handleClose = () => {
		setName('')
		setPhone('')
		setEmail('')
		setAgreement(false)
		setFormSubmitted(false)

		onClose()
	}

	return (
		<div className={styles.modalOverlay} onClick={handleClose}>
			<div className={styles.modalContent} onClick={stopPropagation}>
				<button className={styles.closeBtn} onClick={handleClose}>
					<img src='/images/icons/x.svg' alt='Close' />
				</button>

				{formSubmitted ? (
					<div className={styles.header}>
						<div className={styles.title}>ВАША ЗАЯВКА ОТПРАВЛЕНА</div>
						<div className={styles.desciption}>
							В ближайшее время наш<br></br> специалист свяжется с вами
						</div>
					</div>
				) : (
					<>
						<div className={styles.header}>
							<div className={styles.title}>{text}</div>
							<div className={styles.desciption}>Заполните поля данных</div>
						</div>

						<form onSubmit={handleSubmit} noValidate>
							<CustomInput
								type='text'
								placeholder='Ваше имя*'
								value={name}
								onChange={e => setName(e.target.value)}
								required
								errorMessage={'Пожалуйста, введите ваше имя'}
								validate={validateName}
								checkForm={formReady}
							/>
							<CustomInput
								type='tel'
								placeholder='Номер телефона*'
								value={phone}
								onChange={e => setPhone(e.target.value)}
								required
								errorMessage={'Пожалуйста, корректно заполните поле!'}
								validate={validatePhone}
								checkForm={formReady}
							/>
							<CustomInput
								type='email'
								placeholder='Электронная почта*'
								value={email}
								onChange={e => setEmail(e.target.value)}
								required
								errorMessage={'Пожалуйста, корректно заполните поле!'}
								validate={validateEmail}
								checkForm={formReady}
							/>
							<div className={styles.checkBoxWrapper}>
								<CheckBox
									value={agreement}
									onChange={setAgreement}
									checkForm={formReady}
								/>
							</div>
							<button type='submit' className={styles.submitBtn}>
								Отправить
							</button>
						</form>
					</>
				)}
			</div>
		</div>
	)
}

export default RequestModal

function validateName(name) {
	if (name.length < 1) return false
	return true
}

function validatePhone(phone) {
	const regex = /^(?:\+7\d{10}|\+375\d{9})$/
	return regex.test(phone)
}

function validateEmail(email) {
	const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
	return regex.test(email)
}
