const percySnapshot = require('@percy/webdriverio');
var minimal_constants = require('../helper/minimal.constants');
var common_constants = require('../helper/common.constants');
var comparison_constants = require('../helper/comparison.constants');

console.log('COMPARISON_URL')
console.log(minimal_constants.COMPARISON_URL); 
console.log(comparison_constants.COMPARISON_NAME); 

describe('Percy Comparison', () => {

    it('snapshot homepage', async () => {
      await browser.url(minimal_constants.COMPARISON_URL);
      await browser.maximizeWindow();
      await browser.pause(1000);
      await percySnapshot(browser, 'Homepage Page', { widths: common_constants.TEST_WIDTHS });
    });

    it('snapshot pricing', async () => {
      await browser.url(minimal_constants.COMPARISON_URL + '/pricing');
      await browser.maximizeWindow();
      await browser.pause(1000);
      await percySnapshot(browser, 'Pricing Page', { widths: common_constants.TEST_WIDTHS });
    });

    it('snapshot integrations', async () => {
      await browser.url(minimal_constants.COMPARISON_URL + '/integrations/automate');
      await browser.maximizeWindow();
      await browser.pause(1000);
      await percySnapshot(browser, 'Automation Integrations Page', { widths: common_constants.TEST_WIDTHS });
    });
    
    it('snapshot docs', async () => {
      await browser.url(minimal_constants.COMPARISON_URL + '/docs');
      await browser.maximizeWindow();
      await browser.pause(1000);
      await percySnapshot(browser, 'Docs Page', { widths: common_constants.TEST_WIDTHS });
    });   

});
