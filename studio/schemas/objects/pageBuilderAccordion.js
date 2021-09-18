import MdList from 'react-icons/md'

export default {
  title: 'Accordion',
  name: 'pageBuilderAccordion',
  type: 'object',
  icon: MdList,
  fields: [
    {
      title: 'Section Title',
      name: 'title',
      type: 'string',
    },
    {
      title: 'Accordion Items',
      name: 'accordionItems',
      type: 'array',
      of: [{ type: 'accordionItem' }],
    },
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare({ title }) {
      return {
        title,
        subtitle: 'Accordion',
      }
    },
  },
}
