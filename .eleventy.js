let Nunjucks = require('nunjucks');

const rssPlugin = require('@11ty/eleventy-plugin-rss');
const syntaxHighlight = require('@11ty/eleventy-plugin-syntaxhighlight');
const markdownIt = require('markdown-it');
const markdownItAnchor = require('markdown-it-anchor');

module.exports = function (config) {
  config.setFrontMatterParsingOptions({
    summary: true,
  });

  config.addLayoutAlias('base', 'source/layouts/base.njk');
  config.addLayoutAlias('page', 'source/layouts/page.njk');

  config.addPlugin(rssPlugin);
  config.addPlugin(syntaxHighlight);
	
	config.addPassthroughCopy('source/fonts/');
  config.addPassthroughCopy('source/styles/');


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
    new Nunjucks.FileSystemLoader('source/layouts')
  );

  config.setLibrary('njk', nunjucksEnvironment);

	const contentPath = '/content';
	const nestedIndexPath = contentPath + '/index';

	config.addFilter("dropNestedContentPaths", function (path) {
		if (path.indexOf(nestedIndexPath) === 0) {
			return path.slice(nestedIndexPath.length);
		}

		if (path.indexOf(contentPath) === 0) {
			return path.slice(contentPath.length);
		}
		
		return path
	});

  return {
    dir: {
      input: 'source',
      output: 'publish',
      includes: 'partials',
      layouts: 'layouts',
    },
    templateFormats: ['njk', 'md'],
  };
};
