import type {
  Product,
  ProductOption,
  ProductOptionValues,
} from '@commerce/types/product'

interface ShibaProductOptionValues extends ProductOptionValues {
  link: string
}

export interface ShibaOptions extends ProductOption {
  values: ShibaProductOptionValues[]
}

export interface ShibaProduct extends Product {
  options: ShibaOptions[]
}
