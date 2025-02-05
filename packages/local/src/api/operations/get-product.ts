import type { LocalConfig } from '../index'
import { Product } from '@vercel/commerce/types/product'
import { GetProductOperation } from '@vercel/commerce/types/product'
// import data from '../../data.json'
import { fetcher } from '../../fetcher'
import type { OperationContext } from '@vercel/commerce/api/operations'

export default function getProductOperation(_p: OperationContext<any>) {
  async function getProduct<T extends GetProductOperation>({
    query = '',
    variables,
    config,
  }: {
    query?: string
    variables?: T['variables']
    config?: Partial<LocalConfig>
    preview?: boolean
  } = {}): Promise<Product | {} | any> {
    const data = await fetcher({})
    return {
      product: data.products.find(({ slug }: any) => slug === variables!.slug),
    }
  }

  return getProduct
}
