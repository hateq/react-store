interface IProductCategory {
	id: number,
	name: string,
	image: string
}
export interface IProduct {
	title: string,
	price: number,
	description: string,
	images: string[],
	category: IProductCategory
}
