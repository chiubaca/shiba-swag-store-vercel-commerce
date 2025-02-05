import { Fetcher } from '@vercel/commerce/utils/types'

import sanityClient from '@sanity/client'

const client = sanityClient({
  projectId: 'exbgx2ot',
  dataset: 'production',
  apiVersion: '2022-12-06', // use current UTC date - see "specifying API version"!
  // token: 'sanity-auth-token', // or leave blank for unauthenticated usage
  useCdn: false, // `false` if you want to ensure fresh data
})

const query = `
{'products': *[_type == 'product']{
  'id': _id,
  'name': name,
  'vendor': 'shiba-swag-store',
  'path' : "/" + slug.current,
  'slug' : slug.current,
  'description' : description,
  'ratingScore': rating.score,
  'ratingCount': rating.count,
  'price': price,
  'images': images[].asset->{
    'url': url +'?h=1000&w=1000&fit=fillmax&crop=center',
    'altText' : image.altText,
    "width": 300,
    "height": 300
  },
  'variants': [],
  'options': options[]{
    'id':  'option-' + displayName,
    displayName,
    'values': values[]{
      'label': label,
      'link': amazonUrl,
      'price': price.value
      }
    }
  }
}
`

// export const fetcher: Fetcher = async () => {
//   console.log('FETCHER')
//   const res = await fetch('./data.json')
//   if (res.ok) {
//     const { data } = await res.json()
//     return data
//   }
//   throw res
// }

export const fetcher: Fetcher = async () => {
  try {
    const data = await client.fetch(query)
    return data
  } catch (error) {
    throw new Error(' couldnt get data from cms')
  }
}
