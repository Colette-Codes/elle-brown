import BiDetail from 'react-icons/bi'
import returnString from '../../helpers/blocksToText'

export default {
  title: 'Split Content',
  name: 'pageBuilderFullwidthContent',
  type: 'object',
  icon: BiDetail,
  fields: [
    {
      title: 'Content',
      name: 'content',
      type: 'portableText',
    },
  ],
  preview: {
    select: {
      title: 'title',
      content: 'content',
      media: 'image',
    },
    prepare({ content }) {
      return {
        title: returnString(content),
        subtitle: 'Fullwidth content',
      }
    },
  },
}
