import React from 'react'

import Header from './Header'
import Footer from './Footer'

const layoutStyle: React.CSSProperties = {
  margin: 20,
  padding: 20
}

const Layout: React.SFC<any> = (props: any) => (
  <div style={layoutStyle}>
    <Header />
    {props.children}
    <Footer />
  </div>
)

export default Layout
