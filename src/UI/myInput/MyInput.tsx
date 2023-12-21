import cl from './MyInput.module.css'
import { FC, ChangeEvent } from 'react';

interface MyInputProps {
	type?: string
	value?: string | number
	onChange?: (e: ChangeEvent<HTMLInputElement>) => void
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