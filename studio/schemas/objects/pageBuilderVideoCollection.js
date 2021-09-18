import { BiVideo } from 'react-icons/bi'

export default {
  title: 'Video Collection',
  name: 'pageBuilderVideoCollection',
  type: 'object',
  icon: BiVideo,
  fields: [
    {
      title: 'Section Title',
      name: 'title',
      type: 'string',
    },
    {
      title: 'URLs',
      name: 'urls',
      type: 'array',
      of: [{ type: 'url', description: 'This field will accept a YouTube, Vimeo or Soundcloud url.' }],
      description: 'Add 1 or more urls to create a collection.',
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
        subtitle: 'Video collection',
      }
    },
  },
}
