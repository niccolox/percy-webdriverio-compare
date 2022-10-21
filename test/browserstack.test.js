const percySnapshot = require('@percy/webdriverio');
var constants = require('../helper/constants');

// source ./env/production.sh
// px percy exec -- wdio run ./wdio.conf.js --spec test/one.test.js

console.log('BASE_URL')
console.log(constants.BASE_URL); // 'some value'

describe('Compare', () => {

    it('snapshot homepage', async () => {
      await browser.url(constants.BASE_URL);
      await browser.maximizeWindow();
      await browser.pause(1000);
      await percySnapshot(browser, 'Homepage Page from variables', { widths: constants.TEST_WIDTHS });
    });

    it('snapshot pricing', async () => {
      await browser.url(constants.BASE_URL + '/pricing');
      await browser.maximizeWindow();
      await browser.pause(1000);
      await percySnapshot(browser, 'Pricing Page', { widths: constants.TEST_WIDTHS });
    });

    it('snapshot integrations', async () => {
      await browser.url(constants.BASE_URL + '/integrations/automate');
      await browser.maximizeWindow();
      await browser.pause(1000);
      await percySnapshot(browser, 'Automation Integrations Page', { widths: constants.TEST_WIDTHS });
    });
    
    it('snapshot docs', async () => {
      await browser.url(constants.BASE_URL + '/docs');
      await browser.maximizeWindow();
      await browser.pause(1000);
      await percySnapshot(browser, 'Docs Page', { widths: constants.TEST_WIDTHS });
    });   

});
