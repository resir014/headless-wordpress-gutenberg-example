import * as React from 'react'
import Document, { Head, Main, NextScript } from 'next/document'

// isomorphic-unfetch polyfill
import 'isomorphic-unfetch'

export default class CustomDocument extends Document {
  public render() {
    return (
      <html lang="en">
        <Head>
          <link rel="icon" href="/static/favicon.ico" />
          <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        </Head>
        <body>
          <Main />

          <NextScript />
        </body>
      </html>
    )
  }
}
