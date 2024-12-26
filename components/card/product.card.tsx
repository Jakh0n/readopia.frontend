'use client'
import { IProduct } from '@/types'
import Image from 'next/image'

import { useRouter } from 'next/navigation'
import React from 'react'
import { Button } from '../ui/button'
import { Heart } from 'lucide-react'
import { formatPrice } from '@/lib/utils'
import NoSSR from 'react-no-ssr'
interface Props {
	product: Partial<IProduct>
}

function ProductCard({ product }: Props) {
	const router = useRouter()
	return (
		<div
			className='cursor-pointer'
			onClick={() => router.push(`/product/${product._id}`)}
		>
			<div className='bg-secondary group relative'>
				<Image
					alt={'image'}
					src={product.image!}
					className='mx-auto'
					width={300}
					height={300}
				/>
				<div className='absolute right-0 top-0 z-50 opacity-0 group-hover:opacity-100 transition-all'>
					<Button size={'icon'}>
						<Heart />
					</Button>
				</div>
			</div>
			<div className='flex items-center justify-between mt-2 text-sm'>
				<h1 className='font-bold line-clamp-1'>{product.title}</h1>
				<NoSSR>
					<p className='font-medium'>{formatPrice(product.price!)}</p>
				</NoSSR>
			</div>
			<p className='text-sm text-muted-foreground'>{product.category}</p>
		</div>
	)
}

export default ProductCard
