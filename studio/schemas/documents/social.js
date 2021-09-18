import CgProfile from 'react-icons/cg'

export default {
  title: 'Social Link',
  name: 'social',
  type: 'document',
  icon: CgProfile,
  fields: [
    {
      title: 'Social network',
      name: 'label',
      type: 'string',
      options: {
        list: [
          { title: 'Facebook', value: 'facebook' },
          { title: 'Instagram', value: 'instagram' },
          { title: 'Linkedin', value: 'linkedin' },
          { title: 'Twitter', value: 'twitter' },
          { title: 'Vimeo', value: 'vimeo' },
          { title: 'Youtube', value: 'youtube' },
        ],
      },
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Url',
      name: 'url',
      type: 'url',
      validation: (Rule) =>
        Rule.uri({
          allowRelative: false,
          scheme: ['https', 'http'],
        }).required(),
    },
  ],
  preview: {
    select: {
      title: 'label',
    },
    prepare({ title }) {
      return {
        title: `${title.slice(0, 1).toUpperCase()}${title.slice(1)}`,
      }
    },
  },
}
