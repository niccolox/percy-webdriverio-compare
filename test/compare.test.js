const percySnapshot = require('@percy/webdriverio');
var common = require('../helper/common');
// const helpers = require('@percy/sdk-utils/test/helpers');
// const percySnapshot = require('../index.js');

// visit / root

describe('Compare', () => {

    it('snapshot homepage', async () => {
      await browser.url(`${common.constants.URL}:${common.constants.PORT}/`);
      await browser.maximizeWindow();
      await browser.pause(1000);
      await percySnapshot(browser, 'Homepage Page', {widths: common.constants.TEST_WIDTHS});
    });

// visit /pricing

    it('snapshot pricing', async () => {
      await browser.url(`${common.constants.URL}:${common.constants.PORT}/pricing`);
      await browser.maximizeWindow();
      await browser.pause(1000);
      await percySnapshot(browser, 'Pricing Page', {widths: common.constants.TEST_WIDTHS});
    });

// visit /integrations/automate

    it('snapshot integrations automate', async () => {
      await browser.url(`${common.constants.URL}:${common.constants.PORT}/integrations/automate`);
      await browser.maximizeWindow();
      await browser.pause(1000);
      await percySnapshot(browser, 'Automate Integrations Page', {widths: common.constants.TEST_WIDTHS});
    });

// visit /docs

    it('snapshot integrations docs', async () => {
      await browser.url(`${common.constants.URL}:${common.constants.PORT}/integrations/automate`);
      await browser.maximizeWindow();
      await browser.pause(1000);
      await percySnapshot(browser, 'Docs Page', {widths: common.constants.TEST_WIDTHS});
    });

});
