const BlocksToHtml = require('@sanity/block-content-to-html')
const serializers = require('../../utils/serializers')
const client = require('../../utils/sanityClient')

module.exports = {
  generateHtml(portableText) {
    return BlocksToHtml({
      blocks: portableText,
      className: 'portableText',
      serializers,
      ...client.config(),
    })
  },
}
