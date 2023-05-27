import { ICategory } from './category.interface';
import { IProduct, IProductMeta } from './product.interface';

export interface IListRestaurantResponse {
    data: IRestaurant[]
    meta: IListRestaurantMeta
  }
  
  export interface IRestaurant {
    id: number
    attributes: IRestaurantAttributes
  }
  
  export interface IRestaurantAttributes {
    name: string
    location: string
    average_ship: string
    createdAt: string
    updatedAt: string
    publishedAt: string
    banner: IRestaurantBanner
    banner_single: IRestaurantBanner
    categories: ICategoryRestaurant
    products: IProductRestaurant
    outstanding_product: IProductData
  }

  export interface IProductData {
    data: IProduct
  }
  export interface IProductIdResponse {
    data: IProduct[]
    meta: IProductMeta
  }

  export interface IProductRestaurant {
    data: IProduct[]
  }

  export interface ICategoryRestaurant {
    data: ICategory[]
  }
  
  export interface IRestaurantBanner {
    data: IRestaurantBannerData
  }
  
  export interface IRestaurantBannerData {
    id: number
    attributes: IRestaurantBannerAttributes
  }
  
  export interface IRestaurantBannerAttributes {
    name: string
    alternativeText: any
    caption: any
    width: number
    height: number
    formats: IBannerFormats
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
  
  export interface IBannerFormats {
    thumbnail: IBannerThumbnail
  }
  
  export interface IBannerThumbnail {
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
  
  export interface IListRestaurantMeta {
    pagination: Pagination
  }
  
  export interface Pagination {
    page: number
    pageSize: number
    pageCount: number
    total: number
  }
  