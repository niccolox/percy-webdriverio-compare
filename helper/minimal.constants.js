module.exports = Object.freeze({
  // ideally these become only two config items needed
  // @todo allow a CLI arg from npm to set these, or CICD secrets etc
  BASELINE_URL: 'https://www.browserstack.com', // is production url in common constants
  COMPARISON_URL: 'https://k8s.bsstag.com'
});
