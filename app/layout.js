import './globals.scss'
import { Providers } from './Providers'

export const metadata = {
	title: 'Промышленные Роботы CRP',
	description: 'Промышленные Роботы CRP',
}

export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<head />
			<body suppressHydrationWarning={true}>
				<Providers>{children}</Providers>
			</body>
		</html>
	)
}
