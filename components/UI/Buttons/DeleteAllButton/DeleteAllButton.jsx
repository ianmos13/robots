import DeleteIcon from '@/public/images/icons/delete.svg'
import Image from 'next/image'
import styles from './DeleteAllButton.module.scss'

export default function DeleteAllButton() {
	return (
		<>
			<div className={styles.container}>
				<Image src={DeleteIcon} alt='Удалить' className={styles.icon} />
				<p className={styles.text}>Удалить все</p>
			</div>
		</>
	)
}
