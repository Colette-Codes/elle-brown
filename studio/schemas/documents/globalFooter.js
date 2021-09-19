export default {
  title: 'Global Footer',
  name: 'globalFooter',
  type: 'document',
  fields: [
    {
      title: 'Menu (Left)',
      name: 'menuLeft',
      type: 'array',
      of: [{ type: 'menuItem' }],
    },
    {
      title: 'Menu (Right)',
      name: 'menuRight',
      type: 'array',
      of: [{ type: 'menuItem' }],
    },
    {
      title: 'Menu (Social)',
      name: 'menuSocial',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'social' } }],
    },
  ],
}
