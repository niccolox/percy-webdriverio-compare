const percySnapshot = require('@percy/webdriverio');
var minimal_constants = require('../helper/minimal.constants');
var common_constants = require('../helper/common.constants');
var baseline_constants = require('../helper/baseline.constants');

console.log('BASELINE_URL')
console.log(minimal_constants.BASELINE_URL); 
console.log(baseline_constants.BASELINE_NAME); 

describe('Percy Baseline', () => {

    it('snapshot homepage', async () => {
      await browser.url(minimal_constants.BASELINE_URL);
      await browser.maximizeWindow();
      await browser.pause(1000);
      await percySnapshot(browser, 'Homepage Page', { widths: common_constants.TEST_WIDTHS });
    });

    it('snapshot pricing', async () => {
      await browser.url(minimal_constants.BASELINE_URL + '/pricing');
      await browser.maximizeWindow();
      await browser.pause(1000);
      await percySnapshot(browser, 'Pricing Page', { widths: common_constants.TEST_WIDTHS });
    });

    it('snapshot integrations', async () => {
      await browser.url(minimal_constants.BASELINE_URL + '/integrations/automate');
      await browser.maximizeWindow();
      await browser.pause(1000);
      await percySnapshot(browser, 'Automation Integrations Page', { widths: common_constants.TEST_WIDTHS });
    });
    
    it('snapshot docs', async () => {
      await browser.url(minimal_constants.BASELINE_URL + '/docs');
      await browser.maximizeWindow();
      await browser.pause(1000);
      await percySnapshot(browser, 'Docs Page', { widths: common_constants.TEST_WIDTHS });
    });   

});
