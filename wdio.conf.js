exports.config = {
  runner: 'local',
  framework: 'jasmine',
  reporters: ['spec'],
  specs: ['./test/*.test.js'],

  logLevel: 'silent',
  capabilities: [{
    maxInstances: 5,
    browserName: 'firefox',
    'moz:firefoxOptions': {
      args: ['-headless']
    }
  }],

  jasmineOpts: [{
    timeout: 30000
  }],

  onPrepare() {
    require('geckodriver').start();
  },

  onComplete() {
    require('geckodriver').stop();
  }
};
