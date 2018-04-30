const path = require('path')
const glob = require('glob')
const withSass = require('@zeit/next-sass')
const withTypeScript = require('@zeit/next-typescript')

module.exports = withTypeScript(
  withSass({
    cssModules: true
  })
)
