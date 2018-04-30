import React from 'react'
import { Config } from '../config'

const PageWrapper = (Comp: any) =>
  class extends React.Component {
    public static async getInitialProps(args: any) {
      const headerMenuRes = await fetch(`${Config.apiUrl}/wp-json/menus/v1/menus/header-menu`)
      const headerMenu = await headerMenuRes.json()
      return {
        headerMenu,
        ...(Comp.getInitialProps ? await Comp.getInitialProps(args) : null)
      }
    }

    public render() {
      return <Comp {...this.props} />
    }
  }

export default PageWrapper
