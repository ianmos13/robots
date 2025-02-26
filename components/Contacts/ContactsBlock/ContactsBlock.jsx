import styles from './ContactsBlock.module.scss'

export default function Contacts() {
	return (
		<>
			<div className={styles.pageHeader}>
				<h1>КОНТАКТЫ</h1>
			</div>
			<section className={styles.container}>
				<div className={styles.tileContainer}>
					<div className={styles.tile}>
						<div className={styles.header}>Главный офис</div>
						<div className={styles.infoContainer}>
							<div className={styles.buttonsContainer}>
								<div className={styles.button}>
									<a
										href='https://t.me/@crprobot_manager'
										target='_blank'
										rel='noopener noreferrer'
										className={styles.telegram}
									>
										<img src='/images/icons/tg-icon-blue.svg' alt='Telegram' />
									</a>
								</div>
								<div className={styles.button}>
									<a
										href='whatsapp://chat?number=84992885394'
										target='_blank'
										rel='noopener noreferrer'
										className={styles.whatsapp}
									>
										<img
											src='/images/icons/whatsapp-icon-blue.svg'
											alt='WhatsApp'
										/>
									</a>
								</div>
							</div>
							<p className={styles.text}>+ 7 499 288 5394</p>
							<p className={styles.text}>tech@crp-robot.ru</p>
							<p className={styles.text}>Москва, ул.Комсомольская 12 б</p>
						</div>
					</div>
					<div className={styles.tile}>
						<div className={styles.header}>Техническая поддержка</div>
						<div className={styles.infoContainer}>
							<div className={styles.buttonsContainer}>
								<div className={styles.button}>
									<a
										href='https://t.me/@crprobot_manager'
										target='_blank'
										rel='noopener noreferrer'
										className={styles.telegram}
									>
										<img src='/images/icons/tg-icon-blue.svg' alt='Telegram' />
									</a>
								</div>
								<div className={styles.button}>
									<a
										href='whatsapp://chat?number=84992885394'
										target='_blank'
										rel='noopener noreferrer'
										className={styles.whatsapp}
									>
										<img
											src='/images/icons/whatsapp-icon-blue.svg'
											alt='WhatsApp'
										/>
									</a>
								</div>
							</div>
							<p className={styles.text}>+ 7 499 288 5394</p>
							<p className={styles.text}>tech@crp-robot.ru</p>
							<p className={styles.text}>Москва, ул.Комсомольская 12 б</p>
						</div>
					</div>
					<div className={styles.tile}>
						<div className={styles.header}>Гарантийное обслуживание</div>
						<div className={styles.infoContainer}>
							<div className={styles.buttonsContainer}>
								<div className={styles.button}>
									<a
										href='https://t.me/@crprobot_manager'
										target='_blank'
										rel='noopener noreferrer'
										className={styles.telegram}
									>
										<img src='/images/icons/tg-icon-blue.svg' alt='Telegram' />
									</a>
								</div>
								<div className={styles.button}>
									<a
										href='whatsapp://chat?number=84992885394'
										target='_blank'
										rel='noopener noreferrer'
										className={styles.whatsapp}
									>
										<img
											src='/images/icons/whatsapp-icon-blue.svg'
											alt='WhatsApp'
										/>
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}
