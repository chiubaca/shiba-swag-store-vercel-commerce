/* eslint-disable import/no-anonymous-default-export */
import { Rule } from 'sanity'
import price from './price'

export default {
  title: 'Option',
  name: 'option',
  type: 'object',
  validation: () => [(R: Rule) => R.required()],
  fields: [
    {
      name: 'displayName',
      type: 'string',
      title: 'Display name',
      validation: () => [(R: Rule) => R.required()],
    },
    {
      title: 'Values',
      name: 'values',
      type: 'array',

      of: [
        {
          title: 'Value',
          name: 'value',
          type: 'object',

          fields: [
            {
              title: 'Label',
              name: 'label',
              type: 'string',
              validation: () => [(R: Rule) => R.required()],
            },
            {
              ...price,
            },
            {
              title: 'Amazon URL',
              name: 'amazonUrl',
              type: 'url',
              validation: () => [(R: Rule) => R.required()],
            },
            {
              title: 'Hex Color',
              name: 'hexColor',
              type: 'color',
            },
          ],
        },
      ],
    },
  ],
}
