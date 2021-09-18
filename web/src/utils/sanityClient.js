require('dotenv').config({
  path: `.env.${process.env.NODE_ENV || 'development'}`,
})
const sanityClient = require('@sanity/client')

/**
 * Set manually. Find configuration in
 * studio/sanity.json or on manage.sanity.io
 */

const sanity = {
  projectId: 'sfmhazvk',
  dataset: 'production',
  apiVersion: '2021-03-25',
  useCdn: true,
}

module.exports = sanityClient({
  ...sanity,
  useCdn: !process.env.SANITY_READ_TOKEN,
  token: process.env.SANITY_READ_TOKEN,
})
