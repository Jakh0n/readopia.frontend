import Navbar from '@/components/shared/navbar'
import { ChildProps } from '@/types'
import React from 'react'

function Layout({ children }: ChildProps) {
	return (
		<div>
			<Navbar />
			<main>{children}</main>
		</div>
	)
}

export default Layout
