const groq = require('groq')
const client = require('../utils/sanityClient.js')
const overlayDrafts = require('../utils/overlayDrafts')
const getPageBuilder = require('../utils/getPagebuilder')

const hasToken = !!client.config().token

async function get404page() {
  const id = await client.fetch(groq`*[_type == 'globalSEO'][0].pageNotFound._ref`)
  const filter = groq`*[_id in ["drafts.${id}", "${id}"]]{..., ${getPageBuilder}}`
  // eslint-disable-next-line no-console
  const docs = await client.fetch(filter).catch((err) => console.error(err))
  const reducedDocs = overlayDrafts(hasToken, docs)

  return reducedDocs
}

module.exports = get404page
