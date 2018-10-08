import React from 'react'

import Header from './Header'
import Footer from './Footer'

import normalize from 'modern-normalize'

const Layout: React.SFC = ({ children }) => (
  <div>
    <Header />
    {children}
    <Footer />

    <style jsx global>
      {normalize}
    </style>
    <style jsx global>{`
      html {
        box-sizing: border-box;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu,
          Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', Arial, sans-serif;
      }
      * {
        box-sizing: inherit;
      }
      body {
        background-color: #fff;
      }
      h1,
      h2 {
        color: #000;
        font-weight: 600;
      }
    `}</style>
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
