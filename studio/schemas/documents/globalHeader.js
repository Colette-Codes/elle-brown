export default {
  title: 'Global Header',
  name: 'globalHeader',
  type: 'document',
  fields: [
    {
      title: 'Menu',
      name: 'menu',
      type: 'array',
      of: [
        { type: 'menuItem' },
        {
          title: 'Social Link',
          name: 'socialLink',
          type: 'reference',
          to: [{ type: 'social' }],
        },
      ],
    },
  ],
}
