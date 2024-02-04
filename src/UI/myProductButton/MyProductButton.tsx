import cl from './MyProductButton.module.css'
import { useCart } from '../../hooks/useCart';
import { useActions } from '../../hooks/useActions';
import { IProduct } from '../../types/product.types'
import { FC } from 'react'

interface IMyProductButtonProps {
	product: IProduct | null
}
const MyProductButton: FC<IMyProductButtonProps> = ({product}) => {
	const {cart} = useCart();
	const {toggleCart} = useActions();
	const isExists = cart.find((item) => item.title == product?.title);
	return ( 
		<button className={isExists ? cl.MyActiveButton : cl.MyButton} onClick={() => toggleCart(product!)}>
			{isExists ? 'In cart' : 'To cart'}
		</button>
	 );
}
 
export default MyProductButton;