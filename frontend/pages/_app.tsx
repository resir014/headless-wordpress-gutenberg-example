import React from 'react'
import App, { Container } from 'next/app'

import normalize from 'modern-normalize'

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props

    return (
      <Container>
        <Component {...pageProps} />

        <style jsx global>
          {normalize}
        </style>
        <style jsx global>{`
          html {
            box-sizing: border-box;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans',
              'Helvetica Neue', Arial, sans-serif;
          }
          * {
            box-sizing: inherit;
          }
          body {
            background-color: #fff;
          }
          h1,
          h2 {
            color: #000;
            font-weight: 600;
          }
        `}</style>
      </Container>
    )
  }
}
