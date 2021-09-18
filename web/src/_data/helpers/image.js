const imageUrlBuilder = require('@sanity/image-url')
const client = require('../../utils/sanityClient')

// Get a pre-configured url-builder from your sanity client
const builder = imageUrlBuilder(client)

const getImageUrl = (source) => builder.image(source)

const sizes = [32, 64, 96, 128, 256, 384, 640, 750, 828, 1080, 1200, 1500]

const getDimensions = (source, setWidth, setHeight) => {
  if (setWidth && setHeight) {
    const ratio = setWidth / setHeight
    return { width: setWidth, height: setHeight, aspectRatio: ratio }
  }

  const { asset, crop } = source
  const { metadata } = asset

  // Get dimensions from groq resolved image
  const { aspectRatio, width, height } = metadata.dimensions

  // Compensate for dimensional changes if image was cropped in Sanity
  if (crop && Object.values(crop).some((n) => n > 0)) {
    const cropWidth = width - crop.left * width - crop.right * width
    const cropHeight = height - crop.top * height - crop.bottom * height
    const cropRatio = cropWidth / cropHeight

    return { width: cropWidth, height: cropHeight, aspectRatio: cropRatio }
  }

  return { width, height, aspectRatio }
}

const buildSrc = (source, width, max = 800) =>
  getImageUrl(source).width(Math.min(width, max)).quality(75).fit('max').url()

const buildSrcSet = (source, max = 800, dimensions) =>
  Object.values(
    sizes.reduce((accumulator, currentValue) => {
      const width = Math.min(currentValue, max)
      const height = Math.round(width / dimensions.aspectRatio)
      const src = getImageUrl(source).width(width).height(height).quality(75).fit('max').auto('format').url()

      if (!accumulator.currentValue) {
        accumulator[currentValue] = `${src} ${currentValue}w`
      }

      return accumulator
    }, {})
  )

// Then we like to make a simple function like this that gives the
// builder an image and returns the builder for you to specify additional
// parameters:
module.exports = {
  urlFor(source) {
    return getImageUrl(source)
  },

  imageWithSrcset(imgObject) {
    const { asset, width, height, maxWidth, loading = 'lazy', position = '0% 0%' } = imgObject

    if (asset._ref) {
      return `<img src="${getImageUrl(imgObject)}" alt="${imgObject.alt}" />`
    }

    const dimensions = getDimensions(imgObject, width, height)
    const src = buildSrc(imgObject, dimensions.width, maxWidth, dimensions)
    const srcset = buildSrcSet(imgObject, maxWidth, dimensions)
    const objectPosition = imgObject.hotspot
      ? [imgObject.hotspot.x, imgObject.hotspot.y].map((value) => `${(value * 100).toFixed(2)}%`).join(' ')
      : position
    const styles = `object-position: ${objectPosition}`

    // Short circuit for SVG images
    if (asset.extension === 'svg') {
      return `<img
          src="${getImageUrl(imgObject)}"
          width="${width || dimensions.width}"
          height="${height || dimensions.height}"
          alt="${imgObject.alt}"
          loading="${loading}"
          style="${styles}"
        />`
    }

    return `<img
        src="${src}"
        srcSet="${srcset}"
        width="${dimensions.width}"
        height="${dimensions.height}"
        alt="${imgObject.alt}"
        style="${styles}"
        loading="${loading}"
      />`
  },
}
