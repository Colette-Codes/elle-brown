import { FaImage } from 'react-icons/fa'

export default {
  name: 'mainImage',
  type: 'image',
  title: 'Image',
  options: {
    hotspot: true,
  },
  icon: FaImage,
  fields: [
    {
      name: 'alt',
      type: 'string',
      title: 'Alternative text',
      description: 'Important for SEO and accessiblity.',
      validation: (Rule) =>
        Rule.custom((field, context) => {
          const { parent } = context

          // Allow field to be empty if no asset defined
          if (!parent.asset) return true

          // if asset defined but no alt return error message otherwise return true
          return field === undefined ? 'You have to fill out the alternative text.' : true
        }),
      options: {
        isHighlighted: true,
      },
    },
  ],
  preview: {
    select: {
      media: 'asset',
      title: 'alt',
    },
    prepare({ title, media }) {
      return {
        media,
        title: title && title.length > 34 ? `${title.slice(0, 34)} ...` : title,
      }
    },
  },
}
