import cl from './MyInput.module.css'
import { FC } from 'react';

interface MyInputProps {
	type?: string
	value?: string | number
	onChange?: () => void
	minLength?: number
	maxLength?: number
	required?: boolean
}
const MyInput: FC<MyInputProps> = (props) => {
	return ( 
		<input className={cl.MyInput} {...props} />
	 );
}
 
export default MyInput;