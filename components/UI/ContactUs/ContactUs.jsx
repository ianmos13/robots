'use client'
import ContactUsButtons from '@/components/UI/ContactUsButtons/ContactUsButtons'
import CustomInput from '@/components/UI/CustomInput/CustomInput'
import React from 'react'
import styles from './ContactUs.module.scss'

export default function ContactUs({ theme }) {
	const [name, setName] = React.useState('')
	const [phone, setPhone] = React.useState('')
	const [city, setCity] = React.useState('')
	const [email, setEmail] = React.useState('')
	const [comment, setComment] = React.useState('')

	const [agreement, setAgreement] = React.useState(false)
	const [formReady, setFormReady] = React.useState(false)

	const [formSubmitted, setFormSubmitted] = React.useState(false)

	const handleSubmit = e => {
		e.preventDefault()
		setFormReady(status => !status)
		if (!validateName(name)) return
		if (!validateEmail(email)) return
		if (!validateCity(city)) return
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

	return (
		<section className={`${styles.container} ${styles[`${theme}Container`]}`}>
			<div className={styles.contactUs}>
				<div className={styles.addInfo}>
					<div className={styles.title}>
						<h4>Остались вопросы по сварочным роботам?</h4>
						<ContactUsButtons theme='contacts' />
					</div>
					<div className={styles.text}>
						Если у вас есть вопросы о сварочных роботах, комплексах,
						манипуляторах или позиционерах, или вы хотите получить коммерческое
						предложение — заполните поля, и наш менеджер свяжется с вами в
						течение 24 часов.
					</div>
				</div>
				<div className={styles.contactForm}>
					<form onSubmit={handleSubmit} noValidate>
						<div className={styles.inputContainer}>
							<div className={styles.rowContainer}>
								<div className={styles.formRow}>
									<CustomInput
										type='text'
										placeholder='Ваше имя*'
										value={name}
										onChange={e => setName(e.target.value)}
										required
										errorMessage={'Пожалуйста, введите ваше имя'}
										validate={validateName}
										checkForm={formReady}
										theme={'white'}
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
										theme={'white'}
									/>
								</div>
								<div className={styles.formRow}>
									<CustomInput
										type='text'
										placeholder='Город*'
										value={city}
										onChange={e => setCity(e.target.value)}
										required
										errorMessage={'Пожалуйста, корректно заполните поле!'}
										validate={validateCity}
										checkForm={formReady}
										theme={'white'}
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
										theme={'white'}
									/>
								</div>
								<div className={styles.formRow}>
									<textarea
										onChange={e => {
											setComment(e.target.value)
										}}
										placeholder='Комментарий'
										rows='6'
									></textarea>
								</div>
							</div>

							<div className={styles.consent}>
								<input
									type='checkbox'
									id='consent'
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
									Заполняя форму, вы соглашаетесь на {' '}
									<a href='/privacy-policy' target='_blank' rel='noreferrer'>
										обработку персональных данных
									</a>
								</label>
							</div>
						</div>
						<button type='submit' className={styles.submitButton}>
							Отправить
						</button>
					</form>
				</div>
			</div>
		</section>
	)
}

function validateName(name) {
	if (name.length < 1) return false
	return true
}
function validateCity(city) {
	if (city.length < 1) return false
	return true
}

function validatePhone(phone) {
  const regex = /^(?:\+7\d{10}|\+375\d{9}|\+374\d{8}|\+994\d{9}|\+996\d{9}|\+373\d{8}|\+992\d{9}|\+993\d{8}|\+998\d{9})$/;
  return regex.test(phone);
}

function validateEmail(email) {
	const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
	return regex.test(email)
}
