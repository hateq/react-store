import { IProductCart } from '../../types/product.types'
import { FC, Dispatch, SetStateAction } from 'react'
import StarIcon from '../../../images/icons/star.svg'
import './productCard.scss'
import MyProductButton from '../../UI/myProductButton/MyProductButton'
import { useActions } from '../../hooks/useActions'

interface IProductCardProps {
	product: IProductCart
	setIsOpen: Dispatch<SetStateAction<boolean>>
	setProduct: Dispatch<SetStateAction<null | IProductCart>>
	isCart?: true
}
const ProductCard: FC<IProductCardProps> = ({
	product,
	setIsOpen,
	setProduct,
	isCart
}) => {
	const onProductClick = () => {
		setIsOpen(true)
		setProduct(product)
	}
	const { toggleCart, updateQuantity } = useActions()
	return (
		<div className='product-card'>
			<img onClick={onProductClick} src={product.image} alt='' />
			<h3 onClick={onProductClick}>{product.title}</h3>
			<p>{product.category}</p>
			<p>
				{product.rating.rate}
				<img src={StarIcon} alt='' />/<span>{product.rating.count}</span>
			</p>
			<h2>{product.price + ' $'}</h2>
			<MyProductButton product={product} />
			{!isCart ? (
				<></>
			) : (
				<div className='quantity'>
					<p
						onClick={() => {
							if (product.quantity == 1) {
								toggleCart(product!)
							}
							updateQuantity({
								product: { ...product },
								quantity: product.quantity - 1,
							})
						}
						}
					>
						-
					</p>
					<h2>{product.quantity}</h2>
					<p
						onClick={() => {
							updateQuantity({
								product: product,
								quantity: product.quantity + 1,
							})
						}}
					>
						+
					</p>
				</div>
			)}
		</div>
	)
}

export default ProductCard
