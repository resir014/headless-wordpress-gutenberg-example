import React from 'react'
import { NextContext, NextComponentType } from 'next'

import { WPMenu } from 'interfaces/api'
import { Config } from 'config'

export interface InjectedMenuProps {
  headerMenu: WPMenu
}

const withHeaderMenu = <P extends {}>(Page: NextComponentType<P & InjectedMenuProps, P>) => {
  return class extends React.Component<P & InjectedMenuProps> {
    public static async getInitialProps(ctx: NextContext) {
      const pageProps = Page.getInitialProps && (await Page.getInitialProps(ctx))

      const headerMenu: WPMenu = await fetch(`${Config.apiUrl}/wp-json/menus/v1/menus/header-menu`).then(res => res.json())

      return Object.assign({}, pageProps, { headerMenu })
    }

    public render() {
      return <Page {...this.props} />
    }
  }
}

export default withHeaderMenu
