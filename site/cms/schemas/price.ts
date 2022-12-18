/* eslint-disable import/no-anonymous-default-export */
import { Rule } from 'sanity'

export default {
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
}
