import './globals.css'

import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import { ChildProps } from '@/types'
import { ThemeProvider } from '@/components/providers/theme-provider'
import Navbar from '@/components/shared/navbar'

const montserrat = Montserrat({
	subsets: ['cyrillic', 'latin'],
	weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
	variable: '--font-montserrat',
})

export const metadata: Metadata = {
	title: 'Readopia',
	description:
		'Readopia is a dynamic eCommerce platform designed to offer a wide variety of books for all types of readers.',
	icons: {
		icon: '/shopping-cart-svgrepo-com.svg',
	},
}

export default function RootLayout({ children }: ChildProps) {
	return (
		<html lang='en' suppressHydrationWarning>
			<body className={`${montserrat.className} antialiased`}>
				<ThemeProvider
					attribute='class'
					defaultTheme='system'
					enableSystem
					disableTransitionOnChange
				>
					<Navbar />
					<main>{children}</main>
				</ThemeProvider>
			</body>
		</html>
	)
}
