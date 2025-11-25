const scraper = require('website-scraper').default;
const path = require('path');

const options = {
  urls: ['https://www.wholelifeway.com/v10/'],
  directory: path.join(__dirname, 'wholelifeway-cloned'),
  sources: [
    {selector: 'img', attr: 'src'},
    {selector: 'img', attr: 'data-src'},
    {selector: 'link[rel="stylesheet"]', attr: 'href'},
    {selector: 'script', attr: 'src'},
    {selector: 'video', attr: 'src'},
    {selector: 'source', attr: 'src'},
    {selector: 'a', attr: 'href'}
  ],
  recursive: true,
  maxRecursiveDepth: 10,
  filenameGenerator: 'bySiteStructure',
  requestConcurrency: 3,
  urlFilter: function(url) {
    // Only scrape URLs from the same domain and /v10/ path
    return url.includes('wholelifeway.com/v10/');
  },
  onResourceSaved: function(resource) {
    console.log(`✓ Saved: ${resource.url}`);
  },
  onResourceError: function(resource, error) {
    console.log(`✗ Error saving ${resource.url}: ${error}`);
  }
};

console.log('Starting website clone...');
console.log('Target: https://www.wholelifeway.com/v10/');
console.log('This will download all linked pages, images, CSS, and JavaScript files.');
console.log('---');

scraper(options)
  .then((result) => {
    console.log('---');
    console.log('✓ Website successfully cloned!');
    console.log(`✓ Total files saved: ${result.length}`);
    console.log(`✓ Location: ${path.join(__dirname, 'wholelifeway-cloned')}`);
  })
  .catch((error) => {
    console.error('Error during scraping:', error);
  });
