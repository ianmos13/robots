import ContactUsButtons from '@/components/UI/ContactUsButtons/ContactUsButtons'
import styles from './ContactUs.module.scss'

export default function ContactUs() {
	return (
		<section className={styles.container}>
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
					<form>
						<div className={styles.inputContainer}>
							<div className={styles.rowContainer}>
								<div className={styles.formRow}>
									<input type='text' placeholder='Ваше имя*' required />
									<input type='tel' placeholder='Номер телефона*' required />
								</div>
								<div className={styles.formRow}>
									<input type='text' placeholder='Город*' required />
									<input type='email' placeholder='Email*' required />
								</div>
								<div className={styles.formRow}>
									<textarea placeholder='Комментарий' rows='6'></textarea>
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
									Заполняя форму, вы соглашаетесь на обработку персональных
									данных
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
