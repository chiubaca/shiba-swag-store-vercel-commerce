/* eslint-disable import/no-anonymous-default-export */
import { Rule, Source } from 'sanity'
import option from './option'

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
      name: 'price',
      type: 'object',
      title: 'Price',
      validation: () => [(R: Rule) => R.required()],
      fields: [
        {
          title: 'Value',
          name: 'value',
          type: 'number',
          validation: () => [(R: Rule) => R.required().positive().precision(2)],
        },
        {
          title: 'Currency code',
          name: 'currencyCode',
          type: 'string',
          validation: () => [(R: Rule) => R.required()],
          options: {
            list: [
              { title: 'GBP', value: 'GBP' },
              { title: 'USD', value: 'USD' },
            ],
            layout: 'radio', // <-- defaults to 'dropdown'
          },
        },
      ],
    },
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
