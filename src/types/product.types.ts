interface IProductCategory {
	id: number
	name: string
	image: string
}
export interface IProduct {
	id: number
	title: string
	price: number
	description: string
	images: string[]
	category: IProductCategory
}
export interface IProductsList {
	title: string
	minPrice: number
	maxPrice: number
	categoryId: number
	offset: number
	limit: number
}
