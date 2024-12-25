import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Logo() {
	return (
		<Link href={'/'} className='items-center flex gap-2'>
			<Image
				src={'/shopping-cart-svgrepo-com.svg'}
				alt='logo'
				height={50}
				width={50}
			/>
			<h1 className='text-4xl font-bold'>Readopia</h1>
		</Link>
	)
}

export default Logo
