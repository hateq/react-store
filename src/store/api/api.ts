import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import { IProductsList } from '../../types/product.types'

export const api = createApi({
	reducerPath: 'api',
	baseQuery: fetchBaseQuery({
		baseUrl: 'https://fakestoreapi.com/products'
	}),
	endpoints: builder => ({
		getProductsList: builder.query({
			query: (arg: number) => `/?limit=${arg}`
		}),
		getCountriesList: builder.query({
			query: () => 'https://restcountries.com/v3.1/all'
		}),
		getCategoriesList: builder.query({
			query: () => 'https://fakestoreapi.com/products/categories'
		})
	})
})
export const {useGetProductsListQuery, useGetCountriesListQuery, useGetCategoriesListQuery} = api