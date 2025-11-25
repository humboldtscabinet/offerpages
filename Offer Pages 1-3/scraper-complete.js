const scraper = require('website-scraper').default;
const path = require('path');

// List of URLs to scrape - adding common checkout/funnel pages
const urls = [
  'https://www.wholelifeway.com/v10/',
  'https://www.wholelifeway.com/v10/checkout.php',
  'https://www.wholelifeway.com/v10/checkout',
  'https://www.wholelifeway.com/v10/order.php',
  'https://www.wholelifeway.com/v10/order',
  'https://www.wholelifeway.com/v10/upsell.php',
  'https://www.wholelifeway.com/v10/upsell',
  'https://www.wholelifeway.com/v10/thankyou.php',
  'https://www.wholelifeway.com/v10/thankyou'
];

const options = {
  urls: urls,
  directory: path.join(__dirname, 'wholelifeway-cloned'),
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
  recursive: false,  // Don't follow links recursively to avoid external sites
  maxRecursiveDepth: 0,
  requestConcurrency: 5,
  ignoreErrors: true,  // Continue even if some URLs fail
  urlFilter: function(url) {
    // Only scrape URLs from wholelifeway.com domain
    return url.includes('wholelifeway.com') || url.startsWith('/');
  },
  onResourceSaved: function(resource) {
    console.log(`✓ Saved: ${resource.url}`);
  },
  onResourceError: function(resource, error) {
    console.log(`⚠ Skipped (may not exist): ${resource.url}`);
  }
};

console.log('Starting comprehensive website clone...');
console.log('Target: https://www.wholelifeway.com/v10/');
console.log('Attempting to download:');
console.log('- Landing page');
console.log('- Checkout pages');
console.log('- All images, CSS, JavaScript');
console.log('---');

scraper(options)
  .then((result) => {
    console.log('---');
    console.log('✓ Website cloning complete!');
    console.log(`✓ Total files saved: ${result.length}`);
    console.log(`✓ Location: ${path.join(__dirname, 'wholelifeway-cloned')}`);
    console.log('\nNext steps:');
    console.log('1. Check wholelifeway-cloned/www.wholelifeway.com/v10/');
    console.log('2. The main page is: index.html');
    console.log('3. Review what pages were successfully downloaded');
  })
  .catch((error) => {
    console.error('Error during scraping:', error);
  });
