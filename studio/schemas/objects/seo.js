export default {
  title: 'SEO',
  name: 'seo',
  type: 'object',
  fields: [
    {
      title: 'Canonical (Optional)',
      name: 'canonical',
      type: 'url',
      description: `A default canonical url will be generated using the site url (provided in the global SEO options) and the slug. It is only necessary to complete this field if wishing to override the dynamic canonical url.`,
    },
    {
      title: 'Meta title (Optional)',
      name: 'metaTitle',
      type: 'string',
      description:
        'A default meta title will be generated using the page title, the secondary title (provided in the global SEO options) and the site title. This field is only necessary if wishing to override the dynamic meta title.',
    },
    {
      title: 'Description (Recommended)',
      name: 'description',
      type: 'text',
      rows: '3',
      description: 'Please provide a unique meta description.',
      validation: (Rule) => Rule.max(155).warning('Description too long. Optimal length is 155 characters or less.'),
    },
    {
      title: 'Open Graph Image (Optional)',
      name: 'image',
      type: 'image',
    },
    {
      title: 'No Index Meta tag',
      name: 'noIndex',
      type: 'boolean',
      description: 'Remove URL from search index.',
      options: {
        layout: 'checkbox',
      },
    },
  ],
}
