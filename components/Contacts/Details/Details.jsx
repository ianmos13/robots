import DownloadDetailsButton from '@/components/UI/Buttons/DownloadDetailsButton/DownloadDetailsButton'
import styles from './Details.module.scss'

export default function Details() {
	return (
		<section className={styles.container}>
			<div className={styles.headerContainer}>
				<div className={styles.header}>РЕКВИЗИТЫ</div>
				<div className={styles.buttonContainer}>
					<DownloadDetailsButton text={'Скачать реквизиты'} />
				</div>
			</div>
			<div className={styles.infoContainer}>
				<div className={styles.name}>
					ОБЩЕСТВО С ОГРАНИЧЕННОЙ ОТВЕТСТВЕННОСТЬЮ «СМТ»
				</div>
				<div className={styles.rowContainer}>
					<div className={styles.description}>Юридический адрес:</div>
					<div className={styles.text}>
						143002, Обл Московская, Г.О. Одинцовский, г Одинцово, ш Можайское,
						дом 8, этаж 1 помещ. 2
					</div>
				</div>
				<div className={styles.rowContainer}>
					<div className={styles.description}>Фактический адрес:</div>
					<div className={styles.text}>
						143002, Московская область, г. Одинцово, Можайское шоссе, 8к1
					</div>
				</div>
				<div className={styles.rowContainer}>
					<div className={styles.description}>Почтовый адрес:</div>
					<div className={styles.text}>
						143002, Московская область, г. Одинцово, Можайское шоссе, 8
					</div>
				</div>
				<div className={styles.rowContainer}>
					<div className={styles.description}>Телефон:</div>
					<div className={styles.text}>+7 495 111 7689</div>
				</div>
				<div className={styles.rowContainer}>
					<div className={styles.description}>Электронная почта:</div>
					<div className={styles.text}>info@crp-robot.ru</div>
				</div>
				<div className={styles.rowContainer}>
					<div className={styles.description}>ИНН:</div>
					<div className={styles.text}>7751180991</div>
				</div>
				<div className={styles.rowContainer}>
					<div className={styles.description}>КПП:</div>
					<div className={styles.text}>503201001</div>
				</div>
				<div className={styles.rowContainer}>
					<div className={styles.description}>ОГРН:</div>
					<div className={styles.text}>1207700186011</div>
				</div>
				<div className={styles.rowContainer}>
					<div className={styles.description}>ОКВЭД</div>
					<div className={styles.text}>46.69</div>
				</div>
				<div className={styles.rowContainer}>
					<div className={styles.description}>Генеральный директор</div>
					<div className={styles.text}>Обуздин Григорий Александрович</div>
				</div>
				<div className={styles.rowContainer}>
					<div className={styles.description}>Расчетный счет:</div>
					<div className={styles.text}>№40702810670010319664</div>
				</div>
				<div className={styles.rowContainer}>
					<div className={styles.description}>Банк:</div>
					<div className={styles.text}>
						МОСКОВСКИЙ ФИЛИАЛ АО КБ "МОДУЛЬБАНК"
					</div>
				</div>
				<div className={styles.rowContainer}>
					<div className={styles.description}>БИК:</div>
					<div className={styles.text}>044525092</div>
				</div>
				<div className={styles.rowContainer}>
					<div className={styles.description}>Город:</div>
					<div className={styles.text}>Москва</div>
				</div>
				<div className={styles.rowContainer}>
					<div className={styles.description}>Корр. счет:</div>
					<div className={styles.text}>30101810645250000092</div>
				</div>
			</div>
		</section>
	)
}
