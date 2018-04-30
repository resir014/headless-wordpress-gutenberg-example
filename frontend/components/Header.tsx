import React, { Component } from 'react'
import Head from 'next/head'

class Header extends Component<any> {
  constructor(props: any) {
    super(props)
  }

  public render() {
    return (
      <div>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta charSet="utf-8" />
          <title>WordPress + React Starter Kit Frontend by Postlight</title>
        </Head>
      </div>
    )
  }
}

export default Header
