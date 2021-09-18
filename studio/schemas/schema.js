// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

import globalHeader from './documents/globalHeader'
import globalSEO from './documents/globalSEO'
import social from './documents/social'
import page from './documents/page'
import pageBuilder from './objects/pageBuilder'
import pageBuilderSplitContent from './objects/pageBuilderSplitContent'
import pageBuilderVideoCollection from './objects/pageBuilderVideoCollection'
import portableText from './objects/portableText'
import mainImage from './objects/mainImage'
import menuItem from './objects/menuItem'
import socialLink from './objects/socialLink'
import socialSnackbar from './objects/socialSnackbar'
import seo from './objects/seo'
import aspectRatio from './objects/aspectRatio'
import pageBuilderAccordion from './objects/pageBuilderAccordion'
import simplePortableText from './objects/simplePortableText'
import accordionItem from './objects/accordionItem'
import pageBuilderContactForm from './objects/pageBuilderContactForm'
import pageBuilderImageGallery from './objects/pageBuilderImageGallery'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    /* documents */
    globalHeader,
    globalSEO,
    social,
    page,

    /* objects */
    pageBuilder,
    pageBuilderSplitContent,
    pageBuilderVideoCollection,
    pageBuilderImageGallery,
    pageBuilderAccordion,
    pageBuilderContactForm,
    portableText,
    simplePortableText,
    mainImage,
    accordionItem,
    aspectRatio,
    menuItem,
    socialLink,
    socialSnackbar,
    seo,
  ]),
})
