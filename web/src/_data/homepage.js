const groq = require('groq')
const client = require('../utils/sanityClient.js')
const overlayDrafts = require('../utils/overlayDrafts')
const getPageBuilder = require('../utils/getPagebuilder')

const hasToken = !!client.config().token

async function getHomepage() {
  const filter = groq`*[_type == 'page' && _id == *[_type == 'globalSEO'][0].homepage._ref]{..., ${getPageBuilder}}`
  // eslint-disable-next-line no-console
  const doc = await client.fetch(filter).catch((err) => console.error(err))
  //   const authors = docs.map(generateAuthor)
  //   const reducedAuthors = overlayDrafts(hasToken, authors)
  //   return reducedAuthors
  return doc
}

module.exports = getHomepage
