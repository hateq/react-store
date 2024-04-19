import MyButton from '../../UI/myButton/MyButton'
import './notLogedIn.scss'
import { useState } from 'react'
import { useActions } from '../../hooks/useActions'

const NotLogedIn = () => {
	const [loginValue, setLoginValue] = useState('')
	const [passwordValue, setPasswordValue] = useState('')
	const [nameValue, setNameValue] = useState('')
	const [surnameValue, setSurnameValue] = useState('')
	const [isRegisterPage, setIsRegisterPage] = useState(true)
	const { setUserAccount, setIsLogedIn } = useActions()
	return (
		<div className='not-logedin'>
			{isRegisterPage ? 
			<><h2>Create an account</h2>
			<form
				onSubmit={e => {
					e.preventDefault()
					setIsLogedIn()
				}}
			>
				<input
					value={loginValue}
					onChange={e => setLoginValue(e.target.value)}
					required
					placeholder='Login'
				/>
				<input
					value={passwordValue}
					onChange={e => setPasswordValue(e.target.value)}
					required
					placeholder='Password'
				/>
				<input
					value={nameValue}
					onChange={e => setNameValue(e.target.value)}
					required
					placeholder='Name'
				/>
				<input
					value={surnameValue}
					onChange={e => setSurnameValue(e.target.value)}
					required
					placeholder='Surname'
				/>
				<MyButton
					onClick={() => {
						setUserAccount({
							userLogin: loginValue,
							userPassword: passwordValue,
							userName: nameValue,
							userSurname: surnameValue,
						})
					}}
				>
					Create an account
				</MyButton>
			</form>
			<p onClick={() => setIsRegisterPage(false)}>Already have an account?</p>
			</> :
			<><h2>Log in your account</h2>
			<form
				onSubmit={e => {
					e.preventDefault()
					setIsLogedIn()
				}}
			>
				<input
					value={loginValue}
					onChange={e => setLoginValue(e.target.value)}
					required
					placeholder='Login'
				/>
				<input
					value={passwordValue}
					onChange={e => setPasswordValue(e.target.value)}
					required
					placeholder='Password'
				/>
				<MyButton
					onClick={() => {
						setUserAccount({
							userLogin: loginValue,
							userPassword: passwordValue,
							userName: 'Vadim',
							userSurname: 'Konyukhov',
						})
					}}
				>
					Log in your account
				</MyButton>
			</form>
			<p onClick={() => setIsRegisterPage(true)}>Don't have an account?</p>
			</>
		}
			
		</div>
	)
}

export default NotLogedIn
