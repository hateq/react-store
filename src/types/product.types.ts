interface IProductRating {
	rate: number
	count: number
}
export interface IProduct {
	id: number
	title: string
	price: number
	description: string
	category: string
	image: string
	rating: IProductRating
}
export interface IProductsList {
	title: string
	minPrice: number | null
	maxPrice: number | null
	categoryId: number | null
	offset: number
	limit: number | null
}
