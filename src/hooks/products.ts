import axios, { AxiosError } from 'axios'
import { useEffect, useState } from 'react'
import { IProduct, IProductsResponse } from '../models/models'

export function useProducts() {
	const [goods, setGoods] = useState<IProduct[]>([])
	const [loading, setLoading] = useState(false)
	const [error, setError] = useState('')

	function addProduct(product: IProduct) {
		setGoods(prev => [...prev, product])
	}

	useEffect(() => {
		const getProducts = async () => {
			try {
				setLoading(true)
				setError('')
				const response = await axios.get<IProductsResponse<IProduct>>(
					'https://dummyjson.com/products?limit=5'
				)
				setGoods(response.data.products)
			} catch (e: unknown) {
				const error = e as AxiosError
				setError(error.message)
			} finally {
				setLoading(false)
			}
		}

		getProducts()
	}, [])

	return {
		goods,
		loading,
		error,
		addProduct,
	}
}
