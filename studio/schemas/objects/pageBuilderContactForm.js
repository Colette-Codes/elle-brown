import GoMail from 'react-icons/go'
import returnString from '../../helpers/blocksToText'

export default {
  title: 'Contact Form',
  name: 'pageBuilderContactForm',
  type: 'object',
  icon: GoMail,
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
    prepare({ title, content, media }) {
      return {
        title: returnString(content),
        subtitle: 'Contact form',
      }
    },
  },
}
