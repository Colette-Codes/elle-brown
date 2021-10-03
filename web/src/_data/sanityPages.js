const groq = require('groq')
const client = require('../utils/sanityClient.js')
const overlayDrafts = require('../utils/overlayDrafts')
const getPageBuilder = require('../utils/getPagebuilder')

const hasToken = !!client.config().token

async function getPages() {
  const filter = groq`*[_type == 'page' && _id != *[_type == 'globalSEO'][0].homepage._ref && _id != *[_type == 'globalSEO'][0].pageNotFound._ref]{..., ${getPageBuilder}}`
  // eslint-disable-next-line no-console
  const docs = await client.fetch(filter).catch((err) => console.error(err))
  //   const authors = docs.map(generateAuthor)
  //   const reducedAuthors = overlayDrafts(hasToken, authors)
  //   return reducedAuthors
  return docs
}

module.exports = getPages
