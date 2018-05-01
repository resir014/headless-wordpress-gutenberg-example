import * as React from 'react'
import * as http from 'http'
import * as url from 'url'
import * as fetch from 'isomorphic-unfetch'

declare module 'next' {
  /**
   * Context object used in methods like `getInitialProps()`
   * <<https://github.com/zeit/next.js/issues/1651>>
   */
  export interface NextContext {
    /** path section of URL */
    pathname: string
    /** query string section of URL parsed as an object */
    query: {
      [key: string]: any
    }
    /** String of the actual path (including the query) shows in the browser */
    asPath: string
    /** HTTP request object (server only) */
    req?: http.IncomingMessage
    /** HTTP response object (server only) */
    res?: http.ServerResponse
    /** Fetch Response object (client only) - from https://developer.mozilla.org/en-US/docs/Web/API/Response */
    jsonPageRes?: fetch.IsomorphicResponse
    /** Error object if any error is encountered during the rendering */
    err?: Error
    /** a callback that executes the actual React rendering logic (synchronously) */
    renderPage(
      cb: (enhancer: () => JSX.Element) => React.ComponentType<any>
    ): {
      [key: string]: any
    }
  }

  export interface NextPageComponentMethods<TProps = {}> {
    static getInitialProps(context?: NextContext): Promise<TProps>
  }
}
