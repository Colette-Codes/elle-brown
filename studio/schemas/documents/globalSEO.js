import bcp47 from 'bcp47'

export default {
  title: 'Global SEO',
  name: 'globalSEO',
  type: 'document',
  fields: [
    {
      title: 'Site title',
      name: 'title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Secondary Title Section',
      name: 'titleSection',
      type: 'string',
      description:
        '2/3 word description ideally containing main SEO keyword(s). Will be used to create dynamic meta titles.',
      validation: (Rule) => Rule.required().max(30),
    },
    {
      title: 'URL',
      name: 'url',
      type: 'url',
      description: 'The main site url. Used to create canonical urls.',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Site language',
      name: 'lang',
      type: 'string',
      description: 'Should be a valid bcp47 language code like en or en-US',
      validation: (Rule) => Rule.custom((lang) => (bcp47.parse(lang) ? true : 'Please use a valid bcp47 code')),
    },
    {
      title: 'Homepage',
      name: 'homepage',
      type: 'reference',
      to: { type: 'page' },
    },
    {
      title: '404 Page',
      name: 'pageNotFound',
      type: 'reference',
      to: { type: 'page' },
    },
    {
      title: 'Open Graph Image',
      name: 'ogImage',
      type: 'image',
      description: 'A generic open graph image to be used as a fallback for pages without a unique open graph image.',
      validation: (Rule) => Rule.required(),
    },
  ],
}
