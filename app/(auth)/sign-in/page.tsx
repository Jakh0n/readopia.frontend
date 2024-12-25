'use client'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Separator } from '@/components/ui/separator'
import { loginScheme } from '@/lib/validation'
import { zodResolver } from '@hookform/resolvers/zod'
import Link from 'next/link'
import React from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

function SignIn() {
	const form = useForm<z.infer<typeof loginScheme>>({
		resolver: zodResolver(loginScheme),
		defaultValues: {
			email: '',
			password: '',
		},
	})
	function onSubmit(values: z.infer<typeof loginScheme>) {
		console.log(values)
	}
	return (
		<Card className='w-1/2 p-4   '>
			<h1 className='text-xl font-bold'>Sign in</h1>
			<p className='text-sm text-muted-foreground'>
				Welcome Back, Please log in to your account.
			</p>
			<Separator className='my-4' />
			<Form {...form}>
				<form onSubmit={form.handleSubmit(onSubmit)} className='space-y-2'>
					<FormField
						control={form.control}
						name='email'
						render={({ field }) => (
							<FormItem>
								<Label>Username</Label>
								<FormControl>
									<Input placeholder='example@gmail.com' {...field} />
								</FormControl>
								<FormMessage className='text-xs text-red-500' />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name='password'
						render={({ field }) => (
							<FormItem>
								<Label>Password</Label>
								<FormControl>
									<Input placeholder='****' type='password' {...field} />
								</FormControl>
								<FormMessage className='text-xs text-red-500' />
							</FormItem>
						)}
					/>
					<Button type='submit'>Submit</Button>
				</form>
			</Form>
			<div className='mt-4'>
				<div className='text-sm text-muted-foreground'>
					Don&apos;t have an acoount
					<Button variant={'link'} className='p-0' asChild>
						<Link href={'/sign-up'}>Sign up</Link>
					</Button>
				</div>
			</div>
		</Card>
	)
}

export default SignIn
