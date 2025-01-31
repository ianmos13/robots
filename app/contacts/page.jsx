import ContactsBlock from '@/components/Contacts/ContactsBlock/ContactsBlock'
import Details from '@/components/Contacts/Details/Details'
import MapComponent from '@/components/Contacts/MapComponent/MapComponent'
import ContactUs from '@/components/UI/ContactUs/ContactUs'

export default function page() {
	return (
		<div>
			<ContactsBlock />
			<MapComponent />
			<Details />
			<ContactUs />
		</div>
	)
}
