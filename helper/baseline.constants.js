module.exports = Object.freeze({
  BASELINE_NAME: 'Browserstack Production Website Baseline',
  PERCY_BASESLINE_BRANCH: 'master', // @todo this is handle in npm aliases? can it be removed?
  PERCY_BRANCH: 'master', // @todo make thi DRY DNR
  // PERCY_BRANCH: PERCY_BASESLINE_BRANCH, // @todo how to chain?
});
