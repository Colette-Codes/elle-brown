const blocksToHtml = require('@sanity/block-content-to-html')
const getSocialIcon = require('./getSocialIcon')

const { h } = blocksToHtml
const target = { target: '_blank', rel: 'nofollow noreferrer noopener' }

// Learn more on https://www.sanity.io/guides/introduction-to-portable-text
module.exports = {
  marks: {
    link: ({ children, mark }) => h('a', mark.newTab ? { href: mark.href, ...target } : { href: mark.href }, children),
  },
  types: {
    undefined: () => null,
    socialSnackbar: ({ node }) =>
      h('ul.socialList', [
        node.socialLinks.map((link) =>
          h('li', [
            h('a', {
              href: link.url,
              'aria-label': link.label,
              target: '_blank',
              innerHTML: getSocialIcon(link.label),
            }),
          ])
        ),
      ]),
  },
}
