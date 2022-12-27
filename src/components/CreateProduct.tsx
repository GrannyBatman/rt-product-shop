import axios from 'axios'
import React, { useState } from 'react'
import { IProduct } from '../models/models'
import { ErrorMessage } from './ErrorMessage'

const productData: IProduct = {
	title: 'Iphone 911',
	description: 'An apple ',
	price: 549,
	discountPercentage: 12.96,
	rating: 4.69,
	stock: 94,
	brand: 'Apple',
	category: 'smartphones',
	thumbnail: 'https://i.dummyjson.com/data/products/1/thumbnail.jpg',
	images: ['https://i.dummyjson.com/data/products/1/1.jpg'],
}

interface Props {
	onCreate: (product: IProduct) => void
}

export function CreateProduct({ onCreate }: Props) {
	const [value, setValue] = useState('')
	const [error, setError] = useState('')

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault()
		setError('')

		if (value.trim().length === 0) {
			setError('Please enter product name')
			return
		}

		productData.title = value.trim()

		const response = await axios.post<IProduct>(
			'https://dummyjson.com/products/add',
			productData
		)
		setValue('')

		onCreate(response.data)
	}

	const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
		setValue(event.target.value)
	}

	return (
		<form onSubmit={handleSubmit}>
			<input
				type="text"
				className="border py-2 px-4 mb-2 w-full outline-0"
				placeholder="Enter product title"
				value={value}
				onChange={changeHandler}
			/>
			{error && <ErrorMessage error={error} />}
			<button
				type="submit"
				className="py-2 px-4 border bg-yellow-400 hover:text-white"
			>
				Create
			</button>
		</form>
	)
}
