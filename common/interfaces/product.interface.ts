import { ICategory } from "./category.interface"
import { IRestaurant } from "./restaurant.interface"

export interface IProductByRestaurantResponse {
    data: IProduct[]
    meta: IProductMeta
  }
  
  export interface IProduct {
    id: number
    attributes: IProductAttributes
  }
  
  export interface IProductAttributes {
    title: string
    description: string
    createdAt: string
    updatedAt: string
    publishedAt: string
    price: number
    image: Image
    categories: Categories
    restaurant: Restaurant
  }
  
  export interface Image {
    data: Daum2[]
  }
  
  export interface Daum2 {
    id: number
    attributes: Attributes2
  }
  
  export interface Attributes2 {
    name: string
    alternativeText: any
    caption: any
    width: number
    height: number
    formats: Formats
    hash: string
    ext: string
    mime: string
    size: number
    url: string
    previewUrl: any
    provider: string
    provider_metadata: any
    createdAt: string
    updatedAt: string
  }
  
  export interface Formats {
    thumbnail: Thumbnail
  }
  
  export interface Thumbnail {
    name: string
    hash: string
    ext: string
    mime: string
    path: any
    width: number
    height: number
    size: number
    url: string
  }
  
  export interface Categories {
    data: ICategory[]
  }
  
  
  export interface Restaurant {
    data: IRestaurant
  }
  
  
  export interface IProductMeta {
    pagination: Pagination
  }
  
  export interface Pagination {
    page: number
    pageSize: number
    pageCount: number
    total: number
  }
  