const embeds = require("eleventy-plugin-embed-everything")
const filters = require('./src/filters.js')

module.exports = config => {
  // Tell 11ty to use the .eleventyignore and ignore our .gitignore file
  config.setUseGitIgnore(false)
  // Pass images to dist folder
  config.addPassthroughCopy("src/assets/images")
  config.addPassthroughCopy("src/assets/meta")
  // Filter to minimise inline js
  config.addNunjucksAsyncFilter('jsmin', filters.jsmin)

  config.addFilter("debug", function(value) {
    return util.inspect(value, {compact: false})
   })

  let markdownIt = require("markdown-it");
  let markdownItAnchor = require("markdown-it-anchor");
  let options = {
    html: true,
    breaks: true,
    linkify: true
  };
  let opts = {
    permalink: true,
    permalinkClass: "direct-link",
    permalinkSymbol: "#"
  };

  config.setLibrary("md", markdownIt(options)
    .use(markdownItAnchor, opts)
  );

  config.addFilter("markdownify", function(value) {
    const md = new markdownIt(options)
    return md.render(value)
  })

  // Add plugins
  config.addPlugin(embeds)

  return {
    markdownTemplateEngine: 'njk',
    dataTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',

    dir: {
      input: 'src',
      includes: "_includes",
      output: 'dist'
    }
  }
}