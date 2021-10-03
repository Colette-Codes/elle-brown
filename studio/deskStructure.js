import S from '@sanity/desk-tool/structure-builder'
import { BiSlider, BiDockTop, BiDockBottom, BiSearch } from 'react-icons/bi'
import { CgProfile } from 'react-icons/cg'
import { BsCode } from 'react-icons/bs'

// We filter document types defined in structure to prevent
// them from being listed twice
const hiddenDocTypes = (listItem) =>
  !['globalSEO', 'globalHeader', 'globalFooter', 'social', 'scripts'].includes(listItem.getId())

export default () =>
  S.list()
    .title('Site')
    .items([
      S.listItem()
        .title('Site Settings')
        .icon(BiSlider)
        .child(
          S.list()
            .title('Global Settings')
            .items([
              S.listItem()
                .title('SEO')
                .icon(BiSearch)
                .child(S.editor().id('globalSEO').title('SEO Options').schemaType('globalSEO').documentId('globalSEO')),
              S.listItem()
                .title('Header')
                .icon(BiDockTop)
                .child(
                  S.document().id('globalHeader').title('Header').schemaType('globalHeader').documentId('globalHeader')
                ),
              S.listItem()
                .title('Footer')
                .icon(BiDockBottom)
                .child(
                  S.document().id('globalFooter').title('Footer').schemaType('globalFooter').documentId('globalFooter')
                ),
              S.listItem().title('Social Media').icon(CgProfile).child(S.documentTypeList('social')),
              S.listItem().title('Scripts').icon(BsCode).child(S.documentTypeList('scripts')),
            ])
        ),
      ...S.documentTypeListItems().filter(hiddenDocTypes),
    ])
