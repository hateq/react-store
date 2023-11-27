import cl from './MyModal.module.scss'
import ReactDom from 'react-dom'
const modalPortal = document.getElementById('modal-portal')!
import { FC, Dispatch, SetStateAction, ReactNode, MouseEvent, useEffect } from 'react'

interface MyModalProps {
	isOpen: boolean
	setIsOpen: Dispatch<SetStateAction<boolean>>
	children: ReactNode
}
const MyModal: FC<MyModalProps> = ({isOpen, setIsOpen, children}) => {
	useEffect(() => {
		if (isOpen) {
			document.querySelector('body')?.classList.add('disable-scroll')
		}
	}, [isOpen])
	const onOverflowClick = () => {
		setIsOpen(false)
		document.querySelector('body')?.classList.remove('disable-scroll')
	}
	return ( 
		ReactDom.createPortal(
			<>
			<div onClick={onOverflowClick} className={`${cl.overlay} ${isOpen ? cl.active : ''}`}>
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