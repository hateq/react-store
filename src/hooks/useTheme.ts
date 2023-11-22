import {useState, useLayoutEffect} from 'react'

const isDarkTheme: boolean = window?.matchMedia('(prefers-color-scheme: dark)').matches
const defaultTheme = isDarkTheme ? 'dark' : 'light'
export const useTheme = () => {
	const [theme, setTheme] = useState<string>(localStorage.getItem('app-theme') || defaultTheme)
	useLayoutEffect(() => {
		document.documentElement.setAttribute('data-theme', theme)
		localStorage.setItem('app-theme', theme)
	}, [theme])
	return {theme, setTheme}
}