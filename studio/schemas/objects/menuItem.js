const isExternal = (link) => {
  const external = new RegExp('^(?:[a-z]+:)?//', 'i')
  return external.test(link) ? 'External' : 'Internal'
}

export default {
  title: 'Menu Item',
  name: 'menuItem',
  type: 'object',
  fields: [
    {
      title: 'Label',
      name: 'label',
      type: 'string',
    },
    {
      title: 'Url',
      name: 'url',
      type: 'string',
      description: 'Please use relative urls for internal links, e.g. /about-us/.',
      validation: (Rule) => Rule.uri({ allowRelative: true }).required(),
    },
  ],
  preview: {
    select: {
      title: 'label',
      link: 'link',
    },
    prepare({ title, link }) {
      return {
        title,
        subtitle: `${isExternal(link)} Link`,
      }
    },
  },
}
