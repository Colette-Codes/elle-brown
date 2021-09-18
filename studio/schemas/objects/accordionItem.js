import returnString from '../../helpers/blocksToText'

export default {
  title: 'Accordion Item',
  name: 'accordionItem',
  type: 'object',
  fields: [
    {
      title: 'Heading',
      name: 'heading',
      type: 'simplePortableText',
    },
    {
      title: 'Subheading',
      name: 'subheading',
      type: 'string',
    },
    {
      title: 'Body',
      name: 'body',
      type: 'portableText',
    },
  ],
  preview: {
    select: {
      title: 'heading',
      subtitle: 'subheading',
    },
    prepare({ title, subtitle }) {
      return {
        title: returnString(title),
        subtitle,
      }
    },
  },
}
