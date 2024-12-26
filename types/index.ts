import { ReactNode } from 'react'

export interface ChildProps {
	children: ReactNode
}
export interface IProduct {
	title: string
	category: string
	price: number
	image: string
	description: string
	_id: string
}
export interface QueryProps {
	params: string
	value?: string | null
	key: string
}
