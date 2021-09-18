export default {
  title: 'Social Link',
  name: 'socialLink',
  type: 'object',
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
          { title: 'Pinterest', value: 'pinterest' },
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
        title,
        subtitle: `Social Link`,
      }
    },
  },
}
