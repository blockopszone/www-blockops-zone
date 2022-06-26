const moment = require('moment');

moment.locale('en');

module.exports = function(eleventyConfig) {
    // Copy without processing
    eleventyConfig.addPassthroughCopy("src/icon.png");
    eleventyConfig.addPassthroughCopy("src/logo.png");
    eleventyConfig.addPassthroughCopy("src/spo-cardano");
    eleventyConfig.addPassthroughCopy("src/assets");
    eleventyConfig.addPassthroughCopy("src/css");
    eleventyConfig.addPassthroughCopy("src/img");
    eleventyConfig.addPassthroughCopy("src/CNAME")
        // Filters
    eleventyConfig.addFilter('dateIso', date => {
        return moment(date).toISOString();
    });
    eleventyConfig.addFilter('dateReadable', date => {
        return moment(date).utc().format('LL'); // E.g. May 31, 2019
    });
    // Shortcodes
    eleventyConfig.addShortcode('excerpt', article => extractExcerpt(article));
    eleventyConfig.addShortcode('first_image', article => extractFirstImage(article));
    //
    return {
        templateFormats: ['html', 'liquid', 'md', 'njk'],
        pathPrefix: '/',
        passthroughFileCopy: true,
        dir: {
            input: 'src',
            includes: '_includes',
            data: '_data',
            output: '_site'
        }
    };
};

function extractExcerpt(article) {
    if (!article.hasOwnProperty('templateContent')) {
        console.warn('Failed to extract excerpt: Document has no property "templateContent".');
        return null;
    }

    let excerpt = null;
    const content = article.templateContent;

    // The start and end separators to try and match to extract the excerpt
    const separatorsList = [
        { start: '<!-- Excerpt Start -->', end: '<!-- Excerpt End -->' },
        { start: '<p>', end: '</p>' }
    ];

    separatorsList.some(separators => {
        const startPosition = content.indexOf(separators.start);

        // This end position could use "lastIndexOf" to return all the paragraphs rather than just the first
        // paragraph when matching is on "<p>" and "</p>".
        const endPosition = content.indexOf(separators.end);

        if (startPosition !== -1 && endPosition !== -1) {
            excerpt = content.substring(startPosition + separators.start.length, endPosition).trim();
            return true; // Exit out of array loop on first match
        }
    });

    return excerpt;
}

function extractFirstImage(article) {

    if (!article.hasOwnProperty('templateContent')) {
        console.warn('❌ Failed to extract image: Document has no property `templateContent`.');
        return;
    }

    const content = article.templateContent;

    if (content.includes('<img')) {
        const imgTagBegin = content.indexOf('<img');
        const imgTagEnd = content.indexOf('>', imgTagBegin);

        return content.substring(imgTagBegin, imgTagEnd + 1);
    }

    return '';
}