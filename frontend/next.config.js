const path = require('path');
const glob = require('glob');
const withSass = require('@zeit/next-sass');

module.exports = withSass({
  cssModules: true
});
