/* eslint-disable import/no-anonymous-default-export */
import { Rule } from 'sanity'
import option from './option'

import price from './price'

export default {
  name: 'product',
  type: 'document',
  title: 'Product',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name',
    },
    {
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      options: {
        source: (_: any, context: any) => context.parent.name,
      },
    },
    {
      name: 'description',
      type: 'string',
      title: 'Description',
    },
    price,
    {
      title: 'Images',
      name: 'images',
      type: 'array',
      of: [
        {
          title: 'Image',
          name: 'image',
          type: 'image',
          fields: [
            {
              name: 'altText',
              type: 'string',
              title: 'Alt text',
            },
          ],
        },
      ],
    },

    {
      title: 'Options',
      name: 'options',
      type: 'array',
      of: [option],
      validation: () => [(R: Rule) => R.required()],
    },
  ],
}
