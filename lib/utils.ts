import { QueryProps } from '@/types'
import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'
import qs from 'query-string'
export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs))
}
export function formatPrice(price: number) {
	return new Intl.NumberFormat('uz-UZ', {
		style: 'currency',
		currency: 'UZS',
	}).format(price)
}
export function formUrlQuery({ key, params, value }: QueryProps) {
	const currentQuery = qs.parse(params)
	currentQuery[key] = value!
	return qs.stringifyUrl(
		{ url: window.location.pathname, query: currentQuery },
		{ skipNull: true }
	)
}

export function removeUrlQuery({ params, key }: QueryProps) {
	const currentQuery = qs.parse(params)
	delete currentQuery[key]
	return qs.stringifyUrl(
		{ url: window.location.pathname, query: currentQuery },
		{ skipNull: true }
	)
}
