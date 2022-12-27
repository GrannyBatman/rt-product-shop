import { useState } from 'react'
import { IProduct } from '../models/models'

interface Props {
	product: IProduct
}

function Product({ product }: Props) {
	const [details, setDetails] = useState<boolean>(false)

	const buttonColor = details ? 'bg-yellow-400' : 'bg-blue-400'
	const buttonClassName = ['py-2 px-4 border', buttonColor]

	return (
		<div className="border py-2 px-4 rounded flex flex-col items-center mb-2">
			<img src={product.thumbnail} className="w-1/2" alt={product.title} />
			<p>{product.title}</p>
			<span className="font-bold">$ {product.price}</span>
			<button
				className={buttonClassName.join(' ')}
				onClick={() => setDetails(val => !val)}
			>
				{details ? 'Hide' : 'Show'} Details
			</button>
			{details && (
				<div>
					<p>{product.description}</p>
				</div>
			)}
			<p>
				Rate: <span className="font-bold">{product.rating}</span>
			</p>
		</div>
	)
}
export default Product
