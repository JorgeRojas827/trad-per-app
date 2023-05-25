
export interface IListCategoryResponse {
    data: ICategory[]
    meta: IListCategoryMeta
  }
  
  export interface ICategory {
    id: number
    attributes: ICategoryAttributes
  }
  
  export interface ICategoryAttributes {
    title: string
    createdAt: string
    updatedAt: string
    publishedAt: string
  }
  
  export interface IListCategoryMeta {
    pagination: ICategoryPagination
  }
  
  export interface ICategoryPagination {
    page: number
    pageSize: number
    pageCount: number
    total: number
  }
  