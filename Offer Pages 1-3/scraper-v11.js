const scraper = require('website-scraper').default;
const path = require('path');

// List of URLs to scrape - v11 version
const urls = [
  'https://www.wholelifeway.com/v11/',
  'https://www.wholelifeway.com/v11/checkout.php',
  'https://www.wholelifeway.com/v11/checkout',
  'https://www.wholelifeway.com/v11/order.php',
  'https://www.wholelifeway.com/v11/order',
  'https://www.wholelifeway.com/v11/upsell.php',
  'https://www.wholelifeway.com/v11/upsell',
  'https://www.wholelifeway.com/v11/thankyou.php',
  'https://www.wholelifeway.com/v11/thankyou'
];

const options = {
  urls: urls,
  directory: path.join(__dirname, 'wholelifeway-v11-cloned'),
  sources: [
    {selector: 'img', attr: 'src'},
    {selector: 'img', attr: 'data-src'},
    {selector: 'img', attr: 'srcset'},
    {selector: 'link[rel="stylesheet"]', attr: 'href'},
    {selector: 'link[rel="icon"]', attr: 'href'},
    {selector: 'script', attr: 'src'},
    {selector: 'video', attr: 'src'},
    {selector: 'source', attr: 'src'},
    {selector: 'source', attr: 'srcset'},
    {selector: 'a', attr: 'href'},
    {selector: 'form', attr: 'action'}
  ],
  subdirectories: [
    {directory: 'img', extensions: ['.jpg', '.png', '.svg', '.gif', '.webp']},
    {directory: 'js', extensions: ['.js']},
    {directory: 'css', extensions: ['.css']},
    {directory: 'fonts', extensions: ['.woff', '.woff2', '.ttf', '.eot']}
  ],
  recursive: false,
  maxRecursiveDepth: 0,
  requestConcurrency: 5,
  ignoreErrors: true,
  urlFilter: function(url) {
    return url.includes('wholelifeway.com') || url.startsWith('/');
  },
  onResourceSaved: function(resource) {
    console.log(`✓ Saved: ${resource.url}`);
  },
  onResourceError: function(resource, error) {
    console.log(`⚠ Skipped: ${resource.url}`);
  }
};

console.log('Starting v11 website clone...');
console.log('Target: https://www.wholelifeway.com/v11/');
console.log('Attempting to download all pages and assets...');
console.log('---');

scraper(options)
  .then((result) => {
    console.log('---');
    console.log('✓ V11 website cloning complete!');
    console.log(`✓ Total files saved: ${result.length}`);
    console.log(`✓ Location: ${path.join(__dirname, 'wholelifeway-v11-cloned')}`);
  })
  .catch((error) => {
    console.error('Error during scraping:', error);
  });
