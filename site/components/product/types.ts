import type {
  Product,
  ProductOption,
  ProductOptionValues,
} from '@commerce/types/product'

interface ShibaProductOptionValues extends ProductOptionValues {
  link: string
  price: number
}

export interface ShibaOptions extends ProductOption {
  values: ShibaProductOptionValues[]
}

export interface ShibaProduct extends Product {
  ratingCount: number
  ratingScore: number
  options: ShibaOptions[]
}
