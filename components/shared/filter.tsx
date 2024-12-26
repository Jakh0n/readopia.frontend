'use client'
import React, { useCallback } from 'react'
import { Input } from '../ui/input'
import { Search } from 'lucide-react'
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '../ui/select'
import { categories } from '@/constants'
import { useRouter, useSearchParams } from 'next/navigation'
import { formUrlQuery, removeUrlQuery } from '@/lib/utils'
import { debounce } from 'lodash'
function Filter() {
	const router = useRouter()
	const searchParams = useSearchParams()
	const onFilterChange = (value: string) => {
		const newUrl = formUrlQuery({
			key: 'filter',
			params: searchParams.toString(),
			value,
		})
		router.push(newUrl)
	}
	const onCategoryChange = (value: string) => {
		const newUrl = formUrlQuery({
			key: 'category',
			params: searchParams.toString(),
			value,
		})

		router.push(newUrl)
	}
	const onInputSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value
		const newUrl = formUrlQuery({
			key: 'q',
			params: searchParams.toString(),
			value,
		})
		router.push(newUrl)
		if (value === '') {
			const newUrl = removeUrlQuery({
				key: 'q',
				params: searchParams.toString(),
			})
			router.push(newUrl)
		}
	}
	// eslint-disable-next-line react-hooks/exhaustive-deps
	const handleSearchDebounce = useCallback(debounce(onInputSearch, 300), [])
	return (
		<div className='grid grid-cols-3 max-md:w-full gap-1'>
			<div className='flex items-center bg-secondary max-md:w-1/2 rounded-md  '>
				<Input
					placeholder='Search'
					className='text-xs border-none  no-focus'
					onChange={handleSearchDebounce}
				/>
				<Search className='text-muted-foreground mr-2 cursor-pointer' />
			</div>
			<Select onValueChange={onFilterChange}>
				<SelectTrigger className='text-xs bg-secondary max-md:w-1/2'>
					<SelectValue
						placeholder='Select Filter'
						className='text-muted-foreground'
					/>
				</SelectTrigger>
				<SelectContent>
					<SelectItem className='cursor-pointer' value='newest'>
						Newest
					</SelectItem>
					<SelectItem className='cursor-pointer' value='oldest'>
						Oldest
					</SelectItem>
				</SelectContent>
			</Select>
			<Select onValueChange={onCategoryChange}>
				<SelectTrigger className='text-xs bg-secondary max-md:w-1/2'>
					<SelectValue
						placeholder='Select Categoriy'
						className='text-muted-foreground'
					/>
				</SelectTrigger>
				<SelectContent>
					{categories.map(category => (
						<SelectItem
							value={category}
							key={category}
							className='cursor-pointer'
						>
							{category}
						</SelectItem>
					))}
				</SelectContent>
			</Select>
		</div>
	)
}

export default Filter
