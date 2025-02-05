import ContactsBlock from '@/components/Contacts/ContactsBlock/ContactsBlock'
import Details from '@/components/Contacts/Details/Details'
import MapComponent from '@/components/Contacts/MapComponent/MapComponent'
import YandexMap from '@/components/Contacts/YandexMap/YandexMap'
import ContactUs from '@/components/UI/ContactUs/ContactUs'

export default function page() {
	return (
		<div>
			<YandexMap />
			<ContactsBlock />
			<MapComponent />
			<Details />
			<ContactUs />
		</div>
	)
}
