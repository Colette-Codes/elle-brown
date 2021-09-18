import FiColumns from 'react-icons/fi'
import returnString from '../../helpers/blocksToText'

export default {
  title: 'Split Content',
  name: 'pageBuilderSplitContent',
  type: 'object',
  icon: FiColumns,
  fields: [
    {
      title: 'Section Title',
      name: 'title',
      type: 'string',
    },
    {
      title: 'Layout',
      name: 'layout',
      type: 'string',
      options: {
        list: [
          { title: 'Offset', value: 'offset' },
          { title: 'Centred', value: 'center' },
        ],
        layout: 'radio',
        direction: 'horizontal',
      },
      initialValue: 'offset',
    },
    {
      title: 'Content',
      name: 'content',
      type: 'portableText',
    },
    {
      title: 'Image',
      name: 'image',
      type: 'mainImage',
    },
  ],
  preview: {
    select: {
      title: 'title',
      content: 'content',
      media: 'image',
    },
    prepare({ title, content, media }) {
      return {
        title: title ?? returnString(content),
        subtitle: 'Split content',
        media: media ?? FiColumns,
      }
    },
  },
}
