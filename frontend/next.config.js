const path = require('path')
const glob = require('glob')
const withPlugins = require('next-compose-plugins')
const withTypeScript = require('@zeit/next-typescript')
const withCSS = require('@zeit/next-css')

const nextConfig = {
  webpack: (config, { defaultLoaders }) => {
    config.module.rules.push({
      test: /\.css$/,
      use: [
        defaultLoaders.babel,
        {
          loader: require('styled-jsx/webpack').loader,
          options: {
            type: fileName => (fileName.includes('node_modules') ? 'global' : 'scoped')
          }
        }
      ]
    })

    return config
  }
}

module.exports = withPlugins([[withTypeScript]], nextConfig)
