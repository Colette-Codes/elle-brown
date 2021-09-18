import { IoImagesOutline } from 'react-icons/io'

export default {
  title: 'Image Gallery',
  name: 'pageBuilderImageGallery',
  type: 'object',
  icon: IoImagesOutline,
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
          { title: 'Regular', value: 'regular' },
          { title: 'Masonry', value: 'masonry' },
        ],
        layout: 'radio',
        direction: 'horizontal',
      },
      initialValue: 'masonry',
    },
    {
      title: 'Images',
      name: 'images',
      type: 'array',
      of: [{ type: 'mainImage' }],
      description: 'Add 1 or more images to create a gallery.',
    },
  ],
  preview: {
    select: {
      title: 'title',
      url: 'url',
    },
    prepare({ title, url }) {
      return {
        title: title ?? url,
        subtitle: 'Image gallery',
      }
    },
  },
}
