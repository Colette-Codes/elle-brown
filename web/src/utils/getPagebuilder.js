const getPageBuilder = `pageBuilder[] {
  ...,
  image {
    ...,
    asset->
  },
  images[] {
    ...,
    asset->
  },
  content[] {
    ...,
    socialLinks[]->
  }
}`

module.exports = getPageBuilder
