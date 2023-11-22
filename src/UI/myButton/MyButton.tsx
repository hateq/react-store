import { ReactNode, FC } from 'react'
import cl from './MyButton.module.scss'
interface IMyButton {
	children: ReactNode
	onClick: () => void
}
const MyButton: FC<IMyButton> = ({children, onClick}) => {
	return ( 
		<button className={cl.MyButton} onClick={onClick}>
			{children}
		</button>
	 );
}
 
export default MyButton;