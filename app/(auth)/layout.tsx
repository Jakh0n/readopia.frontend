import { ChildProps } from '@/types'
import React from 'react'

function AuthLayout({ children }: ChildProps) {
	return <div className='flex justify-center mt-44'>{children}</div>
}

export default AuthLayout
