import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import { IProductsList } from '../../types/product.types'

export const api = createApi({
	reducerPath: 'api',
	baseQuery: fetchBaseQuery({
		baseUrl: 'https://api.escuelajs.co/api/v1/products'
	}),
	endpoints: builder => ({
		getProductsList: builder.query({
			query: (arg: IProductsList) => `/?title=${arg.title}&price_min=${arg.minPrice}&price_max=${arg.maxPrice}&categoryId=${arg.categoryId}&offset=${arg.offset}&limit=${arg.limit}`
		}),
		getCountriesList: builder.query({
			query: () => 'https://restcountries.com/v3.1/all'
		})
	})
})
export const {useGetProductsListQuery, useGetCountriesListQuery} = api