import * as React from 'react'

declare module 'next' {
  /** Context object used in methods like `getInitialProps()` */
  export interface NextContext {
    pathname: string
    query: any
    asPath: string
    req: {
      locale: string
      localeDataScript: string
      messages: object
      antdLocale: object
    }
    res?: object
    renderPage: (cb: Function) => object
  }
}
