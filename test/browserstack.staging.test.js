const percySnapshot = require('@percy/webdriverio');
var constants = require('../helper/common.constants');
var constants = require('../helper/staging.constants');

console.log('STAGING_URL')
console.log(constants.STAGING_URL); // 'some value'

describe('Percy Staging', () => {

    it('snapshot homepage', async () => {
      await browser.url(constants.STAGING_URL);
      await browser.maximizeWindow();
      await browser.pause(1000);
      await percySnapshot(browser, 'Homepage Page', { widths: constants.TEST_WIDTHS });
    });

    it('snapshot pricing', async () => {
      await browser.url(constants.STAGING_URL + '/pricing');
      await browser.maximizeWindow();
      await browser.pause(1000);
      await percySnapshot(browser, 'Pricing Page', { widths: constants.TEST_WIDTHS });
    });

    it('snapshot integrations', async () => {
      await browser.url(constants.STAGING_URL + '/integrations/automate');
      await browser.maximizeWindow();
      await browser.pause(1000);
      await percySnapshot(browser, 'Automation Integrations Page', { widths: constants.TEST_WIDTHS });
    });
    
    it('snapshot docs', async () => {
      await browser.url(constants.STAGING_URL + '/docs');
      await browser.maximizeWindow();
      await browser.pause(1000);
      await percySnapshot(browser, 'Docs Page', { widths: constants.TEST_WIDTHS });
    });   

});
