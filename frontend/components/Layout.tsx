import React from 'react'

import { WPMenu } from 'interfaces/api'

import Header from './Header'
import Footer from './Footer'
import Menu from './Menu'

interface LayoutProps {
  menu?: WPMenu
}

const Layout: React.SFC<LayoutProps> = ({ children, menu }) => (
  <div>
    <Header />
    {menu && <Menu menu={menu} />}
    <main>{children}</main>
    <Footer />

    <style jsx>{`
      div {
        padding: 16px;
      }

      @media (min-width: 768px) {
        div {
          padding: 40px;
        }
      }
    `}</style>
  </div>
)

export default Layout
