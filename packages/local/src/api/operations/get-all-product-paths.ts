// import data from '../../data.json'
import { fetcher } from '../../fetcher'

export type GetAllProductPathsResult = {
  products: Array<{ path: string }>
}

export default function getAllProductPathsOperation() {
  async function getAllProductPaths(): Promise<GetAllProductPathsResult> {
    const data = await fetcher({})

    return Promise.resolve({
      products: data.products.map(({ path }) => ({ path })),
    })
  }

  return getAllProductPaths
}
