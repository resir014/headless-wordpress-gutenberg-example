import React from 'react'
import { NextContext, NextPageComponentMethods } from 'next'

import { WPMenu } from 'interfaces/api'
import { Config } from 'config'

export interface InjectedProps {
  headerMenu: WPMenu
}

const PageWrapper = <TOriginalProps extends {}>(
  Comp: React.ComponentType<InjectedProps> & NextPageComponentMethods
) => {
  type CombinedProps = TOriginalProps & InjectedProps
  class WrappedPage extends React.Component<CombinedProps> {
    public static async getInitialProps(args: NextContext) {
      const headerMenuRes = await fetch(`${Config.apiUrl}/wp-json/menus/v1/menus/header-menu`)
      const headerMenu = await headerMenuRes.json()
      return {
        headerMenu,
        ...(Comp.getInitialProps ? await Comp.getInitialProps(args) : null)
      }
    }

    public render() {
      return <Comp {...this.props} {...this.state} />
    }
  }

  return WrappedPage
}

export default PageWrapper
