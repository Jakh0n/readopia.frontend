'use client'

import Logo from '@/components/shared/logo'
import ModeToggle from './mode-toggle'
import { Button } from '../ui/button'
import { User } from 'lucide-react'
import Link from 'next/link'

function Navbar() {
	return (
		<div className='fixed inset-0 z-40 h-20 bg-background/70 backdrop-blur-xl '>
			<div className='container mx-auto flex h-full max-w-7xl items-center justify-between border-b'>
				<div className='flex items-center gap-4'>
					<Logo />
				</div>

				<div className='flex items-center gap-2'>
					<div className='flex items-center gap-2 md:border-r md:pr-3'>
						<ModeToggle />
					</div>
					<div className='flex items-center gap-2'></div>
					<Button asChild size={'icon'}>
						<Link href={'/sign-in'}>
							<User />
						</Link>
					</Button>
				</div>
			</div>
		</div>
	)
}

export default Navbar
