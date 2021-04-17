let Nunjucks = require('nunjucks');

const rssPlugin = require('@11ty/eleventy-plugin-rss');
const syntaxHighlight = require('@11ty/eleventy-plugin-syntaxhighlight');
const markdownIt = require('markdown-it');
const markdownItAnchor = require('markdown-it-anchor');

module.exports = function (config) {
  config.setFrontMatterParsingOptions({
    summary: true,
  });

  config.addLayoutAlias('base', 'src/layouts/base.njk');
  config.addLayoutAlias('page', 'src/layouts/page.njk');

  config.addPlugin(rssPlugin);
  config.addPlugin(syntaxHighlight);

  config.addPassthroughCopy('src/fonts/');
  config.addPassthroughCopy('src/css/');

  /* Markdown Plugins */
  const options = {
    html: true,
    breaks: true,
    linkify: true,
  };
  const opts = {
    level: [1, 2, 3],
    permalink: false,
  };
  config.setLibrary('md', markdownIt(options).use(markdownItAnchor, opts));

  let nunjucksEnvironment = new Nunjucks.Environment(
    new Nunjucks.FileSystemLoader('src/layouts')
  );

  config.setLibrary('njk', nunjucksEnvironment);

  return {
    dir: {
      input: 'src',
      output: 'dist',
      includes: 'assets',
      layouts: 'layouts',
    },
    templateFormats: ['njk', 'md'],
  };
};
