import React from 'react'

import Header from './Header'
import Footer from './Footer'

import * as styles from 'styles/components/Layout.scss'

const Layout: React.SFC = ({ children }) => (
  <div className={styles.root}>
    <Header />
    {children}
    <Footer />
  </div>
)

export default Layout
