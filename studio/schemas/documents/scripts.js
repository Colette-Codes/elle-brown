export default {
  title: 'Site Script',
  name: 'scripts',
  type: 'document',
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
      description: 'For identity in CMS only.',
    },
    {
      title: 'Script',
      name: 'script',
      type: 'text',
    },
    {
      title: 'Location',
      name: 'location',
      type: 'string',
      options: {
        list: ['Head', 'Footer'],
      },
    },
  ],
}
