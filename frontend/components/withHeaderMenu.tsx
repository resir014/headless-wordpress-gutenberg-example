import React from 'react'
import { NextContext } from 'next'

import { WPMenu } from 'interfaces/api'
import { Config } from 'config'

export interface InjectedMenuProps {
  headerMenu: WPMenu
}

const withHeaderMenu = <TOriginalProps extends {}>(
  Comp: React.ComponentType<TOriginalProps>
): React.ComponentClass<TOriginalProps & InjectedMenuProps> => {
  type CombinedProps = TOriginalProps & InjectedMenuProps
  class WrappedPage extends React.Component<CombinedProps> {
    public static async getInitialProps(args: NextContext) {
      const tmp: any = Comp
      const headerMenuRes = await fetch(`${Config.apiUrl}/wp-json/menus/v1/menus/header-menu`)
      const headerMenu = await headerMenuRes.json()
      return {
        headerMenu,
        ...(tmp.getInitialProps ? await tmp.getInitialProps(args) : null)
      }
    }

    public render() {
      return <Comp {...this.props} {...this.state} />
    }
  }

  return WrappedPage
}

export default withHeaderMenu
