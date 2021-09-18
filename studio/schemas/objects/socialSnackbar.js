export default {
  title: 'Social Snackbar',
  name: 'socialSnackbar',
  type: 'object',
  fields: [
    {
      title: 'SocialLinks',
      name: 'socialLinks',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'social' } }],
    },
  ],
  preview: {
    select: {
      links: 'socialLinks[0]->platform',
    },
    prepare({ links }) {
      console.log(links)
      return {
        title: links,
        name: 'Social snackbar',
      }
    },
  },
}
