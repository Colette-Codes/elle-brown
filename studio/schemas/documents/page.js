import { FiFile } from 'react-icons/fi'

export default {
  title: 'Pages',
  name: 'page',
  type: 'document',
  icon: FiFile,
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
    },
    {
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      validation: (Rule) =>
        Rule.required().custom((slug) => {
          const regex = /^[a-z0-9]+(?:-[a-z0-9]+)*$/
          return regex.test(slug.current)
        }),
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
    {
      title: 'Page Builder',
      name: 'pageBuilder',
      type: 'pageBuilder',
    },
    {
      title: 'SEO',
      name: 'seo',
      type: 'seo',
      options: {
        collapsible: true,
        collapsed: true,
      },
    },
  ],
}
