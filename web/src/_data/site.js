const groq = require('groq')
const client = require('../utils/sanityClient.js')

const getSiteData = async () => {
  const filter = groq`{
    "meta": *[_type == "globalSEO"][0],
    "header": *[_type == 'globalHeader'][0].menu[] {
      "link": select(
        _type == 'menuItem' => @,
        _type == 'reference' => @->
      ),
    }
  }`
  // eslint-disable-next-line no-console
  const data = await client.fetch(filter).catch((err) => console.error(err))

  return data
}

module.exports = getSiteData
