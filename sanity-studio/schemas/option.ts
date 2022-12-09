import {Rule} from 'sanity'

export default {
  title: 'Option',
  name: 'option',
  type: 'object',

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
      validation: () => [(R: Rule) => R.required()],
      of: [
        {
          title: 'Label',
          name: 'label',
          type: 'string',
          validation: () => [(R: Rule) => R.required()],
        },
        {
          title: 'Hex Color',
          name: 'hexColor',
          type: 'string',
        },
      ],
      // validation: (Rule: Rule) => [
      //   Rule.custom((content) => {
      //     console.log('🚀 ~ file: option.ts:37 ~ Rule.custom ~ content', content)
      //     if (!content) {
      //       console.log('🚀 ~ file: option.ts:39 ~ Rule.custom ~ undefined')
      //       Rule.warning('Values must be set when adding in an option')
      //       return false
      //     }

      //     return true
      //   }),
      // ],
    },
  ],
}
