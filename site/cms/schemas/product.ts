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

    {
      title: 'Rating',
      name: 'rating',
      type: 'object',
      fields: [
        {
          name: 'score',
          type: 'number',
          title: 'score',
          initialValue: 0,
          description:
            'Provide a product rating between 1-5. If left blank or 0 means the product has no reviews yet',
          validation: () => (R: Rule) => R.min(0).max(5).integer(),
          options: {
            list: [0, 1, 2, 3, 4, 5],
            layout: 'radio',
            direction: 'horizontal',
          },
        },
        {
          name: 'count',
          type: 'number',
          title: 'Rating count',
          initialValue: 0,
          description: 'Number of Amazon ratings for this product',
          validation: () => (R: Rule) => R.min(0).integer(),
        },
      ],
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
