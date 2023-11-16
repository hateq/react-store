import cl from './MyModal.module.scss'
import ReactDom from 'react-dom'
const modalPortal = document.getElementById('modal-portal')!
import { FC, Dispatch, SetStateAction, ReactNode, MouseEvent } from 'react'

interface MyModalProps {
	isOpen: boolean
	setIsOpen: Dispatch<SetStateAction<boolean>>
	children: ReactNode
}
const MyModal: FC<MyModalProps> = ({isOpen, setIsOpen, children}) => {
	return ( 
		ReactDom.createPortal(
			<>
			<div onClick={() => setIsOpen(!isOpen)} className={`${cl.overlay} ${isOpen ? cl.active : ''}`}>
			<div onClick={(e: MouseEvent<HTMLDivElement>) => e.stopPropagation()} className={cl.modal}>
				{children}
			</div>
		</div>
			</>,
			modalPortal
		)
	 );
}
 
export default MyModal;