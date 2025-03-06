import FavoritesComponent from '@/components/Favorites/FavoritesComponent/FavoritesComponent'
import ContactUs from '@/components/UI/ContactUs/ContactUs'
import Breadcrumbs from "@/components/UI/Breadcrumbs/Breadcrumbs";

export default function page() {
	const breadcrumbItems = [
		{ label: "Главная", link: "/" },
		{ label: "Избранные", link: "" },
	  ];
	return (
		<>
		 	<Breadcrumbs items={breadcrumbItems} />
			<FavoritesComponent />
			<ContactUs />
		</>
	)
}
